const getNumeroAleatorio = (min, max) => {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao =  0

while(opcao != -1){  // Como a condição e verdadeira o problema irá executar até que a condição seja falsa.
    opcao = getNumeroAleatorio(-1, 10)
    console.log(`Opção escolhida foi ${opcao}`)
}
console.log("fim")

// Do/while nesse caso o bloco é executado pelo menos uma vez antes de ir para a condicional.
do{
opcao = getNumeroAleatorio(-1, 10)
console.log(`Opção escolhida foi ${opcao}`)

}while(opcao != -1) 
