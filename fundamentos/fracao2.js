//armazendo uma função em uma variável
const imprimirSoma = function(a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3);

//armazenando uma funçao arrow em uma variável
const soma = (a, b) => {
    return a + b;
}
console.log(soma(2, 3));

//retorne impricito
const subtracao = (a, b) => a - b;  //muito usado para funções de uma linha
console.log(subtracao(2, 3));

const imprimirSoma2 = (a) => console.log(a);
imprimirSoma2("teste");