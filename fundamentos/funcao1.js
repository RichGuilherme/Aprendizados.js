// função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)   // A e B serão somados e imprimidos dentro da função
                       //quando receberem os parâmetros de A e B
}                      

imprimirSoma(2, 3); // chamada da função, dando o valor para A e B
imprimirSoma(2);
imprimirSoma();

// função com retorno
function soma(a, b = 0){ //B recebe como padrão o valor 0, assim n ficando undefided
   return a + b  //retorna o valor da soma do parâmetro e manda para a chamada de função 
}
console.log(soma(2, 3)) 
// soma(2, 3) retorna nada já que não possui console.log