function pessoa() {   
    this.idade = 0     
                       
    const self = this  // armazena o this na var. Normalmente e nomeada self
    setInterval(function() {   //seta um tempo para executar o código novamente
        self.idade++
        console.log(self.idade)
    }/*,bind(this)*/, 1000)
}

new pessoa //new objeto

function pessoa2() {   
    this.idade = 0     
                       
    setInterval(() =>{  // com arrow function o this nessa contexto léxico esta apontando para função pessoa que esta inserido dentro
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new pessoa2 