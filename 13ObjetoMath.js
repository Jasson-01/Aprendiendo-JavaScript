Math.E // Devuelve el numero de Euler
Math.PI // Devuelve PI
Math.SQRT2 // Devuelve la raiz cuadrada de 2
Math.SQRT1_2 // Devuelve la raiz cuadrada de 1/2
Math.LN2 // Devuelve el logaritmo natural de 2

const numero = 2.9
const redondeo = Math.round(numero) // Desde 0.5 se redondea hacia arriba y menor a 0.5 se redondea hacia abajo
const redondeo1 = Math.ceil(numero) // Redondea hacia arriba
const redondeo2 = Math.floor(numero) // Redondea hacia abajo
const redondeo3 = Math.trunc(numero) // Saca los decimales y te devuelve el numero entero

console.log(redondeo3)

// RANDOM
console.log(Math.random()) // Te devuelve un numero en el rango del 0 al 1
console.log(Math.random()*100) // Te devuelve un numero en el rango del 0 al 100 (Con decimales)
