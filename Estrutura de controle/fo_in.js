const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas) {   // pecorre os elemetos do array pelo seu índice,não sendo muito utilizado no caso de arrays.
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(let atributo in pessoa) {  //pecorre os elementos do obj, sendo recomendado nesses caso.
    console.log(`${atributo} = ${pessoa[atributo]}`)
}