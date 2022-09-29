const escola = "Cod3r";

console.log(escola.charAt(4)); // retorna r
console.log(escola.charAt(5)); // retorna um valor vazio
console.log(escola.charCodeAt(3)); // retorna 5
console.log(escola.indexOf('3')); // Vai retorna o valor do indice do digito "3", no caso 3

console.log(escola.substring(1)); // retorna os digitos na frente do indice 1, retornando od3r;
console.log(escola.substring(0, 3)); // vai retorna os digitos do indice 0 ate o anterior de 3
                                      // no caso Cod.
console.log(escola.replace(3, "e"));

console.log("Ana,Maria,Pedro".split(","))// cria um array com a string e dentro do argumento
                                        // a forma como vai separar.