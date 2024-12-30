
// ---------------------------------------- Fetch
/*
En resumen, fetch es una API de JavaScript que permite realizar solicitudes HTTP asíncronas para obtener recursos de una red, ofreciendo una forma más simple y fácil de usar.

Devuelve una promesa que se resuelve con un objeto Response, que contiene la respuesta del servidor, incluyendo el cuerpo de la respuesta (como JSON, texto, etc.), los encabezados y el estado de la respuesta (como 200 OK, 404 Not Found, etc.).

*Solicitudes HTTP: fetch admite diferentes métodos HTTP, como GET, POST, PUT, DELETE, etc.

EJM:

fetch('https://api.example.com/data')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
*/


// ---------------------------------------- APIs

/*
Una API (Application Programming Interface) en JavaScript es una interfaz de programación de aplicaciones que permite a un programa o aplicación JavaScript interactuar con otro sistema o servicio, como un servidor web, una base de datos o una aplicación externa. En otras palabras, una API es un conjunto de funciones y protocolos que permiten a JavaScript acceder y manipular datos o servicios de manera programática.

EJM:
-API de mapas: La API de Google Maps permite a los desarrolladores integrar mapas en sus aplicaciones y obtener información de ubicación.

-API de clima: La API de OpenWeatherMap proporciona datos de clima actual y pronósticos para diferentes ubicaciones.

*/


// ---------------------------------------- JSON

/*
En resumen, JSON es un formato ligero y flexible para intercambiar datos entre sistemas, basado en la notación de objetos literales de JavaScript. Se utiliza ampliamente en aplicaciones web para transmitir datos entre el servidor y el cliente, y es soportado por la mayoría de los lenguajes de programación.

Sintaxis similar a objetos JavaScript: JSON utiliza la misma sintaxis para definir objetos que JavaScript, pero con algunas restricciones adicionales.


Estructura básica
Un objeto JSON consta de pares clave-valor, donde:

EJM:
{
    "nombre": "Jonh Doe",
    "profesion": "Programador",
    "edad": 25,
    "lenguajes": ["PHP", "JavaScript", "Dart"],
    "disponibilidadParaViajar": true,
    "rangoProfesional": {
      "añosDeExperiencia": 12,
      "nivel": "Senior"
    }
  }
*/

//---------------------------------------------- EJM -------------------------------------------

let urlBase = "https://jsonplaceholder.typicode.com"


//------------------------------ GET -> Pedir informacion

let query = "posts/1"

fetch(`${urlBase}/${query}`)
.then(response => response.json())
.then(json => console.log(json))



//------------------------------ POST -> Enviar información

let requestBody = {
    title: "Ricardo comenta sobre tu foto",
    body: "Que bella foto",
    userId: 1
}

fetch(`${urlBase}/posts`,{
    method: "POST",
    headers: {
        "content-type":"application/json; charset=UTF-8",
    },
    body: JSON.stringify(requestBody)
})
      .then(response => response.json())
      .then(json => console.log(json))


//---------------------------- PUT -> Editar información


let posteo = 5

let requestBody2 = {
    id: 3,
    title: "Ricardo comenta sobre tu foto",
    body: "Que bella foto",
    userId: 1
}

fetch(`${urlBase}/posts/${posteo}`,{
    method: "PUT",
    headers: {
        "content-type":"application/json; charset=UTF-8",
    },
    body: JSON.stringify(requestBody2)
})
      .then(response => response.json())
      .then(json => console.log(json))



//----------------------------- PATCH -> Editar información (Solo  se edita un tributo)

let post = 10
let modificacion = {
    title : "Este titulo ha sido modificado"
}
 
fetch(`${urlBase}/posts/${post}`,{
    method: "PATCH",
    headers: {
        "content-type":"application/json; charset=UTF-8",
    },
    body: JSON.stringify(modificacion)
})
      .then(response => response.json())
      .then(json => console.log(json))


//----------------------------- DELETE -> borrar un item

let elementoAEliminar = 7

fetch(`${urlBase}/posts/${elementoAEliminar}`, {
    method: 'DELETE',
});

