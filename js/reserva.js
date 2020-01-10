
var Reserva = function(horario, cantPersonas, precioPorPersona, codeDesc){
        this.horario = horario;
        this.cantPersonas = cantPersonas;
        this.precioPorPersona = precioPorPersona;
        this.codeDesc = codeDesc;
}


//funcion precio base

Reserva.prototype.calculoPrecioBase = function(){
        return (this.cantPersonas)*(this.precioPorPersona);
};

//precio final

Reserva.prototype.precioFinal = function(){
        return Math.round(this.calculoPrecioBase() + this.calculoAdicional() - this.calculoDescuento());
};

//calculo adicional

Reserva.prototype.calculoAdicional = function(){
        return this.calculoAdicionalPorDia() + this.calculoAdicionalporHorario();
};


//calculo adicional x horario

Reserva.prototype.calculoAdicionalporHorario = function(){
       var montoAdicional;
       var preciobasico = this.calculoPrecioBase();

        if ((this.horario.getHours() >=13) && (this.horario.getHours()<=14)) {
        montoAdicional = preciobasico*0.05;
    } else if ((this.horario.getHours() >=20) && (this.horario.getHours()<=21)) {
        montoAdicional= preciobasico*0.05;
    } else {
        montoAdicional = 0;
    }
    return montoAdicional;
};

//calculo adicional por dias

Reserva.prototype.calculoAdicionalPorDia = function(){
    var preciobasico = this.calculoPrecioBase();
    return (this.horario.getDay() >=4) ? preciobasico*0.10 : 0;
};

//descuentos

Reserva.prototype.calculoDescuento = function(){
        return this.descPorCodigo() + this.descPorGrupo();
};

//descuentoxcodigo

Reserva.prototype.descPorCodigo = function(){
        var montoDesc;
        switch (this.codeDesc) {
                case "DES15":
                        montoDesc = this.calculoPrecioBase() * 0.15;
                        break;
                case "DES200":
                        montoDesc = 200;
                        break;
                case "DES1":
                        montoDesc = this.precioPorPersona;
                        break;
                default:
                        montoDesc = 0;
                        break;
        }
        return montoDesc;
}

//descuento por grupo

Reserva.prototype.descPorGrupo = function(){
        var montoDesc;
        preciobasico = this.calculoPrecioBase();

        if (this.cantPersonas<4){
                montoDesc = 0;
        } else if ((this.cantPersonas>=4 && this.cantPersonas<=6)){
                montoDesc = preciobasico*0.05;
        } else if ((this.cantPersonas>=7 && this.cantPersonas<=8)){
                montoDesc = preciobasico*0.10;
        } else if ((this.cantPersonas>=8)){
                montoDesc = preciobasico*0.15;
        } else { 
                montoDesc = 0;
        }
        return montoDesc;

}

// const listadoDeReservas  = [
//     new Reserva (new Date(2018, 7, 24, 11, 00), 8, 350, "DES1"),
//     new Reserva (new Date(2018, 7, 27, 14, 00), 2, 150, "DES200"),
// ];

