
// -------------------------------------------- typeOf
// Me dice el tipo de dato

//STRING
let a = typeof "Jasson"

// NUMBER
let b = typeof 3.14

// NUMBER (caso especial)
let c = typeof NaN

// BOOLEAN
let d = typeof true

// OBJETO 
let f = typeof {curso: "JAVASCRIPT"}

// OBJETO  (Caso especial)
let e = typeof ["a","b","c"] // Esto es un array

// OBJETO (caso especial)
// ¿ Que pasa con "new" ? -> (se usa para hacer una instacia de clase)
// Tambien se comporta como Objeto su tipado
let g = typeof new Set()

// OBJETO (caso especial)
let j = typeof null

// FUNCTION
let h = typeof function (){}

// UNDEFINED (por error)
let i = typeof carros


// EJEMPLO DE USO:

let datoQueVieneDeBackend = "Curso JAVASCRIPT"

if (typeof datoQueVieneDeBackend == "string") {
    console.log("Lo que viene del backend es String")
} else {
    console.log("Reclamale a tu compañero que te mandde un string")
}


// -------------------------------------------- instanceOf

//--------- Ahora nos preguntamos ¿Que pasa con los Objetos especiales? -> ¿Como diferencio sus tipos?
// Para estos casos usamos "instanceOf"


//EJMPLO:

let e2 = [1,2,3,4,5]
let f2 = new Date()
let g2 = new Set()
let h2 = new Map()
// let i2 = null  -----> No se puede hacer un "instanceOf" de null (ERROR)

console.log(e2 instanceof Array) // res = True

if(e2 instanceof Array){
    console.log("Gracias Backend por mandarme un Array")
} else {
    console.log("Mandame un Array por favor")
}
 