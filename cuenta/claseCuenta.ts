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

    ingresarValor(valorIngresado:number){
        return (valorIngresado >= 0) ? `se ha ingresado a la cuenta ${this.valorActual+valorIngresado}  ` : 'no es valido el valor'
    }
    retirarValor(valorRetirado: number) {
        return (valorRetirado<=this.valorActual)
        ?
        ` valor inicial de la cuenta ${this.valorActual} se retiro ${valorRetirado} total de la cuenta ${this.valorActual-valorRetirado}`
        : `el valor supera la cantidad que hay en la cuenta`
    }
}