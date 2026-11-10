# Historial SEO + UX + Desarrollo — Quimar

> Documento vivo para registrar qué se hizo, por qué se hizo y qué falta validar con Quimar.

---

## Datos del proyecto

- **Proyecto:** Quimar web B2B
- **Ubicación objetivo de negocio:** Bosques, Florencio Varela, Buenos Aires, Argentina
- **Enfoque:** SEO local + SEO comercial + SEO geográfico + UX + rendimiento
- **Fecha de inicio:** 2026-09-14

---

## Estado actual (resumen rápido)

- Sitio actual en `index.html` tipo one-page.
- Buen punto de partida visual, pero sin arquitectura SEO escalable por intención.
- Falta separar páginas por:
  - mayorista
  - categorías
  - distribución
  - envíos al interior
  - landings geográficas priorizadas
- Inconsistencia detectada:
  - En contacto figura **La Plata** como ubicación.
  - Ubicación real informada para estrategia: **Bosques, Florencio Varela**.
  - **TODO: confirmar dato definitivo para publicar.**

---

## Registro de avances

## 2026-09-14 — Entrada 001

### Fase
Planeamiento inicial + setup de historial

### Hecho
- Se definió crear historial técnico en Markdown.
- Se dejó estructura para seguimiento por fases:
  - Fase 1 Arquitectura
  - Fase 2 SEO on-page
  - Fase 3 UX/UI
  - Fase 4 Desarrollo técnico

### Hallazgos del `index.html`
- `title` y `description` genéricos (no incluyen localización estratégica completa).
- Navegación en anclas internas (sin URLs SEO por intención).
- CTA correctos pero no segmentados por tipo de intención (mayorista / distribución / interior).
- Sección ubicación no alineada con dato estratégico principal.
- No se ve implementación de schema en HTML actual.

### Riesgos
- Canibalización por concentrar todo en Home.
- Dificultad para posicionar búsquedas locales y geográficas específicas.
- Riesgo de mensajes comerciales ambiguos (ubicación / logística).

### Próximo paso
- Ejecutar **FASE 1** formal:
  - mapa de URLs
  - keyword principal/secundarias por URL
  - intención por página
  - prioridades y riesgo de canibalización

---

## 2026-09-14 — Entrada 002

### Fase
Arquitectura SEO (FASE 1) — definición de URLs y keywords

### Hecho
- Se definieron URLs y keywords para páginas principales:
  - `/` — Home
  - `/mayorista/` — Mayorista
  - `/productos/` — Productos
  - `/distribucion/` — Distribución
  - `/envios-al-interior/` — Envíos al interior
  - `/contacto/` — Contacto
- Se establecieron intenciones de búsqueda por página:
  - Informativa
  - Navegacional
  - Transaccional

### Archivos tocados
- `scripts/urls-keywords-fase1.csv`

### Decisión tomada
- Priorizar creación de contenido y estructura para páginas clave del negocio.

### Motivo
- Alinear desarrollo con objetivos comerciales y necesidades de los usuarios.

### Riesgos / impacto
- Páginas secundarias quedan sin atención inicial.
- Posible desalineación entre contenido y búsqueda intencionada.

### TODO: confirmar con Quimar
- Validación de URLs y keywords propuestas.
- Confirmación de intenciones de búsqueda.

### Próximo paso
- Iniciar desarrollo de contenido y estructura para FASE 2 (metadata, H2-H3, enlazado, schema por URL).

---

## 2026-09-14 — Entrada 003

### Fase
Arquitectura SEO (FASE 1) — implementación de páginas

### Hecho
- Se creó script de scaffolding para generar estructura multipágina MVP:
  - `/`
  - `/mayorista/`
  - `/productos/` y subcategorías
  - `/distribucion/`
  - `/envios-al-interior/`
  - `/envios/buenos-aires/`
  - `/envios/caba/`
  - `/envios/cordoba/`
  - `/contacto/`
- Se incorporó `canonical` en todas las páginas con placeholder de dominio.
- Se agregó `robots.txt` inicial.

### Archivos tocados
- `scripts/scaffold-fase1.ps1`
- `robots.txt`

### Decisión tomada
- Generar primero MVP de arquitectura y dejar placeholders `TODO` para datos no confirmados.

### Motivo
- Evitar contenido inventado y permitir avance técnico inmediato.

### Riesgos / impacto
- Canonical y sitemap quedan pendientes hasta confirmar dominio real.

### TODO: confirmar con Quimar
- Dominio oficial.
- NAP definitivo.
- WhatsApp y horarios.

### Próximo paso
- Ejecutar script, revisar contenido por página y pasar a FASE 2 (metadata/H2-H3/enlazado/schema por URL).

