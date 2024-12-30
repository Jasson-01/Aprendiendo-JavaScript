// ----------------------------------- PROMESAS (Son un tipo especial de objeto)

// Nos permiten realizar tareas ASINCRONAS y luego manejar los resultados, una promesa puede fallar o puede ser exitosa  y esto nos va a devolver un valor que lo podremos utilizar en nuestro codigo.

// Lo mas importante de las PROMESAS es que nos permite manejar una secuencialidad de acciones.

// Uno de los motivos mas importantes (mas utilizados de las PROMESAS) es para consumir APIS  que nos traen informacion de terceros(Backend) y como esto va a tener una demora, nosotros necesitamos mantener una secuencialidad de nuestras acciones en el codigo.


//----- EJM-1
let promesa = new Promise((response, reject) => {
    let resp = "Esta es la respuesta del servicio"
    response(resp)
    reject("Fallo")
})

// then -> una vez que la API responde positivamente (RESPONSE)
promesa.then(res => {
    console.log(res)
}).catch(error => { // Si sale mal (REJECT)
    console.error(error) // tambien se puede usar "warn" (esto en la web es de amarillo), ("error" en la web es de color rojo)
})



//----- EJM-2
let promesa2 = new Promise((response, reject) => {
    let resp = {
        response: 200,
        description: "Esta informacion es importante"
    }
    response(resp)
    reject("Fallo")
})

// then -> una vez que la API responde positivamente (RESPONSE)
promesa2.then(res => {
    console.log(res.description)
}).catch(error => { // Si sale mal (REJECT)
    console.warn(error) // tambien se puede usar "warn" (esto en la web es de amarillo), ("error" en la web es de color rojo)
})


//NOTA:
// 200 -> Exito!
// 400 -> Que no lo encuentra (Hicimos mal las cosas)
// 500 -> Falla del backend


//----- EJM-3
let promesa3 = new Promise((response, reject) => {
    
    setTimeout(()=>{
        let resp = {
            response: 200,
            description: "Esta informacion es importante"
        }
        response(resp)
        reject("Fallo")
    },3000); // 3 segundos


})


promesa3.then(res => {
    console.log(res.description)
}).catch(error => { 
    console.warn(error) 
})


// --------------------------------- SECUENCIALIDAD DE PROMESAS
// Que sucede si tenemos varias promesas y necesitamos que se cumpla una detras de otra

// EJM
let promesa5 = new Promise((response) => {
    setTimeout(() => {
        let resp = {
            response: 200,
            description: "1 Esta info es importante"
        }
        response(resp) 
    },3000);
})

let promesa6 = new Promise((response) => {
    setTimeout(() => {
        let resp = {
            response: 200,
            description: "2 Esta info es importante pero suele demrar mucho"
        }
        response(resp) 
    },5000);
})

let promesa7 = new Promise((response) => {
    setTimeout(() => {
        let resp = {
            response: 200,
            description: "3 informacion rapida"
        }
        response(resp) 
    },2500);
})


promesa5.then(res => {
    console.log(res.description)
    promesa6.then(res => {
        console.log(res.description)
        promesa7.then( res => {
            console.log(res.description)
        }).catch(error => {
            console.warn(error)
        })
    }).catch(error => {
        console.warn(error)
    })
}).catch(error => {
    console.warn(error)
})

