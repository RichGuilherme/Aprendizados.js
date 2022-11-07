// Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo).

function classDoTriangulo (l1, l2, l3) {
     if((l1 === l2)&&(l1 === l3)){
        console.log("Esse triângulo é classificado como Equilátero")
     }
     else if((l1 === l2)||(l2 === l3)||(l1 === l3)){
        console.log("Esse triângulo é classificado como Isósceles")
     }
     else{
        console.log("Esse triângulo é classificado como Escaleno")
     }

}

classDoTriangulo(60, 60, 60)
classDoTriangulo(60, 50, 50)
classDoTriangulo(60, 50, 30)