 const pessoa = {
    saudacao: "Bom dia",
    falar(){
        console.log(this.saudacao)  //This nesse caso estar apontando para obj pessoa
    }
 }
 pessoa.falar()  //Sem o this o programa não encontra a var saudacao
 const falar = pessoa.falar
 falar()  // conflito em paradigmas: funcional e 00
 
 const falarDePessoa = pessoa.falar.bind(pessoa) //Nessa função o this será sempre o obj de pessoa.
 falarDePessoa()