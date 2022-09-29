let isAtivo = false;
console.log(isAtivo); // retorna false

isAtivo = true
console.log(isAtivo); // retorna verdadeiro

isAtivo = 1;
console.log(!!isAtivo); // ! altera o valor para true ou false
                      // com !! permanece o valor 
//valores que convertem para verdadeiro

console.log(!!3);
console.log(!!-1);
console.log(!!" "); // string com espaço
console.log(!!"texto");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

// valores que convertem para falso
console.log(!!0);
console.log(!!"") //string sem espaço
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

// outro caso
let nome = ""
console.log(nome || "desconhecido") // com o operador OR podemos da a opção
// de execultar outro valor, no caso nome é falso, então o programa executa
// o primeiro valor verdadeiro.