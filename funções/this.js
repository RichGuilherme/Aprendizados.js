let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)  //This no contexto node/browser ele aponta para o espoco global.Sendo de extrema importância ter cuidado com as
                       // variações que o this pode ter em apontar para objetos em functions
const obj = {}
comparaComThis = comparaComThis.bind(obj) //Meu this agora esta apontando para o obj, não estando apontando mais para o obj do escopo global
comparaComThis(global) //false
comparaComThis(obj)   //true             

let comparaComThisArrow = param => console.log(this === param) // Com arrow function o this aponta para onde foi escrito,
comparaComThisArrow(global)                                    // no caso o comparaComThisArrow
comparaComThisArrow(module.exports) //é um objeto que retornado a partir de um modulo criado no Node

comparaComThisArrow = comparaComThisArrow.bind(obj) // O this de uma arrow function não muda com um método bind, não alterando para onde
comparaComThisArrow(obj)                            // aponta
comparaComThisArrow(module.exports) // Continua apontando para o this