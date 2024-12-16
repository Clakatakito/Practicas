
//objetos

const producto = {
    nombre: "tablet",
    precio: 100,
    disponible: true
};
console.log(producto);
console.log(typeof producto);
console.table(producto); //se vera en la terminal del Quokka en "SALIDA"
console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

//Destructuring

const {nombre,precio,disponible} = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);

/*tambien es lo mismo esto pero el Destructurin es mejor porque puedes poner todos las cariables del
objeto dento de las llaves y te vale:
*/
const nombre2 = producto.nombre;
console.log(nombre2);

//poner valores a un objeto

const usuario = "Pepe";
const contraseña = 1234;

const objeto_usuario = {
    usuario: usuario,
    contraseña: contraseña
};
console.log(objeto_usuario);
console.table(objeto_usuario);

//poner valores a un objeto 2

const tomate = "maduro";
const platano = "fresco";

const supermercado = {
    tomate,
    platano
};
console.log(tomate);
console.log(platano);