let currentDate = new Date();

function updateSchedule(date) {
  // const now = new Date();
  const days = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  const monthes = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const currentMonth = monthes[date.getMonth()];
  const currentDay = days[date.getDay()];
  const currentDateNum = date.getDate();

  document.getElementById(
    "currentDay"
  ).textContent = `${currentDateNum} de ${currentMonth}, ${currentDay} hay de menú:`;

  let message = "";

  switch (currentMonth) {
    case "Septiembre":
      switch (currentDateNum) {
        //semana azul
        case 9:
          message =
            "Potaje de lentejas Y verduras. Tortilla española al horno. Ensalada natural.";
          break;
        case 10:
          message =
            "Crema de calabaza. Croquetas de pollo al horno con menestra de verduras.";
          break;
        case 11:
          message =
            "Sopa de verduras Salmón a la plancha con verduras asadas y cuscús integral";
          break;
        case 12:
          message = "Puré de guisantes. Pizza casera con tomate natural";
          break;
        //semana celeste.
        case 15:
          message =
            "Ensalada de Garbanzos. Estofado de ternera con papas y verduras";
          break;
        case 16:
          message =
            "Sopa de pollo. Filete de fogonero a la plancha con papas sancochadas";
          break;
        case 17:
          message =
            "Macarrones integrales con tomate natural. Hamburguesa de pollo con ensalada natural";
          break;
        case 18:
          message =
            "Potaje de lentejas con verduras. Pescado al vapor con aliño de limón, ajo y perejil y ensalada verde";
          break;
        case 19:
          message =
            "Crema de verduras y judías. Tortilla a la paisana con ensalada";
          break;
        //semana verde
        case 22:
          message =
            "Potaje de berros y legumbres. Pechuga de pollo a la plancha con verduras";
          break;
        case 23:
          message = "Arroz tres delicias. Atún a la plancha con ensalada";
          break;
        case 24:
          message = "Crema de calabacín. Quiché de verduras, queso y jamón";
          break;
        case 25:
          message =
            "Sopa de estrellitas. Albóndigas de pollo con papas parisinas";
          break;
        case 26:
          message =
            "Guiso de lentejas. Croquetas de pescado al horno con ensalada";
          break;
        //semana roja
        case 29:
          message =
            "Sopa de pescado. Pechuga de pollo a la plancha con ensalada";
          break;
        case 30:
          message =
            "Potaje de berros y judías pintas. Pescado al vapor con aliño de limón, ajo y perejil y papas sancochadas";
          break;
        default:
          message = "Día no lectivo \u{1f3c4}";
      }
      break;
    case "Octubre":
      switch (currentDateNum) {
        //semana roja
        case 1:
          message = "Ensalada de caballa. Lomo asado con menestra de verduras";
          break;
        case 2:
          message =
            "Arroz con pollo y verduras. Tacos de pescado con ensalada natural";
          break;
        case 3:
          message =
            "Crema de verduras. Tortilla a Ia paisana con tomates aliñados";
          break;
        //semana amarilla
        case 6:
          message = "Crema de calabaza. Tortilla de calabacín y papas al horno";
          break;
        case 7:
          message = "Sopa de Ternera. Estofado de pollo con verduras";
          break;
        case 8:
          message =
            "Potaje de verduras y legumbres. Churros de pescado al horno con ensalada";
          break;
        case 9:
          message =
            "Tallarines con tomate natural. Pechuga de pavo a la plancha con zanahorias salteadas";
          break;
        case 10:
          message = "Crema de lentejas. Pescado en salsa con papas sancochadas";
          break;
        //semana azul
        case 13:
          message = "Ensalada César. Pollo al horno con papas arrugadas";
          break;
        case 14:
          message =
            "Potaje de lentejas Y verduras. Tortilla española al horno. Ensalada natural.";
          break;
        case 15:
          message =
            "Crema de calabaza. Croquetas de pollo al horno con menestra de verduras.";
          break;
        case 16:
          message =
            "Sopa de verduras Salmón a la plancha con verduras asadas y cuscús integral";
          break;
        case 17:
          message = "Puré de guisantes. Pizza casera con tomate natural";
          break;
        //semana celeste.
        case 20:
          message =
            "Ensalada de Garbanzos. Estofado de ternera con papas y verduras";
          break;
        case 21:
          message =
            "Sopa de pollo. Filete de fogonero a la plancha con papas sancochadas";
          break;
        case 22:
          message =
            "Macarrones integrales con tomate natural. Hamburguesa de pollo con ensalada natural";
          break;
        case 23:
          message =
            "Potaje de lentejas con verduras. Pescado al vapor con aliño de limón, ajo y perejil y ensalada verde";
          break;
        case 24:
          message =
            "Crema de verduras y judías. Tortilla a la paisana con ensalada";
          break;
        //semana verde
        case 27:
          message =
            "Potaje de berros y legumbres. Pechuga de pollo a la plancha con verduras";
          break;
        case 28:
          message = "Arroz tres delicias. Atún a la plancha con ensalada";
          break;
        case 29:
          message = "Crema de calabacín. Quiché de verduras, queso y jamón";
          break;
        case 30:
          message =
            "Sopa de estrellitas. Albóndigas de pollo con papas parisinas";
          break;
        case 31:
          message =
            "Guiso de lentejas. Croquetas de pescado al horno con ensalada";
          break;
        default:
          message = "Día no lectivo \u{1f3c4}";
      }
      break;
    case "Noviembre":
      switch (currentDateNum) {
        //semana roja
        case 4:
          message =
            "Potaje de berros y judías pintas. Pescado al vapor con aliño de limón, ajo y perejil y papas sancochadas";
          break;
        case 5:
          message = "Ensalada de caballa. Lomo asado con menestra de verduras";
          break;
        case 6:
          message =
            "Arroz con pollo y verduras. Tacos de pescado con ensalada natural";
          break;
        case 7:
          message =
            "Crema de verduras. Tortilla a Ia paisana con tomates aliñados";
          break;
        //semana amarilla
        case 10:
          message = "Crema de calabaza. Tortilla de calabacín y papas al horno";
          break;
        case 11:
          message = "Sopa de Ternera. Estofado de pollo con verduras";
          break;
        case 12:
          message =
            "Potaje de verduras y legumbres. Churros de pescado al horno con ensalada";
          break;
        case 13:
          message =
            "Tallarines con tomate natural. Pechuga de pavo a la plancha con zanahorias salteadas";
          break;
        case 14:
          message = "Crema de lentejas. Pescado en salsa con papas sancochadas";
          break;
        //semana azul
        case 17:
          message = "Ensalada César. Pollo al horno con papas arrugadas";
          break;
        case 18:
          message =
            "Potaje de lentejas Y verduras. Tortilla española al horno. Ensalada natural.";
          break;
        case 19:
          message =
            "Crema de calabaza. Croquetas de pollo al horno con menestra de verduras.";
          break;
        case 20:
          message =
            "Sopa de verduras Salmón a la plancha con verduras asadas y cuscús integral";
          break;
        case 21:
          message = "Puré de guisantes. Pizza casera con tomate natural";
          break;
        //semana celeste.
        case 24:
          message =
            "Ensalada de Garbanzos. Estofado de ternera con papas y verduras";
          break;
        case 25:
          message =
            "Sopa de pollo. Filete de fogonero a la plancha con papas sancochadas";
          break;
        case 26:
          message =
            "Macarrones integrales con tomate natural. Hamburguesa de pollo con ensalada natural";
          break;
        case 27:
          message =
            "Potaje de lentejas con verduras. Pescado al vapor con aliño de limón, ajo y perejil y ensalada verde";
          break;
        case 28:
          message =
            "Crema de verduras y judías. Tortilla a la paisana con ensalada";
          break;
        default:
          message = "Día no lectivo \u{1f3c4}";
      }
      break;
    case "Diciembre":
      switch (currentDateNum) {
        //semana verde
        case 1:
          message =
            "Potaje de berros y legumbres. Pechuga de pollo a la plancha con verduras";
          break;
        case 2:
          message = "Arroz tres delicias. Atún a la plancha con ensalada";
          break;
        case 3:
          message = "Crema de calabacín. Quiché de verduras, queso y jamón";
          break;
        case 4:
          message =
            "Sopa de estrellitas. Albóndigas de pollo con papas parisinas";
          break;
        //semana roja
        case 9:
          message =
            "Potaje de berros y judías pintas. Pescado al vapor con aliño de limón, ajo y perejil y papas sancochadas";
          break;
        case 10:
          message = "Ensalada de caballa. Lomo asado con menestra de verduras";
          break;
        case 11:
          message =
            "Arroz con pollo y verduras. Tacos de pescado con ensalada natural";
          break;
        case 12:
          message =
            "Crema de verduras. Tortilla a Ia paisana con tomates aliñados";
          break;
        //semana amarilla
        case 15:
          message = "Crema de calabaza. Tortilla de calabacín y papas al horno";
          break;
        case 16:
          message = "Sopa de Ternera. Estofado de pollo con verduras";
          break;
        case 17:
          message =
            "Potaje de verduras y legumbres. Churros de pescado al horno con ensalada";
          break;
        case 18:
          message =
            "Tallarines con tomate natural. Pechuga de pavo a la plancha con zanahorias salteadas";
          break;
        case 19:
          message = "Crema de lentejas. Pescado en salsa con papas sancochadas";
          break;
        default:
          message = "Día no lectivo \u{1f3c4}";
      }
      break;
    case "Enero":
      switch (currentDateNum) {
        //semana azul
        case 8:
          message =
            "Sopa de verduras Salmón a la plancha con verduras asadas y cuscús integral";
          break;
        case 9:
          message = "Puré de guisantes. Pizza casera con tomate natural";
          break;
        //semana celeste.
        case 12:
          message =
            "Ensalada de Garbanzos. Estofado de ternera con papas y verduras";
          break;
        case 13:
          message =
            "Sopa de pollo. Filete de fogonero a la plancha con papas sancochadas";
          break;
        case 14:
          message =
            "Macarrones integrales con tomate natural. Hamburguesa de pollo con ensalada natural";
          break;
        case 15:
          message =
            "Potaje de lentejas con verduras. Pescado al vapor con aliño de limón, ajo y perejil y ensalada verde";
          break;
        case 16:
          message =
            "Crema de verduras y judías. Tortilla a la paisana con ensalada";
          break;
        //semana verde
        case 19:
          message =
            "Potaje de berros y legumbres. Pechuga de pollo a la plancha con verduras";
          break;
        case 20:
          message = "Arroz tres delicias. Atún a la plancha con ensalada";
          break;
        case 21:
          message = "Crema de calabacín. Quiché de verduras, queso y jamón";
          break;
        case 22:
          message =
            "Sopa de estrellitas. Albóndigas de pollo con papas parisinas";
          break;
        case 23:
          message =
            "Guiso de lentejas. Croquetas de pescado al horno con ensalada";
          break;
        //semana roja
        case 29:
          message =
            "Sopa de pescado. Pechuga de pollo a la plancha con ensalada";
          break;
        case 27:
          message =
            "Potaje de berros y judías pintas. Pescado al vapor con aliño de limón, ajo y perejil y papas sancochadas";
          break;
        case 28:
          message = "Ensalada de caballa. Lomo asado con menestra de verduras";
          break;
        case 29:
          message =
            "Arroz con pollo y verduras. Tacos de pescado con ensalada natural";
          break;
        case 30:
          message =
            "Crema de verduras. Tortilla a Ia paisana con tomates aliñados";
          break;
        default:
          message = "Día no lectivo \u{1f3c4}";
      }
      break;
    case "Febrero":
      switch (currentDateNum) {
        //semana amarilla
        case 2:
          message = "Crema de calabaza. Tortilla de calabacín y papas al horno";
          break;
        case 3:
          message = "Sopa de Ternera. Estofado de pollo con verduras";
          break;
        case 4:
          message =
            "Potaje de verduras y legumbres. Churros de pescado al horno con ensalada";
          break;
        case 5:
          message =
            "Tallarines con tomate natural. Pechuga de pavo a la plancha con zanahorias salteadas";
          break;
        case 6:
          message = "Crema de lentejas. Pescado en salsa con papas sancochadas";
          break;
        //semana azul
        case 9:
          message = "Ensalada César. Pollo al horno con papas arrugadas";
          break;
        case 10:
          message =
            "Potaje de lentejas Y verduras. Tortilla española al horno. Ensalada natural.";
          break;
        case 11:
          message =
            "Crema de calabaza. Croquetas de pollo al horno con menestra de verduras.";
          break;
        case 12:
          message =
            "Sopa de verduras Salmón a la plancha con verduras asadas y cuscús integral";
          break;
        case 13:
          message = "Puré de guisantes. Pizza casera con tomate natural";
          break;
        //semana celeste.
        case 16:
          message =
            "Ensalada de Garbanzos. Estofado de ternera con papas y verduras";
          break;
        case 17:
          message =
            "Sopa de pollo. Filete de fogonero a la plancha con papas sancochadas";
          break;
        case 18:
          message =
            "Macarrones integrales con tomate natural. Hamburguesa de pollo con ensalada natural";
          break;
        case 19:
          message =
            "Potaje de lentejas con verduras. Pescado al vapor con aliño de limón, ajo y perejil y ensalada verde";
          break;
        case 20:
          message =
            "Crema de verduras y judías. Tortilla a la paisana con ensalada";
          break;
        //semana verde
        case 23:
          message =
            "Potaje de berros y legumbres. Pechuga de pollo a la plancha con verduras";
          break;
        case 24:
          message = "Arroz tres delicias. Atún a la plancha con ensalada";
          break;
        case 25:
          message = "Crema de calabacín. Quiché de verduras, queso y jamón";
          break;
        case 26:
          message =
            "Sopa de estrellitas. Albóndigas de pollo con papas parisinas";
          break;
        case 27:
          message =
            "Guiso de lentejas. Croquetas de pescado al horno con ensalada";
          break;
        default:
          message = "Día no lectivo \u{1f3c4}";
      }
      break;
    case "Marzo":
      switch (currentDateNum) {
        //semana roja
        case 2:
          message =
            "Sopa de pescado. Pechuga de pollo a la plancha con ensalada";
          break;
        case 3:
          message =
            "Potaje de berros y judías pintas. Pescado al vapor con aliño de limón, ajo y perejil y papas sancochadas";
          break;
        case 4:
          message = "Ensalada de caballa. Lomo asado con menestra de verduras";
          break;
        case 5:
          message =
            "Arroz con pollo y verduras. Tacos de pescado con ensalada natural";
          break;
        case 6:
          message =
            "Crema de verduras. Tortilla a Ia paisana con tomates aliñados";
          break;
        //semana amarilla
        case 9:
          message = "Crema de calabaza. Tortilla de calabacín y papas al horno";
          break;
        case 10:
          message = "Sopa de Ternera. Estofado de pollo con verduras";
          break;
        case 11:
          message =
            "Potaje de verduras y legumbres. Churros de pescado al horno con ensalada";
          break;
        case 12:
          message =
            "Tallarines con tomate natural. Pechuga de pavo a la plancha con zanahorias salteadas";
          break;
        case 13:
          message = "Crema de lentejas. Pescado en salsa con papas sancochadas";
          break;
        //semana azul
        case 16:
          message = "Ensalada César. Pollo al horno con papas arrugadas";
          break;
        case 17:
          message =
            "Potaje de lentejas Y verduras. Tortilla española al horno. Ensalada natural.";
          break;
        case 18:
          message =
            "Crema de calabaza. Croquetas de pollo al horno con menestra de verduras.";
          break;
        case 19:
          message =
            "Sopa de verduras Salmón a la plancha con verduras asadas y cuscús integral";
          break;
        case 20:
          message = "Puré de guisantes. Pizza casera con tomate natural";
          break;
        //semana celeste.
        case 23:
          message =
            "Ensalada de Garbanzos. Estofado de ternera con papas y verduras";
          break;
        case 24:
          message =
            "Sopa de pollo. Filete de fogonero a la plancha con papas sancochadas";
          break;
        case 25:
          message =
            "Macarrones integrales con tomate natural. Hamburguesa de pollo con ensalada natural";
          break;
        case 26:
          message =
            "Potaje de lentejas con verduras. Pescado al vapor con aliño de limón, ajo y perejil y ensalada verde";
          break;
        case 27:
          message =
            "Crema de verduras y judías. Tortilla a la paisana con ensalada";
          break;
        default:
          message = "Día no lectivo \u{1f3c4}";
      }
      break;
    case "Abril":
      switch (currentDateNum) {
        //semana verde
        case 6:
          message =
            "Potaje de berros y legumbres. Pechuga de pollo a la plancha con verduras";
          break;
        case 7:
          message = "Arroz tres delicias. Atún a la plancha con ensalada";
          break;
        case 8:
          message = "Crema de calabacín. Quiché de verduras, queso y jamón";
          break;
        case 9:
          message =
            "Sopa de estrellitas. Albóndigas de pollo con papas parisinas";
          break;
        case 10:
          message =
            "Guiso de lentejas. Croquetas de pescado al horno con ensalada";
          break;
        //semana roja
        case 13:
          message =
            "Sopa de pescado. Pechuga de pollo a la plancha con ensalada";
          break;
        case 14:
          message =
            "Potaje de berros y judías pintas. Pescado al vapor con aliño de limón, ajo y perejil y papas sancochadas";
          break;
        case 15:
          message = "Ensalada de caballa. Lomo asado con menestra de verduras";
          break;
        case 16:
          message =
            "Arroz con pollo y verduras. Tacos de pescado con ensalada natural";
          break;
        case 17:
          message =
            "Crema de verduras. Tortilla a Ia paisana con tomates aliñados";
          break;
        //semana amarilla
        case 20:
          message = "Crema de calabaza. Tortilla de calabacín y papas al horno";
          break;
        case 21:
          message = "Sopa de Ternera. Estofado de pollo con verduras";
          break;
        case 22:
          message =
            "Potaje de verduras y legumbres. Churros de pescado al horno con ensalada";
          break;
        case 23:
          message =
            "Tallarines con tomate natural. Pechuga de pavo a la plancha con zanahorias salteadas";
          break;
        case 24:
          message = "Crema de lentejas. Pescado en salsa con papas sancochadas";
          break;
        //semana azul
        case 27:
          message = "Ensalada César. Pollo al horno con papas arrugadas";
          break;
        case 28:
          message =
            "Potaje de lentejas Y verduras. Tortilla española al horno. Ensalada natural.";
          break;
        case 29:
          message =
            "Crema de calabaza. Croquetas de pollo al horno con menestra de verduras.";
          break;
        case 30:
          message =
            "Sopa de verduras Salmón a la plancha con verduras asadas y cuscús integral";
          break;
        default:
          message = "Día no lectivo \u{1f3c4}";
      }
      break;
    case "Mayo":
      switch (currentDateNum) {
        //semana celeste.
        case 5:
          message =
            "Sopa de pollo. Filete de fogonero a la plancha con papas sancochadas";
          break;
        case 6:
          message =
            "Macarrones integrales con tomate natural. Hamburguesa de pollo con ensalada natural";
          break;
        case 7:
          message =
            "Potaje de lentejas con verduras. Pescado al vapor con aliño de limón, ajo y perejil y ensalada verde";
          break;
        case 8:
          message =
            "Crema de verduras y judías. Tortilla a la paisana con ensalada";
          break;
        //semana verde
        case 11:
          message =
            "Potaje de berros y legumbres. Pechuga de pollo a la plancha con verduras";
          break;
        case 12:
          message = "Arroz tres delicias. Atún a la plancha con ensalada";
          break;
        case 13:
          message = "Crema de calabacín. Quiché de verduras, queso y jamón";
          break;
        case 14:
          message =
            "Sopa de estrellitas. Albóndigas de pollo con papas parisinas";
          break;
        case 15:
          message =
            "Guiso de lentejas. Croquetas de pescado al horno con ensalada";
          break;
        //semana roja
        case 18:
          message =
            "Sopa de pescado. Pechuga de pollo a la plancha con ensalada";
          break;
        case 19:
          message =
            "Potaje de berros y judías pintas. Pescado al vapor con aliño de limón, ajo y perejil y papas sancochadas";
          break;
        case 20:
          message = "Ensalada de caballa. Lomo asado con menestra de verduras";
          break;
        case 21:
          message =
            "Arroz con pollo y verduras. Tacos de pescado con ensalada natural";
          break;
        case 22:
          message =
            "Crema de verduras. Tortilla a Ia paisana con tomates aliñados";
          break;
        //semana amarilla
        case 25:
          message = "Crema de calabaza. Tortilla de calabacín y papas al horno";
          break;
        case 26:
          message = "Sopa de Ternera. Estofado de pollo con verduras";
          break;
        case 27:
          message =
            "Potaje de verduras y legumbres. Churros de pescado al horno con ensalada";
          break;
        case 28:
          message =
            "Tallarines con tomate natural. Pechuga de pavo a la plancha con zanahorias salteadas";
          break;
        case 29:
          message = "Crema de lentejas. Pescado en salsa con papas sancochadas";
          break;
        default:
          message = "Día no lectivo \u{1f3c4}";
      }
      break;
    case "Junio":
      switch (currentDateNum) {
        //semana azul
        case 1:
          message = "Ensalada César. Pollo al horno con papas arrugadas";
          break;
        case 2:
          message =
            "Potaje de lentejas Y verduras. Tortilla española al horno. Ensalada natural.";
          break;
        case 3:
          message =
            "Crema de calabaza. Croquetas de pollo al horno con menestra de verduras.";
          break;
        case 4:
          message =
            "Sopa de verduras Salmón a la plancha con verduras asadas y cuscús integral";
          break;
        case 5:
          message = "Puré de guisantes. Pizza casera con tomate natural";
          break;
        //semana celeste.
        case 8:
          message =
            "Ensalada de Garbanzos. Estofado de ternera con papas y verduras";
          break;
        case 9:
          message =
            "Sopa de pollo. Filete de fogonero a la plancha con papas sancochadas";
          break;
        case 10:
          message =
            "Macarrones integrales con tomate natural. Hamburguesa de pollo con ensalada natural";
          break;
        case 11:
          message =
            "Potaje de lentejas con verduras. Pescado al vapor con aliño de limón, ajo y perejil y ensalada verde";
          break;
        case 12:
          message =
            "Crema de verduras y judías. Tortilla a la paisana con ensalada";
          break;
        //semana verde
        case 15:
          message =
            "Potaje de berros y legumbres. Pechuga de pollo a la plancha con verduras";
          break;
        case 16:
          message = "Arroz tres delicias. Atún a la plancha con ensalada";
          break;
        case 17:
          message = "Crema de calabacín. Quiché de verduras, queso y jamón";
          break;
        case 18:
          message =
            "Sopa de estrellitas. Albóndigas de pollo con papas parisinas";
          break;
        case 19:
          message =
            "Guiso de lentejas. Croquetas de pescado al horno con ensalada";
          break;
        default:
          message = "Día no lectivo \u{1f3c4}";
      }
      break;
    default:
      message = "";
  }

  document.getElementById("subjectMessage").textContent = `${message}`;
}

