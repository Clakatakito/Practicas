
//Optional chaining (?)

/*
la depuracion de JavaScript funciona en cascada, es decir que si hay un error en la linea 1 no veras el resto de lineas mas abajo, eso se arregla con el Optional chaining
*/

const alumno = {
    nombre: "Alex",
    clase: "programaciom",
    aprovado: true
}

//const {nombre} = alumno
//console.log(nombre) //"Alex"
//console.log(alumno.nombre) //"Alex"
//alumno.altura = "1,75"
//console.log(alumno.altura) //"1,75"
//console.log(alumno.examenes.examen) //error Cannot read properties of undefined (reading 'examen')
//console.log("hola")
//console.log("Como hay un error arriba no me puedes leer")


//Con Optional chaining

const alumno2 = {
    nombre: "Alex",
    clase: "programaciom",
    aprovado: true
}

const {nombre} = alumno2
console.log(nombre)
console.log(alumno2.nombre)
alumno2.altura = "1,75"
console.log(alumno2.altura)
console.log(alumno2.examenes?.examen) //ahora con el operador "?" revisa si el parametro "examenes" existe, sino no lo encuentra
console.log("hola")
console.log("Ahora si puedes leerme")

//Nullish coalescing operator (??)

let nombreUsuario = null;
let nombreMostrar = nombreUsuario ?? "Invitado";
console.log(nombreMostrar);

let cantidad = 0; //ves cambiando entre 0 y null y veras la diferencia
let cantidadMostrar = cantidad ?? 10;
console.log(cantidadMostrar); // 0

/*
El operador ?? solo actúa cuando el valor a la izquierda es null o undefined.
Esto significa que si el valor es 0, "", o false, el operador ?? no interviene y simplemente se toma ese valor.
*/

//Combinacion Optional chaining y Nullish coalescing

const usuario = {
    perfil: {
        nombre2: null
    } 
};
let nombre2 = usuario.perfil?.nombre2 ?? "Invitado";
console.log(nombre2); // "Invitado"

