/*
    QUI-GON JINN está encargado de revisar n sables 
    de luz y contabilizar la cantidad de energía de sables que tienen 
    negativa en Joules.

*/

let joulesSables = [-5,9,7,-2,3,8,-6,1,4,-7,]

let sablesEnergiaNegativa = joulesSables.filter(joule => joule < 0)

console.log(`La cantidad de sables con energía negativa son: ${sablesEnergiaNegativa.length}`)