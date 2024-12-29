//----------------------------- IF - ELSE

//EJM1 -> (¿Puedes entrar este chico al boliche?)
let edadChico = 19;

if (edadChico >= 18) {
  console.log("Puedes ingresar");
} else {
  console.log("No puedes ingresar");
}
// res = Puedes ingresar


//----------------------------- IF (Anidado)
let edad = 18
let nacionalidad = "Peruana"
let tienePasaporte = true

if (edad >= 18) {
    console.log("Tienes edad para viajar, aprobado tramite 1")
    if (nacionalidad == "Peruana"){
        console.log("La documentacion esta correcta, aporbado tramite 2")
        if( tienePasaporte){
            console.log("Usted puede viajar, buen viaje")
        } else {
            console.log("No puedes viajar porque el pasaporte es obligatorio")
        }
    } else {
        console.log("Debes presentar la documentacion de tu pais de origen")
    }
} else {
  console.log("Debes ser mayor de edad para viajar al exterior")   
}


//----------------------------- SWITCH (Esto se utiliza cuando hay muchas posibilidades/opciones)

const estiloDeMusica = "Metal";
switch (estiloDeMusica) {
  case "Punk":
    console.log("Te recomiendo los Ramones");
    break;
  case "Hard Rock":
    console.log("Te recomiendo Guns N Roses");
    break;
  case "Metal":
    console.log("Te recomiendo Pantera");
    break;
  case "Rock and Roll":
    console.log("Te recomiendo los Rolling Stones");
    break;
  case "Pop":
    console.log("Te recomiendo Michael Jackson");
    break;
  default:
    console.log("No conozco esta musica pero te recomiendo escuchar Mozart");
    break;
}
