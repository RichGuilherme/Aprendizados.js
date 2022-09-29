let valor; // não inicializado
console.log(valor);  // retorna undefided

valor = null; // ausência de valor
console.log(valor) // retorna null
// console.log(valor.toString()); // ERRO!

const produto = {}
console.log(produto.preco); //retorna undefided
console.log(produto);

produto.preco = 3.50
console.log(produto); // retorna{preco: 3.5}

produto.preco = undefined; // evitar atribuir undefided
console.log(!!produto.preco); // false
// delete produto.preco    melhor forma de tira um valor da variavel
console.log(produto);

produto.preco = null //sem preço ou 0.