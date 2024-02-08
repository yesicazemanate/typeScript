 export class Persona {
    nombre: string
    edad: number
    telefono: number
    direccion: string
    cuidad: string

    constructor(nombre: string, edad: number, telefono: number, direccion: string, cuidad: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.telefono = telefono;
        this.direccion = direccion;
        this.cuidad = cuidad;
    }
    getNombre() {
    return this.nombre;
    }
    setNombre(nombre: string) {
        this.nombre = nombre;
    }
    getEdad() {
        return this.edad;
    }
    setEdad(edad: number) {
        this.edad = edad;
    }
    getTelefono() {
        return this.telefono;
    }
    setTelefono(telefono: number) {
    this.telefono = telefono;
    }
    getDireccion() {
        return this.direccion
    }
    setDireccion(direccion: string) {
        this.direccion = direccion;
    }
    getCuidad() {
        return this.cuidad;
    }
    setCuidad(cuidad: string) {
        this.cuidad = cuidad;
    }
    mostrarDatos() {
        return `
            nombre ${this.nombre} 
            edad ${this.edad}
            telefono ${this.telefono}
            direccion ${this.direccion}
            cuidad ${this.cuidad}`
    }
    Edad(edad: number) {
        return  (edad >= 18) ? 'eres mayor de edad' :  'eres menor de edad'
        
    }




}

