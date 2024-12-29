
// Array normal
const array = ["uno","dos","tres"]

// Una forma de inicializar un array es:
const array2 = new Array (5) // Inicializamos con 5 elementos el Array

// Agregamos los elementos al Array 
array2[0] = "uno"
array2[1] = "dos"
array2[2] = "tres"

// Si no cubrimos todos los espacios se agregan espacios "empty" 
console.log(array2)


//-------- Podemos agregar (arrays,objetos) dentro de arrays 
const array3 = new Array (3)

array3[0] = "Curso dde JavaScript"
array3[1] = [1,2,3,4,5]
array3[2] = {nombre:"pepe"}

console.log(array3)

// ---> puedes usar  METODOS

// .length -> para saber la longitud del array
// .sort() -> para ordenar el array (si es con numero lo ordena de menor a mayor, si es con string lo ordena en orden alfabetico)


// OBS
// Si queremos acceder al ultimo elemento usamos:
// array3[array3.length-1]

// Si queremos añadir elementos (Esta es una forma de hacerlo)
const array4 = ["HTML","CSS","JS"]
array4[array4.length] = "REACT"
array4[array4.length] = "ANGULAR"

console.log(array4) // res = [ 'HTML', 'CSS', 'JS', 'REACT', 'ANGULAR' ]

//----------------------------------- FILTER

const array5 = [
    {nombre:"Pedro", apellido:"Gonzales"},
    {nombre:"juanita", apellido:"Gonzales"},
    {nombre:"lucia", apellido:"Gonzales"},
    {nombre:"bella", apellido:"perez"},
    {nombre:"glottis", apellido:"juares"},
    {nombre:"fernanda", apellido:"fernandez"},
]

const resultado5 = array5.filter(x => x.apellido == "Gonzales")

for (let index = 0; index < resultado5.length; index++){
    const element = resultado5[index];
    console.log(element.nombre)
} // res = Pedro
//         juanita
//         lucia

//----------------------------------- MAP

const array6 = ["manzana","manzana","manzana","manzana"]

const resultado6 = array6.map( x => {
    if ( x == "manzana") return "naranja"
})
console.log(resultado6) // [ 'naranja', 'naranja', 'naranja', 'naranja' ]


//----------------------------------- FILL

const array7 = ["manzana","manzana","manzana","manzana"]
const resultado7 = array7.fill("naranja",1) // 1 es el indice  desde donde comienza a reemplazar
console.log(resultado7)

//----------------------------------- FIND
// Devuleve el primer elemento que coincida con lo que buscas, no importa si este en un objeto te trae todo el elemento que este en el contexto de lo que buscas.

const array8 = ["manzana","manzana","manzana","manzana","pera","manzana","pera"]
const resultado8 = array8.find(x => x == "pera") // 1 es el indice  desde donde comienza a reemplazar
console.log(resultado8) // pera

//----------------------------------- finIndex
// Nos dice la posicion en la cual se encuentra el elemento

const array9 = ["manzana","manzana","manzana","manzana","pera"]
const resultado9 = array9.findIndex(x => x == "pera") 
console.log(resultado9) // 4

//----------------------------------- SOME
// Me ddevuelve "true" (si por lo menos hay 1) esta el elemento y "false" si no esta

const array10 = ["manzana","manzana","manzana","manzana","pera"]
const resultado10 = array10.some(x => x == "pera") 
console.log(resultado10) // true


//----------------------------------- EVERY
// Me devuelve "true" (si todos los elementos son el elemento que busco) y si hay almenos 1 que es distinto me devuelve "false"

const array11 = ["manzana","manzana","manzana","manzana","pera"]
const resultado11 = array11.every(x => x == "pera") 
console.log(resultado11) // false


//----------------------------------- POP
// Arranca el ultimo elemento del array y nos retorna el ultimo elemento

const array12 = ["manzana","manzana","manzana","manzana","pera"]
const resultado12 = array12.pop()
console.log(array12) //[ 'manzana', 'manzana', 'manzana', 'manzana' ]
console.log(resultado12) // pera

//----------------------------------- SHIFT
// Arranca el primer elemento del array y nos retorna el primer elemento

const array13 = ["manzana","pera","platano","mandarina"]
const resultado13 = array13.shift()
console.log(array13) //[ 'manzana', 'manzana', 'manzana' ]
console.log(resultado13) // "manzana"

//----------------------------------- PUSH
// Agrega al final del array un elemento

const array14 = ["manzana","pera","platano","mandarina"]
array14.push("banana")
console.log(array14) // res = [ 'manzana', 'pera', 'platano', 'mandarina', 'banana' ]


//----------------------------------- UNSHIFT
// Agrega al principio del array el elemento

const array15 = ["manzana","pera","platano","mandarina"]
array15.unshift("ciruela")
console.log(array15) // res = [ 'ciruela', 'manzana', 'pera', 'platano', 'mandarina' ]


//----------------------------------- SPLICE
// Esto es para cortar el array y "poner cuantos elementos quieres eliminar"
// El splice() si modifica el array
     
const array16 = ["manzana","pera","platano","mandarina"]
//      .splice(indice, cuantos quiero cortar, que agrego)       
array16.splice(2,1,"ciruela")
console.log(array16) 

//----------------------------------- SLICE
// No modifica el array
// te devuelve un nuevo array con la posicion inicial y final que quieres del array original


const array17 = ["manzana","naranja","limon","pera","ciruela","kiwi"]

const resultado17 = array17.slice(2,4)
console.log(resultado17) // res = [ 'limon', 'pera' ]

//----------------------------------- CONCAT
// Junta listas
const lista1 = ["a","b","c"]
const lista2 = [1,2,3]

const resultado18 = lista1.concat(lista2)
console.log(resultado18) // [ 'a', 'b', 'c', 1, 2, 3 ]

//----------------------------------- SORT
// Me ordena por el primer caracter "ALFANUMERICO"

const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
console.log(numeros.sort()) // [1, 10, 11, 12, 13, 14, 15,  2,  3,  4,  5,  6, 7,  8,  9 ]

// Si queremos que se ordenado tendriamos que hacer:
const resultado19 = numeros.sort( (x,y) => x-y ) // forma ascendente
console.log(resultado19)

// Otro ejemplo
const auto = [
    {auto:"FIAT", año:2020},
    {auto:"BMW", año:2019},
    {auto:"RENAULT", año:2021},
    {auto:"FORDD", año:2023},    
]

console.log(auto.sort((x,y) => x.año - y.año)) // res =>
//     [
//     { auto: 'BMW', 'año': 2019 },
//     { auto: 'FIAT', 'año': 2020 },
//     { auto: 'RENAULT', 'año': 2021 },
//     { auto: 'FORDD', 'año': 2023 }
//     ]


// NOTA : Las constantes no se pueden redeclarar, por eso no se usan mayormente en array (a cambio es preferible usar "let" con los array) 
