
//-------------------- STRING a NUMBER
// ---> Number, parseInt, parseFloat
let a = Number("3.14")
let b = Number("") // res = 0 y su tipo es number

//OBS
let c = +"1" // console = number

//-------------------- NUMBER a STRING
let d = String(1)

// OBS
let e = 1
let f = e.toString()

//-------------------- DATES a NUMBER
let g = new Date()
let h = Number(g)

//-------------------- DATES a STRING
let i = String(g)

// OBS ->  let g = new Date().toString(d)

//-------------------- NUMBER a BOOLEAN
let j = Boolean(0) // res = false
let k = Boolean(1) // res = true

// EJEMPLO 

let ricardo = 0;

// 0 = "false" por eso por la "consola" sale por el "else"
if (ricardo && ricardo == 0){
    console.log("Vino un dato")
} else {
    console.log("Es null o undefined")
}

//-------------------- BOOLEAN a STRING

let l = String(true)
let m = true.toString()

//--------------------- STRING a ARRAY
let str1 = "Hola";
let array1 = Array.from(str1);

console.log(Array.isArray(array1)); // true
console.log(array1); // ["H", "o", "l", "a"]

// -------------------- ARRAY a STRING
let array = ["H", "o", "l", "a"];
let str = array.join("");

console.log(typeof str); // "string"
console.log(str); // "Hola"
