/*
    2.Programar una función que permita recibir la palabra clave de cada nave y separar imprimiendo solo el nombre del piloto asignado a cada nave.
    Tenga en cuenta que el formato de todos los datos es el siguiente:
    • ARQ2555: Sara Bel-Sun
    • ARQ2556: Nodin Chavdri
    • ARQ2557: Finn
*/

let codigos = ['ARQ2555: Sara Bel-Sun','ARQ2556: Nodin Chavdri','ARQ2557: Finn']

//Función Tradicional
function obtenerNombre(dato){
    return dato.split(":")
}

let nombrePiloto1 = obtenerNombre(codigos[0])
console.log(nombrePiloto1[1].trim())

//Función Flecha
let obtenerNombre2 = dato => dato.split(":")

let nombrePiloto2 = obtenerNombre2(codigos[1])
console.log(nombrePiloto2[1].trim())

//Obtengo todos los nombres de los pilotos con un forEach
codigos.forEach(codigo => console.log(codigo.split(":")[1].trim()))