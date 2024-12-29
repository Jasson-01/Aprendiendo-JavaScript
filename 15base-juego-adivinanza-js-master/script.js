// Aca el juego selccionan un numero al azar para que addivines
let numeroAzar = Math.floor(Math.random()*100) + 1 // Para que salga entre 1 y el 100 inclusive!

let numeroEntrada = document.getElementById("numeroEntrada")
let mensaje = document.getElementById("mensaje")
let intento = document.getElementById("intento")
let intentos = 0

// Esta accion se va a ejecutar cuando se toque el boton chequear
function chequearResultado(){
    intentos ++
    intento.textContent = intentos
    let numeroIngresado = parseInt(numeroEntrada.value)

    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
        mensaje.textContent = "Por favor introduce un numero valido entre el 1 y el 100" // "textContent" es un atributo del "p" (parrafo)
        return
    }
    
    if ( numeroIngresado == numeroAzar) {
        mensaje.textContent = "¡Felicitaciones, has adivinado el numero!!";
        mensaje.style.color = "green";
        numeroEntrada.disabled = true;
    } else if(numeroIngresado < numeroAzar) {
        mensaje.textContent = "Mas alto! El numero es mayor al que dijiste";
        mensaje.style.color = "red"
    } else {
        mensaje.textContent = "Mas bajo! El numero es menor al que dijiste";
        mensaje.style.color = "red"
    }

    

}