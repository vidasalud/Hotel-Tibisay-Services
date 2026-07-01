# # Hotel Tibisay Boutique Services

_Started 2026-06-26 20:16 UTC_

---

## User

# PROMPT MAESTRO — Hotel Tibisay Boutique · Guía de Servicios (Landing Mobile-First)

Construye una landing page responsive, mobile-first, para "Hotel Tibisay Boutique" (hotelería 5 estrellas all-inclusive, Isla de Margarita, Venezuela). Público: huéspedes hospedados que escanean un QR al check-in. La página se abre en el celular. Objetivo único: informar sobre los servicios disponibles y sus horarios. Idioma: bilingüe (inglés principal, español secundario) con toggle de idioma.

---

## STACK

React + TypeScript + Tailwind CSS. Iconos con lucide-react. Animaciones con Framer Motion (whileInView, AnimatePresence para modals). Sin GSAP, sin video, sin 3D — la página es ligera y funcional. Mobile-first.

---

## ESTILOS GLOBALES

- Fondo: `#040403` en html, body, #root.
- Fondo secundario (modals, cards): `#1A1511`.
- Acento dorado primario: `#F6D99F` (highlights, líneas, toggle activo).
- Acento dorado secundario: `#C4A468` (íconos, bordes sutiles, texto de acento).
- Texto principal: `#F1EEEA`.
- Texto secundario / muted: `#F1EEEA` al 60% de opacidad.
- Tipografía display (titulares, nombre del hotel): "Cormorant" de Google Fonts, peso 600–700, tracking ligeramente ampliado.
- Tipografía cuerpo (todo lo demás): "Inter" de Google Fonts, peso 400–500.
- Reset global: box-sizing border-box, margin 0, padding 0, scroll-behavior smooth.
- Capa de grano/noise: un pseudo-elemento ::after fijo en toda la página con imagen de ruido SVG en base64, opacity 4%, pointer-events none. Da textura premium sin peso.
- Glow dorado ambiental: un div fijo o absoluto detrás del header con radial-gradient de `#F6D99F` al 6-8% de opacity, radio 300px, centrado en el logo. Sutil, no invasivo.
- Línea decorativa dorada: un componente `<GoldLine />` que es un div de 1px de alto, color `#C4A468` al 40%, que anima su width de 0% a 100% al entrar en viewport (duración 0.8s, ease-out). Se usa como separador entre secciones.

---

## ASSETS ADJUNTOS (los adjunto a Claude Design en este orden)

- Imagen 1 = Logo del hotel (PNG con fondo transparente) → va en el Header.
- Imagen 2 = Foto del Gym → va dentro del modal/popup del servicio Gym.
- Imagen 3 = Foto del Restaurante → va dentro del modal del servicio Restaurant.
- Imagen 4 = Foto del Open Bar → va dentro del modal del servicio Open Bar.
- Imagen 5 = Foto del Beach Club → va dentro del modal del servicio Beach Club.
- Imagen 6 = Foto del Spa → va dentro del modal del servicio Spa.
- Imagen 7 = Foto del Casino → va dentro del modal del servicio Casino.

---

## ORDEN DE SECCIONES

1. Header (logo + título + toggle de idioma)
2. Welcome (saludo de bienvenida)
3. Included Services (grid de 4 iconos con tap → modal)
4. Towel Service (nota informativa)
5. Additional Services (grid de 2 iconos con tap → modal)
6. Footer (info de contacto)

---

## DETALLE POR SECCIÓN

### 1) HEADER

**Layout:** Sección centrada, padding vertical 48px arriba / 24px abajo. Contenido en columna: logo arriba (max-width 120px, centrado), debajo el título, debajo el toggle de idioma.

**Copy:**
- Logo: Imagen 1 adjunta, centrada, max-width 120px.
- Debajo del logo, titular:
  - EN: "Our Services"
  - ES: "Nuestros Servicios"
- Tipografía del titular: "Cormorant", peso 700, tamaño 28px en móvil / 36px en desktop, color `#F1EEEA`, tracking 0.05em.

**Toggle de idioma:** Dos botones pequeños lado a lado: "EN" y "ES". El activo tiene fondo `#F6D99F` con texto `#040403` (invertido). El inactivo tiene fondo transparente, borde 1px `#C4A468` al 40%, texto `#F1EEEA`. Border-radius 6px. Tamaño: padding 6px 16px, font-size 13px, Inter peso 500. Al cambiar idioma, todo el contenido de la página cambia (usar un contexto React con estado `lang: 'en' | 'es'`). Transición suave: el contenido de texto hace fade cross-dissolve (opacity 0→1, 0.2s) al cambiar.

**Animación:** Logo y titular hacen fade-in (opacity 0→1) al cargar la página. Duración 0.8s, ease-out. El toggle aparece 0.3s después (delay 0.3s).

**Responsive:** Se ve igual en móvil y desktop. En desktop (≥1024px), el logo puede subir a max-width 160px y el titular a 42px.

---

### 2) WELCOME

**Layout:** Bloque centrado, max-width 340px en móvil, padding horizontal 24px, padding vertical 32px. Texto centrado.

**Copy:**
- EN: "Welcome to Hotel Tibisay Boutique." (línea 1, "Cormorant" peso 600, 20px, color `#F1EEEA`) + "Everything you need to make the most of your stay, right here." (línea 2, "Inter" peso 400, 15px, color `#F1EEEA` al 70%).
- ES: "Bienvenido a Hotel Tibisay Boutique." (línea 1) + "Todo lo que necesitas para aprovechar tu estadía, aquí." (línea 2).

**Animación:** Reveal on scroll — el bloque completo hace fade-in + translateY de 16px a 0 al entrar en viewport. Duración 0.6s, ease-out, una sola vez (Framer Motion `whileInView` con `once: true`).

**Responsive:** En desktop, max-width 480px. Misma estructura.

---

### 3) INCLUDED SERVICES

**Layout:** Encabezado de sección centrado + grid de 2 columnas × 2 filas (4 items). Gap 16px. Padding horizontal 24px, padding vertical 40px. Max-width 400px centrado.

**Encabezado de sección:**
- EN: "Included in Your Stay"
- ES: "Incluido en tu estadía"
- Tipografía: "Cormorant" peso 600, 20px, color `#C4A468`. Centrado. Margen inferior 24px.

**Cada celda del grid (Service Card):**
- Fondo `#1A1511`, border-radius 12px, borde 1px solid `#C4A468` al 15%, padding 24px vertical / 16px horizontal.
- Centrado verticalmente: ícono arriba + nombre debajo.
- Ícono: lucide-react, tamaño 32px, stroke-width 1.5, color `#C4A468`.
- Nombre del servicio debajo: "Inter" peso 500, 13px, color `#F1EEEA`, margin-top 8px.
- Efecto tap: al tocar la card, ligera escala (scale 0.96 por 0.1s) y luego abre el modal.

**Los 4 servicios incluidos y sus íconos lucide-react:**
1. Gym → ícono: `Dumbbell` → label EN: "Gym" / ES: "Gimnasio"
2. Restaurant → ícono: `UtensilsCrossed` → label EN: "Restaurant" / ES: "Restaurante"
3. Open Bar → ícono: `Wine` → label EN: "Open Bar" / ES: "Barra Libre"
4. Beach Club → ícono: `Umbrella` → label EN: "Beach Club" / ES: "Beach Club"

**Animación:** Los 4 cards entran con fade-in + scale (0.9→1) con stagger de 0.1s entre cada uno al entrar en viewport. Duración 0.5s, ease-out, una sola vez.

**Responsive:** En desktop (≥768px), el grid puede pasar a 4 columnas en una fila. Cada card crece proporcionalmente.

---

### MODALS DE SERVICIO (componente reutilizable ServiceModal)

**Trigger:** Al tocar un Service Card, se abre un modal a pantalla completa en móvil (o centrado con max-width 480px en desktop).

**Layout del modal:**
- Overlay de fondo: `#040403` al 80%, cubre toda la pantalla.
- Panel del modal: fondo `#1A1511`, border-radius 16px (en móvil, border-radius solo arriba si es bottom-sheet). Max-height 85vh, overflow-y auto.
- Arriba: foto del servicio (la imagen adjunta correspondiente), aspect-ratio 16/9, border-radius 12px arriba, object-fit cover.
- Debajo de la foto: padding 24px.
  - Nombre del servicio: "Cormorant" peso 700, 24px, color `#F1EEEA`.
  - Descripción corta: "Inter" peso 400, 14px, color `#F1EEEA` al 70%. Margin-top 8px.
  - Horarios: "Inter" peso 500, 14px, color `#F1EEEA`. Cada línea de horario en su propio renglón. Margin-top 16px.
  - Nota al pie (si existe): "Inter" peso 400, 13px, color `#C4A468`, font-style italic. Margin-top 12px.
- Botón de cierre: "X" (lucide-react `X`, 24px) en la esquina superior derecha del panel, padding 12px, color `#F1EEEA` al 60%, hover: opacity 100%.

**Animación del modal (Framer Motion AnimatePresence):**
- Entrada: overlay fade-in (opacity 0→0.8, 0.25s). Panel: translateY 100%→0, duración 0.35s, easing `[0.22, 1, 0.36, 1]`.
- Contenido interior: fade-in + translateY 12px→0, stagger 0.05s entre cada elemento (título, descripción, horarios, nota).
- Salida: panel translateY 0→100% (0.25s), overlay fade-out.

**Contenido de cada modal (bilingüe):**

**Modal GYM (usa Imagen 2):**
- EN: Título: "Gym" / Descripción: "Stay active during your getaway." / Horarios: "Monday – Friday: 5:10 AM – 10:30 PM" · "Saturday: 6:00 AM – 8:00 PM" · "Sunday: 8:00 AM – 1:00 PM" / Nota: "Located on the ground floor. No reservation needed."
- ES: Título: "Gimnasio" / Descripción: "Mantente activo durante tu escapada." / Horarios: "Lunes – Viernes: 5:10 AM – 10:30 PM" · "Sábado: 6:00 AM – 8:00 PM" · "Domingo: 8:00 AM – 1:00 PM" / Nota: "Ubicado en planta baja. Sin reservación."

