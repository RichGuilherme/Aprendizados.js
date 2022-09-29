function rand({ min = 0, max = 1000 }) {  //destructuring como parâmentro, sendo trabalhado com objetos.
    const valor = Math.random() * (max - min) + min  //math.random() gera um número aleatório entre 0 e 1.
    return Math.floor(valor)
}

const obj = { max: 50, min: 40 }
console.log(rand(obj))
console.log(rand({ min: 955 }))
console.log(rand({}))
console.log(rand())