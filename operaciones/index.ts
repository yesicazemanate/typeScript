import { Operaciones } from "./claseOperaciones"
let num1 = new Operaciones(10, 2)
let num2 = new Operaciones(20, 3)
let num3 = new Operaciones(30, 5)
let num4 = new Operaciones(60, 4)
let num5 = new Operaciones(80, 10)

console.log(num1.sumar())
console.log(num2.resta())
console.log(num3.multplicacion())
console.log(num4.division())