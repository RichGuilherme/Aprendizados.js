const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]); // retorna 7.7 e 9.2
console.log(valores[4]); // retorna undefined

valores[10] = 10;
console.log(valores); //retorna [ 7.7, 8.9, 6.3, 9.2, <6 empty items>, 10 ]

valores.push({id: 3}, false, null, "teste"); // add esses valores
console.log(valores);

console.log(valores.pop());// deleta o ultimo valor
delete valores[0]; // deleta o valor do indice 0 
console.log(valores);

console.log(typeof valores); // retorna object