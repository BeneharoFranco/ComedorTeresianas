# Comedor Teresianas

Aplicación web estática para consultar el menú diario del comedor escolar en función de una planificación por colores (semanas temáticas) y un calendario mensual.

## Características

- Muestra el menú del día actual automáticamente.
- Permite navegar al día anterior y siguiente.
- Botón para volver al día de hoy.
- Mensaje para días no lectivos o sin menú asignado.
- Color de fondo dinámico según el color de la semana.
- Datos desacoplados en `menu.json` para facilitar la actualización del curso.

## Tecnologías

- `HTML5`
- `CSS3`
- `JavaScript` (vanilla)
- `JSON` (fuente de datos del menú)

## Estructura del proyecto

```text
.
├── index.html      # Estructura de la página
├── style.css       # Estilos de la interfaz
├── script.js       # Lógica de navegación y renderizado
└── menu.json       # Plantillas y calendario del menú
```

## Cómo ejecutar en local

Este proyecto no requiere instalación de dependencias.

### Opción 1: abrir directamente

1. Descarga o clona el repositorio.
2. Abre `index.html` en el navegador.

### Opción 2 (recomendada): servidor local

Usar un servidor local evita problemas de `fetch` con `menu.json` en algunos navegadores.

Si tienes Python instalado:

```bash
python -m http.server 8000
```

Después abre: [http://localhost:8000](http://localhost:8000)

## Formato de datos (`menu.json`)

El archivo contiene dos bloques principales:

- `plantillas`: menú por color y día de la semana (`1` a `5`).
- `calendario`: asignación de color por mes y día numérico.

### Ejemplo simplificado

```json
{
  "plantillas": {
    "azul": {
      "1": "Menú del lunes",
      "2": "Menú del martes"
    }
  },
  "calendario": {
    "Septiembre": {
      "9": "azul"
    }
  }
}
```

## Cómo actualizar el menú

1. Edita `menu.json`.
2. Actualiza los textos en `plantillas` para cada color y día.
3. Ajusta el `calendario` del nuevo curso (mes y día -> color).
4. Guarda y recarga la web.

## Despliegue en GitHub Pages

1. Sube el proyecto al repositorio.
2. Ve a **Settings > Pages**.
3. En **Source**, selecciona:
   - Branch: `main`
   - Folder: `/ (root)`
4. Guarda y espera a que se publique.

## Autoría

Beneharo Franco Alonso.

