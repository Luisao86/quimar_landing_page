#!/usr/bin/env node
/**
 * Arma la carpeta dist/ con SOLO los archivos que van a producción. Uso, desde la raíz:
 *
 *     node _tools/build.mjs && node _tools/dist.mjs
 *
 * Después se sube el contenido de dist/ (Netlify: arrastrar la carpeta dist;
 * Hostinger: subir el contenido de dist/ a public_html).
 *
 * Queda afuera todo lo que empieza con "_" o "." (_docs, _tools, _assets-src,
 * .impeccable, .git), salvo .htaccess (Hostinger) y _headers (Netlify).
 *
 * Dominio: el código fuente usa siempre https://www.quimar.com.ar (canonical,
 * sitemap, robots, datos estructurados). Para publicar una copia en otro dominio:
 *
 *     node _tools/dist.mjs --site=https://quimar-proyecto-web.netlify.app
 *
 * Sin --site, dist/ queda para el dominio final.
 */
import { cp, rm, readdir, mkdir, stat, readFile, writeFile } from "node:fs/promises";
import { join, extname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const DIST = join(ROOT, "dist");
const KEEP = new Set([".htaccess", "_headers", "_redirects"]);
const SKIP = new Set(["dist", "node_modules"]);
const SITE = "https://www.quimar.com.ar";
const arg = process.argv.find((a) => a.startsWith("--site="));
const TARGET = arg ? arg.slice(7).replace(/\/+$/, "") : SITE;
const TEXT = new Set([".html", ".xml", ".txt", ".json", ".webmanifest"]);

await rm(DIST, { recursive: true, force: true });
await mkdir(DIST);

let files = 0;
let bytes = 0;
async function copyDir(from, to) {
  for (const e of await readdir(from, { withFileTypes: true })) {
    const name = e.name;
    if (SKIP.has(name)) continue;
    if ((name.startsWith("_") || name.startsWith(".")) && !KEEP.has(name)) continue;
    const src = join(from, name);
    const dst = join(to, name);
    if (e.isDirectory()) {
      await mkdir(dst, { recursive: true });
      await copyDir(src, dst);
    } else {
      if (TARGET !== SITE && TEXT.has(extname(name))) {
        await writeFile(dst, (await readFile(src, "utf8")).replaceAll(SITE, TARGET));
      } else {
        await cp(src, dst);
      }
      files += 1;
      bytes += (await stat(src)).size;
    }
  }
}

await copyDir(ROOT, DIST);
console.log(`dist/ listo para ${TARGET}: ${files} archivos, ${(bytes / 1024 / 1024).toFixed(2)} MB`);