**Modal RESTAURANT (usa Imagen 3):**
- EN: Título: "Main Restaurant" / Descripción: "From breakfast to dinner — every meal is on us." / Horarios: "Breakfast: 7:00 AM – 10:00 AM" · "Lunch: 12:00 PM – 2:00 PM" · "Snacks: 3:00 PM – 6:00 PM" · "Dinner: 7:00 PM – 10:00 PM" / Nota: "Snacks available at Mar y Tierra, the Beach Club, or the Main Restaurant."
- ES: Título: "Restaurante Principal" / Descripción: "Del desayuno a la cena — cada comida corre por nuestra cuenta." / Horarios: "Desayuno: 7:00 AM – 10:00 AM" · "Almuerzo: 12:00 PM – 2:00 PM" · "Snacks: 3:00 PM – 6:00 PM" · "Cena: 7:00 PM – 10:00 PM" / Nota: "Snacks disponibles en Mar y Tierra, el Beach Club o el Restaurante Principal."

**Modal OPEN BAR (usa Imagen 4):**
- EN: Título: "Open Bar" / Descripción: "Cocktails, wines, spirits & soft drinks — national brands included." / Horarios: "Daily: 11:00 AM – 10:00 PM"
- ES: Título: "Barra Libre" / Descripción: "Cócteles, vinos, licores y bebidas sin alcohol — marcas nacionales incluidas." / Horarios: "Todos los días: 11:00 AM – 10:00 PM"

**Modal BEACH CLUB (usa Imagen 5):**
- EN: Título: "Main Beach Club" / Descripción: "Sun, sand & everything you need to unwind." / Horarios: "Beach Club Pool: 9:00 AM – 6:00 PM" · "Hotel Pool: 9:00 AM – 6:00 PM" · "Beach Club Area: 11:00 AM – 10:00 PM" / Nota: "Lounge chairs, huts & 1 hour of paddle tennis included."
- ES: Título: "Beach Club Principal" / Descripción: "Sol, arena y todo lo que necesitas para relajarte." / Horarios: "Piscina Beach Club: 9:00 AM – 6:00 PM" · "Piscina del Hotel: 9:00 AM – 6:00 PM" · "Área del Beach Club: 11:00 AM – 10:00 PM" / Nota: "Camastros, palapa y 1 hora de pádel incluida."

---

### 4) TOWEL SERVICE

**Layout:** Bloque centrado, max-width 360px, padding 24px, margin-top 8px. Fondo `#1A1511`, border-radius 12px, borde 1px solid `#C4A468` al 15%.

**Contenido:** Ícono lucide-react `Shirt` (o `Waves`), 24px, color `#C4A468`, centrado arriba. Debajo:

- EN: Título: "Towel Service" ("Inter" peso 600, 15px, color `#F1EEEA`, centrado). Cuerpo: "Towels for the gym, pools & beach are available at the front desk. Please return them to reception after use. Lost towels will incur a replacement fee." ("Inter" peso 400, 13px, color `#F1EEEA` al 70%, centrado). Sub-bloque: "Going to an external beach? Towels are available with a refundable deposit at the front desk." ("Inter" peso 400, 13px, color `#C4A468`, centrado).
- ES: Título: "Servicio de Toallas". Cuerpo: "Las toallas para gimnasio, piscinas y playa se retiran en recepción. Por favor devuélvelas en recepción al terminar. El extravío de toallas genera un cargo por reposición." Sub-bloque: "¿Vas a una playa externa? Toallas disponibles en recepción con garantía reembolsable."

**Animación:** Reveal on scroll — fade-in + translateY 16px→0, duración 0.6s, ease-out, una sola vez.

**Responsive:** En desktop, max-width 480px. Misma estructura centrada.

---

### SEPARADOR (GoldLine) entre Included Services + Towel y Additional Services

Usa el componente `<GoldLine />`: línea de 1px, color `#C4A468` al 40%, max-width 120px, centrada, margin vertical 40px. Anima width 0→100% al entrar en viewport (0.8s, ease-out).

---

### 5) ADDITIONAL SERVICES

**Layout:** Igual estructura que Included Services, pero grid de 2 columnas × 1 fila (2 items). Max-width 400px centrado.

**Encabezado:**
- EN: "Additional Services"
- ES: "Servicios Adicionales"
- Tipografía: "Cormorant" peso 600, 20px, color `#C4A468`. Centrado. Margen inferior 8px.

**Sub-encabezado:**
- EN: "Available at an extra cost. Ask our front desk for details."
- ES: "Disponibles con costo adicional. Consulta en recepción."
- "Inter" peso 400, 13px, color `#F1EEEA` al 50%. Centrado. Margen inferior 24px.

**Los 2 servicios adicionales:**
1. Spa → ícono lucide-react: `Flower2` → label EN: "Spa" / ES: "Spa"
2. Casino → ícono lucide-react: `Dice5` → label EN: "Casino" / ES: "Casino"

**Mismo estilo de card y animación que Included Services** (fade-in + scale con stagger 0.1s).

**Modal SPA (usa Imagen 6):**
- EN: Título: "Spa" / Descripción: "Relax with a personalized treatment." / Horarios: "By appointment only." / Nota: "Book at the front desk."
- ES: Título: "Spa" / Descripción: "Relájate con un tratamiento personalizado." / Horarios: "Solo con cita previa." / Nota: "Reserva en recepción."

**Modal CASINO (usa Imagen 7):**
- EN: Título: "Casino" / Descripción: "Try your luck steps from your room." / Horarios: "Daily: 4:00 PM – 3:00 AM" / Nota: "Must be 18+ to enter."
- ES: Título: "Casino" / Descripción: "Prueba tu suerte a pasos de tu habitación." / Horarios: "Todos los días: 4:00 PM – 3:00 AM" / Nota: "Entrada solo para mayores de 18 años."

---

### 6) FOOTER

**Layout:** Centrado, padding vertical 48px, padding horizontal 24px. Separado del resto por un `<GoldLine />`.

**Copy:**
- Línea 1: "Hotel Tibisay Boutique · Isla de Margarita" — "Cormorant" peso 600, 16px, color `#C4A468`.
- Línea 2 (EN): "For any request, dial 0 from your room or visit our front desk." — "Inter" peso 400, 13px, color `#F1EEEA` al 60%.
- Línea 2 (ES): "Para cualquier solicitud, marca 0 desde tu habitación o acude a recepción."
- Línea 3 (EN): "We're here to make your stay unforgettable." — "Inter" peso 400, 13px, color `#F1EEEA` al 40%.
- Línea 3 (ES): "Estamos aquí para que tu estadía sea inolvidable."

**Animación:** Fade-in simple, 0.6s, ease-out, al entrar en viewport.

**Responsive:** Igual en móvil y desktop.

---

## COMPONENTES REUTILIZABLES

- **Reveal** — wrapper que hace fade-in + translateY(16px→0) al entrar en viewport con Framer Motion `whileInView` (`once: true`). Acepta prop `delay` para stagger. Usa solo `transform` y `opacity` (GPU-friendly).
- **GoldLine** — div de 1px de alto, color `#C4A468` al 40%, max-width 120px, centrado. Anima width de 0% a 100% al entrar en viewport (0.8s, ease-out, una vez).
- **ServiceCard** — card con ícono + label. Acepta props: `icon` (componente lucide-react), `label`, `onClick`. Fondo `#1A1511`, borde `#C4A468` al 15%, border-radius 12px. Al tap: scale 0.96 por 0.1s.
- **ServiceModal** — modal con AnimatePresence. Acepta props: `isOpen`, `onClose`, `image` (src de la foto), `title`, `description`, `schedule` (array de strings), `note` (string opcional). Entrada: slide-up + overlay fade-in. Cierre: slide-down. Contenido con stagger.
- **LanguageToggle** — dos botones EN/ES que controlan un contexto React `LanguageContext` con estado `'en' | 'es'`. Activo: fondo `#F6D99F`, texto `#040403`. Inactivo: transparente con borde `#C4A468`.

---

## RESPONSIVE

- **≤640px (móvil, caso principal):** Todo el diseño base está pensado para este viewport. Grids de 2 columnas. Modals a pantalla casi completa (bottom-sheet style, border-radius solo arriba). Padding horizontal 24px.
- **≤768px (tablet):** Misma estructura que móvil, max-width del contenido sube a 480px.
- **≥1024px (desktop):** Max-width del contenido 560px, centrado. Modals centrados con max-width 480px, no bottom-sheet sino centrados verticalmente con border-radius completo. Logo puede ser más grande (160px). Grid de servicios puede pasar a 4 columnas en Included Services.
- **Animaciones en móvil:** Se mantienen todas (son ligeras: solo opacity + transform). Si el dispositivo reporta `prefers-reduced-motion: reduce`, se desactivan.

---

## ACCESIBILIDAD Y PERFORMANCE

- Respeta `prefers-reduced-motion: reduce`: si está activo, todos los elementos aparecen sin animación (opacity 1 inmediato, sin translate, sin stagger). Los modals aparecen sin slide (solo opacity). La línea dorada aparece sin animación de width.
- Contraste WCAG AA: texto `#F1EEEA` sobre fondo `#040403` tiene ratio >15:1 (sobrado). Texto `#C4A468` sobre `#040403` tiene ratio ~6:1 (pasa AA). Verificado.
- Imágenes de los modals con lazy-load (loading="lazy" o equivalente React).
- Grain/noise con pointer-events: none para no interferir con taps.
- Modals con focus trap (el foco queda dentro del modal mientras está abierto) y cierre con tecla Escape.
- Botón de cierre del modal con aria-label="Close".
- Todas las animaciones usan solo `transform` y `opacity` (GPU-friendly, no causan reflow).

---

## RECAP DE COMPORTAMIENTO

Al abrir la página desde el QR, el huésped ve el logo del Hotel Tibisay Boutique sobre fondo negro con una textura de grano sutil y un halo dorado apenas perceptible detrás del logo. El título "Our Services" aparece con un fade suave. Un toggle EN/ES le permite cambiar el idioma de toda la página. Al hacer scroll, un saludo breve de bienvenida se revela con un movimiento ascendente sutil. Más abajo, cuatro cards con íconos dorados de línea (Gym, Restaurant, Open Bar, Beach Club) entran en cascada. Al tocar cualquiera, un panel sube desde abajo de la pantalla con la foto del servicio, los horarios y una nota útil. El contenido del panel se revela progresivamente. Un cierre con la "X" lo desliza hacia abajo. Después, una nota sobre el servicio de toallas aparece como un bloque informativo. Una línea dorada fina se dibuja de izquierda a derecha como separador. Abajo, dos cards más (Spa y Casino) con la misma interacción. El footer cierra con el nombre del hotel y un recordatorio de cómo contactar recepción. Toda la experiencia es rápida, elegante y cabe en 3-4 scrolls. No hay nada que distraiga — solo información clara con una estética de lujo que refleja el nivel del hotel.

