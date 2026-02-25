/*
Objetivo: arquivo responsavel pelo precessamentp de calculos
SOMAR, SUBTRAIR, MULTIPLICAR, DIVIDIR
Data:20/02/26
Autor:Jefferson
Versão:1.0
*/
//Exemplo de função anonima
//Função para calcular as 4 operações matematica
/*ToLowecase retorna uma string em minusculo
ToUppercase retorna uma string em maiusculo
*/
const calcular = function (numero1, numero2, operador) {
    let valor1 = Number(numero1)
    let valor2 = Number(numero2)
    let operadorMatematico = String(operador).toUpperCase()

    let resultado = false

  /*  if (operadorMatematico == "SOMAR") {
        resultado = valor1 + valor2
    } else if (operadorMatematico == "SUBTRAIR") {
        resultado = valor1 - valor2
    } else if (operadorMatematico == "MULTIPLICAR") {
        resultado = valor1 * valor2
    } else if (operadorMatematico == "DIVIDIR") {
        resultado = valor1 / valor2
    }else{
        return false
    }*/
switch (operadorMatematico) {
    case "SOMAR":
        resultado = somar(valor1, valor2)
        break;
    case "SUBTRAIR" :
        resultado = subtair(valor1, valor2)
    break;
    case "MULTIPLICAR" :
            resultado = multiplicar(valor1, valor2)
    break;
    case"DIVIDIR":
            resultado = dividir(valor1, valor2)
            break;

    default:
        break;
}


    //Saida
    return resultado


}
//Função baseada em seta
const somar = (numero1, numero2) => Number(numero1) + Number(numero2)
const subtair = (numero1, numero2) => Number(numero1) - Number(numero2)
const multiplicar = (numero1, numero2) => Number(numero1) * Number(numero2)
const dividir = (numero1, numero2) => Number(numero1) / Number(numero2)

module.exports = {
    calcular,
    somar,
    subtair,
    multiplicar,
    dividir
}

  
   