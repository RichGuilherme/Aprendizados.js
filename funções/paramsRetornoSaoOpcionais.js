function area(largura, altura) {
    const area = largura * altura
    if(area > 20){
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else {
        return area
    }
    //return area          para caso queira que retorne um valor.
}

console.log(area(2, 2))
console.log(area())
console.log(area(5, 5)) // retorna a mensagem no console.log, e um undefined
// ja que não retorno a área.