## Assistant

## User

<!-- The user explicitly selected the following skills for this project, as attachments to their message. These are not optional context — they define how you work. Use them. -->
<attached-skill name="Design System (design system)">
[Design System] This project uses the **Design System** design system. This is a binding choice for visual style — every visual must follow it. Don't invent colors, type, spacing, or components not grounded here.

Scope: the design system is a visual style reference only. Its guide may describe example products, brands, or people that are unrelated to the user and unrelated to the subject of this conversation. Never treat anything in the design system as a fact about the user, their work, or the topic they asked about.

    Explore it to find what you need:
    - Always copy out the fonts and colors you need
    - For prototypes and designs, always copy out any relevant components
    - If the design system contains existing mocks of products, and you were asked to design or prototype something similar, copy and fork those mocks to start your design. This helps you make high-quality designs.

    Explore it quickly to find relevant UI kits (e.g. mocks of existing products you can copy and fork)

Full system at `/projects/f314bb79-73e6-4a8f-8005-cad54159e44d/`. Before producing any visuals, explore it: call `list_files("/projects/f314bb79-73e6-4a8f-8005-cad54159e44d/")` to see the structure, then `read_file` the README/base.md or whatever index file it has. Don't guess at the design system's contents.

CSS tokens: the guide may describe tokens in prose, but the exact `--*` names are defined in the design system's stylesheet(s). Before writing any `var(--*)`, look up the real name in the design system's `.css` files (`list_files` + `read_file` under `/projects/f314bb79-73e6-4a8f-8005-cad54159e44d/`). Never guess a token name — an unresolved `var()` silently falls back to the browser default.

For assets and UI kits beyond the guide: `read_file("/projects/f314bb79-73e6-4a8f-8005-cad54159e44d/<path>")` and `copy_files` to bring them into the current project.
</attached-skill>

## Assistant

_[tool: update_todos]_

_[tool: list_files]_

## User

Continúa

## Assistant

_[tool: list_files]_

_[tool: update_todos]_

_[tool: view_image]_

_[tool: image_metadata]_

## User

Continúa

## Assistant

_[tool: snip]_

_[tool: update_todos]_

_[tool: dc_write]_

_[tool: show_html]_

_[tool: update_todos]_

_[tool: ready_for_verification]_

_[tool: update_todos]_

Landing page lista. Resumen rápido:

- **Fondo oscuro `#040403`** con grain/noise sutil y glow dorado ambiental detrás del logo
- **Toggle EN/ES** funcional — toda la página cambia de idioma con un cross-fade suave
- **4 servicios incluidos** (Gym, Restaurant, Open Bar, Beach Club) + **2 adicionales** (Spa, Casino) en grids de cards con íconos dorados
- **Modals bottom-sheet** con foto, horarios y notas — se abren con slide-up animado y cierran con Escape, X, o tap fuera
- **Towel Service** como bloque informativo entre secciones
- **Gold lines** animadas como separadores
- **Scroll reveals** con stagger en cascada, respeta `prefers-reduced-motion`
- **Responsive** con clamp() para tipografía y anchos

**Pendientes para una siguiente iteración:**
- Ajustar iconos si prefieres otro estilo visual (los actuales son stroke-line SVG custom)
- Agregar la imagen del Spa (actualmente no hay `Foto-Spa.png` — confirma si falta entre los uploads)
- Posible ajuste fino de espaciados en desktop wide

## User

Check didn’t complete

## Assistant

## User

<system-info comment="Only acknowledge these if relevant">
Project title is now "Hotel Tibisay Boutique services"
Project currently has 3 file(s)
User is viewing file: Hotel Tibisay Services.dc.html
Current date is now July 1, 2026
</system-info>

<attached_files>
- uploads/hero-hotel.png
</attached_files>

<pasted_text name="Pasted text (313 lines)">
# PROMPT MAESTRO v2 — Hotel Tibisay Boutique · Guía de Servicios

Construye una landing page responsive, mobile-first, para "Hotel Tibisay Boutique" (hotelería 5 estrellas all-inclusive, Isla de Margarita, Venezuela). Público: huéspedes hospedados que escanean un QR al check-in — la página se abre en el celular. Objetivo único: informar sobre los servicios disponibles y sus horarios. Idioma: bilingüe (inglés principal, español secundario) con toggle de idioma.

---

## DIRECCIÓN VISUAL — MOBILE-NATIVE CON PROFUNDIDAD

El diseño debe sentirse como una **app nativa premium**, no como un sitio web convencional. Características clave del estilo:

- **Bordes ultra-redondeados** en todo: cards con border-radius 20–24px, modals con border-radius 28px, botones con border-radius completo (pill / 999px). Nada cuadrado.
- **Profundidad con sombras suaves**: las cards y modals "flotan" sobre el fondo con box-shadow suaves multi-capa (no sombras planas). Ejemplo: `box-shadow: 0 4px 24px rgba(0,0,0,0.3), 0 1px 4px rgba(0,0,0,0.2)`.
- **Glassmorphism cálido**: fondo de cards/modals con `backdrop-filter: blur(24px)` + fondo `#1A1511` al 75% de opacidad + borde 1px `#C4A468` al 10%. Deja entrever el fondo oscuro con textura.
- **Elementos flotantes**: botón de scroll flotante fijo, cards que se sienten elevadas, contenido que respira con padding generoso.
- **Sensación orgánica**: transiciones con springs de Framer Motion (no ease lineal), escalas sutiles al interactuar, todo se siente táctil.

---

## STACK

React + TypeScript + Tailwind CSS. Iconos con lucide-react. Animaciones con Framer Motion (whileInView, AnimatePresence para modals, springs para interacciones táctiles). Sin GSAP, sin video, sin 3D. Mobile-first.

---

## ESTILOS GLOBALES

- Fondo base: `#040403` en html, body, #root.
- Superficie glass (cards, modals, towel block): `#1A1511` al 75% de opacidad + `backdrop-filter: blur(24px)` + borde 1px solid `rgba(196, 164, 104, 0.10)`.
- Acento dorado primario: `#F6D99F` (highlights, toggle activo, botón flotante, ícono activo).
- Acento dorado secundario: `#C4A468` (íconos de servicio, bordes sutiles, textos de acento, líneas decorativas).
- Texto principal: `#F1EEEA`.
- Texto muted: `#F1EEEA` al 60%.
- Tipografía display: **"Cormorant"** de Google Fonts, peso 600–700, tracking 0.03em.
- Tipografía cuerpo: **"Inter"** de Google Fonts, peso 400–500.
- Reset global: box-sizing border-box, margin 0, padding 0, scroll-behavior smooth.
- Sombra estándar para cards: `box-shadow: 0 4px 24px rgba(0,0,0,0.35), 0 1px 6px rgba(0,0,0,0.2)`.
- Sombra para modals: `box-shadow: 0 -8px 40px rgba(0,0,0,0.5)`.
- Capa de grano/noise: pseudo-elemento ::after fijo en toda la página con imagen de ruido SVG en base64, opacity 4%, pointer-events none. Textura premium.
- Border-radius global mínimo: 20px para cards, 28px para modals, 999px para botones (pill shape).

---

## ASSETS ADJUNTOS (los adjunto a Claude Design en este orden)

- Imagen 1 = Logo del hotel (PNG con fondo transparente) → Header.
- Imagen 2 = Foto panorámica del hotel (hero-hotel.jpg) → Hero, fondo.
- Imagen 3 = Foto del Gym → Modal Gym.
- Imagen 4 = Foto del Restaurante → Modal Restaurant.
- Imagen 5 = Foto del Open Bar → Modal Open Bar.
- Imagen 6 = Foto del Beach Club → Modal Beach Club.
- Imagen 7 = Foto del Spa → Modal Spa.
- Imagen 8 = Foto del Casino → Modal Casino.

---

## ORDEN DE SECCIONES

1. Hero (foto del hotel + overlay + logo + título + toggle de idioma)
2. Floating Scroll Button (fijo, flotante)
3. Included Services (grid de 4 cards glass con íconos)
4. Towel Service (bloque informativo glass)
5. Additional Services (grid de 2 cards glass)
6. Footer

---

## DETALLE POR SECCIÓN

### 1) HERO

**Layout:** Sección full-width, height 80vh en móvil / 50vh en desktop. Position relative. Overflow hidden. Border-radius 0 (full bleed arriba) con border-radius 28px solo en las esquinas inferiores (como una tarjeta que baja desde arriba).

**Fondo:** Imagen 2 adjunta (foto del hotel). Position absolute, width 100%, height 100%, object-fit cover. Un efecto de zoom sutil: la imagen empieza en scale 1.05 y anima a scale 1.0 en 8s con ease-out al cargar (ken burns suave, da vida sin ser agresivo).

**Overlay:** Div absoluto encima de la imagen. Gradiente de abajo hacia arriba: `#040403` al 90% en la parte inferior (bottom 0%) → `#040403` al 20% en el centro (50%) → transparente arriba (100%). Esto crea una transición suave donde la foto es visible arriba y el contenido se lee perfecto abajo.

**Contenido (apilado en la parte inferior, padding 32px, z-index sobre overlay):**

- **Logo:** Imagen 1 adjunta, max-width 80px, centrado, margin-bottom 16px.
- **Título (debajo del logo):**
  - EN: "Welcome to Hotel Tibisay Boutique"
  - ES: "Bienvenido a Hotel Tibisay Boutique"
  - "Cormorant" peso 700, 26px en móvil / 38px en desktop, color `#F1EEEA`, text-align center, line-height 1.2.
- **Subtítulo:**
  - EN: "Everything you need to make the most of your stay, right here."
  - ES: "Todo lo que necesitas para aprovechar tu estadía, aquí."
  - "Inter" peso 400, 14px, color `#F1EEEA` al 65%, text-align center, margin-top 10px, max-width 300px centrado.
