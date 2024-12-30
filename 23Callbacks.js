//-------------------------------- CALLBACKS
// O como me gusta llamarlo -> composicion de funciones pero como parametro

//-------- EJM1

function mostrarConsola(num){
    console.log(num)
}

function calcular(num1,num2, callbackCualquiera){
    let suma = num1 + num2;
    callbackCualquiera(suma)
}

calcular(1,3,mostrarConsola)

// la consola muestra -> 4
