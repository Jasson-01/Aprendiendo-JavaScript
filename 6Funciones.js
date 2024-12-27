
//-----------------------------Funcion Normal
function suma(x,y){
    return x + y
}

let respuesta = suma(5,6)
// OBS: los parentesis ejecutan la funcion

console.log(respuesta)


//-----------------------------Funcion Flecha / Arrow Function (No se usa siempre!)
let numero = 10;
let sumarDecena = (numero) => {
    return numero + 11 
}

// 2da Forma
// Si tiene un solo parametro y solo retorna una sola linea de codigo, se puede reducir a esta forma
let sumarDecena2 = numero + 12;

//3era Forma
// Se puede usar sin ningun parametro de entrada
let sumarDecena3 = () => numero + 13