- **Toggle de idioma (debajo del subtítulo, margin-top 20px):** Dos botones pill lado a lado con gap 8px, centrados. Cada botón: padding 8px 20px, border-radius 999px, "Inter" peso 500, 13px. Activo: fondo `#F6D99F`, texto `#040403`. Inactivo: fondo `rgba(26, 21, 17, 0.6)` + backdrop-filter blur(12px), borde 1px `#C4A468` al 20%, texto `#F1EEEA`. Transición entre estados: 0.2s ease. Al cambiar idioma, todo el contenido de la página hace cross-fade (opacity, 0.2s).

**Animación:** La foto está visible inmediatamente (el ken burns de scale 1.05→1.0 arranca al cargar). El logo hace fade-in 0.6s. El título hace fade-in + translateY 20px→0 con delay 0.2s, duración 0.7s, ease-out. Subtítulo con delay 0.4s. Toggle con delay 0.5s.

**Responsive:** En desktop (≥1024px), height baja a 50vh, título a 38px, max-width del contenido 500px centrado.

---

### 2) FLOATING SCROLL BUTTON

**Layout:** Botón fijo (position fixed), bottom 28px, centrado horizontalmente (left 50%, transform translateX -50%). Z-index alto (50), por encima de todo excepto modals.

**Diseño:** Pill shape (border-radius 999px). Fondo glass: `rgba(26, 21, 17, 0.7)` + `backdrop-filter: blur(16px)` + borde 1px `#C4A468` al 20%. Padding: 10px 24px. Sombra: `0 4px 20px rgba(0,0,0,0.4)`.

**Contenido:**
- Ícono lucide-react `ChevronDown`, 16px, color `#F6D99F`, a la izquierda.
- Texto a la derecha del ícono:
  - EN: "More services"
  - ES: "Más servicios"
  - "Inter" peso 500, 13px, color `#F1EEEA`.

**Animación:**
- El ícono ChevronDown hace un bounce sutil en loop: translateY 0→4px→0 cada 2s, ease-in-out.
- El botón completo aparece con fade-in + translateY 20px→0 después de 1.5s (delay, para que el hero se asiente primero).
- **El botón desaparece (fade-out + translateY →20px) cuando el usuario hace scroll más allá del hero** (usa IntersectionObserver: cuando el hero sale del viewport, oculta el botón). También desaparece si un modal está abierto.
- Al tocar el botón: smooth scroll hacia la sección "Included Services".

**Responsive:** Igual en móvil y desktop.

---

### 3) INCLUDED SERVICES

**Layout:** Padding horizontal 20px, padding vertical 40px. Max-width 400px centrado.

**Encabezado:**
- EN: "Included in Your Stay"
- ES: "Incluido en tu estadía"
- "Cormorant" peso 600, 22px, color `#C4A468`. Centrado. Margin-bottom 24px.

**Grid:** 2 columnas × 2 filas, gap 14px.

**Cada Service Card (diseño glass con profundidad):**
- Fondo glass: `rgba(26, 21, 17, 0.75)` + `backdrop-filter: blur(24px)`.
- Border-radius: 20px.
- Borde: 1px solid `rgba(196, 164, 104, 0.10)`.
- Box-shadow: `0 4px 24px rgba(0,0,0,0.35), 0 1px 6px rgba(0,0,0,0.2)`.
- Padding: 28px vertical, 16px horizontal.
- Centrado: ícono arriba + nombre debajo.
- Ícono: lucide-react, tamaño 30px, stroke-width 1.5, color `#C4A468`.
- Nombre: "Inter" peso 500, 13px, color `#F1EEEA`, margin-top 10px.
- **Interacción táctil (Framer Motion):** al presionar (whileTap), scale 0.95 con spring `{ stiffness: 300, damping: 20 }`. Se siente como un botón nativo de iOS. Al soltar, abre el modal.

**Los 4 servicios:**
1. Gym → ícono `Dumbbell` → EN: "Gym" / ES: "Gimnasio"
2. Restaurant → ícono `UtensilsCrossed` → EN: "Restaurant" / ES: "Restaurante"
3. Open Bar → ícono `Wine` → EN: "Open Bar" / ES: "Barra Libre"
4. Beach Club → ícono `Umbrella` → EN: "Beach Club" / ES: "Beach Club"

**Animación de entrada:** Los 4 cards entran con fade-in + scale(0.9→1) + translateY(12px→0), con stagger 0.08s entre cada uno. Usa spring `{ stiffness: 200, damping: 25 }` (no ease-out lineal — la spring le da el rebote orgánico). Una sola vez (once: true).

**Responsive:** En desktop (≥768px), max-width 560px. El grid puede pasar a 4 columnas en una fila si se ve bien, sino mantener 2×2 más grande.

---

### MODALS DE SERVICIO (componente ServiceModal)

**Trigger:** Al tocar un Service Card.

**Overlay:** Fondo `#040403` al 70% + `backdrop-filter: blur(8px)` cubriendo toda la pantalla. Tocar el overlay cierra el modal.

**Panel del modal:**
- En móvil: bottom-sheet. Position fixed en la parte inferior. Width 100%. Border-radius: **28px arriba-izquierda y arriba-derecha**, 0 abajo. Max-height 85vh. Overflow-y auto.
- En desktop (≥768px): centrado verticalmente. Max-width 440px. Border-radius 28px completo.
- Fondo glass: `rgba(26, 21, 17, 0.85)` + `backdrop-filter: blur(32px)`.
- Borde: 1px solid `rgba(196, 164, 104, 0.08)`.
- Box-shadow: `0 -8px 40px rgba(0,0,0,0.5)`.

**Contenido del modal (de arriba a abajo):**

- **Handle de arrastre (solo en móvil):** Un pequeño rectángulo centrado arriba del panel, 40px de ancho × 4px de alto, border-radius 2px, color `#F1EEEA` al 20%. Margin-top 12px. Indica que se puede deslizar para cerrar (visualmente; el cierre real es con el botón X o tap en overlay).
- **Botón cerrar:** Ícono `X` de lucide-react, 22px, color `#F1EEEA` al 50%, position absolute top 16px right 20px. Al hover/tap: opacity 100%.
- **Foto del servicio:** La imagen adjunta correspondiente. Width 100% menos padding (calc(100% - 32px), centrada). Aspect-ratio 16/9. Object-fit cover. **Border-radius 16px**. Margin: 20px 16px 0 16px. Box-shadow sutil: `0 2px 12px rgba(0,0,0,0.3)`.
- **Nombre del servicio:** "Cormorant" peso 700, 24px, color `#F1EEEA`. Padding: 20px 24px 0 24px.
- **Descripción:** "Inter" peso 400, 14px, color `#F1EEEA` al 65%. Margin-top 6px. Padding horizontal 24px.
- **Bloque de horarios:** Margin-top 16px. Padding horizontal 24px. Fondo `rgba(4, 4, 3, 0.4)`, border-radius 14px, padding 16px, margin horizontal 16px (caja dentro de caja para dar profundidad). Cada línea de horario: "Inter" peso 500, 14px, color `#F1EEEA`. Line-height 1.8 para espaciar las líneas.
- **Nota al pie (si existe):** "Inter" peso 400, 13px, color `#C4A468`. Padding: 12px 24px 28px 24px.

**Animación del modal (Framer Motion AnimatePresence):**
- Overlay: fade-in opacity 0→0.7, duración 0.25s.
- Panel: translateY("100%")→0, con spring `{ stiffness: 280, damping: 30 }` (se siente orgánico, no lineal). Alternativa: `type: "spring", bounce: 0.15`.
- Contenido interior: fade-in + translateY(10px→0), stagger 0.04s entre cada bloque (handle, foto, título, descripción, horarios, nota).
- Cierre: panel translateY 0→"100%" (0.2s ease-in), overlay fade-out 0.2s.

**Contenido de cada modal (bilingüe):**

**GYM (Imagen 3):**
- EN: Título: "Gym" / Desc: "Stay active during your getaway." / Horarios: "Monday – Friday: 5:10 AM – 10:30 PM" · "Saturday: 6:00 AM – 8:00 PM" · "Sunday: 8:00 AM – 1:00 PM" / Nota: "Located on the ground floor. No reservation needed."
- ES: Título: "Gimnasio" / Desc: "Mantente activo durante tu escapada." / Horarios: "Lunes – Viernes: 5:10 AM – 10:30 PM" · "Sábado: 6:00 AM – 8:00 PM" · "Domingo: 8:00 AM – 1:00 PM" / Nota: "Ubicado en planta baja. Sin reservación."

**RESTAURANT (Imagen 4):**
- EN: Título: "Main Restaurant" / Desc: "From breakfast to dinner — every meal is on us." / Horarios: "Breakfast: 7:00 AM – 10:00 AM" · "Lunch: 12:00 PM – 2:00 PM" · "Snacks: 3:00 PM – 6:00 PM" · "Dinner: 7:00 PM – 10:00 PM" / Nota: "Snacks available at Mar y Tierra, the Beach Club, or the Main Restaurant."
- ES: Título: "Restaurante Principal" / Desc: "Del desayuno a la cena — cada comida corre por nuestra cuenta." / Horarios: "Desayuno: 7:00 AM – 10:00 AM" · "Almuerzo: 12:00 PM – 2:00 PM" · "Snacks: 3:00 PM – 6:00 PM" · "Cena: 7:00 PM – 10:00 PM" / Nota: "Snacks disponibles en Mar y Tierra, el Beach Club o el Restaurante Principal."

**OPEN BAR (Imagen 5):**
- EN: Título: "Open Bar" / Desc: "Cocktails, wines, spirits &amp; soft drinks — national brands included." / Horarios: "Daily: 11:00 AM – 10:00 PM"
- ES: Título: "Barra Libre" / Desc: "Cócteles, vinos, licores y bebidas sin alcohol — marcas nacionales incluidas." / Horarios: "Todos los días: 11:00 AM – 10:00 PM"

**BEACH CLUB (Imagen 6):**
- EN: Título: "Main Beach Club" / Desc: "Sun, sand &amp; everything you need to unwind." / Horarios: "Beach Club Pool: 9:00 AM – 6:00 PM" · "Hotel Pool: 9:00 AM – 6:00 PM" · "Beach Club Area: 11:00 AM – 10:00 PM" / Nota: "Lounge chairs, huts &amp; 1 hour of paddle tennis included."
- ES: Título: "Beach Club Principal" / Desc: "Sol, arena y todo lo que necesitas para relajarte." / Horarios: "Piscina Beach Club: 9:00 AM – 6:00 PM" · "Piscina del Hotel: 9:00 AM – 6:00 PM" · "Área del Beach Club: 11:00 AM – 10:00 PM" / Nota: "Camastros, palapa y 1 hora de pádel incluida."

