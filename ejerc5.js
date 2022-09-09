/*
    Watto paga a su personal de ventas un salario de 
    3'500.000 mensuales, más una comisión de 1'500.000 por cada 
    licencia de software vendida menos el 5% de deducciones por 
    impuestos. Codifica un programa que calcule e imprima el 
    salario mensual de un vendedor dado
*/


let calcularSalario = (salario,comision,deduccion) => {
    let salarioMensual = (salario + comision) - ((salario + comision)*(deduccion/100))
    console.log(`El salario mensual del vendedor es de ${salarioMensual}`)
}

calcularSalario(3500000,1500000,5)

