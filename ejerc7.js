/*
    Han solo y Chewbacca deben infiltrarse en el planeta 
    yavin4 para robar uno de los planos de una de las 10 estrellas de la muerte, 
    como distractor el imperio ha creado planos falsos y se tiene el dato de 
    que el número de serie de estos planos falsos comienza por encima del 
    número 10; es decir todos los planos falsos tienen números de serie 
    consecutivos comenzando desde el #11. SOLO si se obtiene un plano 
    verdadero Chewbacca y Han pueden abordar su nave y ejecutar un 
    mensajeen consola avisando que han despegado
    Configure la rutina necesaria para despegar la nave utilizando callbacks
*/

function filtrarPlanos(planos,arrancarNave){
    let filtro = planos.filter(function(plano){
        return (plano>=1 && plano<=10)
    })
    arrancarNave(filtro)
}

let planos = [1,55,34,100,5,40,22,8,63]

filtrarPlanos(planos,function(filtro){
    let cuenta = filtro.length
    if(cuenta > 0){
        console.log('Arranque la nave mijo que nos vamos')
    } else {
        console.log('Chewbacca tocó quedarnos')
    }

})
