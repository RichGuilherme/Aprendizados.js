let dobro = function (a) {
    return 2 * a 
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a  //nesse caso não precisa de () sendo necessario apenas o parâmentro
console.log(dobro(Math.PI))

let ola = function () {
    return "olá"
}

ola = () => "Olá" 
ola = _ => "Olá" // Nesse caso o parâmetro será _