import {Cuenta} from './claseCuenta';

let cuenta1 = new Cuenta('yesica', 20000)
let cuenta2 = new Cuenta('oliver', 30000)
let cuenta3 = new Cuenta('ruber', 40000)
let cuenta4 = new Cuenta('jhojan', 50000)
let cuenta5 = new Cuenta('clara', 60000)

console.log(cuenta1.mostrarCuenta())
console.log(cuenta1.ingresarValor(10000))
console.log(cuenta1.retirarValor(1000))