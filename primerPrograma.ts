// // let num1: number = 12
// // let num2: number = 24
// // //console.log(`el resultado es ${num1 + num2} `)

// // //tipos de datos 
// // let cadenaTexto: string = 'cadena texto'
// // let number: number = 12
// // let booleano: boolean = false

// // //console.log(`${cadenaTexto}, number ${number}, booleano ${booleano}`)
// // let datos: any[] = ['camila', 23, true, 'carlos', 34, false]
// // let arrayDatos: any = datos.filter(e => e == 'carlos')
// // //console.log(arrayDatos)
// // nombre de la clase primera en mayuscula
// class Ventilador {
//     // atributos
//     marca: string;
//     color: string;
//     seMueve: boolean
//     numeroAspas: number
  
     
//     // el constructor sirve para inicializar el objeto para el llamdo del objeto
//     constructor(marca: string, color: string, seMueve: boolean, numeroAspas: number) {
//         this.marca = marca,
//             this.color = color,
//             this.seMueve = seMueve,
//             this.numeroAspas = numeroAspas
//     }
//     //getter y setter
//     getMarca() {
//         return this.marca
//     }
//     setMarca(marca: string) {
//         this.marca = marca
//     }
//     getSeMueve() {
//         return this.seMueve 
//     }
//     setSeMueve(seMueve: boolean) {
//         this.seMueve = seMueve
//     }
//     //acciones o metodos
//     encenderVentilador() {
//       return this.seMueve

//     }
//     estadoVentilador(estado: boolean) {
//         if (estado == true) {
//            this.seMueve= estado
//             return `ventilador encendido`
            
//         } else {
//             this.seMueve = true
//             return `ventilador apagado`
//         }
//     }

// }

// let ventiladorcito = new Ventilador('samurai', 'blanco gastado', true, 4)
// //console.log(ventiladorcito.encenderVentilador())

// ventiladorcito.setMarca('often')
// // console.log(ventiladorcito.encenderVentilador())
// // console.log(`la marca de mi ventilador es ${ventiladorcito.getMarca()}`);
// let estado=ventiladorcito.getSeMueve()
// console.log(ventiladorcito.estadoVentilador(estado))


    
