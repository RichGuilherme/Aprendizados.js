Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim;
}

const imprimirResultado = function (nota) {
    if(nota.entre(9,10)) {
        console.log("Quadro de honra")
    } else if(nota.entre(7, 8.99)) {
        console.log("Aprovado")
    } else if(nota.entre(4, 6.99)) {
        console.log("Recuperação")
    } else if(nota.entre(0, 3.99)) {
        console.log("Reprovado")
    }else {
        console.log("Nota invalida")
    }
}

imprimirResultado(10); // Quadro de honra
imprimirResultado(8.9); // aprovado
imprimirResultado(6.55); // recuperação
imprimirResultado(2.3); // reprovado
imprimirResultado(-1); //invalido
imprimirResultado(11) // invalido