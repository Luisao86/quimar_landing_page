# Rediseño web de Quimar — instrucciones para Copilot

## Rol

Actuá como diseñador/a líder de un estudio conocido por darle a cada cliente una identidad visual propia, que no se confunde con la de nadie más. Este cliente ya rechazó propuestas que se sentían genéricas o hechas con plantilla. Tomá decisiones deliberadas y con criterio sobre tipografía, layout y ritmo, específicas para esta marca.

## Contexto del negocio

**Quimar** es una distribuidora **mayorista** de:

- Productos de limpieza
- Bazar
- Productos para mantenimiento de piletas y piscinas

**Público:** comercios, kioscos, almacenes, supermercados chicos, empresas, consorcios y revendedores que compran por volumen. No es un e-commerce de consumo final.

**Trabajo principal del sitio:** que un comerciante entienda rápido qué vende Quimar, vea que es una distribuidora seria y confiable, y **escriba por WhatsApp** para pedir lista de precios o hacer un pedido.

**Tono:** claro, directo, de confianza. Español rioplatense neutro (voseo si hay segunda persona). Sin frases de marketing infladas.

## Alcance

- Rediseñar la interfaz de forma **moderna y profesional**, manteniendo la identidad de color existente.
- **Conservar** todo el contenido real (productos, textos, datos de contacto, enlaces, reseñas). No inventes teléfonos, direcciones, precios, marcas ni cifras. Si falta un dato, dejá un marcador claro tipo `<!-- COMPLETAR: ... -->`.
- **Conservar** la funcionalidad existente (enlaces a WhatsApp, formularios, scripts, SEO básico, rutas).
- Antes de tocar nada, leé `index.html`, `style.css` y los demás archivos del proyecto para entender la estructura actual.

## Paleta (no cambiar los valores)

Está definida en `style.css`. Pasala a variables CSS en `:root` y usá siempre las variables, nunca hex sueltos.

| Variable | Valor | Uso |
|---|---|---|
| `--violeta` | `#6C35A8` | Color principal de marca, títulos destacados, botones principales, fondos de énfasis |
| `--azul` | `#0073CC` | Secundario: enlaces, acentos, categoría de piletas |
| `--whatsapp` | `#25D366` | **Solo** para acciones de WhatsApp |
| `--marino` | `#111936` | Texto principal y fondos oscuros |
| `--gris-texto` | `#667085` | Texto secundario |
| `--borde` | `#E7E9EF` | Bordes y divisores |
| `--fondo` | `#F6F7FB` | Fondo de secciones alternas |

Además, en las reseñas se mantienen el **dorado de las estrellas** y los **colores de marca de Google**. Usalos solo ahí.

### Reglas de uso del color

- El verde WhatsApp es una señal: aparece únicamente en botones y enlaces que abren WhatsApp. No lo uses como decoración.
- **Contraste:** el texto blanco sobre `#25D366` no cumple accesibilidad. En botones de WhatsApp usá texto `--marino` o un verde más oscuro derivado solo para el texto. Verificá que todo texto cumpla contraste AA (4.5:1).
- Violeta y azul no compiten: elegí uno como protagonista en cada sección y usá el otro como apoyo.
- Podés derivar tintas suaves de la paleta (por ejemplo violeta al 8–10 % sobre blanco) para fondos de categorías. No agregues colores nuevos fuera de la familia.

## Dirección de diseño

### Idea central

Quimar es una distribuidora: su fuerza es **orden, variedad y confianza**. El diseño tiene que transmitir un catálogo bien organizado y un proveedor al que se le puede escribir directo. Pensá en un sistema visual claro por categorías, no en una landing genérica de empresa.

### Un solo elemento memorable

Gastá la audacia en **un lugar** y mantené el resto sobrio y disciplinado. Sugerencia: la presentación de las tres líneas de producto (limpieza, bazar, piletas) como un bloque con identidad fuerte y propia, con jerarquía y escala marcadas. Todo lo demás, silencioso.

### Tipografía

- Máximo **dos familias**, claramente distintas entre sí, o una sola bien trabajada.
- Elegí tipografías con carácter, **no** las que usarías por defecto en cualquier proyecto. Evitá Inter, Roboto, Arial y Poppins.
- Punto de partida a evaluar (Google Fonts): una grotesca con personalidad para títulos (por ejemplo *Bricolage Grotesque* o *Sora*) y una sans legible para texto (por ejemplo *Figtree* o *DM Sans*). Si proponés otras, justificá por qué.
- Definí una escala tipográfica con pesos intencionales. Líneas de texto de **menos de 80 caracteres**.
- Los títulos son parte del diseño: usá el tratamiento tipográfico de forma activa, no como un vehículo neutro.

### Evitar estos vicios típicos de páginas generadas con IA

