function soNoticiaBoa (nota) {
    if (nota > 7){
        console.log("Aprovado com "+ nota)
    }
}

soNoticiaBoa(7.1);
soNoticiaBoa(6.9);

function soVerdade (valor) {
    if(valor){      // caso o valor seja verdadeiro o programa irá executar a sentença abaixo.
        console.log("E verdade... " + valor);      //valores não definidos não passam pelo filtro.
    }
}



soVerdade();
soVerdade(null);
soVerdade(undefined);
soVerdade(0);
soVerdade('');
//Nenhum desses vão ser execultados
soVerdade(-1);
soVerdade(1);
soVerdade(" ");
soVerdade([]);
soVerdade([1,2]);