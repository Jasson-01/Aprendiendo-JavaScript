
let texto = "Este curso es de JavaScript y esta dado por Sergie Code 5"

// 1era Forma
let busqueda = texto.search(/sergie/i)

// 2da Forma
let busqueda2 = /Sergie/i
busqueda2.test(texto)

// 3era Forma
let busqueda3 = /[0-9]/

// let resultado5 = pattern.test(texto) 
// console.log(resultado5) // res = true

//Modificadores
// i: ignorar mayusculas y minusculas
// g: buscar en todo el texto pasado
// m: busqueda multilinea

let resultado = busqueda2.exec(texto)
console.log(resultado) // "exec" nos trae varios atributos importantes(name,index,input,etc)
// ---> Si "exec" no lo encuentra nos pasa "null"

// Esto se utiliza por ejemplo para VALIDAR "correos electronicos"

// EJM

let pattern = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

console.log(pattern.test("jason@gmail.com")) // res = true
