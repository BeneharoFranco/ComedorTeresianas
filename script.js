let currentDate = new Date();

function updateSchedule(date) {
  // const now = new Date();
  const days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
  const monthes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  const currentMonth = monthes[date.getMonth()];
  const currentDay = days[date.getDay()];
  const currentDateNum = date.getDate();

  document.getElementById('currentDay').textContent = `${currentDateNum} de ${currentMonth}, ${currentDay} hay de menú:`;

  let message = '';

  switch (currentMonth) {
    case 'Septiembre': break;
    case 'Octubre': break;
    case 'Noviembre': break;
    case 'Diciembre': break;
    case 'Enero': break;
    case 'Febrero':
      switch (currentDateNum) {
        case 13: message = 'Potaje de lentejas Y verduras. Tortilla española al horno. Ensalada. Fruta de temporada'
          break;
        case 14: message = 'Puré de zanahorias. Canelones con bechamel casera tomates aliñados. Lácteo.'
          break;
        //Semana Verde
        case 17: message = 'Sopa de pescado (fogonero 32+) y arroz. Crunchy de pollo al horno. Ensalada. Fruta de temporada.'
          break;
        case 18: message = 'Potaje de berros con judias blanca. Tacos de pescado con mojo de cilantro. Papas guisadas Fruta de temporada.'
          break;
        case 19: message = 'Ensalada mediterránea con aliño de la casa. Filete de cerdo a la plancha con verduras salteadas. Fruta de temporada.'
          break;
        case 20: message = 'Crema de calabaza. Arroz con verduras y pollo. Fruta de temporada.'
          break;
        case 21: message = 'Púre de espinacas. Macarrones integrales con tomate natural y verduras. Lácteo.'
          break;
        //Semana Azul.
        case 24: message = 'Potaje de verduras con garbanzos. Fingers de pollo al horno con ensalada. Fruta de temporada.'
          break;
        case 25: message = 'Sopa de estrellitas. Tacos de atún en salsa de tomate natural. Papas parisinas. Fruta de temporada.'
          break;
        case 26: message = 'Crema de zanahorias. Tallarines integrales con boloñesa con tomate natural. Fruta de temporada.'
          break;
        case 27: message = 'Ensalada mixta. Croquetas de pollo caseras al horno. Menestra de verduras. Fruta de temporada.'
          break;
        case 28: message = 'Puré de calabacín. Arroz con pescado (fogonero 32+) y verduras. Lácteo.'
          break;
        default: message = 'Día no lectivo';
      }
      break;
    case 'Marzo':
      switch (currentDateNum) {
        //Semana Amarilla
        case 3: message = 'Crema de berros con judias pintas. Albóndigas de ternera y cerdo y verduras caseras. Arroz integral. Fruta de tem orada.'
          break;
        case 4: message = 'Sopa de pollo. Macarrones integrales con tomate natural y verduras. Fruta de temporada.'
          break;
        case 5: message = 'Potaje de lentejas. Pechuga de pollo a la plancha con ajo y perejil. Ensalada. Fruta de temporada.'
          break;
        case 6: message = 'Ensalada de la huerta. Pescado al horno (fogonero 32+) con limón, ajo y perejil. Papas arrugadas. Fruta de temporada.'
          break;
        case 7: message = 'Puré de espinacas. Pizza margarita con tomate natural. Lácteo.'
          break;
        //Semana Violeta
        case 10: message = 'Sopa de verduras y fideos. Hamburguesa de pollo al horno con papas pobres. Fruta de temporada.'
          break;
        case 11: message = 'Potaje de acelgas con garbanzos. Churros de pescado (fogonero 32+) al horno ensalada. Fruta de temporada.'
          break;
        case 12: message = 'Ensalada césar con picatostes. Lomo de cerdo asado al horno con zanahorias salteadas. Fruta de temporada.'
          break;
        case 13: message = 'Crema de verduras de temporada. Atun en salsa teriyaki con arroz integral y ensalada. Fruta de temporada.'
          break;
        case 14: message = 'Puré de guisantes. Espaguettis integrales con atún, verduras y tomate natural. Lácteo.'
          break;
        //Semana Roja
        case 17: message = 'Crema de verduras de temporada. Estofado de ternera con verduras. Arroz integral. Fruta de temporada.'
          break;
        case 18: message = 'Ensalada de papas aliñadas con melva. Croquetas de pescado caseras. Menestra de verduras. Fruta de temporada.'
          break;
        case 19: message = 'Sopa de fideos con verduras y ternera. Pollo asado al curry Cous-cous con caldo de ave y cilantro. Fruta de temporada.'
          break;
        case 20: message = 'Potaje de lentejas Y verduras. Tortilla española al horno. Ensalada. Fruta de temporada'
          break;
        case 21: message = 'Puré de zanahorias. Canelones con bechamel casera tomates aliñados. Lácteo.'
          break;
        //Semana Verde
        case 24: message = 'Sopa de pescado (fogonero 32+) y arroz. Crunchy de pollo al horno. Ensalada. Fruta de temporada.'
          break;
        case 25: message = 'Potaje de berros con judias blanca. Tacos de pescado con mojo de cilantro. Papas guisadas Fruta de temporada.'
          break;
        case 26: message = 'Ensalada mediterránea con aliño de la casa. Filete de cerdo a la plancha con verduras salteadas. Fruta de temporada.'
          break;
        case 27: message = 'Crema de calabaza. Arroz con verduras y pollo. Fruta de temporada.'
          break;
        case 28: message = 'Púre de espinacas. Macarrones integrales con tomate natural y verduras. Lácteo.'
          break;
        //Semana Azul
        case 31: message = 'Potaje de verduras con garbanzos. Fingers de pollo al horno con ensalada. Fruta de temporada.'
          break;
        default: message = 'Día no lectivo';
      }
      break;
    case 'Abril':
      switch (currentDateNum) {
        case 1: message = 'Sopa de estrellitas. Tacos de atún en salsa de tomate natural. Papas parisinas. Fruta de temporada.'
          break;
        case 2: message = 'Crema de zanahorias. Tallarines integrales con boloñesa con tomate natural. Fruta de temporada.'
          break;
        case 3: message = 'Ensalada mixta. Croquetas de pollo caseras al horno. Menestra de verduras. Fruta de temporada.'
          break;
        case 4: message = 'Puré de calabacín. Arroz con pescado (fogonero 32+) y verduras. Lácteo.'
          break;
        //Semana Amarilla
        case 7: message = 'Crema de berros con judias pintas. Albóndigas de ternera y cerdo y verduras caseras. Arroz integral. Fruta de tem orada.'
          break;
        case 8: message = 'Sopa de pollo. Macarrones integrales con tomate natural y verduras. Fruta de temporada.'
          break;
        case 9: message = 'Potaje de lentejas. Pechuga de pollo a la plancha con ajo y perejil. Ensalada. Fruta de temporada.'
          break;
        case 10: message = 'Ensalada de la huerta. Pescado al horno (fogonero 32+) con limón, ajo y perejil. Papas arrugadas. Fruta de temporada.'
          break;
        case 11: message = 'Puré de espinacas. Pizza margarita con tomate natural. Lácteo.'
          break;
        //Semana Violeta
        case 21: message = 'Sopa de verduras y fideos. Hamburguesa de pollo al horno con papas pobres. Fruta de temporada.'
          break;
        case 22: message = 'Potaje de acelgas con garbanzos. Churros de pescado (fogonero 32+) al horno ensalada. Fruta de temporada.'
          break;
        case 23: message = 'Ensalada césar con picatostes. Lomo de cerdo asado al horno con zanahorias salteadas. Fruta de temporada.'
          break;
        case 24: message = 'Crema de verduras de temporada. Atun en salsa teriyaki con arroz integral y ensalada. Fruta de temporada.'
          break;
        case 25: message = 'Puré de guisantes. Espaguettis integrales con atún, verduras y tomate natural. Lácteo.'
          break;
        //Semana Roja
        case 28: message = 'Crema de verduras de temporada. Estofado de ternera con verduras. Arroz integral. Fruta de temporada.'
          break;
        case 29: message = 'Ensalada de papas aliñadas con melva. Croquetas de pescado caseras. Menestra de verduras. Fruta de temporada.'
          break;
        case 30: message = 'Sopa de fideos con verduras y ternera. Pollo asado al curry Cous-cous con caldo de ave y cilantro. Fruta de temporada.'
          break;
        default: message = 'Día no lectivo';
      }
      break;
    case 'Mayo':
      switch (currentDateNum) {
        case 1: message = 'Potaje de lentejas Y verduras. Tortilla española al horno. Ensalada. Fruta de temporada'
          break;
        case 2: message = 'Puré de zanahorias. Canelones con bechamel casera tomates aliñados. Lácteo.'
          break;
        //Semana Verde
        case 5: message = 'Sopa de pescado (fogonero 32+) y arroz. Crunchy de pollo al horno. Ensalada. Fruta de temporada.'
          break;
        case 6: message = 'Potaje de berros con judias blanca. Tacos de pescado con mojo de cilantro. Papas guisadas Fruta de temporada.'
          break;
        case 7: message = 'Ensalada mediterránea con aliño de la casa. Filete de cerdo a la plancha con verduras salteadas. Fruta de temporada.'
          break;
        case 8: message = 'Crema de calabaza. Arroz con verduras y pollo. Fruta de temporada.'
          break;
        case 9: message = 'Púre de espinacas. Macarrones integrales con tomate natural y verduras. Lácteo.'
          break;
        //Semana Azul
        case 12: message = 'Potaje de verduras con garbanzos. Fingers de pollo al horno con ensalada. Fruta de temporada.'
          break;
        case 13: message = 'Sopa de estrellitas. Tacos de atún en salsa de tomate natural. Papas parisinas. Fruta de temporada.'
          break;
        case 14: message = 'Crema de zanahorias. Tallarines integrales con boloñesa con tomate natural. Fruta de temporada.'
          break;
        case 15: message = 'Ensalada mixta. Croquetas de pollo caseras al horno. Menestra de verduras. Fruta de temporada.'
          break;
        case 16: message = 'Puré de calabacín. Arroz con pescado (fogonero 32+) y verduras. Lácteo.'
          break;
        //Semana Amarilla
        case 19: message = 'Crema de berros con judias pintas. Albóndigas de ternera y cerdo y verduras caseras. Arroz integral. Fruta de tem orada.'
          break;
        case 20: message = 'Sopa de pollo. Macarrones integrales con tomate natural y verduras. Fruta de temporada.'
          break;
        case 21: message = 'Potaje de lentejas. Pechuga de pollo a la plancha con ajo y perejil. Ensalada. Fruta de temporada.'
          break;
        case 22: message = 'Ensalada de la huerta. Pescado al horno (fogonero 32+) con limón, ajo y perejil. Papas arrugadas. Fruta de temporada.'
          break;
        case 23: message = 'Puré de espinacas. Pizza margarita con tomate natural. Lácteo.'
          break;
        //Semana Violeta
        case 26: message = 'Sopa de verduras y fideos. Hamburguesa de pollo al horno con papas pobres. Fruta de temporada.'
          break;
        case 27: message = 'Potaje de acelgas con garbanzos. Churros de pescado (fogonero 32+) al horno ensalada. Fruta de temporada.'
          break;
        case 28: message = 'Ensalada césar con picatostes. Lomo de cerdo asado al horno con zanahorias salteadas. Fruta de temporada.'
          break;
        case 29: message = 'Crema de verduras de temporada. Atun en salsa teriyaki con arroz integral y ensalada. Fruta de temporada.'
          break;
        case 30: message = 'Puré de guisantes. Espaguettis integrales con atún, verduras y tomate natural. Lácteo.'
          break;
        default: message = 'Día no lectivo';
      }
      break;
    case 'Junio':
      switch (currentDateNum) {
        //Semana Roja
        case 2: message = 'Crema de verduras de temporada. Estofado de ternera con verduras. Arroz integral. Fruta de temporada.'
          break;
        case 3: message = 'Ensalada de papas aliñadas con melva. Croquetas de pescado caseras. Menestra de verduras. Fruta de temporada.'
          break;
        case 4: message = 'Sopa de fideos con verduras y ternera. Pollo asado al curry Cous-cous con caldo de ave y cilantro. Fruta de temporada.'
          break;
        case 5: message = 'Potaje de lentejas Y verduras. Tortilla española al horno. Ensalada. Fruta de temporada'
          break;
        case 6: message = 'Puré de zanahorias. Canelones con bechamel casera tomates aliñados. Lácteo.'
          break;
        //Semana Verde
        case 9: message = 'Sopa de pescado (fogonero 32+) y arroz. Crunchy de pollo al horno. Ensalada. Fruta de temporada.'
          break;
        case 10: message = 'Potaje de berros con judias blanca. Tacos de pescado con mojo de cilantro. Papas guisadas Fruta de temporada.'
          break;
        case 11: message = 'Ensalada mediterránea con aliño de la casa. Filete de cerdo a la plancha con verduras salteadas. Fruta de temporada.'
          break;
        case 12: message = 'Crema de calabaza. Arroz con verduras y pollo. Fruta de temporada.'
          break;
        case 13: message = 'Púre de espinacas. Macarrones integrales con tomate natural y verduras. Lácteo.'
          break;
        //Semana Azul
        case 16: message = 'Potaje de verduras con garbanzos. Fingers de pollo al horno con ensalada. Fruta de temporada.'
          break;
        case 17: message = 'Sopa de estrellitas. Tacos de atún en salsa de tomate natural. Papas parisinas. Fruta de temporada.'
          break;
        case 18: message = 'Crema de zanahorias. Tallarines integrales con boloñesa con tomate natural. Fruta de temporada.'
          break;
        case 19: message = 'Ensalada mixta. Croquetas de pollo caseras al horno. Menestra de verduras. Fruta de temporada.'
          break;
        case 20: message = 'Puré de calabacín. Arroz con pescado (fogonero 32+) y verduras. Lácteo.'
          break;
        default: message = 'Día no lectivo';
      }
      break;

    default: message = 'Día no lectivo';
  }

  document.getElementById('subjectMessage').textContent = `${message}`;
}

function updateDay(offset) {
  if (offset == 0){
    currentDate = new Date();
  }
  currentDate.setDate(currentDate.getDate() + offset);
  updateSchedule(currentDate);
  
}

document.getElementById('prevDay').addEventListener('click', () => updateDay(-1));
document.getElementById('nextDay').addEventListener('click', () => updateDay(1));
document.getElementById('presentDay').addEventListener('click', () => updateDay(0));



// Inicializar con la fecha actual
updateSchedule(currentDate);
//setInterval(updateSchedule, 60000);