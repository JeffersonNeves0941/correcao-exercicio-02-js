/**************************************************
Objetivo: arquivo responsavel por gerar uma tabuada 
usando while e for
Data:25/02/26
Autor:Jefferson
Versão:1.0
****************************************************/
const calculosMatematicos = require("./calculo.js")

//Função para imprimir tabuada
const gerarTabuadaWhile = function(tabuada){
    let tab = Number(tabuada)
    let cont = 0
    let resultado 

    while(cont <= 10){
    resultado = calculosMatematicos.multiplicar(tab, cont)
    console.log(tab + " x " + cont + " = " + resultado)

    cont = cont + 1
    }
}



const gerarTabuadaFor = function(tabuada){
    let tab = Number(tabuada)
    let cont = 0
    let resultado 

    for(let cont = 0;cont <= 10; cont++ ){
    resultado = calculosMatematicos.multiplicar(tab, cont)
    console.log(tab + " x " + cont + " = " + resultado)

    
    }
}
//gerarTabuadaWhile(10)
//console.log("\n")
gerarTabuadaFor(15)