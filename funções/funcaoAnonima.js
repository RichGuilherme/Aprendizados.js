const soma = function (a, b) {   //Função anonima armazenada em uma variável
    return a + b
}

const imprimirResultado = function (a, b, operacao = soma){  //operacao nesse caso é um função como parâmentro
    console.log(operacao(a, b))
}

imprimirResultado(3, 7)
imprimirResultado(3, 7, (a, b) => a * b) //função anonima com arrow function, sendo uma função sem nome
imprimirResultado(3, 7, function (a, b){
    return a - b
})


const pessoa = {
    fala: function(){     //exemplo de função anonima 
        console.log("Opa")
    }
}

pessoa.fala()