const Vehiculo= require("./Vehiculo")
class Auto extends Vehiculo{
   
    constructor(puertas, marca, modelo, precio){
        super(marca, modelo, precio);
       this.puertas=puertas;
    }

    getPuertas(){
        return this.puertas;
    }
    setPuertas(puertas){
        this.puertas=puertas;
    }

    getDescripcion() {
        return `Puertas: ${this.puertas}`;
        
	}
}

module.exports = Auto;