const produto = new Object
produto.nome = "richard";
produto["marca de produto"] = "generico"
produto.preco = 220

console.log(produto)
delete produto.nome  // serve para deletar um atributo do objeto
delete produto["marca de produto"]

console.log(produto)

const carro = {
    modelo: "BMW",
    valor: 95000,
    proprietario: {
        nome: "Richard",
        idade: "19",
        endereco: {       //Objeto dentro de objeto
             bairro: "caieiras",
             numero: 12
        }
    },
    condutores: [{ 
        nome: "João",     // Array de objeto
        idade: 32
     
    },{
        nome: "Carlos",
        idade: 25
    }],
    calcularValorSeguro: function(){
        // ...
    }
}

carro.proprietario.endereco.numero = 45
carro['proprietario']['endereco']['bairro'] = "Vila Clara"  // bastante util quando se tem os atributos do objeto. Sendo uma forma que facilita a leitura

console.log(carro)

delete carro.proprietario.endereco
delete carro.calcularValorSeguro

console.log(carro)
console.log(carro.condutores) // length mostra a quantidade de elementos dentro do array.