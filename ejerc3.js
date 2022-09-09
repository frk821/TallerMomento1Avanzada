/*
    3. PROBLEMA: La luna de Endor pierde temperatura día a día, para ello hay que hacer un monitoreo constante, Cree una función de flecha que permita calcular la temperatura media de la luna a partir de la temperatura máxima y mínima de cada día
*/

let temperaturas = [
    {dia:"Lunes", tempMax:30, tempMin:18},
    {dia:"Martes", tempMax:35, tempMin:21},
    {dia:"Miércoles", tempMax:27, tempMin:13},
    {dia:"Jueves", tempMax:31, tempMin:15},
    {dia:"Viernes", tempMax:37, tempMin:19},
    {dia:"Sábado", tempMax:28, tempMin:11},
    {dia:"Domingo", tempMax:33, tempMin:17}
]

let temperaturaMedia = 0

//Se suman las temperaturas máximas y mínimas de cada día y se almacenan en un nuevo arreglo
let temperaturasSemana = temperaturas.map(temperatura => temperatura.tempMax + temperatura.tempMin)

//Se suman las temperaturas de cada día de la semana
temperaturasSemana.forEach(temperaturaDia => temperaturaMedia += temperaturaDia)

//Se imprime la media de la temperatura de la semana
console.log(`La Temperatura media de la semana es ${Math.round(temperaturaMedia/temperaturasSemana.length)}`)

