const Vehiculo= require("./Vehiculo")

class Moto extends Vehiculo{
  
    constructor(cilindrada, marca, modelo, precio){
        super(marca, modelo, precio);
        this.cilindrada=cilindrada;
    }

    getCilindrada(){
        return this.cilindrada;
    }
    setCilindrada(cilindrada){
        this.cilindrada=cilindrada;
    }

    getDescripcion() {
		return `Cilindrada: ${this.cilindrada}`;
	}
}

module.exports = Moto;