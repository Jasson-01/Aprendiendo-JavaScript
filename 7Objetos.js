// ------------------------ OBJETOS

// Es una estructura de datos formada por pares(clave,valor) que puede contener propiedades y metodos, y representa algo de la realidad.

// Lo que es "Programacion Orientada a Objetos (POO)", los objetos estan basados en "moldes" llamados "clases", que los definen el comportamiento y su estructura


const vendedor = {
    nombre : "Pedro",
    apellido : "DB",
    empresa : "Apple",
    habilidadesBlandas : ["carisma","puntualidad"],
    vender: function(){
        return "Pedro ha vendido una accion"
    },
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido
    }
}

// Tambien se pueden sobreescribir y acceder de estas dos formas:
vendedor.nombre = "Jasson" 
vendedor["nombre"] = "Aldayr"

console.log(vendedor.habilidadesBlandas) // res = [ 'carisma', 'puntualidad' ]
console.log(vendedor.nombre) // res = "Aldayr"
