// estratégia 1 para gerar valor padrão
// essa estratégia e usada quando temo uma função dentro de uma função e queremos um valor padrão.
function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
// nesse primeiro caso, se os valores do parâmetro forem 0, o programa irá retorn 1 como padrão, não sendo eficais.
console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0)) 

// estratégia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a != undefined ? a : 1
    b = 1 in arguments ? b : 1 // 1 in arguments, o 1 representar o indice do parâmetro
    c = isNaN(c) ? 1 : c  // forma mais segura de retorna um valor padrão dessas estratégias
}                        // isNaN veficar se o número é um number (NaN = not a number)
console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0)) 

// valor padrão do es2015

function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}
console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0)) 