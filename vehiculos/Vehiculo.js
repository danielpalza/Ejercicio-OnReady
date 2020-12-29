
class Vehiculo {
   
    constructor(marca, modelo, precio){
        this.marca=marca;
        this.modelo=modelo;
        this.precio=precio;
    }
    
    //Funciones

    getMarca(){
        return this.marca;
    }
    setMarca(marca){
        this.marca=marca;
    }

    getModelo(){
        return this.modelo;
    }
    setModelo(modelo){
        this.modelo=modelo;
    }

    getPrecio(){
        return this.precio;
    }
    setPrecio(precio){
        this.precio=precio;
    }




}

module.exports = Vehiculo;
