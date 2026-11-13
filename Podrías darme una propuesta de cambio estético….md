# Podrías darme una propuesta de cambio estético…

**You**

Podrías darme una propuesta de cambio estético de la web, basado en el aspecto de material design de google?

**Rebost**

Te propongo una renovación con Material Design 3 que aprovecha lo que ya tienes y da un aspecto más pulido.

## Sistema de color

Define un tema con tokens de color en lugar de colores sueltos. En vez de poner el color de la semana directamente como fondo, usa una **surface tint** sobre un fondo neutro.

- `--md-primary`: el color de la semana actual (azul, rojo, verde...).
- `--md-on-primary`: el texto sobre ese color, blanco o negro según el brillo del color de fondo.
- `--md-surface`: un gris muy claro como base de toda la página.
- `--md-surface-container`: tonos intermedios para tarjetas y paneles.
- `--md-outline`: un gris para bordes y separadores.

Así el color de la semana se ve como un "resplandor" de la interfaz en vez de una pantalla de color plana.

## Tipografía

Usa **Roboto** (o la familia de Material). Define jerarquía clara:

- Encabezado `Roboto Display` o `Headline` para el nombre del comedor y el título del menú.
- `Body` para los platos.
- `Label` en mayúsculas con tracking amplio para las etiquetas (día, semana).

Material usa escala tipográfica fija, no tamaños arbitrarios.

## Componentes clave

Aplica los componentes de Material donde encajan:

- **FAB (botón flotante)** circular para "Volver a hoy". Es el elemento más llamativo y encaja perfecto con la acción principal de navegación.
- **Tarjetas (Cards)** con elevación para el menú del día: cada plato como una fila dentro de una card.
- **Chips** para mostrar el día de la semana y el color de la plantilla de forma compacta.
- **Barra de navegación inferior (Bottom Navigation)** para alternar entre "Menú", "Calendario" y "Semanas".
- **Dialogo (Dialog)** para mostrar el mensaje de días no lectivos o sin menú.

## Elevación y sombras

Material usa sombra en vez de bordes gruesos para dar profundidad. Aplica:

- Elevación baja (sombra sutil) en las tarjetas en reposo.
- Elevación alta (sombra pronunciada) en el FAB y en el diálogo.
- Sombra media en el panel que aparece al navegar entre días.

En Material 3 el elevación se expresa con capas de `surface-container` y `surface tint` en vez de solo sombra, pero el efecto visual es el mismo.

## Microinteracciones

- Efecto **ripple** en todos los botones y enlaces al hacer clic (se puede lograr con la librería `@material-ui/core` o `react-ripple` si usas framework, o CSS puro con un overlay).
- Transiciones suaves de entrada/salida al cambiar de día (fade + desplazamiento de 200ms).
- El cambio de color de la semana con una transición de `background-color` de 250ms.

## Cómo aplicarlo al proyecto

Como tus datos están en `menu.json` y el color de la semana ya lo manejas en JS, solo tienes que:

1. En `style.css`, crear un tema con variables de color y tipografía Roboto.
2. En `script.js`, usar el color de la plantilla para setear `--md-primary` dinámicamente según la semana.
3. Reemplazar el fondo de color plano por una superficie neutra + surface tint.
4. Convertir el contenedor del menú en una tarjeta con elevación.
5. Cambiar el botón "Volver a hoy" por un FAB.
6. Usar chips para el día/semana y un diálogo para los mensajes especiales.

## Opción rápida

Si quieres algo sin mucho trabajo, usa **MUI (Material UI)** o **Mantine**. Instalas una librería, obtienes componentes de Material listos y te ahorras escribir el sistema de color y las animaciones a mano.

¿Quieres que te prepare un bloque de `style.css` con el tema Material ya montado para que lo veas funcionando?

**You**

sí

**Rebost**

Aquí tienes un bloque de `style.css` con el tema Material Design 3 ya montado. Es puro CSS, así que encaja perfecto con el proyecto vanilla (`HTML5`, `CSS3`, `JavaScript`), que según el README no necesita dependencias.