---

## 2026-09-14 — Entrada 004

### Fase
SEO on-page (FASE 2) — implementación completa MVP

### Hecho
- Se implementó FASE 2 en páginas MVP:
  - H1, SEO Title y Meta Description por intención.
  - Estructura H2/H3 por tipo de URL.
  - Enlazado interno estratégico entre Home, Mayorista, Productos, Distribución, Envíos y Contacto.
  - Schema por página (Organization/LocalBusiness/WebSite/Breadcrumb/ItemList/FAQ/ContactPage según aplica).

### Archivos tocados
- `scripts/fase2-seo.ps1` — script de generación/actualización SEO on-page

### Decisión tomada
- Mantener placeholders `TODO` para datos no confirmados de negocio.

### Motivo
- Evitar publicar información inventada y preservar precisión comercial.

### Riesgos / impacto
- Canonical y datos de schema requieren dominio real para producción.

### TODO: confirmar con Quimar
- Dominio oficial.
- NAP definitivo y WhatsApp.
- Horarios de atención publicables.

### Próximo paso
- FASE 3: UX (orden final de secciones, jerarquía visual, CTA mobile) + QA semántico.

---

## 2026-09-14 — Entrada 005

### Fase
UX/UI + Mobile-first (FASE 3) — base implementable

### Hecho
- Se definió guía formal de UX para templates principales.
- Se implementó CSS base mobile-first alineado a identidad Quimar:
  - color marca #6C35A8 y #0073CC
  - navegación simple y clara
  - bloques semánticos legibles
  - CTA comercial visible
- Se evitó estética genérica/decorativa y efectos pesados.

### Archivos tocados
- `FASE3_UX_UI_MOBILE.md`
- `css/style.css`

### Decisión tomada
- Priorizar claridad comercial B2B y lectura móvil por encima de efectos visuales.

### Motivo
- Mejor conversión comercial y mejor base para Core Web Vitals.

### Riesgos / impacto
- Falta integrar datos reales finales (NAP/WhatsApp/horarios) para cerrar contacto y schema productivo.

### TODO: confirmar con Quimar
- Teléfono, WhatsApp, horario y dirección publicable final.
- Dominio definitivo para canonical/og/schema.

### Próximo paso
- FASE 4: ajuste técnico final (sitemap, robots final, canonicals reales, QA SEO técnico, CWV).

---

## 2026-09-14 — Entrada 006

### Fase
Desarrollo técnico + QA (FASE 4)

### Hecho
- Se creó `sitemap.xml` con URLs MVP.
- Se cerró `robots.txt` apuntando a sitemap.
- Se generó checklist `FASE4_QA_TECNICO.md` para salida a producción (SEO técnico + schema + CWV + mobile + datos comerciales).

### Archivos tocados
- `sitemap.xml`
- `robots.txt`
- `FASE4_QA_TECNICO.md`

### Decisión tomada
- Mantener placeholders de dominio hasta confirmación final.

### Motivo
- Evitar inconsistencias entre canonical, schema y Search Console.

### Riesgos / impacto
- Si no se reemplaza dominio antes de publicar, se invalida parte de la señal SEO técnica.

### TODO: confirmar con Quimar
- Dominio final.
- NAP real publicable.
- WhatsApp/teléfono/horarios.

### Próximo paso
- Reemplazo masivo de dominio + validación final en Lighthouse y Search Console.

---

## 2026-11-08 — Entrada 007

### Fase
QA + correcciones rápidas (Sprint 1 de la auditoría integral)

### Hecho
- Home: se quitaron los 6 botones "Ver productos en tienda" con `href="#"`; "Ver productos" pasa a ser la acción principal de cada tarjeta (violeta, ancho completo).
- Las 20 páginas tienen ahora el mismo set de Open Graph y Twitter Cards (type, site_name, locale, title, description, url, image) en el mismo orden.
- Favicon nuevo: `favicon-32.png` + `apple-touch-icon.png`, generados desde `favicon.jpg` sin el patrón de cuadritos de "transparencia" que traía pegado.
- Versión de caché unificada (`?v=20261108`) para CSS y JS en todas las páginas.
- `/envios/caba|cordoba|buenos-aires/`: se borró el `</main>` duplicado; el botón verde abre WhatsApp con un mensaje por zona (antes iba a /contacto/); se quitó un `.wa-float` viejo que estaba escrito a mano.
- `id="top"` en el header, para que funcione "Volver arriba".
- `sitemap.xml` con `<lastmod>`.
- La documentación interna, `lista de productos.json` y las reseñas en crudo se movieron a `_docs/`, con un `.htaccess` que bloquea el acceso.

