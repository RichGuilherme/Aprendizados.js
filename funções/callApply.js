function getPreco (imposto = 0, moeda = "R$"){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}` 
}

const produto ={
    nome: "notebook",
    preco: "4500",
    desc: 0.15,
    getPreco
}

globalThis.preco = 20   
globalThis.desc = 0.1   //para evitar um NaN, aqui o globalThis tem valores atribuidos para preco e desc.
console.log(getPreco()) // O This nesse momento está apontando para objeto global

console.log(produto.getPreco()) // Aqui o this está apontando para o obj produto

const carro = {preco: "5000", desc: 0.20}

console.log(getPreco.call(produto))  // Com o call o this altera seu valor e começa a aponta para objeto fornecido 
console.log(getPreco.apply(carro))   // A mesma coisa vale para o apply 

// A diferença entre call e apply está na forma de forne o argumento 

console.log(getPreco.call(produto, 0.2, "$"))
console.log(getPreco.apply(carro, [0.2, "$"])) 

// Outro exemplo
const obj1 = {exemplo1: "exemplo1", mostraThis: function(){
    console.log(this)
}}

obj1.mostraThis()

const obj2 = {exemplo2: "exemplo2"}

obj1.mostraThis.call(obj2)  // Aqui o this tem o valor do obj fornecido, no caso obj2