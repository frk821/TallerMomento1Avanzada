/*
    Grogu ha iniciado su entrenamiento Jedi y debe
    activar un software que permita clasificar su dieta:
    alimento = {
    nombre,
    tipo (Puede ser vegetal, animal, insecto),
    nivel de energía (números entre 100-500)
    }
    Cree un programa que permita recibir 50 alimentos diferentes y
    mediante una función primaria después de 5 segundos se
    pueda obtener solo los alimentos de tipo vegetal que entreguen
    mas de 200 unidades de energía. Finalmente, una función
    callback debe permitir entregar la sumatoria de niveles de
    energía entregados por los alimentos vegetales consumidos en
    la dieta de Grogu.
*/

let insectos = ["cucaracha","grillo","mariposa","gusano","libelula","termitas","polillas","mosca","avispa","hormiga","escorpión","escarabajo","langosta","mantis","abejorro"]

let animales = ["rata","mapache","conejo","perro","lombriz","paloma","gallina","gato","tortola","tortuga","lagartija","ardilla","canario","zorro","marrano"]

let vegetales = ["tomate","lechuga","aguacate","mango","repollo","banano","papa","papaya","mora","fresa","guineo","piña","manzana","mandarina","cebolla","zanahoria","remolacha","maracuya","naranja","durazno"]

let nivelesEnergia = [100,200,300,400,500]

let alimentos = []

let contador = 0
let animal = 0
let insecto = 0
let vegetal = 0


while (contador < 50) {
    let alimento = {}
    
    if(contador >= 0 && contador < insectos.length){
        alimento.nombre = insectos[insecto]
        alimento.tipo = "insecto"
        insecto += 1
    } else if(contador >= insecto && contador < (insecto + animales.length)){
        alimento.nombre = animales[animal]
        alimento.tipo = "animal"
        animal += 1
    } else if (contador >= (insecto + animal)) {
        alimento.nombre = vegetales[vegetal]
        alimento.tipo = "vegetal"
        vegetal += 1
    }
    
    alimento.nivelEnergia = nivelesEnergia[Math.floor(Math.random()*nivelesEnergia.length)]
    alimentos.push(alimento)
    contador += 1
}

console.log(alimentos)


let sumatoriaEnergia = 0

function filtrarVegetales(alimentos,sumarEnergias){
    
    setTimeout(() => {
        let vegetalesEnergicos = alimentos.filter(function(alimento){
            return alimento.tipo == "vegetal" && alimento.nivelEnergia > 200
        })
        console.log("Los Vegetales con energía mayor a 200 son: ")
        console.log(vegetalesEnergicos)
        sumarEnergias(vegetalesEnergicos)
    }, 5000);
}


filtrarVegetales(alimentos,function(energiaVegetal) {
    let energias = energiaVegetal.map(function(vegetal){
        return vegetal.nivelEnergia
    })
    console.log(`Las energías son: ${energias}`)
    energias.forEach(function(energia) {
        sumatoriaEnergia += energia
    })
    console.log(`El total de niveles de energía consumidos por Grogu en su dieta es: ${sumatoriaEnergia}`)
})