---

### 4) TOWEL SERVICE

**Layout:** Max-width 360px centrado, margin-top 32px, padding horizontal 20px.

**Card glass (misma superficie que los service cards):**
- Fondo glass: `rgba(26, 21, 17, 0.75)` + backdrop-filter blur(24px).
- Border-radius: 20px.
- Borde: 1px solid `rgba(196, 164, 104, 0.10)`.
- Box-shadow: `0 4px 24px rgba(0,0,0,0.35), 0 1px 6px rgba(0,0,0,0.2)`.
- Padding: 24px.

**Contenido:**
- Ícono lucide-react `Waves`, 24px, color `#C4A468`, centrado arriba.
- EN: Título: "Towel Service" ("Inter" peso 600, 15px, `#F1EEEA`, centrado, margin-top 12px). Cuerpo: "Towels for the gym, pools &amp; beach are available at the front desk. Please return them to reception after use. Lost towels will incur a replacement fee." ("Inter" 400, 13px, `#F1EEEA` al 65%, centrado, margin-top 8px, line-height 1.6). Sub-texto: "Going to an external beach? Towels are available with a refundable deposit at the front desk." ("Inter" 400, 13px, `#C4A468`, centrado, margin-top 12px).
- ES: Título: "Servicio de Toallas". Cuerpo: "Las toallas para gimnasio, piscinas y playa se retiran en recepción. Por favor devuélvelas en recepción al terminar. El extravío de toallas genera un cargo por reposición." Sub-texto: "¿Vas a una playa externa? Toallas disponibles en recepción con garantía reembolsable."

**Animación:** Reveal — fade-in + translateY(16px→0) + scale(0.97→1), spring `{ stiffness: 200, damping: 25 }`, al entrar en viewport, una vez.

---

### SEPARADOR VISUAL

Entre Towel Service y Additional Services: un separador de 1px, color `#C4A468` al 25%, max-width 80px, centrado, margin vertical 36px. Anima width 0→100% al entrar en viewport (0.6s, ease-out).

---

### 5) ADDITIONAL SERVICES

**Layout:** Mismo diseño que Included Services, pero grid de 2 columnas × 1 fila (2 items). Max-width 400px centrado. Padding horizontal 20px, padding vertical 40px.

**Encabezado:**
- EN: "Additional Services"
- ES: "Servicios Adicionales"
- "Cormorant" peso 600, 22px, color `#C4A468`. Centrado. Margin-bottom 6px.

**Sub-encabezado:**
- EN: "Available at an extra cost. Ask our front desk for details."
- ES: "Disponibles con costo adicional. Consulta en recepción."
- "Inter" peso 400, 13px, `#F1EEEA` al 45%. Centrado. Margin-bottom 24px.

**Los 2 servicios (misma card glass que Included):**
1. Spa → ícono `Flower2` → EN: "Spa" / ES: "Spa"
2. Casino → ícono `Dice5` → EN: "Casino" / ES: "Casino"

**Misma animación de entrada** (fade-in + scale + spring, stagger 0.08s).

**Modal SPA (Imagen 7):**
- EN: Título: "Spa" / Desc: "Relax with a personalized treatment." / Horarios: "By appointment only." / Nota: "Book at the front desk."
- ES: Título: "Spa" / Desc: "Relájate con un tratamiento personalizado." / Horarios: "Solo con cita previa." / Nota: "Reserva en recepción."

**Modal CASINO (Imagen 8):**
- EN: Título: "Casino" / Desc: "Try your luck steps from your room." / Horarios: "Daily: 4:00 PM – 3:00 AM" / Nota: "Must be 18+ to enter."
- ES: Título: "Casino" / Desc: "Prueba tu suerte a pasos de tu habitación." / Horarios: "Todos los días: 4:00 PM – 3:00 AM" / Nota: "Entrada solo para mayores de 18 años."

---

### 6) FOOTER

**Layout:** Centrado, padding vertical 48px, padding horizontal 24px.

**Separador:** `&lt;GoldLine /&gt;` arriba del footer.

**Copy:**
- "Hotel Tibisay Boutique · Isla de Margarita" — "Cormorant" peso 600, 16px, color `#C4A468`, centrado.
- EN: "For any request, dial 0 from your room or visit our front desk." — "Inter" 400, 13px, `#F1EEEA` al 55%, margin-top 8px.
- ES: "Para cualquier solicitud, marca 0 desde tu habitación o acude a recepción."
- EN: "We're here to make your stay unforgettable." — "Inter" 400, 13px, `#F1EEEA` al 35%, margin-top 4px.
- ES: "Estamos aquí para que tu estadía sea inolvidable."

**Animación:** Fade-in simple, 0.5s, al entrar en viewport.

---

## COMPONENTES REUTILIZABLES

- **Reveal** — wrapper con Framer Motion `whileInView`. Hace fade-in + translateY(16px→0) + scale(0.97→1) con spring `{ stiffness: 200, damping: 25 }`. Prop `delay` para stagger. Prop `once: true`. Solo usa transform y opacity.
- **GoldLine** — div de 1px, color `#C4A468` al 25%, max-width 80px, centrado. Anima width 0→100% al entrar en viewport (0.6s ease-out, una vez).
- **ServiceCard** — card glass con ícono lucide-react + label. Props: icon, label, onClick. Superficie glass con profundidad (shadow + blur + borde). whileTap: scale 0.95 con spring. Border-radius 20px.
- **ServiceModal** — bottom-sheet con AnimatePresence. Props: isOpen, onClose, image, title, description, schedule (string[]), note (string?). Handle de arrastre arriba, foto con border-radius 16px, horarios en sub-card oscura, nota en dorado. Spring animation para entrada, ease-in para salida.
- **FloatingScrollButton** — botón pill fijo en bottom 28px. Glass background. ChevronDown con bounce loop. Desaparece al pasar el hero (IntersectionObserver). Desaparece cuando un modal está abierto. Smooth scroll al tocar.
- **LanguageToggle** — dos botones pill (EN/ES) que controlan `LanguageContext`. Activo: fondo `#F6D99F` texto `#040403`. Inactivo: glass + borde `#C4A468`. Cross-fade del contenido al cambiar (0.2s).

---

## RESPONSIVE

- **≤640px (móvil — caso principal):** Diseño base completo. Hero 80vh. Grids 2 columnas. Modals bottom-sheet con border-radius solo arriba. Padding horizontal 20px.
- **≤768px (tablet):** Igual que móvil, max-width 480px para contenido.
- **≥1024px (desktop):** Hero 50vh. Max-width contenido 560px centrado. Modals centrados verticalmente con border-radius 28px completo y max-width 440px. Grid de Included puede ser 4 columnas.
- **Animaciones:** Se mantienen todas (son ligeras). Con `prefers-reduced-motion: reduce`, se desactivan todas las transiciones y springs — los elementos aparecen sin animación.

---

## ACCESIBILIDAD Y PERFORMANCE

- `prefers-reduced-motion: reduce`: desactiva el ken burns del hero, el bounce del botón flotante, las springs de los cards, los slides de los modals. Todo aparece inmediatamente.
- Contraste WCAG AA: `#F1EEEA` sobre `#040403` = ratio &gt;15:1. `#C4A468` sobre `#040403` = ratio ~6:1. Ambos pasan.
- Imágenes de modals: loading="lazy".
- Grano/noise: pointer-events none.
- Modal: focus trap activo (foco dentro del modal mientras está abierto). Cierre con tecla Escape. Botón cierre con aria-label="Close".
- Botón flotante: aria-label EN "Scroll to services" / ES "Ir a servicios".
- Todas las animaciones usan solo transform y opacity (GPU-friendly).

---

## RECAP DE COMPORTAMIENTO

Al escanear el QR, la página se abre con un hero de pantalla casi completa que muestra una foto del Hotel Tibisay Boutique — la imagen tiene un zoom sutil que le da vida. El logo aparece con un fade, seguido del título de bienvenida y un toggle bilingüe EN/ES, todo flotando sobre un gradiente oscuro que protege la legibilidad. Un botón flotante con forma de pastilla aparece abajo con un chevron que rebota suavemente invitando a descubrir más. Al deslizar o tocar el botón, se navega a la sección de servicios incluidos. Cuatro cards de vidrio esmerilado (glassmorphism) con íconos dorados entran en cascada con un efecto elástico. Al tocar cualquier card, un panel sube desde abajo como un bottom-sheet de app nativa: la foto del servicio con esquinas redondeadas, el nombre, los horarios en una sub-card oscura, y una nota en dorado. El contenido se revela progresivamente. Al cerrar, el panel se desliza hacia abajo. Después de los servicios incluidos, una nota informativa sobre toallas flota con el mismo estilo glass. Una línea dorada fina se dibuja como separador. Dos cards más (Spa y Casino) ofrecen los servicios adicionales con la misma interacción. El footer cierra con el nombre del hotel y cómo contactar recepción. Todo se siente táctil, orgánico, y premium — como una app de lujo diseñada exclusivamente para los huéspedes.

---

**Ábrelo en claude.ai/design → pega este Prompt Maestro → adjunta las 8 imágenes en este orden (1-Logo, 2-Hero hotel, 3-Gym, 4-Restaurant, 5-Open Bar, 6-Beach Club, 7-Spa, 8-Casino) → genera. Itera sección por sección si algo no sale perfecto al primer intento.**
</pasted_text>

<!-- The user explicitly selected the following skills for this project, as attachments to their message. These are not optional context — they define how you work. Use them. -->
<attached-skill name="Design System (design system)">
[Design System] This project uses the **Design System** design system. This is a binding choice for visual style — every visual must follow it. Don't invent colors, type, spacing, or components not grounded here.

Scope: the design system is a visual style reference only. Its guide may describe example products, brands, or people that are unrelated to the user and unrelated to the subject of this conversation. Never treat anything in the design system as a fact about the user, their work, or the topic they asked about.

    Explore it to find what you need:
    - Always copy out the fonts and colors you need
    - For prototypes and designs, always copy out any relevant components
    - If the design system contains existing mocks of products, and you were asked to design or prototype something similar, copy and fork those mocks to start your design. This helps you make high-quality designs.

    Explore it quickly to find relevant UI kits (e.g. mocks of existing products you can copy and fork)

