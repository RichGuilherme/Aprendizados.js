// Closure é escopo criando quaundo uma função é declarada.
// Esse espoco permite a função acessar e manipular variáveis externas a função

const x = "global"

function fora () {
    const x = "local"
                          
    function dentro () {  
        return x 
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())  