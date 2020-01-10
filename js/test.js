
// var reserva1 = new Reserva(new Date(2018, 7, 24, 11, 00), 8, 350, "DES1");


// Restaurant.prototype.reservarHorario = function(horarioReservado) {
//     for (var i = 0; i < this.horarios.length; i++) {
//         if (this.horarios[i] === horarioReservado) {
//             this.horarios.splice(i, 1);
//             return;
//         }
//     }
// }

// Cuando se reserva un horario de un restaurant, el horario
// correspondiente se elimina del arreglo.

var expect = chai.expect;


describe('Testea eliminacion de horario', function () {
        //primer restaurant del listado
        var RestaurListadoTest = listadoDeRestaurantes[0];
        it('reservar horario actual',
        //primer horario
        function () {

                var HorarioActual = RestaurListadoTest.horarios[0];
                //creo array donde agrego  horario de restaurant
                var NewArrayHorariosInicio = RestaurListadoTest.horarios.slice();
                //hago reserva de HorarioActual
                RestaurListadoTest.reservarHorario(HorarioActual);
                //vuelvo a poner al listado el horario reicentemente reservado
                RestaurListadoTest.horarios.unshift(HorarioActual);
                // comparar largo de arrays 
                expect(RestaurListadoTest.horarios).to.eql(NewArrayHorariosInicio);
                //tienen que ser iguales, primero adhiero el 1er horario de 1er restaurant de listadoDeRestaurantes
                //a variable RestaurListadoTest luego creo nuevo array NewArrayHorariosInicio para poder 
                //comparar y le adhiero .slice
                //1 er horario del 1er restaurant , luego hago reserva, supuestamente la
                //funcion reserva me elimina el horario de mi variable RestaurListadoTesttesteo, luego pongo nuevamente 
                //unshift el horario
                //anterior a mi variable RestaurListadoTest testeo y la comparo con el nuvo array NewArrayHorariosInicio
                 // tendrian que quedar iguales nuvamente

          })

          it('reservar horario que no exixte', function () {

                  var NewArrayHorariosInicio = RestaurListadoTest.horarios;
                  RestaurListadoTest.reservarHorario("19:21");
                  expect(RestaurListadoTest.horarios).to.eql(NewArrayHorariosInicio);
                //si los dos arrays son igales quiere decir que no elimino el  horario al momento de reservar
                // por lo tanto la cantidad de horarios de RestaurListadoTest  es igual a NewArrayHorariosInicio
                // la cual tiene la cantidad de horarios originales sin tocar
          })

         it('se intenta reservar horario sin parametro', function(){
                 var NewArrayHorariosInicio = RestaurListadoTest.horarios;
                  RestaurListadoTest.reservarHorario();
                  expect(RestaurListadoTest.horarios).to.eql(NewArrayHorariosInicio);
                //si los dos arrays son igales quiere decir que no elimino el  horario al momento de reservar 
                //porque no habia parametro
                // por lo tanto la cantidad de horarios de RestaurListadoTest  es igual a NewArrayHorariosInicio
                // la cual tiene la cantidad de horarios originales sin tocar
         })

  })

  //Testeá la función obtenerPuntuación()


//   Dado un restaurant con determinadas calificaciones, la
// puntuación (que es el promedio de ellas) se calcula
// correctamente.

// Restaurant.prototype.obtenerPuntuacion = function() {
//     if (this.calificaciones.length === 0) {
//         return 0;
//     } else {
//         var sumatoria = 0;
//         for (var i = 0; i < this.calificaciones.length; i++) {
//             sumatoria += this.calificaciones[i]
//         }
//         var promedio = sumatoria / this.calificaciones.length;
//         return Math.round(promedio * 10) / 10;
//     }

// }