Full system at `/projects/f314bb79-73e6-4a8f-8005-cad54159e44d/`. Before producing any visuals, explore it: call `list_files("/projects/f314bb79-73e6-4a8f-8005-cad54159e44d/")` to see the structure, then `read_file` the README/base.md or whatever index file it has. Don't guess at the design system's contents.

CSS tokens: the guide may describe tokens in prose, but the exact `--*` names are defined in the design system's stylesheet(s). Before writing any `var(--*)`, look up the real name in the design system's `.css` files (`list_files` + `read_file` under `/projects/f314bb79-73e6-4a8f-8005-cad54159e44d/`). Never guess a token name — an unresolved `var()` silently falls back to the browser default.

For assets and UI kits beyond the guide: `read_file("/projects/f314bb79-73e6-4a8f-8005-cad54159e44d/<path>")` and `copy_files` to bring them into the current project.
</attached-skill>

## Assistant

_[tool: list_files]_

_[tool: dc_write]_

_[tool: ready_for_verification]_

_[tool: snip]_

V2 complete. Key upgrades from v1:

- **Hero section** — 80vh with the hotel photo, Ken Burns zoom, gradient overlay, content stacked at bottom
- **Glassmorphism** — all cards/modals use `backdrop-filter: blur(24px)` + semi-transparent backgrounds
- **Ultra-rounded** — 20px cards, 28px modals, pill buttons (999px)
- **Floating scroll button** — pill with bouncing chevron, auto-hides when hero leaves viewport or modal opens
- **Bottom-sheet modal** — drag handle bar, photo with rounded corners, schedule in dark sub-card, spring-like transitions
- **Deeper shadows** — multi-layer box-shadows on all elevated elements

Toggle EN/ES, Escape to close modals, `prefers-reduced-motion` support all carried over.

## User

<pasted_text name="Pasted text (322 lines)">
# PROMPT MAESTRO v2 — Hotel Tibisay Boutique · Guía de Servicios

Construye una landing page responsive, mobile-first, para "Hotel Tibisay Boutique" (hotelería 5 estrellas all-inclusive, Isla de Margarita, Venezuela). Público: huéspedes hospedados que escanean un QR al check-in — la página se abre en el celular. Objetivo único: informar sobre los servicios disponibles y sus horarios. Idioma: bilingüe (inglés principal, español secundario) con toggle de idioma.

---

## DIRECCIÓN VISUAL — MOBILE-NATIVE CON PROFUNDIDAD

El diseño debe sentirse como una **app nativa premium**, no como un sitio web convencional. Características clave del estilo:

- **Bordes ultra-redondeados** en todo: cards con border-radius 20–24px, modals con border-radius 28px, botones con border-radius completo (pill / 999px). Nada cuadrado.
- **Profundidad con sombras suaves**: las cards y modals "flotan" sobre el fondo con box-shadow suaves multi-capa (no sombras planas). Ejemplo: `box-shadow: 0 4px 24px rgba(0,0,0,0.3), 0 1px 4px rgba(0,0,0,0.2)`.
- **Glassmorphism cálido**: fondo de cards/modals con `backdrop-filter: blur(24px)` + fondo `#1A1511` al 75% de opacidad + borde 1px `#C4A468` al 10%. Deja entrever el fondo oscuro con textura.
- **Elementos flotantes**: botón de scroll flotante fijo, cards que se sienten elevadas, contenido que respira con padding generoso.
- **Sensación orgánica**: transiciones con springs de Framer Motion (no ease lineal), escalas sutiles al interactuar, todo se siente táctil.

---

## STACK

React + TypeScript + Tailwind CSS. Iconos con lucide-react. Animaciones con Framer Motion (whileInView, AnimatePresence para modals, springs para interacciones táctiles). Sin GSAP, sin video, sin 3D. Mobile-first.

---

## ESTILOS GLOBALES

- Fondo base: `#040403` en html, body, #root.
- Superficie glass (cards, modals, towel block): `#1A1511` al 75% de opacidad + `backdrop-filter: blur(24px)` + borde 1px solid `rgba(196, 164, 104, 0.10)`.
- Acento dorado primario: `#F6D99F` (highlights, toggle activo, botón flotante, ícono activo).
- Acento dorado secundario: `#C4A468` (íconos de servicio, bordes sutiles, textos de acento, líneas decorativas).
- Texto principal: `#F1EEEA`.
- Texto muted: `#F1EEEA` al 60%.
- Tipografía display: **"Cormorant"** de Google Fonts, peso 600–700, tracking 0.03em.
- Tipografía cuerpo: **"Inter"** de Google Fonts, peso 400–500.
- Reset global: box-sizing border-box, margin 0, padding 0, scroll-behavior smooth.
- Sombra estándar para cards (flotación dramática): `box-shadow: 0 8px 32px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3), 0 0 1px rgba(196, 164, 104, 0.05)`.
- Glow dorado en borde superior de cards: pseudo-elemento ::before con `linear-gradient(90deg, transparent, #C4A468 30%, #F6D99F 50%, #C4A468 70%, transparent)`, opacity 0.6, height 1px, posicionado en el top de la card. Es el detalle clave que da el look premium flotante.
- Sombra para modals: `box-shadow: 0 -8px 40px rgba(0,0,0,0.5)`.
- Capa de grano/noise: pseudo-elemento ::after fijo en toda la página con imagen de ruido SVG en base64, opacity 4%, pointer-events none. Textura premium.
- Border-radius global mínimo: 20px para cards, 28px para modals, 999px para botones (pill shape).

---

## ASSETS ADJUNTOS (los adjunto a Claude Design en este orden)

- Imagen 1 = Logo del hotel (PNG con fondo transparente) → Header.
- Imagen 2 = Foto panorámica del hotel (hero-hotel.jpg) → Hero, fondo.
- Imagen 3 = Foto del Gym → Modal Gym.
- Imagen 4 = Foto del Restaurante → Modal Restaurant.
- Imagen 5 = Foto del Open Bar → Modal Open Bar.
- Imagen 6 = Foto del Beach Club → Modal Beach Club.
- Imagen 7 = Foto del Spa → Modal Spa.
- Imagen 8 = Foto del Casino → Modal Casino.

---

## ORDEN DE SECCIONES

1. Hero (foto del hotel + overlay + logo + título + toggle de idioma)
2. Floating Scroll Button (fijo, flotante)
3. Included Services (grid de 4 cards glass con íconos)
4. Towel Service (bloque informativo glass)
5. Additional Services (grid de 2 cards glass)
6. Footer

---

## DETALLE POR SECCIÓN

### 1) HERO

**Layout:** Sección full-width, height 80vh en móvil / 50vh en desktop. Position relative. Overflow hidden. Border-radius 0 (full bleed arriba) con border-radius 28px solo en las esquinas inferiores (como una tarjeta que baja desde arriba).

**Fondo:** Imagen 2 adjunta (foto del hotel). Position absolute, width 100%, height 100%, object-fit cover. Un efecto de zoom sutil: la imagen empieza en scale 1.05 y anima a scale 1.0 en 8s con ease-out al cargar (ken burns suave, da vida sin ser agresivo).

**Overlay:** Div absoluto encima de la imagen. Gradiente de abajo hacia arriba: `#040403` al 90% en la parte inferior (bottom 0%) → `#040403` al 20% en el centro (50%) → transparente arriba (100%). Esto crea una transición suave donde la foto es visible arriba y el contenido se lee perfecto abajo.

**Contenido (apilado en la parte inferior, padding 32px, z-index sobre overlay):**

- **Logo:** Imagen 1 adjunta, max-width 80px, centrado, margin-bottom 16px.
- **Título (debajo del logo):**
  - EN: "Welcome to Hotel Tibisay Boutique"
  - ES: "Bienvenido a Hotel Tibisay Boutique"
  - "Cormorant" peso 700, 26px en móvil / 38px en desktop, color `#F1EEEA`, text-align center, line-height 1.2.
- **Subtítulo:**
  - EN: "Everything you need to make the most of your stay, right here."
  - ES: "Todo lo que necesitas para aprovechar tu estadía, aquí."
  - "Inter" peso 400, 14px, color `#F1EEEA` al 65%, text-align center, margin-top 10px, max-width 300px centrado.
- **Toggle de idioma (debajo del subtítulo, margin-top 20px):** Dos botones pill lado a lado con gap 8px, centrados. Cada botón: padding 8px 20px, border-radius 999px, "Inter" peso 500, 13px. Activo: fondo `#F6D99F`, texto `#040403`. Inactivo: fondo `rgba(26, 21, 17, 0.6)` + backdrop-filter blur(12px), borde 1px `#C4A468` al 20%, texto `#F1EEEA`. Transición entre estados: 0.2s ease. Al cambiar idioma, todo el contenido de la página hace cross-fade (opacity, 0.2s).

**Animación:** La foto está visible inmediatamente (el ken burns de scale 1.05→1.0 arranca al cargar). El logo hace fade-in 0.6s. El título hace fade-in + translateY 20px→0 con delay 0.2s, duración 0.7s, ease-out. Subtítulo con delay 0.4s. Toggle con delay 0.5s.

**Responsive:** En desktop (≥1024px), height baja a 50vh, título a 38px, max-width del contenido 500px centrado.

---

### 2) FLOATING SCROLL BUTTON

**Layout:** Botón fijo (position fixed), bottom 28px, centrado horizontalmente (left 50%, transform translateX -50%). Z-index alto (50), por encima de todo excepto modals.

**Diseño:** Pill shape (border-radius 999px). Fondo glass: `rgba(26, 21, 17, 0.7)` + `backdrop-filter: blur(16px)` + borde 1px `#C4A468` al 20%. Padding: 10px 24px. Sombra: `0 4px 20px rgba(0,0,0,0.4)`.

**Contenido:**
- Ícono lucide-react `ChevronDown`, 16px, color `#F6D99F`, a la izquierda.
- Texto a la derecha del ícono:
  - EN: "More services"
  - ES: "Más servicios"
  - "Inter" peso 500, 13px, color `#F1EEEA`.

**Animación:**
- El ícono ChevronDown hace un bounce sutil en loop: translateY 0→4px→0 cada 2s, ease-in-out.
- El botón completo aparece con fade-in + translateY 20px→0 después de 1.5s (delay, para que el hero se asiente primero).
- **El botón desaparece (fade-out + translateY →20px) cuando el usuario hace scroll más allá del hero** (usa IntersectionObserver: cuando el hero sale del viewport, oculta el botón). También desaparece si un modal está abierto.
- Al tocar el botón: smooth scroll hacia la sección "Included Services".

