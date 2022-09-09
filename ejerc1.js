/*
    1.Calcular la distancia a la que cualquiera de los planetas de la ruta N-14 se encuentra del planeta NABOO.
    Para calcular dicha distancia se debe:
    Recibir las coordenadas X,Y del planeta en UA
*/

//Función Tradicional
function calcularDistancia1(x1,y1,x2,y2){
    return Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2))
}

//Función de Flecha
let calcularDistancia2 = (x1,y1,x2,y2) => Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2))

let distancia1 = calcularDistancia1(0,10,-30,20)
console.log(`la distancia a la que están los planetas es de ${distancia1}`)

let distancia2 = calcularDistancia2(-20,10,20,-20)
console.log(`la distancia a la que están los planetas es de ${distancia2}`)