function updateDay(offset) {
  if (offset == 0) {
    currentDate = new Date();
  }
  currentDate.setDate(currentDate.getDate() + offset);
  updateSchedule(currentDate);
}

document
  .getElementById("prevDay")
  .addEventListener("click", () => updateDay(-1));
document
  .getElementById("nextDay")
  .addEventListener("click", () => updateDay(1));
document
  .getElementById("presentDay")
  .addEventListener("click", () => updateDay(0));

// Inicializar con la fecha actual
updateSchedule(currentDate);
//setInterval(updateSchedule, 60000);

/*Aquí empieza la animación del fondo-------------------------------------------------------------------------------------------------*/
// var Stars = function (args) {
//   if (args === undefined) args = {};
//   var _scope = this;

//   this.stars = [];
//   this.vel = args.vel || 1;
//   this.radius = args.radius || 1;
//   this.alpha = 0.5;
//   this.starsCounter = args.stars || 300;
//   var center = {
//     x: window.innerWidth / 2,
//     y: window.innerHeight / 2,
//   };
//   var canvas, context;
//   this.init = function () {
//     canvas = document.createElement("canvas");
//     document.body.appendChild(canvas);
//     context = canvas.getContext("2d");
//     context.lineCap = "round";
//     this.start();
//     this.resize();
//     //
//     window.addEventListener("resize", this.resize.bind(this));
//   };

