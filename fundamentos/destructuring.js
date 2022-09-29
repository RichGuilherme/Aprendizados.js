const pessoa = {
    nome: "richard",
    idade: 19,
    endereco:{
         bairro: "Santa clara",
         numero: "15"
    }    
}

const {nome, idade} = pessoa;    // com esse operador destructuing, podemos tira o par chave e valor, é criar uma variável com eles.
console.log(nome, idade);       //Ajuda a tirar mais de um par de dentro do objeto.


const [nome1, nome2, , nome4, nome6= 0] = ["richard", "guilherme", "pedro", "joao"]  //destructiring de array

console.log(nome1, nome2, nome4, nome6)