//----------------------------------------- SET : es un conjunto unico de elementos
// Un ejemplo se uso: para limpiar los elementos repetidos de un array

let conjunto = new Set(["uno","dos","tres","uno"])

console.log(conjunto) // res => Set(3) { 'uno', 'dos', 'tres' }


conjunto.add("cinco") // Para agregar elementos
conjunto.delete("uno") // Elimina elemento del conjunto
//--> Metodos:

conjunto.has("dos") // Devuelve un booleano (Pregunta si esta el elemento en el conjunto)
conjunto.size // Cuenta los elementos del conjunto sin contar los repetidos

// EJEM1:

let array = ["cama","armario","escritorio","cama","estante","mesita de luz"]

function comprar(muebles){
    console.log(muebles)
}

function comprarSoloUnaUnidad(muebles){
    let unicaUnidad = new Set(muebles)
    console.log(unicaUnidad)
}

comprarSoloUnaUnidad(array) // res = Set(5) { 'cama', 'armario', 'escritorio', 'estante', 'mesita de luz' }


//----------------------------------------- MAP : Es un conjunto de pares(clave,valor) pero no son OBJETOS (map != objeto)
// Un ejemplo se uso: Se usan donde los objetos no llegan

let mapa = new Map([
    ["computadora",10],
    ["tablets",5],
    ["celulares",15]
])


console.log(mapa) // Map(3) { 'computadora' => 10, 'tablets' => 5, 'celulares' => 15 }

mapa.set("teclados",20) // Agrego
mapa.delete("computadora") // elimino
mapa.size // me dice cuantos elementos hay en el mapa
mapa.has("tablets") // me dice si esta el elemento

//----------------------------------------- EJM 3
// Si tengo un array con elementos repetidos, uso "Set" para eliminar los repetidos y luego lo convierto a un array denuevo usando Spread Operator (...)

let array7 = [1,1,2,2,3,3,4,4,5]

let unico = new Set (array7)

let nuevoArray = [...unico] // Spread Operator (...)

console.log(nuevoArray) // [ 1, 2, 3, 4, 5 ]
