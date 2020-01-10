var Restaurant = function(id, nombre, rubro, ubicacion, horarios, imagen, calificaciones) {
    this.id = id;
    this.nombre = nombre;
    this.rubro = rubro;
    this.ubicacion = ubicacion;
    this.horarios = horarios;
    this.imagen = imagen;
    this.calificaciones = calificaciones;
}

// Restaurant.prototype.reservarHorario = function(horarioReservado) {
//     for (var i = 0; i < this.horarios.length; i++) {
//         if (this.horarios[i] === horarioReservado) {
//             this.horarios.splice(i, 1);
//             return;
//         }
//     }
// }

//Refactorizando

Restaurant.prototype.reservarHorario = function(horarioReservado) {
    var HorariosFiltrados = this.horarios.filter(function(horario){
                return horario !== horarioReservado;
    });
    //Cambio horarios del restaurant por nuevos horarios
    this.horarios = HorariosFiltrados;
}





Restaurant.prototype.calificar = function(nuevaCalificacion) {
    if (Number.isInteger(nuevaCalificacion) && nuevaCalificacion > 0 && nuevaCalificacion < 10) {
        this.calificaciones.push(nuevaCalificacion);
    }
}

Restaurant.prototype.obtenerPuntuacion = function() {
    if (this.calificaciones.length === 0) {
        return 0;
    }
        return Math.round(promediarArr(this.calificaciones)*10)/10;
    // } else {
    //     var sumatoria = 0;
    //     for (var i = 0; i < this.calificaciones.length; i++) {
    //         sumatoria += this.calificaciones[i]
    //     }
    //     var promedio = sumatoria / this.calificaciones.length;
    //     return Math.round(promedio * 10) / 10;
    // }

}

var sumatoriaArr = function(arrayNum){
return arrayNum.reduce(function(acumula, elementos){
    return acumula + elementos;
});
}

var promediarArr = function(arrays){
    return sumatoriaArr(arrays)/arrays.length;
}