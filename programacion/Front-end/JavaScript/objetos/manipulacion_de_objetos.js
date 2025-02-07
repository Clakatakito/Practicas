
//Manipulacion de objetos

const persona = {
    nombre: "Alex",
    edad: 18,
    trabajo: false
}
console.log(persona);
//rescribir (da igual si es una variable tipo const)
persona.trabajo = true
console.log(persona.trabajo);

//añadir

persona.imagen = "imagen.png";
console.log(persona.imagen);
console.log(persona);

//eliminar

delete persona.imagen;
console.log(persona);

//no dejar modificar el objeto

const nomodifica = {
    no: "si",
    si: "no"
};
console.log(nomodifica);
Object.freeze(nomodifica);
nomodifica.mepica = "si";
nomodifica.no = "no";
nomodifica.si = "si";
console.log(nomodifica);

//con object.seal(objeto) si te deja modificar pero no te deja añadir ni eliminar
//console.log(Object.isSealed(objeto))
//destructuring de 2 o mas objetos

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
};
const {nombre} = producto;
console.log(nombre);
/*const {nombre} = cliente //error porque estamos intentando
hacer 2 variables con el mismo nombre(nombre) */
const {nombre: nombrecliente} = cliente;
console.log(nombrecliente);

console.log(cliente.direccion);
const {direccion} = cliente;
console.log(direccion);


//destructuring objetos anidados
const {direccion: {calle} } = cliente;
//const {direccion} = cliente // no es lo mismo eso, te da otro valor
console.log(calle);


//unir

const producto2 = {
    nombre: "tablet",
    precio: 100,
    disponible: true
};

const carrito = {
    cantidad: 1,
    producto2
};
console.log(carrito);

const carrito2 = {
    ejemplo: true,
    ...producto2 //spread operator
}
console.log(carrito2);

const nuevo_objeto = {
    producto2,
    carrito
};

console.log(nuevo_objeto);

const objeto2 = Object.assign(producto2, carrito);
console.log(objeto2);



//sumar 2 objetos

const fruteria = {
    manzana: true,
    pera: false
}
const otrafruteria = {
    uvas: true,
    mandarinas: true
}

console.log(Object.assign(fruteria, otrafruteria))
//tambien puedes hacer
const combinado = { ...fruteria, ...otrafruteria };
console.log(combinado);