describe('Testea la función obtenerPuntuación()', function(){

                var RestaurListadoTest = listadoDeRestaurantes[2];

        it('la puntuacion se calcula correctamente', function(){

                
                 //guardar el restaurante y sus variables calificaciones en otro array
                 var NewArrayCalificaciones = RestaurListadoTest.calificaciones.slice();
                 //hacer la sumatoria desde nuevo array de calificaciones
                 var sumatoriaCalificaciones = NewArrayCalificaciones.reduce(function(suma, adicion){
                         return suma + adicion;
                         },0);
                 //sacar promedio
                 var promedioCalificaciones = sumatoriaCalificaciones / NewArrayCalificaciones.length;
                 // pruebo obtener puntuacion
                 var obtenerPuntuacionTest = RestaurListadoTest.obtenerPuntuacion();
                 //comparar obtenerPuntuacion y promedioCalificaciones
                 expect(obtenerPuntuacionTest).to.eql(promedioCalificaciones);
                 //
                //se compara codigo testeo de sumatoria y promedio con el codigo original
                //adheriendo una calificacion 


        })

             it('testea puntuacion sin calificacion tiene q dar 0', function(){
                     RestaurListadoTest.calificaciones = [];
                     var obtenerPuntuacionTestSinCalificacion = RestaurListadoTest.obtenerPuntuacion();
                     expect(obtenerPuntuacionTestSinCalificacion).to.eql(0);
             })

});


//Testeá la función calificar()

// Restaurant.prototype.calificar = function(nuevaCalificacion) {
//     if (Number.isInteger(nuevaCalificacion) && nuevaCalificacion > 0 && nuevaCalificacion < 10) {
//         this.calificaciones.push(nuevaCalificacion);
//     }
// }

describe('testeo funcion calificar', function(){

        var RestaurListadoTest = listadoDeRestaurantes[2];

        it('testear string', function(){
               var PrimeranuevaCalificacionInteger = RestaurListadoTest.calificaciones.slice();
                var lengthnuevaCalificacionInteger = PrimeranuevaCalificacionInteger.length;
                RestaurListadoTest.calificar('0');
                expect(RestaurListadoTest.calificaciones.length).to.eql(lengthnuevaCalificacionInteger);
        })

        it('testear en negativo', function(){
                var PrimeranuevaCalificacionInteger = RestaurListadoTest.calificaciones.slice();
                var lengthnuevaCalificacionInteger = PrimeranuevaCalificacionInteger.length;
                RestaurListadoTest.calificar(-5);
                expect(RestaurListadoTest.calificaciones.length).to.eq(lengthnuevaCalificacionInteger);
        })
})


// Dado un id, busca el objeto del listado que tiene ese id
// Listado.prototype.buscarRestaurante = function(id) {
//     for (var i = 0; i < this.restaurantes.length; i++) {
//         if (this.restaurantes[i].id === id) {
//             return this.restaurantes[i]
//         }
//     }
//     return "No se ha encontrado ningún restaurant";
// }


  describe('Testea la función buscarRestaurante(id)', function(){
        it('buscar id', function(){
                var buscarID = listado.buscarRestaurante(10);
                var IDencontrado = buscarID.id;
                expect(IDencontrado).to.eql(10);
        })

        it('buscar id que no existe', function(){
                var buscarID = listado.buscarRestaurante(145);
                var IDencontrado = buscarID;
                expect(IDencontrado).to.eql('No se ha encontrado ningún restaurant');

        })

  });




 describe('Testea la función obtenerRestaurantes', function(){

         it('buscar restaurantes en Paris con Desayuno a las 19:00 hs', function(){
                var busquedaArray = listado.obtenerRestaurantes("Desayuno","París","19:00");
                 var Arraycomparacion = [listado.restaurantes[7], listado.restaurantes[18]];
                 expect(busquedaArray).to.have.members(Arraycomparacion);

         })

         it('buscar restaurantes en Roma no importa horario ni rubro', function(){
                 var busquedaArray = listado.obtenerRestaurantes(null,"Roma",null);
                 var Arraycomparacion = [listadoDeRestaurantes[6], listadoDeRestaurantes[15]];
                 expect(busquedaArray).to.have.members(Arraycomparacion);
         })

 });

 describe('Test de funcion de calculo de Precio Base de una Reserva', function(){
    it('Dado una una reserva con 8 personas, $350 por persona, el Precio base debe ser igual a 2800', function(){
        var reserva1 = new Reserva(new Date(2018, 7, 24, 11, 00), 8, 350, "DES1");

        let precioBaseManual = 2800; //=
        // let resultado = reserva1.calculoPrecioBase()
        expect(reserva1.calculoPrecioBase()).to.eql(precioBaseManual);
    })

 });

 

     


    




















