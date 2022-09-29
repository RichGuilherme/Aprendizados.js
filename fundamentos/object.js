const prod1 = {} // crio um objeto vazio, literal
prod1.nomeDocelular = "Celular ultra Mega"; // declarando chave(nome) e valor(celular ultra mega)
prod1.preco = 4998.90;
prod1["Desconto legal"] = 0.48 // evitar atribusto com espaços
        //pode declara a chave dentro de ().
console.log(prod1);

const prod2 = { //objeto com par de chave e valores dentro.
    nomeDacamisa: "camisa polo",
    preco: 79.90,
    obj: {
        chave1: "valor1",  //obj dentro de obj, para criar categorias
        obj2: {
             chave2: "valor2"
        }
    }
}
console.log(prod2) // retorna tudo de dentro do objeto

obj2 = prod2.obj
console.log(obj2)  // forma de criar uma variável com algum valor da chave

const {nomeDacamisa, preco} = prod2   //destructuring 
console.log(nomeDacamisa + ":" + preco)  

console.log(prod2.preco) //forma de pega o par de chave e valor
