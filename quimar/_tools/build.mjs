#!/usr/bin/env node
/**
 * Build estático de Quimar (sin dependencias). Uso, desde la raíz del sitio:
 *
 *     node _tools/build.mjs
 *
 * Qué hace en cada index.html del sitio:
 *  1. Incrusta components/{header,resenas,footer}.html en el HTML, entre marcadores
 *     <!-- include:x --> ... <!-- /include:x -->. Así los buscadores y los crawlers
 *     de IA (que no ejecutan JS) ven navegación, NAP y reseñas.
 *  2. Marca con aria-current="page" el link del menú de la página actual.
 *  3. Escribe el año actual en el footer.
 *  4. Genera el schema FAQPage a partir de las preguntas visibles
 *     (<details class="faq-item">), ignorando las que están comentadas.
 *
 * Es idempotente: se puede correr las veces que haga falta. Después de editar
 * cualquier archivo de components/, volver a correrlo antes de publicar.
 */
import { readFile, writeFile, readdir } from "node:fs/promises";
import { join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const SITE = "https://www.quimar.com.ar";
const COMPONENTS = ["header", "resenas", "footer"];
const SKIP_DIRS = new Set(["components", "assets", "css", "js", "node_modules", ".git", "dist"]);

async function findPages(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name) || entry.name.startsWith("_") || entry.name.startsWith(".")) continue;
      out.push(...(await findPages(join(dir, entry.name))));
    } else if (entry.name === "index.html") {
      out.push(join(dir, entry.name));
    }
  }
  return out;
}

const decode = (s) =>
  s.replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
const stripTags = (s) => decode(s.replace(/<[^>]+>/g, "")).replace(/\s+/g, " ").trim();

function includeComponent(html, name, fragment) {
  const block = `<!-- include:${name} -->\n${fragment.trim()}\n<!-- /include:${name} -->`;
  const built = new RegExp(`<!-- include:${name} -->[\\s\\S]*?<!-- /include:${name} -->`);
  if (built.test(html)) return html.replace(built, () => block);
  const placeholder = new RegExp(`<div data-include="${name}"></div>`);
  return html.replace(placeholder, () => block);
}

function markCurrentNav(header, pagePath) {
  return header.replace(/(<nav class="links"[\s\S]*?<\/nav>)/, (nav) =>
    nav
      .replace(/ aria-current="page"/g, "")
      .replace(/<a href="([^"]+)">/g, (tag, href) => (href === pagePath ? `<a href="${href}" aria-current="page">` : tag)),
  );
}

function faqSchema(html, url) {
  const visible = html.replace(/<!--[\s\S]*?-->/g, "");
  const items = [...visible.matchAll(/<details class="faq-item">\s*<summary>([\s\S]*?)<\/summary>([\s\S]*?)<\/details>/g)];
  if (!items.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    url,
    inLanguage: "es-AR",
    mainEntity: items.map(([, q, a]) => ({
      "@type": "Question",
      name: stripTags(q),
      acceptedAnswer: { "@type": "Answer", text: stripTags(a) },
    })),
  };
}

function setFaqSchema(html, schema) {
  html = html.replace(/[ \t]*<script type="application\/ld\+json" data-build="faq">[\s\S]*?<\/script>\n/, "");
  if (!schema) return html;
  const json = JSON.stringify(schema, null, 2).replace(/\n/g, "\n        ");
  const tag = `        <script type="application/ld+json" data-build="faq">\n        ${json}\n        </script>\n`;
  return html.replace(/([ \t]*)<\/head>/, (m) => tag + m);
}

const fragments = Object.fromEntries(
  await Promise.all(
    COMPONENTS.map(async (n) => [n, (await readFile(join(ROOT, "components", `${n}.html`), "utf8")).replace(/\r\n/g, "\n")]),
  ),
);
fragments.footer = fragments.footer.replace(/<span id="year">\d*<\/span>/, `<span id="year">${new Date().getFullYear()}</span>`);

const pages = await findPages(ROOT);
let changed = 0;
for (const file of pages) {
  const rel = relative(ROOT, file).split(sep).join("/");
  const pagePath = "/" + rel.replace(/index\.html$/, "");
  const raw = await readFile(file, "utf8");
  const crlf = raw.includes("\r\n");
  let html = raw.replace(/^﻿/, "").replace(/\r\n/g, "\n");

  html = includeComponent(html, "header", markCurrentNav(fragments.header, pagePath));
  html = includeComponent(html, "resenas", fragments.resenas);
  html = includeComponent(html, "footer", fragments.footer);
  const faq = faqSchema(html, SITE + pagePath);
  html = setFaqSchema(html, faq);

  const out = crlf ? html.replace(/\n/g, "\r\n") : html;
  if (out !== raw) {
    await writeFile(file, out, "utf8");
    changed++;
  }
  const left = html.match(/data-include="/g)?.length ?? 0;
  console.log(`${pagePath.padEnd(52)} ${faq ? `FAQ ${faq.mainEntity.length}` : "      "}${left ? `  ⚠ ${left} include sin resolver` : ""}`);
}
console.log(`\n${pages.length} páginas revisadas, ${changed} actualizadas.`);
