let currentDate = new Date();
let menuData = null;

async function loadMenu() {
  try {
    const response = await fetch("menu.json");
    menuData = await response.json();
    updateSchedule(currentDate);
  } catch (error) {
    console.error("Error cargando el menú:", error);
    document.getElementById("subjectMessage").textContent = "Error al cargar el menú.";
  }
}

function updateSchedule(date) {
  if (!menuData) return;

  const days = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
  const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  const currentMonth = months[date.getMonth()];
  const currentDayName = days[date.getDay()];
  const currentDateNum = date.getDate();
  const dayOfWeek = date.getDay(); // 1=Lunes, 2=Martes...

  document.getElementById("currentDay").textContent =
    `${currentDateNum} de ${currentMonth}, ${currentDayName} hay de menú:`;

  let message = "Día no lectivo 🏄";

  // 1. Buscamos el color asignado a este día en el calendario
  const colorAsignado = menuData.calendario[currentMonth] ? menuData.calendario[currentMonth][currentDateNum] : null;

  // 2. Si hay color y es un día de entre semana (1-5), buscamos en la plantilla de ese color
  if (colorAsignado && dayOfWeek >= 1 && dayOfWeek <= 5) {
    message = menuData.plantillas[colorAsignado][dayOfWeek];
  }

  document.getElementById("subjectMessage").textContent = message;

  // Opcional: Cambiar el color del mensaje según el color de la semana
  const colorsHex = {
    "azul": "#e8f0fe",
    "celeste": "#e0f7fa",
    "verde": "#e8f5e9",
    "roja": "#ffebee",
    "amarilla": "#fffde7"
  };
  if (colorAsignado) {
    document.getElementById("subjectMessage").style.backgroundColor = colorsHex[colorAsignado] || "#e8f0fe";
  } else {
    document.getElementById("subjectMessage").style.backgroundColor = "#e8f0fe";
  }
}

function updateDay(offset) {
  if (offset == 0) currentDate = new Date();
  else currentDate.setDate(currentDate.getDate() + offset);
  updateSchedule(currentDate);
}

document.getElementById("prevDay").addEventListener("click", () => updateDay(-1));
document.getElementById("nextDay").addEventListener("click", () => updateDay(1));
document.getElementById("presentDay").addEventListener("click", () => updateDay(0));

loadMenu();