//   this.start = function () {
//     this.stars = [];
//     for (var i = 0; i < this.starsCounter; i++) {
//       setTimeout(function () {
//         _scope.stars.push(new Star());
//       }, i * 30);
//     }
//   };

//   this.resize = function () {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     center.x = canvas.width / 2;
//     center.y = canvas.height / 2;
//   };

//   this.animate = function () {
//     window.requestAnimationFrame(this.animate.bind(this));
//     this.render();
//   };
//   this.render = function () {
//     context.fillStyle = "rgba(1, 4, 35, 0.8)";
//     context.fillRect(0, 0, canvas.width, canvas.height);
//     context.strokeStyle = "greenyellow";
//     for (var i = 0; i < this.stars.length; i++) this.stars[i].update();
//   };

//   var Star = function () {
//     this.x = center.x;
//     this.y = center.y;
//     this.init = function () {
//       this.radius = Math.random() * _scope.radius;
//       this.x = center.x;
//       this.y = center.y;
//       this.lineWidth = 0;
//       this.vel = {
//         x: Math.random() * 10 - 5,
//         y: Math.random() * 10 - 5,
//       };
//     };
//     this.update = function () {
//       this.vel.x *= 1.02;
//       this.vel.y *= 1.02;
//       this.lineWidth += 0.02;
//       this.x0 = this.x;
//       this.y0 = this.y;
//       this.x += this.vel.x;
//       this.y += this.vel.y;
//       this.draw();
//       if (this.isDead()) this.init();
//     };
//     this.draw = function () {
//       context.beginPath();
//       context.moveTo(this.x0, this.y0);
//       context.lineTo(this.x, this.y);
//       context.lineWidth = this.lineWidth;
//       context.stroke();
//     };
//     this.isDead = function () {
//       return (
//         this.x < 0 ||
//         this.x > canvas.width ||
//         this.y < 0 ||
//         this.y > canvas.height
//       );
//     };
//     this.init();
//     return this;
//   };
//   this.init();
//   this.animate();
//   return this;
// };

// var _stars = new Stars();

// ---- La función para inicializar el efecto de nubes ----
VANTA.CLOUDS({
  // Apunta al ID del DIV definido en el HTML
  el: "body",

  // Opciones para personalizar la apariencia y el movimiento
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 100.0,
  minWidth: 100.0,

  // Personaliza los colores (valores en formato hexadecimal 0xRRGGBB)
  skyColor: 0x4d71a5,
  cloudColor: 0xffffff,
  cloudShadowColor: 0x18344e,
});