- Resaltar una sola palabra de un título con otro color, cursiva o negrita.
- Etiquetas en MAYÚSCULAS con espaciado amplio sobre cada título.
- Etiquetas tipográficas arriba del contenido que no aportan información.
- Numerar bloques (01 / 02 / 03) cuando el contenido no es una secuencia. *Sí se justifica* en "cómo comprar", que es un proceso en pasos.
- Todas las secciones hechas con tarjetas idénticas, mismo radio de borde, misma sombra gris suave en todo.
- Degradados decorativos de fondo.
- Fondo crema con serif y acento terracota; o fondo casi negro con un acento ácido.
- Una flecha `→` pegada a cada botón y enlace.
- Textos con puntos medios tipo "A · B · C" y guiones largos como recurso de estilo.
- Animaciones de entrada con fade y slide-up en cada sección, y transiciones hover en todas las tarjetas.

### Estructura visual

La estructura (bordes, separadores, etiquetas) debe **codificar información**, no decorar. Variá radios, sombras y densidad según la jerarquía: no todo merece el mismo tratamiento.

## Estructura de la página sugerida

Adaptá según lo que ya existe en el sitio. Mantené el orden lógico de arriba hacia abajo:

1. **Header**: logo, navegación simple y botón de WhatsApp siempre visible.
2. **Hero**: qué es Quimar (distribuidora mayorista), qué rubros cubre y una acción principal clara: pedir lista de precios por WhatsApp. Abrí con lo más característico del negocio, no con un número grande y un degradado.
3. **Rubros**: limpieza, bazar y piletas y piscinas. Es el bloque protagonista.
4. **Por qué comprar en Quimar**: ventajas reales del mayorista. Usá solo las que ya figuren en el sitio.
5. **Cómo comprar**: proceso en pasos (acá sí, numeración).
6. **Reseñas**: estrellas doradas y estilo de Google reconocible.
7. **Contacto y ubicación**: WhatsApp, teléfono, dirección y horarios existentes.
8. **Footer**: sobrio, con datos y enlaces.

## Movimiento

- Usá movimiento **sin que lo active el usuario** solo de forma deliberada y escasa: una única secuencia orquestada al cargar, como máximo.
- El movimiento que responde a una acción (abrir, expandir, confirmar) es bienvenido.
- Respetá `prefers-reduced-motion`.

## Calidad mínima obligatoria

- **Mobile first.** La mayoría de los clientes entra desde el celular: probá 360 px, 768 px y escritorio.
- Botón de WhatsApp accesible con el pulgar, sin tapar contenido importante.
- Foco de teclado visible en todos los elementos interactivos.
- Contraste AA en todo el texto.
- Áreas táctiles de al menos 44 × 44 px.
- HTML semántico (`header`, `nav`, `main`, `section`, `footer`), jerarquía de títulos correcta y `alt` en imágenes.
- Imágenes optimizadas, con `loading="lazy"` fuera del primer pantallazo.
- CSS ordenado: variables, nombres de clase coherentes y cuidado con la especificidad para que los estilos no se pisen entre sí (sobre todo el espaciado entre secciones).

## Textos (microcopy)

- Escribí desde la perspectiva del comerciante, con palabras simples.
- Los botones dicen exactamente qué pasa: "Pedir lista de precios", "Escribir por WhatsApp". No "Enviar" ni "Click aquí".
- Mantené el mismo nombre para la misma acción en todo el sitio.
- Usá mayúscula solo inicial (sentence case), verbos activos y nada de relleno.
- Describí lo que Quimar vende y hace en términos concretos, en lugar de vender con adjetivos.

## Proceso de trabajo (seguilo en este orden)

1. **Leé el proyecto** y resumime brevemente la estructura actual.
2. **Proponé un plan de diseño compacto**, con:
   - **Color:** la paleta base en variables.
   - **Tipografía:** familias elegidas y el rol de cada una.
   - **Layout:** el concepto en una frase por sección y un wireframe ASCII por bloque principal, con la alineación definida (izquierda, centro, etc.).
   - **Principios:** qué hace único a este diseño.
3. **Revisá el plan contra este brief.** Si alguna parte se parece a lo que harías para cualquier otra distribuidora o landing, cambiala y explicá qué modificaste y por qué.
4. **Esperá mi confirmación** del plan antes de escribir código.
5. **Construí** siguiendo el plan aprobado, sección por sección.
6. **Autocrítica final:** antes de terminar, quitá un elemento decorativo que no sirva al objetivo. Después listame qué cambió y qué quedó marcado como `COMPLETAR`.

## Qué no hacer

- No cambiar los valores de la paleta ni agregar colores ajenos a la marca.
- No inventar datos de contacto, precios, productos ni reseñas.
- No romper enlaces, formularios ni scripts existentes.
- No agregar librerías o frameworks pesados si HTML, CSS y un poco de JS alcanzan.
- No dejar sin revisar la versión móvil.
