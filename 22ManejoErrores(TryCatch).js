
//------------------------------- EJEM1

try{
    // LLAMADO AL BACKEND (a través de un API)
    console.log("Llamando al backend")
   
    // throw("Este cliente no esta apto para la compra") // Si queremos que cuando llamemos nos de error
    // console.log("Salio todo con exito")
}catch(error){
    // TOMAMOS EL ERROR y hacemos algo que nos parezca correcto
    console.log("Algo fallo",error)
}finally{
    // Se ejecuta siempre por mas que falle o no falle
    console.log("Se ejecuta siempre")
}


//------------------------------- EJEM2

try{
    // LLAMADO AL BACKEND (a través de un API)
    console.log("Llamando al backend")
   
    setTimeout(()=>{ // Esta parte es ASINCRONO
        console.log("El backend nos respondde")
        console.log("Cliente Apto para la compra")

    },1000); // 500 esta en milisegundos entonces 1000 = 1 segundo

}catch(error){
    // TOMAMOS EL ERROR y hacemos algo que nos parezca correcto
    console.log("Algo fallo",error)
}finally{
    // Se ejecuta siempre por mas que falle o no falle
    console.log("Se ejecuta siempre")
}


//------------------------------- EJEM3

try{
    // LLAMADO AL BACKEND (a través de un API)
    console.log("Llamando al backend")
   
    setTimeout(()=>{ // Esta parte es ASINCRONO
        console.log("El backend nos respondde")
        throw("El cliente no esta apto para la compra")

    },1000); // 500 esta en milisegundos entonces 1000 = 1 segundo

}catch(error){
    // TOMAMOS EL ERROR y hacemos algo que nos parezca correcto
    console.log("Algo fallo",error)
}

// Nos devuelve "ERROR" todo este bloque de codigo porque try-catch solo sirve para acciones SINCRONICAS no ASINCRONICAS  como el setTimeout
