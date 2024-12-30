// -------------------------- Eventos
// Es una accion o suceso que pasa dentro de una pagina web

function mostrar(){
    document.getElementById("seleccionable").innerHTML = Date()
}

// Hay otros metodos muy utilizados, por ejemplo:

// SELECCION POR CLASE:
// document.getElementsByClassName("Nombre-clase"); -> Devuelve una coleccion de elementos que tienen la clase especificada.

// SELECCION POR ETIQUETA:
// document.getElementsByTagName("etiqueta"); -> Devuelve una coleccion de elementos con la etiqueta especificada (como div,p, etc).

// SELECCION MODERNA:
// document.querySelector("selector-css"); -> Devuelve el primer elemento que coincida con el selector CSS 

// SELECCION MODERNA:
// document.querySelectorAll("selector-css"); -> Devuelve todos los elementos que coincidan con el selector CSS en forma de una NodeList ("Osea se vuelve un iterable")

// SELECCION DEL ELEMENTO PADRE O RAIZ:
// document.documentElement; -> <html>
// document.body; -> <body>
// document.head; -> <head>
// -> Se usan para acceder directamente al elemento raiz o las partes principales del documento.
