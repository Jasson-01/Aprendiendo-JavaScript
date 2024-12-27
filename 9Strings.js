// Barra de Escape (\)
// Se usa cuando tienes comillas dentro de comillas y se superponen (Se usan ante de).
let oracion = "Albert Einstein dijo que \'La relatividad esta re-piola\'"
console.log(oracion)

// Salto de Linea (\n)
let oracion2 = "Albert Einstein dijo que \n La relatividad esta re-piola"
console.log(oracion2)

// Contador de caracteres
let contadorDeLetras = "Murcielago";
console.log(contadorDeLetras.length) // res = 10
//--> Los espacios tambien se cuentan como caracter


// ------------------------------------METODOS DE STRINGS:

// SLICE (Te recorta una parte del texto) (usa dos parametros(start,end))
let texto = "Educacion";
let resultado = texto.slice(4,7)
console.log(resultado) // res = "aci"


// REPLACE (Reemplazando palabras)
const texto2 = "La educacion es muy importante en Argentina";
const resultado2 = texto2.replace("Argentina"," En el mundo");
console.log(resultado2)


// toUpperCase and toLowerCase (Pasar todo a Mayuscula y Minuscula)
const texto3 = "La educacion es muy importante en El mundo";
const resultado3 = texto3.toLocaleUpperCase();
const resultado4 = texto3.toLocaleLowerCase();
console.log(resultado2)

// CONCATENAR  (+) 
const texto5 = "uno,"
const texto6 = " dos,"
const texto7 = " y tres."
const resultadoConcatenado = texto5 + texto6 + texto7
console.log(resultadoConcatenado)

//---> 2da Forma (CONCAT)
const resConcat = texto5.concat(texto6)


// TRIM (Te saca los espacios de Adelante y de Atras)
const texto9 = "        ha espacios addelante y atras       ";

const resultadoEspacios = texto9.trim();
console.log(resultadoEspacios)


//---> OBS: podemos combinar varios metodos
const resultadoEspacios9 = texto9.trim().concat(texto5);

// charAt() (Tiene como parametro un indice(posicion), con el cual su accion es darme el "char" que esta en esa posicion de algun texto u oracion)
const texto10 = "Hola mundo";
const resultado10 = texto10.charAt(5); 
console.log(resultado10) // res = m

// split() (Se utiliza para dividir un string en un array de substring, basado en un separador especifico como parametro)

const texto11 = "Este texto te lo envia el backend. este texto es importante. dividi el texto"
const resultado11 = texto11.split(". ")
console.log(resultado11) // res = ['Este texto te lo envia el backend','este texto es importante','dividi el texto']

// OBS:
//  ---> sí split("") esta vacio! separa char por char el texto.