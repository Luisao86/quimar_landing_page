async function includeFragment(selector, url) {
  const target = document.querySelector(selector);
  if (!target) return;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`No se pudo cargar: ${url}`);
  target.innerHTML = await res.text();
}

function ensureWhatsAppFloat() {
  const existing = document.querySelector(".wa-float");
  if (existing) existing.remove();

  const a = document.createElement("a");
  a.className = "wa-float";
  a.href = "https://wa.me/5491133832425";
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.setAttribute("aria-label", "Contactar por WhatsApp");
  a.title = "Contactar por WhatsApp";

  a.innerHTML = `<img src="/assets/img/icons/whatsapp.svg" alt="acceso a WhatsApp" class="wa-icon" aria-hidden="true">`;
  document.body.appendChild(a);
}

function initHeaderMenu() {
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelector("#primary-nav");
  if (!nav || !toggle || !links) return;

  const closeMenu = () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".menu-toggle");
    if (!btn) return;

    const header = btn.closest(".nav");
    const isOpen = header?.getAttribute("data-open") === "true";
    const next = !isOpen;

    header?.setAttribute("data-open", String(next));
    btn.setAttribute("aria-expanded", String(next));
    btn.setAttribute("aria-label", next ? "Cerrar menú" : "Abrir menú");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  links.querySelectorAll("a").forEach((a) => {
    const targetPath = new URL(a.href, window.location.origin).pathname.replace(/\/+$/, "") || "/";
    const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";
    if (targetPath === currentPath) a.setAttribute("aria-current", "page");
    a.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 980) closeMenu();
  });
}

function initFooterMeta() {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", async () => {
  try {
    await includeFragment('[data-include="header"]', "/components/header.html");
    await includeFragment('[data-include="footer"]', "/components/footer.html");
    initHeaderMenu();
    initFooterMeta();
  } catch (e) {
    console.error(e);
  } finally {
    ensureWhatsAppFloat();
  }
});

(async function () {
  const placeholders = document.querySelectorAll('[data-include]');
  if (!placeholders.length) return;

  for (const el of placeholders) {
    const part = el.getAttribute('data-include');
    const url = `/partials/${part}.html`;

    try {
      const res = await fetch(url, { cache: 'no-cache' });
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      el.innerHTML = await res.text();
    } catch (err) {
      console.error(`Include error (${url}):`, err);
    }
  }
})();