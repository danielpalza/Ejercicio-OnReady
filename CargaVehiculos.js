const Variables=require("./datos");
const Moto=require("./Vehiculos/Moto")
const Auto=require("./Vehiculos/Auto")

// Creacion de clases
function creacionClases(){
  let arrVehiculos=[]
  
  const arr=Variables.map((a)=>{
    
    if(a.caracteristica[0]=="Cilindrada"){

        arrVehiculos.push( new Moto(
        a.caracteristica[1],
        a.marca,
        a.modelo,
        a.precio,
      ))
    }
    else{
        arrVehiculos.push( new Auto(
        a.caracteristica[1],
        a.marca,
        a.modelo,
        a.precio,
      ))
    }
    
  })
  return arrVehiculos;
}

module.exports = creacionClases;