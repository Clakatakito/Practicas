

//POO on herencias

class Humanos {
    static dios = "Claka"
    constructor(nombre, edad, peso){
        this.nombre = nombre;
        this.edad = edad;
        this.peso = peso;
    }
    saludo(){
        return `${this.nombre} te saluda`
    }
    despedida(){
        return `${this.nombre} se depide`
    }
    get verEdad(){
        return this.edad;
    }
    set cambiarEdad(nueva_edad){
        this.edad = nueva_edad
    }
}

class Mujeres extends Humanos{
    constructor(nombre,edad,peso,pelo){
        super(nombre)
        this.peso = peso;
        this.edad = edad;
        this.pelo = pelo;
    }
}

const mujer1 = new Mujeres("Elena", "20", "30", "rubio");
console.log(mujer1)
console.log(mujer1.verEdad)
mujer1.cambiarEdad = "30"
console.log(mujer1.nombre)
console.log(mujer1.verEdad)