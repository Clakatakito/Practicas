
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

function Cliente(cliente, saldo){
    this.cliente = cliente,
    this.saldo = saldo
}
Cliente.prototype.tipoCliente = function(){
    let tipo
    if(this.saldo > 300){
        tipo = "Diamante"    
    }else if(this.saldo > 150){
        tipo = "Oro"
    }else{
        tipo = "Bronce"
    }
    return tipo
}
Cliente.prototype.nombreClienteSaldo = function(){
    console.log(`El cliente ${this.cliente} es de tipo ${this.tipoCliente()} y tiene este saldo ${this.saldo}`)
}
Cliente.prototype.retirar = function(saldo){
    this.saldo -= saldo
}

const cliente = new Cliente("pedro", 200)
cliente.nombreClienteSaldo()
cliente.retirar(100)
console.log(cliente.nombreClienteSaldo())

//empresa.saludar() //no funcionaria porque el metodo .saludar() es de Persona

console.log("<br>")
console.log("<br>")
console.log("<br>")
console.log("<br>")

//Heredar
//Vamos a heredar de Cliente
//en vez de hacer esto, como Cliente ya tiene cliente y saldo, vamos a heredarlo

/*
function Persona2(cliente, saldo, telefon){
    this.cliente = cliente,
    this.saldo = saldo
    this.telefon = telefon
}
*/

//forma correcta:
function Persona2(cliente, saldo, telefon){
    Cliente.call(this, cliente, saldo)
    this.telefon = telefon
}
//heredar la funciones, cuando heredas por defecto que hereda las funciones del proto original
//asi si:
Persona2.prototype = Object.create(Cliente.prototype)
//se quita el constructor, original ya que hemos heredado, le ponemos el constructor del proto heredado
Persona.prototype.constructor = Cliente

//heredamos de Cliente pero del proto heredado no se hereda al original, anoser que se haga
Persona2.prototype.mostrarTelefono = function(){
    return `El telefono de esta persona es ${this.telefon}`
}

const persona2 = new Persona2("manolo", 12, 922838)
console.log(persona2)
persona2.retirar(1)
console.log(persona2)
console.log(persona2.mostrarTelefono())