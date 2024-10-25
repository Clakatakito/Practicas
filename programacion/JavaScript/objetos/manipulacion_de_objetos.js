
//Manipulacion de objetos

const persona = {
    nombre: "Alex",
    edad: 18,
    trabajo: false
}
console.log(persona)
//rescribir (da igual si es una variable tipo const)
persona.trabajo = true
console.log(persona.trabajo)

//añadir

persona.imagen = "imagen.png"
console.log(persona.imagen)
console.log(persona)

//eliminar

delete persona.imagen
console.log(persona)

//no dejar modificar el objeto

const nomodifica = {
    no: "si",
    si: "no"
}
console.log(nomodifica)
Object.freeze(nomodifica)
nomodifica.mepica = "si"
nomodifica.no = "no"
nomodifica.si = "si"
console.log(nomodifica)

//con object.seal(objeto) si te deja modificar pero no te deja añadir ni eliminar

//destructuring de 2 o mas ob{jetos

const producto = {
    nombre: "tablet",
    precio: 100,
    disponible: true
}
const cliente = {
    nombre: "Alex",
    edad: 18,
    diseñadorux: true,
    direccion: {
        calle: "calle palomares"
    }
}
const {nombre} = producto
console.log(nombre)
//const {nombre} = cliente //error porque estamos intentando hace 2 variables
const {nombre: nombrecliente} = cliente
console.log(nombrecliente)

console.log(cliente.direccion)
const {direccion} = cliente
console.log(direccion)
const {direccion: {calle} } = cliente
//const {direccion} = cliente // no es lo mismo eso, te da otro valor
console.log(calle)