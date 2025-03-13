
//Los prototypes en JavaScript son el mecanismo que permite la herencia basada en prototipos. Cada objeto en JavaScript tiene una propiedad interna llamada [[Prototype]], que apunta a otro objeto del cual puede heredar propiedades y métodos.

function Persona(nombre) {
    this.nombre = nombre;
}

// Agregar un método al prototipo de Persona
Persona.prototype.saludar = function() {
    console.log(`Hola, soy ${this.nombre}`);
};

// Crear una instancia de Persona
const alex = new Persona("Alex");
alex.saludar(); // "Hola, soy Alex"


function Empresa(nombre, saldo, tipo){
    this.nombre = nombre,
    this.saldo = saldo,
    this.tipo = tipo
}
Empresa.prototype.info = function(){
    const {nombre, saldo, tipo} = this
    console.log(`Hola somos ${nombre} y tenemos un saldo de ${saldo} y somos de tipo ${tipo}`)
}

const empresa = new Empresa("Orange", 30000000, "compañia telefonica")
console.log(empresa)
empresa.info()

//empresa.saludar() //no funcionaria porque el metodo .saludar() es de Persona