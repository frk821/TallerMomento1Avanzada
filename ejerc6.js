/*
    Yoda el maestro jedi, necesita asignar a sus aprendices 
    Padawans 2 actividades dependiendo de la edad de ellos:
    • Manejo de la fuerza: Si el aprendiz es menor de 15 años
    • Manejo del sable de luz: Si el aprendiz es mayor de 15 años
    Inicialmente, se debe programar una función que asocie los datos de:
    {nombre, planeta, edad y estatura} de 1 Padawan a un objeto y una vez 
    este objeto sea creado se debe llamar a una función secundaria que
    clasifique y muestre en consola la actividad asignada al Padawan
*/

//Creando la funcion

function crearAprendiz(nombre,planeta,edad,estatura,clasificarAprendiz){
    let datosAprendiz = {
        nombre,
        planeta,
        edad,
        estatura
    }
    clasificarAprendiz(datosAprendiz)
}

//Llamando la funcion

crearAprendiz("Frank","Marte",10,1.75,function(aprendiz){
    if(aprendiz.edad >= 15){
        console.log('Usted se va para la clase de La Fuerza')
    } else {
        console.log('Usted se va para la clase de Sable de Luz')
    }
})