**Responsive:** Igual en móvil y desktop.

---

### 3) INCLUDED SERVICES

**Layout:** Padding horizontal 20px, padding vertical 40px. Max-width 400px centrado.

**Encabezado:**
- EN: "Included in Your Stay"
- ES: "Incluido en tu estadía"
- "Cormorant" peso 600, 22px, color `#C4A468`. Centrado. Margin-bottom 6px.

**Sub-texto de instrucción:**
- EN: "Tap any service to see the schedule"
- ES: "Toca un servicio para ver el horario"
- "Inter" peso 400, 13px, color `#F1EEEA` al 35%. Centrado. Margin-bottom 24px.

**Grid:** 2 columnas × 2 filas, gap 14px.

**Cada Service Card (diseño glass flotante con glow dorado — estilo referencia de cards premium):**
- Fondo glass: `rgba(26, 21, 17, 0.80)` + `backdrop-filter: blur(24px)`.
- Border-radius: 20px.
- Borde: 1px solid `rgba(196, 164, 104, 0.12)`.
- **Glow dorado en el borde superior:** Pseudo-elemento ::before, position absolute, top 0, left 10%, right 10%, height 1px, background `linear-gradient(90deg, transparent, #C4A468 30%, #F6D99F 50%, #C4A468 70%, transparent)`, opacity 0.6, border-radius 1px, filter `blur(1px)`. Esto crea una línea luminosa dorada sutil en el borde superior de cada card — es el detalle que hace que se vean premium y flotantes.
- **Sombra dramática multi-capa (clave para la flotación):** `box-shadow: 0 8px 32px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3), 0 0px 1px rgba(196, 164, 104, 0.05)`. La última capa es un ambient glow dorado casi imperceptible.
- **Reflejo sutil (opcional pero premium):** Un pseudo-elemento ::after debajo de la card (translateY 100%, scaleY -1, opacity 0.04, filter blur 4px) que replica el gradiente del fondo de la card como un reflejo de piso. Si complica demasiado, omitirlo — el glow superior + sombras ya hacen el trabajo.
- Padding: 28px vertical, 16px horizontal.
- Centrado: ícono arriba + nombre debajo.
- Ícono: lucide-react, tamaño 30px, stroke-width 1.5, color `#C4A468`.
- Nombre: "Inter" peso 500, 13px, color `#F1EEEA`, margin-top 10px.
- **Interacción táctil (Framer Motion):** al presionar (whileTap), scale 0.95 con spring `{ stiffness: 300, damping: 20 }`. Al soltar, abre el modal. Al presionar, el glow dorado superior sube a opacity 1.0 brevemente (feedback visual de que se tocó).

**Los 4 servicios:**
1. Gym → ícono `Dumbbell` → EN: "Gym" / ES: "Gimnasio"
2. Restaurant → ícono `UtensilsCrossed` → EN: "Restaurant" / ES: "Restaurante"
3. Open Bar → ícono `Wine` → EN: "Open Bar" / ES: "Barra Libre"
4. Beach Club → ícono `Umbrella` → EN: "Beach Club" / ES: "Beach Club"

**Animación de entrada:** Los 4 cards entran con fade-in + scale(0.9→1) + translateY(12px→0), con stagger 0.08s entre cada uno. Usa spring `{ stiffness: 200, damping: 25 }` (no ease-out lineal — la spring le da el rebote orgánico). Una sola vez (once: true).

**Responsive:** En desktop (≥768px), max-width 560px. El grid puede pasar a 4 columnas en una fila si se ve bien, sino mantener 2×2 más grande.

---

### MODALS DE SERVICIO (componente ServiceModal)

**Trigger:** Al tocar un Service Card.

**Overlay:** Fondo `#040403` al 70% + `backdrop-filter: blur(8px)` cubriendo toda la pantalla. Tocar el overlay cierra el modal.

**Panel del modal:**
- En móvil: bottom-sheet. Position fixed en la parte inferior. Width 100%. Border-radius: **28px arriba-izquierda y arriba-derecha**, 0 abajo. Max-height 85vh. Overflow-y auto.
- En desktop (≥768px): centrado verticalmente. Max-width 440px. Border-radius 28px completo.
- Fondo glass: `rgba(26, 21, 17, 0.85)` + `backdrop-filter: blur(32px)`.
- Borde: 1px solid `rgba(196, 164, 104, 0.08)`.
- Box-shadow: `0 -8px 40px rgba(0,0,0,0.5)`.

**Contenido del modal (de arriba a abajo):**

- **Handle de arrastre (solo en móvil):** Un pequeño rectángulo centrado arriba del panel, 40px de ancho × 4px de alto, border-radius 2px, color `#F1EEEA` al 20%. Margin-top 12px. Indica que se puede deslizar para cerrar (visualmente; el cierre real es con el botón X o tap en overlay).
- **Botón cerrar:** Ícono `X` de lucide-react, 22px, color `#F1EEEA` al 50%, position absolute top 16px right 20px. Al hover/tap: opacity 100%.
- **Foto del servicio:** La imagen adjunta correspondiente. Width 100% menos padding (calc(100% - 32px), centrada). Aspect-ratio 16/9. Object-fit cover. **Border-radius 16px**. Margin: 20px 16px 0 16px. Box-shadow sutil: `0 2px 12px rgba(0,0,0,0.3)`.
- **Nombre del servicio:** "Cormorant" peso 700, 24px, color `#F1EEEA`. Padding: 20px 24px 0 24px.
- **Descripción:** "Inter" peso 400, 14px, color `#F1EEEA` al 65%. Margin-top 6px. Padding horizontal 24px.
- **Bloque de horarios:** Margin-top 16px. Padding horizontal 24px. Fondo `rgba(4, 4, 3, 0.4)`, border-radius 14px, padding 16px, margin horizontal 16px (caja dentro de caja para dar profundidad). Cada línea de horario: "Inter" peso 500, 14px, color `#F1EEEA`. Line-height 1.8 para espaciar las líneas.
- **Nota al pie (si existe):** "Inter" peso 400, 13px, color `#C4A468`. Padding: 12px 24px 28px 24px.

**Animación del modal (Framer Motion AnimatePresence):**
- Overlay: fade-in opacity 0→0.7, duración 0.25s.
- Panel: translateY("100%")→0, con spring `{ stiffness: 280, damping: 30 }` (se siente orgánico, no lineal). Alternativa: `type: "spring", bounce: 0.15`.
- Contenido interior: fade-in + translateY(10px→0), stagger 0.04s entre cada bloque (handle, foto, título, descripción, horarios, nota).
- Cierre: panel translateY 0→"100%" (0.2s ease-in), overlay fade-out 0.2s.

**Contenido de cada modal (bilingüe):**

**GYM (Imagen 3):**
- EN: Título: "Gym" / Desc: "Stay active during your getaway." / Horarios: "Monday – Friday: 5:10 AM – 10:30 PM" · "Saturday: 6:00 AM – 8:00 PM" · "Sunday: 8:00 AM – 1:00 PM" / Nota: "Located on the ground floor. No reservation needed."
- ES: Título: "Gimnasio" / Desc: "Mantente activo durante tu escapada." / Horarios: "Lunes – Viernes: 5:10 AM – 10:30 PM" · "Sábado: 6:00 AM – 8:00 PM" · "Domingo: 8:00 AM – 1:00 PM" / Nota: "Ubicado en planta baja. Sin reservación."

**RESTAURANT (Imagen 4):**
- EN: Título: "Main Restaurant" / Desc: "From breakfast to dinner — every meal is on us." / Horarios: "Breakfast: 7:00 AM – 10:00 AM" · "Lunch: 12:00 PM – 2:00 PM" · "Snacks: 3:00 PM – 6:00 PM" · "Dinner: 7:00 PM – 10:00 PM" / Nota: "Snacks available at Mar y Tierra, the Beach Club, or the Main Restaurant."
- ES: Título: "Restaurante Principal" / Desc: "Del desayuno a la cena — cada comida corre por nuestra cuenta." / Horarios: "Desayuno: 7:00 AM – 10:00 AM" · "Almuerzo: 12:00 PM – 2:00 PM" · "Snacks: 3:00 PM – 6:00 PM" · "Cena: 7:00 PM – 10:00 PM" / Nota: "Snacks disponibles en Mar y Tierra, el Beach Club o el Restaurante Principal."

**OPEN BAR (Imagen 5):**
- EN: Título: "Open Bar" / Desc: "Cocktails, wines, spirits &amp; soft drinks — national brands included." / Horarios: "Daily: 11:00 AM – 10:00 PM"
- ES: Título: "Barra Libre" / Desc: "Cócteles, vinos, licores y bebidas sin alcohol — marcas nacionales incluidas." / Horarios: "Todos los días: 11:00 AM – 10:00 PM"

**BEACH CLUB (Imagen 6):**
- EN: Título: "Main Beach Club" / Desc: "Sun, sand &amp; everything you need to unwind." / Horarios: "Beach Club Pool: 9:00 AM – 6:00 PM" · "Hotel Pool: 9:00 AM – 6:00 PM" · "Beach Club Area: 11:00 AM – 10:00 PM" / Nota: "Lounge chairs, huts &amp; 1 hour of paddle tennis included."
- ES: Título: "Beach Club Principal" / Desc: "Sol, arena y todo lo que necesitas para relajarte." / Horarios: "Piscina Beach Club: 9:00 AM – 6:00 PM" · "Piscina del Hotel: 9:00 AM – 6:00 PM" · "Área del Beach Club: 11:00 AM – 10:00 PM" / Nota: "Camastros, palapa y 1 hora de pádel incluida."

---

### 4) TOWEL SERVICE

**Layout:** Max-width 360px centrado, margin-top 32px, padding horizontal 20px.

**Card glass flotante (mismo estilo que service cards — con glow dorado en borde superior):**
- Fondo glass: `rgba(26, 21, 17, 0.80)` + backdrop-filter blur(24px).
- Border-radius: 20px.
- Borde: 1px solid `rgba(196, 164, 104, 0.12)`.
- Glow dorado superior: mismo pseudo-elemento ::before que las service cards (gradient dorado, opacity 0.6, height 1px).
- Box-shadow: `0 8px 32px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)`.
- Padding: 24px.

