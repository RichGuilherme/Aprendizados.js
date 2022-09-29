function tratarErroELancar(erro) {  //função para caso ocorra um erro
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')  //verificar se a o erro e jogar para o catch
    } catch (e) {
        tratarErroELancar(e)   //aqui o erro vai ter o tratamento que deve ser tomado.Ex:mensagem, number, boolean, etc.
    } finally {
        console.log('final')
    }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)