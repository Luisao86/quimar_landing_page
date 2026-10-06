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