**Contenido:**
- Ícono lucide-react `Waves`, 24px, color `#C4A468`, centrado arriba.
- EN: Título: "Towel Service" ("Inter" peso 600, 15px, `#F1EEEA`, centrado, margin-top 12px). Cuerpo: "Towels for the gym, pools &amp; beach are available at the front desk. Please return them to reception after use. Lost towels will incur a replacement fee." ("Inter" 400, 13px, `#F1EEEA` al 65%, centrado, margin-top 8px, line-height 1.6). Sub-texto: "Going to an external beach? Towels are available with a refundable deposit at the front desk." ("Inter" 400, 13px, `#C4A468`, centrado, margin-top 12px).
- ES: Título: "Servicio de Toallas". Cuerpo: "Las toallas para gimnasio, piscinas y playa se retiran en recepción. Por favor devuélvelas en recepción al terminar. El extravío de toallas genera un cargo por reposición." Sub-texto: "¿Vas a una playa externa? Toallas disponibles en recepción con garantía reembolsable."

**Animación:** Reveal — fade-in + translateY(16px→0) + scale(0.97→1), spring `{ stiffness: 200, damping: 25 }`, al entrar en viewport, una vez.

---

### SEPARADOR VISUAL

Entre Towel Service y Additional Services: un separador de 1px, color `#C4A468` al 25%, max-width 80px, centrado, margin vertical 36px. Anima width 0→100% al entrar en viewport (0.6s, ease-out).

---

### 5) ADDITIONAL SERVICES

**Layout:** Mismo diseño que Included Services, pero grid de 2 columnas × 1 fila (2 items). Max-width 400px centrado. Padding horizontal 20px, padding vertical 40px.

**Encabezado:**
- EN: "Additional Services"
- ES: "Servicios Adicionales"
- "Cormorant" peso 600, 22px, color `#C4A468`. Centrado. Margin-bottom 6px.

**Sub-encabezado:**
- EN: "Available at an extra cost. Tap for details."
- ES: "Con costo adicional. Toca para más detalles."
- "Inter" peso 400, 13px, `#F1EEEA` al 35%. Centrado. Margin-bottom 24px.

**Los 2 servicios (misma card glass flotante con glow dorado que Included):**
1. Spa → ícono `Flower2` → EN: "Spa" / ES: "Spa"
2. Casino → ícono `Dice5` → EN: "Casino" / ES: "Casino"

**Misma animación de entrada** (fade-in + scale + spring, stagger 0.08s).

**Modal SPA (Imagen 7):**
- EN: Título: "Spa" / Desc: "Relax with a personalized treatment." / Horarios: "By appointment only." / Nota: "Book at the front desk."
- ES: Título: "Spa" / Desc: "Relájate con un tratamiento personalizado." / Horarios: "Solo con cita previa." / Nota: "Reserva en recepción."

**Modal CASINO (Imagen 8):**
- EN: Título: "Casino" / Desc: "Try your luck steps from your room." / Horarios: "Daily: 4:00 PM – 3:00 AM" / Nota: "Must be 18+ to enter."
- ES: Título: "Casino" / Desc: "Prueba tu suerte a pasos de tu habitación." / Horarios: "Todos los días: 4:00 PM – 3:00 AM" / Nota: "Entrada solo para mayores de 18 años."

---

### 6) FOOTER

**Layout:** Centrado, padding vertical 48px, padding horizontal 24px.

**Separador:** `&lt;GoldLine /&gt;` arriba del footer.

**Copy:**
- "Hotel Tibisay Boutique · Isla de Margarita" — "Cormorant" peso 600, 16px, color `#C4A468`, centrado.
- EN: "For any request, dial 0 from your room or visit our front desk." — "Inter" 400, 13px, `#F1EEEA` al 55%, margin-top 8px.
- ES: "Para cualquier solicitud, marca 0 desde tu habitación o acude a recepción."
- EN: "We're here to make your stay unforgettable." — "Inter" 400, 13px, `#F1EEEA` al 35%, margin-top 4px.
- ES: "Estamos aquí para que tu estadía sea inolvidable."

**Animación:** Fade-in simple, 0.5s, al entrar en viewport.

---

## COMPONENTES REUTILIZABLES

- **Reveal** — wrapper con Framer Motion `whileInView`. Hace fade-in + translateY(16px→0) + scale(0.97→1) con spring `{ stiffness: 200, damping: 25 }`. Prop `delay` para stagger. Prop `once: true`. Solo usa transform y opacity.
- **GoldLine** — div de 1px, color `#C4A468` al 25%, max-width 80px, centrado. Anima width 0→100% al entrar en viewport (0.6s ease-out, una vez).
- **ServiceCard** — card glass flotante con ícono lucide-react + label. Props: icon, label, onClick. Superficie glass con profundidad (blur + sombra dramática multi-capa + borde dorado). Pseudo-elemento ::before con gradient dorado en borde superior (el detalle clave de flotación premium). whileTap: scale 0.95 con spring + glow sube a opacity 1. Border-radius 20px.
- **ServiceModal** — bottom-sheet con AnimatePresence. Props: isOpen, onClose, image, title, description, schedule (string[]), note (string?). Handle de arrastre arriba, foto con border-radius 16px, horarios en sub-card oscura, nota en dorado. Spring animation para entrada, ease-in para salida.
- **FloatingScrollButton** — botón pill fijo en bottom 28px. Glass background. ChevronDown con bounce loop. Desaparece al pasar el hero (IntersectionObserver). Desaparece cuando un modal está abierto. Smooth scroll al tocar.
- **LanguageToggle** — dos botones pill (EN/ES) que controlan `LanguageContext`. Activo: fondo `#F6D99F` texto `#040403`. Inactivo: glass + borde `#C4A468`. Cross-fade del contenido al cambiar (0.2s).

---

## RESPONSIVE

- **≤640px (móvil — caso principal):** Diseño base completo. Hero 80vh. Grids 2 columnas. Modals bottom-sheet con border-radius solo arriba. Padding horizontal 20px.
- **≤768px (tablet):** Igual que móvil, max-width 480px para contenido.
- **≥1024px (desktop):** Hero 50vh. Max-width contenido 560px centrado. Modals centrados verticalmente con border-radius 28px completo y max-width 440px. Grid de Included puede ser 4 columnas.
- **Animaciones:** Se mantienen todas (son ligeras). Con `prefers-reduced-motion: reduce`, se desactivan todas las transiciones y springs — los elementos aparecen sin animación.

---

## ACCESIBILIDAD Y PERFORMANCE

- `prefers-reduced-motion: reduce`: desactiva el ken burns del hero, el bounce del botón flotante, las springs de los cards, los slides de los modals. Todo aparece inmediatamente.
- Contraste WCAG AA: `#F1EEEA` sobre `#040403` = ratio &gt;15:1. `#C4A468` sobre `#040403` = ratio ~6:1. Ambos pasan.
- Imágenes de modals: loading="lazy".
- Grano/noise: pointer-events none.
- Modal: focus trap activo (foco dentro del modal mientras está abierto). Cierre con tecla Escape. Botón cierre con aria-label="Close".
- Botón flotante: aria-label EN "Scroll to services" / ES "Ir a servicios".
- Todas las animaciones usan solo transform y opacity (GPU-friendly).

---

## RECAP DE COMPORTAMIENTO

Al escanear el QR, la página se abre con un hero de pantalla casi completa que muestra una foto del Hotel Tibisay Boutique — la imagen tiene un zoom sutil que le da vida. El logo aparece con un fade, seguido del título de bienvenida y un toggle bilingüe EN/ES, todo flotando sobre un gradiente oscuro que protege la legibilidad. Un botón flotante con forma de pastilla aparece abajo con un chevron que rebota suavemente invitando a descubrir más. Al deslizar o tocar el botón, se navega a la sección de servicios incluidos. Un texto sutil invita a tocar para ver horarios. Cuatro cards de vidrio oscuro flotan sobre el fondo con sombras dramáticas y una línea dorada luminosa en su borde superior — el detalle que las hace sentir como objetos físicos suspendidos en el aire. Los íconos dorados de línea entran en cascada con efecto elástico. Al tocar cualquier card (el glow dorado se intensifica al presionar), un panel sube desde abajo como un bottom-sheet de app nativa: la foto del servicio con esquinas redondeadas, el nombre, los horarios en una sub-card oscura, y una nota en dorado. El contenido se revela progresivamente. Al cerrar, el panel se desliza hacia abajo. Después de los servicios incluidos, una nota informativa sobre toallas flota con el mismo estilo glass y glow. Una línea dorada fina se dibuja como separador. Dos cards más (Spa y Casino) ofrecen los servicios adicionales con la misma interacción. El footer cierra con el nombre del hotel y cómo contactar recepción. Todo se siente táctil, orgánico, y premium — como una app de lujo diseñada exclusivamente para los huéspedes.

---

**Ábrelo en claude.ai/design → pega este Prompt Maestro → adjunta las 8 imágenes en este orden (1-Logo, 2-Hero hotel, 3-Gym, 4-Restaurant, 5-Open Bar, 6-Beach Club, 7-Spa, 8-Casino) → genera. Itera sección por sección si algo no sale perfecto al primer intento.**
</pasted_text>

## Assistant

The main additions are: gold glow line on card tops, more dramatic shadows, sub-text hints, and updated copy. Let me apply those targeted changes.

_[tool: read_file]_

I'll apply the key v2 refinements: gold glow line on cards, more dramatic shadows, sub-text hints, and updated opacities.

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

Now add the gold glow `style-before` to each card and update the towel card:

_[tool: dc_html_str_replace]_

_[tool: grep]_

_[tool: read_file]_

_[tool: dc_html_str_replace]_

Now update the towel card and the additional services sub-text:

_[tool: dc_html_str_replace]_

Now update the logic class to add the new `includedHint` and updated `additionalSubtitle`:

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: snip]_

_[tool: ready_for_verification]_

V2 refinements applied:

- **Gold glow line** on the top border of every service card and towel card — subtle gradient `#C4A468` → `#F6D99F` → `#C4A468` at 60% opacity
- **Dramatic multi-layer shadows** — `0 8px 32px` + `0 2px 8px` + ambient gold glow
- **Card opacity 0.80**, border opacity 0.12 for deeper glass effect
- **"Tap any service to see the schedule"** hint under Included Services
- **"Tap for details"** updated copy under Additional Services
- **Towel card** matches the same premium floating style with glow

