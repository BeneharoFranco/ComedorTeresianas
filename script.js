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

/*Aquí empieza la animación del fondo-------------------------------------------------------------------------------------------------*/
var Stars = function(args) {
    if (args === undefined) args = {};
    var _scope = this;

    this.stars = [];
    this.vel = args.vel || 1;
    this.radius = args.radius || 1;
    this.alpha = 0.5;
    this.starsCounter = args.stars || 300;
    var center = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
    };
    var canvas, context;
    this.init = function() {
        canvas = document.createElement("canvas");
        document.body.appendChild(canvas);
        context = canvas.getContext("2d");
        context.lineCap = "round";
        this.start();
        this.resize();
        // 
        window.addEventListener("resize", this.resize.bind(this));
    }

    this.start = function() {
        this.stars = [];
        for (var i = 0; i < this.starsCounter; i++) {
          setTimeout(function(){
            _scope.stars.push(new Star());
          }, i*30);
        }
    }

    this.resize = function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        center.x = canvas.width / 2;
        center.y = canvas.height / 2;
    }

    this.animate = function() {
        window.requestAnimationFrame(this.animate.bind(this));
        this.render();
    }
    this.render = function() {
        context.fillStyle = 'rgba(1, 4, 35, 0.8)';
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.strokeStyle = "greenyellow";
        for (var i = 0; i < this.stars.length; i++) this.stars[i].update();
    }

    var Star = function() {
        this.x = center.x;
        this.y = center.y;
        this.init = function() {
            this.radius = Math.random() * _scope.radius;
            this.x = center.x;
            this.y = center.y;
            this.lineWidth = 0;
            this.vel = {
                x: Math.random() * 10 - 5,
                y: Math.random() * 10 - 5
            }
        }
        this.update = function() {
            this.vel.x *= 1.02;
            this.vel.y *= 1.02;
            this.lineWidth += 0.02;
            this.x0 = this.x;
            this.y0 = this.y;
            this.x += this.vel.x;
            this.y += this.vel.y;
            this.draw();
            if (this.isDead()) this.init();
        }
        this.draw = function() {
            context.beginPath();
            context.moveTo(this.x0, this.y0);
            context.lineTo(this.x, this.y);
            context.lineWidth = this.lineWidth;
            context.stroke();
        }
        this.isDead = function() {
            return (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height);
        }
        this.init();
        return this;
    }
    this.init();
    this.animate();
    return this;
}

var _stars = new Stars();