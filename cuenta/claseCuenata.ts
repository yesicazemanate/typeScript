export class Cuenta{
    titular : String
    valorActual: number

    constructor(titular:String, valorActual: number){
        this.titular= titular
        this.valorActual= valorActual
    }

    getTitular(){
        return this.titular
    }
    setTitular(titular: String){
        this.titular = titular
    }
    getValorActual(){
        return this.valorActual
    }
    setValorActual(valorActual: number){
this.valorActual=valorActual
    }

    mostrarCuenta(){
        return `Titular ${this.titular}
                Valor actual ${this.valorActual}`

    }

    ingresarValor(){
       (valorIngresado>=0)?  this.valorActual+valorIngresado : 'no es valido el valor'
    }
    retirarValor(){
(valorRetirado<=this.valorActual)
?
 ` valor inial de la cuenta ${this.valorActual} se retiro ${this.setValorActual} total de la cuenta ${this.valorActual-valorRetirado}`
 : `el valor supera la cantidad que hay en la cuenta`
    }
}