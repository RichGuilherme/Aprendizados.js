const number = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const numberPar = number.filter(function (numero){  // para cada value ele chama o filter que vai ser verificado se é divisivel por 2 e caso for true será executado.
    if(numero % 2 === 0){
       console.log(numero)
    }
})

function calculo(numero){
    console.log(numero * numero)
}
number.forEach(calculo) // para cada value ele chama a função novamente
   

