function Carro (velocidadeMaxima = 200, delta = 5){
    //atributo privado
    let velocidadeAtual = 0

    //método público 
    this.acelerar = function () {   
       if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta 
       }else{
            velocidadeAtual = velocidadeMaxima
       }
    }

    //método público
    this.getVelocidadeAtual = function () {
         return velocidadeAtual
    }
}

const uno = new Carro  // passando a função construtora para a variável uno, criando um novo obj
uno.acelerar()   // add velocidade 
console.log(uno.getVelocidadeAtual())  // imprimi a velocidadeAtual

const ferrari = new Carro(350, 20)
ferrari.acelerar()  //quando chamado a função add mais 20 de velocidade.
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())