### Archivos tocados
- Todas las `*/index.html`, `components/header.html`, `css/style.css` (`.cat-actions`), `sitemap.xml`, `assets/img/logo_quimar/*`, `_docs/`

### Riesgos / impacto
- `_docs/` no debe subirse al hosting; el `.htaccess` es solo un respaldo (sirve en Apache/LiteSpeed).
- `favicon.jpg` queda sin uso; se puede borrar en el Sprint 2.

### TODO: confirmar con Quimar
- URL de la tienda online (para volver a poner el botón "Ver productos en tienda").

### Próximo paso
- Sprint 2: header/footer/reseñas incluidos en el HTML (build estático), schema `@graph` unificado, `FAQPage`, fuentes, limpieza de imágenes.

---

## 2026-11-08 — Entrada 008

### Fase
Desarrollo técnico + SEO/GEO (Sprint 2)

### Hecho
- **Build estático** `_tools/build.mjs` (Node, sin dependencias): incrusta header, reseñas y footer en el HTML; marca `aria-current` en el menú; escribe el año del footer; genera `FAQPage` a partir de las FAQ visibles. Correr `node _tools/build.mjs` después de editar `components/`.
- **Header fijo:** antes estaba dentro de un `<div data-include>` y el `position: sticky` no funcionaba; ahora sí. Como en móvil el botón flotante de WhatsApp está oculto, el botón "Consultar por mayor" del header queda siempre visible. Se agregó `scroll-padding-top` para que los anclas no queden tapados.
- **Schema:** la home pasa de 3 bloques sueltos a un `@graph` con `WholesaleStore` (teléfono, email, horarios, áreas de reparto, `sameAs`, `hasMap`, `contactPoint`), `WebSite` y `WebPage`. Mayorista, contacto, distribución y envíos tienen ahora `WebPage`/`AboutPage`/`ContactPage` + `BreadcrumbList`. 9 páginas con `FAQPage`.
- **Textos de relleno visibles:** se ocultaron con comentarios `COMPLETAR` 24 placeholders `[COMPLETAR…]`/`[CONFIRMAR…]` que se veían en 5 páginas (piscinas, cobertores, riego).
- **Hero:** `hero-1670.webp` era una versión vieja de 758×701 con otro recorte. Se regeneraron 640/960/1280/1672 desde el original (`_assets-src/img/hero-1672-original.webp`). La imagen pasa de `<picture>` a `img srcset` con los mismos `sizes` que el preload. Se corrigió `.hero .visual{max-height:300px}` (regla móvil que había quedado global y achataba el hero).
- **Fuentes:** sin `@import`; preconnect + Bricolage Grotesque y DM Sans variables (400..800) en el `<head>`. `body` ya no declara Inter.
- **Imágenes:** 68 archivos sin uso (14,3 MB) se movieron a `_assets-src/`. `assets/` pasa de unos 15 MB a 1 MB.

### Riesgos / impacto
- No publicar `_docs/`, `_tools/` ni `_assets-src/` (tienen `.htaccess` de respaldo).
- Las reglas `.cat:nth-child` del CSS apuntan a imágenes que nunca existieron; no se usan. Se sacan en el Sprint 4.

### TODO: confirmar con Quimar
- ~~Calle y coordenadas~~ → cargadas el 2026-11-08: "Trenque Lauquen 2978, B1889DFA Bosques, Provincia de Buenos Aires" (mismo formato que la ficha de Google), geo -34.831223, -58.219653. Número de calle confirmado: 2978.
- Compra mínima mayorista y fichas de fabricante de cloro y alguicidas (hay contenido oculto esperando estos datos).

### Próximo paso
- Sprint 3: contacto con NAP y mapa, decisión sobre las landings de envíos, catálogo generado desde `_docs/lista de productos.json`, página "Sobre Quimar".

---

## Plantilla para próximas entradas

## YYYY-MM-DD — Entrada XXX

### Fase
[Arquitectura | SEO | UX | Desarrollo | QA]

### Hecho
- 

### Archivos tocados
- `ruta/archivo.ext` — descripción breve

### Decisión tomada
- 

### Motivo
- 

### Riesgos / impacto
- 

### TODO: confirmar con Quimar
- 

### Próximo paso
- 

---

## Checklist de control (alto nivel)

- [ ] Arquitectura final aprobada
- [ ] Keyword mapping por URL
- [ ] Metadata completa por página
- [ ] Estructura H1/H2/H3 definida
- [ ] Enlazado interno implementado
- [ ] Schema validado
- [ ] Core Web Vitals optimizado
- [ ] Revisión mobile-first
- [ ] QA SEO técnico final


