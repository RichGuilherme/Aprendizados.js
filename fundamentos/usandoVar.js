var numero = 1
{                        // a variável foi sobrescrevido pela a outra
    var numero = 2       //ainda é vísivel a todo aplicação, só sendo invisivel dentro de funções
    console.log(numero);
}
console.log(numero);  // retorno 2 e 2

var numero = 1
{                   
    let numero = 2    
    console.log(numero);  // vai dar preferência pro escopo menor, no caso LET;
}
console.log(numero);  //2 e 1