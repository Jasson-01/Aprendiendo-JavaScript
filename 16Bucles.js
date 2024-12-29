
// ------------------------------- FOR 

let tecnologias = ["HTML", "CSS", "JAVASCRIPT", "REACT", "ANGULAR"]

for (let index = 0; index < tecnologias.length; index++) {
    console.log(tecnologias[index]);
}

// ------------------------------- FOR OF

for (tecnologia of tecnologias) {
    console.log(tecnologia)
}

// ------------------------------- FOR IN ( para Objetos )

const alumno = {
    nombre : "Jason",
    edad: 24,
    tecnologias : ["HTML","CSS"]
}

for (const key in alumno){
    console.log(alumno[key]) // Jason
                             // 24
                             // [ 'HTML', 'CSS' ]
}


// ------------------------------- forEach

let numeros = [1,2,3,4,5,6,7,8,9]

numeros.forEach(numero => {
    console.log(numero)
});


// ------------------------------- While
// Mientras el While sea "true" el codigo se ejecutara

let edad = 0

while (edad < 18){
    console.log(`tienes ${edad} años y aun eres un niño`);
    edad++;
}

console.log(`tienes ${edad} años y ya eres mayor de edad`);


// ------------------------------- do While
// Siempre se ejecuta primero el codigo y despues sale de la condicion

let edad2 = 0

do {
    {
        console.log(`tienes ${edad2} años y aun eres un niño`);
        edad2++;
    }
} while (edad2 < 18)

console.log(`Tienes ${edad2} años y ya eres mayor de edad`)


// --------- Tambien podemos usar los BREAK para romper los BUCLES

let edad3 = 0

while (edad3 < 30){
    console.log(edad3);
    edad3++;
    if(edad3 == 25) break;
}

console.log(`Saliste del bucle porque tenes ${edad3} años`);
