// Forma de poner la fecha: AAAA-MM-DD (forma ISO)

// const fecha = new Date("2021-05-01")
const fecha = new Date()

console.log(fecha.getFullYear()) // res = 2024 (Año), (Te devuelve el año actual)
console.log(fecha.getMonth()) // res = 11 (Mes),(Porque los meses los cuenta desde 0 porque son un array de meses)
console.log(fecha.getDate()) // res = 28 (Dia)

// SHORT 03/15/2020
// LONG Mar 25 2020

// Podemos cambiar la fecha (dia-mes-año) usando SET

fecha.setFullYear(2029)
fecha.setMonth(9)
fecha.setDate(29)

// // NOTA
// get -> pedir informacion
// set -> configurar informacion

