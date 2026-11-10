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

  // Se oculta mientras haya otro botón de WhatsApp visible en el contenido,
  // así no tapa la página ni duplica la misma acción.
  const targets = document.querySelectorAll('main a[href*="wa.me"].btn, footer a[href*="wa.me"]');
  if (!targets.length || !("IntersectionObserver" in window)) return;
  const visible = new Set();
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)));
    a.classList.toggle("is-hidden", visible.size > 0);
  });
  targets.forEach((t) => io.observe(t));
}

function initHeaderMenu() {
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelector("#primary-nav");
  if (!nav || !toggle || !links) return;

  const setMenuOpen = (open) => {
    nav.setAttribute("data-open", String(open));
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  };

  toggle.addEventListener("click", () => {
    setMenuOpen(nav.getAttribute("data-open") !== "true");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setMenuOpen(false);
  });

  links.querySelectorAll("a").forEach((a) => {
    const targetPath = new URL(a.href, window.location.origin).pathname.replace(/\/+$/, "") || "/";
    const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";
    if (targetPath === currentPath) a.setAttribute("aria-current", "page");
    a.addEventListener("click", () => setMenuOpen(false));
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 850) setMenuOpen(false);
  });
}

function initFooterMeta() {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
}

function initReviews() {
  document.querySelectorAll(".rv").forEach((section) => {
    const marquee = section.querySelector(".rv-marquee");
    const track = marquee?.querySelector(".rv-list");
    const group = track?.querySelector(".rv-group");
    if (!marquee || !track || !group || group.children.length < 2) return;

    const duplicate = group.cloneNode(true);
    duplicate.setAttribute("aria-hidden", "true");
    // Copia decorativa del carrusel: fuera del foco y del árbol de accesibilidad.
    duplicate.inert = true;
    duplicate.querySelectorAll("a, button, input, select, textarea, [tabindex]").forEach((el) => el.setAttribute("tabindex", "-1"));
    track.appendChild(duplicate);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    let interacting = false;

    const updateMotion = () => {
      track.classList.toggle("is-moving", !reduceMotion.matches);
      track.classList.toggle("is-paused", interacting || !visible || document.hidden);
    };

    marquee.addEventListener("mouseenter", () => {
      interacting = true;
      updateMotion();
    });
    marquee.addEventListener("mouseleave", () => {
      interacting = false;
      updateMotion();
    });
    marquee.addEventListener("focusin", () => {
      interacting = true;
      updateMotion();
    });
    marquee.addEventListener("focusout", (event) => {
      if (!marquee.contains(event.relatedTarget)) {
        interacting = false;
        updateMotion();
      }
    });
    marquee.addEventListener("touchstart", () => {
      interacting = true;
      updateMotion();
    }, { passive: true });
    marquee.addEventListener("touchend", () => {
      interacting = false;
      updateMotion();
    }, { passive: true });
    document.addEventListener("visibilitychange", () => {
      updateMotion();
    });
    reduceMotion.addEventListener("change", () => {
      updateMotion();
    });

    if ("IntersectionObserver" in window) {
      const marqueeObserver = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        updateMotion();
      });
      marqueeObserver.observe(marquee);
    } else {
      visible = true;
      updateMotion();
    }

    const bars = section.querySelectorAll(".rv-dist em");
    if (!bars.length) return;

    bars.forEach((bar) => {
      bar.dataset.width = bar.style.width;
      bar.style.width = "0";
    });

    if (!("IntersectionObserver" in window)) {
      bars.forEach((bar) => { bar.style.width = bar.dataset.width; });
      return;
    }

    const barsObserver = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      bars.forEach((bar) => { bar.style.width = bar.dataset.width; });
      barsObserver.disconnect();
    }, { threshold: 0.3 });
    barsObserver.observe(section.querySelector(".rv-summary"));
  });
}

function initLogoTrack() {
  document.querySelectorAll(".logo-track").forEach((track) => {
    const group = track.querySelector(".logo-group");
    if (!group || track.querySelector('.logo-group[aria-hidden="true"]')) return;

    const duplicate = group.cloneNode(true);
    duplicate.setAttribute("aria-hidden", "true");
    // Copia decorativa del carrusel: fuera del foco y del árbol de accesibilidad.
    duplicate.inert = true;
    duplicate.querySelectorAll("a, button, input, select, textarea, [tabindex]").forEach((el) => el.setAttribute("tabindex", "-1"));
    duplicate.querySelectorAll("img").forEach((image) => {
      image.alt = "";
    });
    track.appendChild(duplicate);
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  try {
    initLogoTrack();
    await includeFragment('[data-include="header"]', "/components/header.html");
    await includeFragment('[data-include="resenas"]', "/components/resenas.html");
    initReviews();
    await includeFragment('[data-include="footer"]', "/components/footer.html");
    initHeaderMenu();
    initFooterMeta();
  } catch (e) {
    console.error(e);
  } finally {
    ensureWhatsAppFloat();
  }
});