const a = 5
const b = 2
const c = 3

const obj1 = {a: a, b: b, c:c}
const obj2 = {a, b, c} // forma simplificada
console.log(obj1, obj2)

const nome = "nota" 
const valor = 7.5

const obj3 = {}
obj3.nome = valor // obj3[nome] outra forma de escrever
console.log(obj3)

const obj4 = {nome: valor}  //{[nome]: valor} outra forma de escrever
console.log(obj4)

const obj5 = {
    funcao1: function(){
         // ...
    }, 
    funcao2(){
        // ...            nova forma simplificada do ECMAScript 2015
    }
}