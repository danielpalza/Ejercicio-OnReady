const CargaClases=require("./CargaVehiculos")
const Moto=require("./Vehiculos/Moto")
const Auto=require("./Vehiculos/Auto")
const Vehiculo = require("./vehiculos/Vehiculo")

const clases=CargaClases()

//Lista todos los vehiculos y sus caracteristicas
function Listar(){
  clases.forEach((a)=>{
    console.log(`Marca: ${a.getMarca()} // Modelo: ${a.getModelo()} //  ${a.getDescripcion()} // Precio: $${a.getPrecio()}`)
  
    })
}

//Busca un vehiculo con la letra indicada
function VehiculoConLetra(letra){
    const regex = new RegExp(`${letra}`,"g");    
    clases.forEach((e)=>{

      if(regex.test(e.getModelo())){
        return console.log(`Vehiculo que contiene en el modelo la letra ‘Y’: ${e.getMarca()} ${e.getModelo()} $${e.getPrecio()}`);
      }

    })
  }

//Ordena los vehiculos de mayor a menor segun su precio
  function OrdernarPrecio(){
      //Vehiculo mas caro
    function outPuntos(a){
        return parseInt(a.replace(/[.,]/g, ''),10)
      }
  
    let ordenarPrecio=clases.sort((a, b) =>{
        if (outPuntos(a.getPrecio()) > outPuntos(b.getPrecio())) {
          return 1;
        }
        if (outPuntos(a.getPrecio()) < outPuntos(b.getPrecio())) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
      return ordenarPrecio;
  
  }


  function ListarPrecio(ordenarPrecio){
    console.log("Vehículos ordenados por precio de mayor a menor: ")
    const mayorAMenor=ordenarPrecio.reverse()

    mayorAMenor.forEach((item) => {
      console.log(`${item.marca} ${item.modelo}`)
    });


    }

function Destacados(){
    ordenarPrecio= OrdernarPrecio();
    
    console.log(`Vehículo más caro: ${ordenarPrecio[ordenarPrecio.length-1].getMarca()} ${ordenarPrecio[ordenarPrecio.length-1].getModelo()} `)
    console.log(`Vehículo más barato: ${ordenarPrecio[0].getMarca()} ${ordenarPrecio[0].getModelo()} `)
    VehiculoConLetra("Y");
    console.log("================================================")
    ListarPrecio(ordenarPrecio)
}



module.exports = {Listar, Destacados}
