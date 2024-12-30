
// Para solucionar una SECUENCIAS de PROMESAS ("piramide de la perdición") se usa Async/Await


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
            description: "2 Esta info es importante pero suele demorar mucho"
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


async function ejecutarPromesas() {
    let respuestaProm5 = await promesa5
    console.log(respuestaProm5)
    let respuestaProm6 = await promesa6
    console.log(respuestaProm6)
    let respuestaProm7 = await promesa7
    console.log(respuestaProm7)
}

ejecutarPromesas()



/*
// VERSION DE SECUENCIA (Sin usar Async/Await)
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

*/












