export class Operaciones{
    numero1: number
    numero2: number

    constructor(numero1: number, numero2: number) {
        this.numero1 = numero1
        this.numero2 = numero2
    }
    getNumero1() {
        return this.numero1
    }
    setNumero1(numero1: number) {
        this.numero1 = numero1
    }
    getNumero2() {
        return this.numero2
    }
    setNumero2(numero2: number) {
        this.numero2 = numero2
    }
    sumar() {
        return `suma: ${this.numero1 + this.numero2}`
    }
    resta() {
        return `resta: ${this.numero1 - this.numero2}`
        
    }
    multplicacion() {
        return `multiplicacion: ${this.numero1 * this.numero2}`

    }
    division() {
        return `division: ${this.numero1 / this.numero2}`
    }
}