```css
/* Import tipografía Roboto */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

/* === Sistema de color Material 3 === */
:root {
  /* Base neutra (surface) */
  --md-surface: #fef7ff;
  --md-surface-container: #f3ede9;
  --md-surface-container-high: #ece2dd;
  --md-on-surface: rgba(12, 12, 12, 0.87);
  --md-on-surface-variant: rgba(12, 12, 12, 0.54);
  --md-outline: rgba(12, 12, 12, 0.28);

  /* Color dinámico de la semana */
  --md-primary: #1565c0;
  --md-on-primary: #ffffff;
  --md-secondary: #006293;
  --md-tertiary: #ad06ad;

  /* Elevación (sombra) */
  --md-elevation-1: 0 1px 3px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.3);
  --md-elevation-2: 0 3px 6px rgba(0, 0, 0, 0.15), 0 10px 20px rgba(0, 0, 0, 0.25);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Roboto', sans-serif;
  background-color: var(--md-surface);
  color: var(--md-on-surface);
  min-height: 100vh;
  transition: background-color 0.25s ease;
}

/* === Contenedor principal === */
.app {
  max-width: 480px;
  margin: 0 auto;
  min-height: 100vh;
  padding: 16px;
  background-color: var(--md-surface-container);
}

/* === Encabezado === */
.header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
}

.chip {
  background-color: var(--md-primary);
  color: var(--md-on-primary);
  border-radius: 8px;
  padding: 4px 12px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

h1 {
  font-family: 'Roboto', sans-serif;
  font-size: 32px;
  font-weight: 400;
}

/* === Tarjeta del menú (elevación) === */
.card {
  background-color: var(--md-surface);
  border-radius: 12px;
  padding: 16px;
  box-shadow: var(--md-elevation-1);
  margin-bottom: 16px;
  transition: box-shadow 0.2s ease;
}

.card:active {
  box-shadow: var(--md-elevation-2);
}

.menu-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid var(--md-outline);
}

.menu-item:last-child {
  border-bottom: none;
}

.menu-item .name {
  font-size: 16px;
  font-weight: 500;
}

.menu-item .time {
  color: var(--md-on-surface-variant);
  font-size: 14px;
}

/* === Botón de acción (Volver a hoy) === */
.fab {
  position: fixed;
  right: 20px;
  bottom: 80px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: none;
  background-color: var(--md-primary);
  color: var(--md-on-primary);
  font-size: 18px;
  cursor: pointer;
  box-shadow: var(--md-elevation-2);
  transition: background-color 0.25s ease, box-shadow 0.2s ease;
}

.fab:active {
  box-shadow: var(--md-elevation-1);
}

/* === Barra de navegación inferior === */
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--md-surface-container-high);
  border-top: 1px solid var(--md-outline);
  padding: 8

**You**

puedes darme el html con las clases necesarias para aplicar estos estilis?

**Rebost**

Aquí tienes el `index.html` con las clases que usé en el CSS, montado según la estructura del proyecto del README (`index.html`, `style.css`, `script.js`, `menu.json`).

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Menú del Comedor</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Contenedor principal -->
  <div class="app">

    <!-- Encabezado -->
    <header class="header">
      <span class="chip" id="week-chip">Semana</span>
      <h1>Menú de hoy</h1>
    </header>

    <!-- Mensaje para días sin menú o no lectivos -->
    <div class="card" id="empty-state" hidden>
      <p class="name">No hay menú asignado para este día.</p>
    </div>

    <!-- Tarjeta con el menú del día -->
    <div class="card" id="menu-card" hidden>
      <div class="menu-item">
        <span class="name">Desayuno</span>
        <span class="time">08:00</span>
      </div>
      <div class="menu-item">
        <span class="name">Media mañana</span>
        <span class="time">10:00</span>
      </div>
      <div class="menu-item">
        <span class="name">Comida</span>
        <span class="time">14:00</span>
      </div>
      <div class="menu-item">
        <span class="name">Merienda</span>
        <span class="time">17:00</span>
      </div>
    </div>

  </div>

  <!-- Botón flotante para volver a hoy -->
  <button class="fab" id="back-today" title="Volver a hoy">‹</button>

  <!-- Barra de navegación inferior -->
  <nav class="bottom-nav">
    <button class="nav-item" data-day="-1">Anterior</button>
    <button class="nav-item" data-day="0">Hoy</button>
    <button class="nav-item" data-day="1">Siguiente</button>
  </nav>

  <script src="script.js"></script>
</body>
</html>
```

Un par de notas para que encaje con el proyecto:

- El `script.js` debería leer `menu.json`, calcular el color de la semana y aplicar `--md-primary` en `:root` para que cambie el fondo dinámicamente según el README.
- La clase `.chip` lleva el texto de la semana (azul, verde, etc.), y `.week-chip` es el id donde el JS inyecta ese color.
- Las `.nav-item` del `bottom-nav` son botones de navegación; si quieres que se vean como chips de Material, tendrías que añadir un estilo propio o reutilizar la clase `.chip` con fondo neutro.

¿Quieres que te deje también el `script.js` para que conecte las clases con los datos del `menu.json`?
