let currentDate = new Date();
let menuData = null;
let currentView = 'day';

async function loadMenu() {
  try {
    const response = await fetch("menu.json");
    if (!response.ok) {
      throw new Error(`HTTP ${response.status} al cargar menu.json`);
    }
    menuData = await response.json();
    updateSchedule(currentDate);
  } catch (error) {
    console.error("Error cargando el menú:", error);
    document.getElementById("subjectMessage").textContent = "Error al cargar el menú.";
  }
}

const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const colorHexMap = {
  "azul": "#8cb3f5",
  "celeste": "#aed9e0",
  "verde": "#a8d5ba",
  "roja": "#f2b1a1",
  "amarilla": "#f9e2af"
};

function getMenuForDate(date) {
  const monthName = months[date.getMonth()];
  const dateNum = date.getDate();
  const dayOfWeek = date.getDay();

  const colorAsignado = menuData.calendario[monthName] ? menuData.calendario[monthName][dateNum] : null;

  if (colorAsignado && dayOfWeek >= 1 && dayOfWeek <= 5) {
    const plantillaColor = menuData.plantillas[colorAsignado];
    if (plantillaColor && plantillaColor[dayOfWeek]) {
      return { menu: plantillaColor[dayOfWeek], color: colorAsignado };
    }
  }
  return { menu: "Día no lectivo 🏄", color: null };
}

function updateSchedule(date) {
  if (!menuData) return;

  const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

  const currentMonth = months[date.getMonth()];
  const currentDayName = days[date.getDay()];
  const currentDateNum = date.getDate();

  document.getElementById("currentDay").innerHTML =
    `Menú para el <br> ${currentDayName} ${currentDateNum} de ${currentMonth}`;

  const { menu: message, color: colorAsignado } = getMenuForDate(date);

  document.getElementById("subjectMessage").innerHTML = message.split('. ').join('.<br>');

  if (colorAsignado) {
    document.getElementById("subjectMessage").style.backgroundColor = colorHexMap[colorAsignado] || "#2e5c65";
    document.getElementById("subjectMessage").style.color = "#424242ff";
  } else {
    document.getElementById("subjectMessage").style.backgroundColor = "#2e5c65";
    document.getElementById("subjectMessage").style.color = "white";
  }
}

function getMonday(date) {
  const d = new Date(date);
  const day = d.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  d.setDate(d.getDate() + diff);
  return d;
}

function updateWeekView(date) {
  if (!menuData) return;

  const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const monday = getMonday(date);
  const friday = new Date(monday);
  friday.setDate(friday.getDate() + 4);
  const monthStart = months[monday.getMonth()];
  const monthEnd = months[friday.getMonth()];

  document.getElementById("currentDay").innerHTML =
    `Semana del ${monday.getDate()} de ${monthStart} al ${friday.getDate()} de ${monthEnd}`;

  // Creamos una instancia de la fecha actual para comparar
  const today = new Date();

  let html = "";
  for (let i = 0; i < 5; i++) {
    const day = new Date(monday);
    day.setDate(day.getDate() + i);
    const dayName = days[day.getDay()];
    const dateNum = day.getDate();
    const { menu: menuText, color } = getMenuForDate(day);
    
    // Comprobamos si el día del bucle coincide con el día de hoy
    const isToday = 
      day.getDate() === today.getDate() &&
      day.getMonth() === today.getMonth() &&
      day.getFullYear() === today.getFullYear();

    html += `
      <div class="week-day"${color ? ` style="background-color: ${colorHexMap[color] || '#e8f0fe'}"` : ''}>
        <div class="week-date">${isToday ? `<strong>${dateNum}</strong>` : dateNum}</div>
        <div class="week-day-name">${isToday ? `<strong>${dayName}</strong>` : dayName}</div>
        <div class="week-menu">${isToday ? `<strong>${menuText.split('. ').join('.<br>')}</strong>` : menuText.split('. ').join('.<br>')}</div>
      </div>`;
  }

  document.getElementById("weekView").innerHTML = html;
}

function setView(view) {
  currentView = view;
  const isWeek = view === "week";

  document.getElementById("subjectMessage").style.display = isWeek ? "none" : "";
  document.getElementById("weekView").style.display = isWeek ? "" : "none";
  document.getElementById("viewToggle").checked = isWeek;
  document.getElementById("labelDay").classList.toggle("active", !isWeek);
  document.getElementById("labelWeek").classList.toggle("active", isWeek);

  if (isWeek) {
    updateWeekView(currentDate);
  } else {
    updateSchedule(currentDate);
  }
}

function updateDay(offset) {
  if (offset === 0) {
    currentDate = new Date();
  } else if (currentView === "week") {
    offset *= 7;
  }
  currentDate.setDate(currentDate.getDate() + offset);
  if (currentView === "week") {
    updateWeekView(currentDate);
  } else {
    updateSchedule(currentDate);
  }
}

document.getElementById("prevDay").addEventListener("click", () => updateDay(-1));
document.getElementById("nextDay").addEventListener("click", () => updateDay(1));
document.getElementById("presentDay").addEventListener("click", () => updateDay(0));
document.getElementById("viewToggle").addEventListener("change", (event) => {
  setView(event.target.checked ? "week" : "day");
});
document.getElementById("labelDay").addEventListener("click", () => setView("day"));
document.getElementById("labelWeek").addEventListener("click", () => setView("week"));

setView("day");

loadMenu();