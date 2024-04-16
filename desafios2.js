// 1. Criar uma função que exibe "Olá, mundo!" no console.
function hello() {
    console.log('Olá, mundo!');
}

hello();

// 2. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function helloFulano(nome) {
    nome = prompt('Informe seu nome: ');
    console.log(`Olá, ${nome}!`);
}

helloFulano();

// 3. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function calcularDobro(numero) {
    return numero * 2;
}

console.log(calcularDobro(10));

// 4. Criar uma função que recebe três números como parâmetros e retorna a média deles.
function media(x, y, z) {
    return (x + y + z) / 3;
}

console.log(media(10, 5, 20));

// 5. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maiorNumero (a, b) {
    // returno a : b ? a : b;
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log(maiorNumero(5,3));

maiorNumero();

// 6. Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function multiplicacao(c) {
    return c * c;
}

console.log(multiplicacao(5));