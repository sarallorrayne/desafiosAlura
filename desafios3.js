// 1. Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function calcularIMC(altura, peso) {
    let imc = (peso) / Math.pow(altura, 2)
    return imc;
}

let altura = parseFloat(prompt('Informe sua altura em metros: '));
let peso = parseFloat(prompt('Informe seu peso em kg: '));
console.log(calcularIMC(altura, peso));

// 2. Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function calcularFatorial(numero) {
    let resultado = numero;
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        while (numero > 1) {
            numero = numero - 1;
            resultado = resultado * numero;
        }
        return resultado;
    }
}

let numero = parseInt(prompt('Digite um número: '));
console.log(calcularFatorial(numero));

// 3. Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function dolarParaReal(dolar) {
    cotacaoDolar = 2.80;
    real = dolar * cotacaoDolar;
    return real.toFixed(2);
}

let dolar = parseFloat(prompt('Digite o valor em dólar: '));
console.log(dolarParaReal(dolar));

// 4. Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function calcularAreaPerimetroRetangular(largura, alturaSala) {
    let area = alturaSala * largura;
    let perimetro = 2 * (largura + alturaSala);

    console.log(`Área da sala: ${area} metros quadrados`);
    console.log(`Perímetro da sala: ${perimetro} metros`);
}

let largura = parseFloat(prompt('Informe a largura da sala: '));
let alturaSala = parseFloat(prompt('Informe a altura da sala: '));
alert(calcularAreaPerimetroRetangular(largura, alturaSala));

// 5. Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function calcularAreaEPerimetroCircular(raio) {
    area = (Math.PI * Math.pow(raio, 2)).toFixed(2);
    perimetroCircular = (2 * Math.PI * raio).toFixed(2);
    let areaEPerimetro = (`A área da sala é de ${area}m e o perímetro é de ${perimetroCircular}m.`);
    return areaEPerimetro;
}

let raio = parseFloat(prompt('Informe o raio da sala: '));
alert(calcularAreaEPerimetroCircular(raio));

// 6. Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function tabuada(numeroTabuada) {
    let contador = 1;
    let resultados = []
    while (contador <= 10) {
        let resultadoMultiplicacao = numeroTabuada * contador;
        resultados.push(resultadoMultiplicacao);
        console.log(`${numeroTabuada} x ${contador} = ${resultadoMultiplicacao}`);
        contador++;
    }
    return resultados;
}

let numeroTabuada = parseInt(prompt('Indique o número para o cálculo da tabuada: '));
tabuada(numeroTabuada);

// 6. Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

// function tabuada(numeroTabuada) {
//     for (let i = 0; i<= 10; i++) {
//         let resultadoMultiplicacao = numeroTabuada * i;
//         console.log(`${numeroTabuada} x ${i} = ${resultadoMultiplicacao}`);
//         contador++;
//     }
// }

// let numeroTabuada = parseInt(prompt('Indique o número para o cálculo da tabuada: '));
// tabuada(numeroTabuada);