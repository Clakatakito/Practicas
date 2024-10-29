let si = "hola";
let no = 54;
let tio = {eltio: "pepe", edad: 78};
let letiable = 5;
let letiable2= "laotra";
let nombre = "alex";
let apellido = "serrano";
let nombreful = nombre.concat(" " + apellido);
console.log(nombreful);
console.log("Mi nombre es" , " " , nombre);
//putos todos
/*let tutio = "antonio";
console.log(tutio);*/
const constante = 56;
console.log("La constante es " + constante);
//rendondea a decimal
let precio = Math.round(500.6);
console.log(precio);
//redondea sin mas al siguiente numero
let precio2 = Math.ceil(347.1);
console.log(precio2);
//redonde hacia bajo
let precio3 = Math.floor(700.1);
console.log(precio3);
let palabra;
palabra = "palabra";
//longitud de caracteres de una variable
console.log("La longitud de la palabra es " , palabra.length);
//la letras del x asta x
console.log("La letras " , palabra.slice(0,4));

//saber tipo de dato

let tipo_de_dato = "tipo de dato";
console.log(typeof tipo_de_dato)
let tipo_de_dato2 = 666;
console.log(typeof tipo_de_dato2)


//remplazar
let saludo = "hola manito";
console.log(saludo.replace("hola" , "ADIOS"));

/*let saludo = "hola manito"
saludo(saludo.replace("hola" , "ADIOS"))
console.log(saludo)*/

//mayusculas

let mayus;
mayus = "quiero masyusculas";
console.log(mayus.toUpperCase());

//minusculas
let menores
menores = "Maduras";
console.log(menores.toLowerCase());

//mas concatenar i de forma mas util
let palabra1con, palabra2con;
palabra1con = "primera";
palabra2con = "segunda";
console.log(palabra1con.concat(" " , palabra2con));

//acortar (no se visualiza bien)
let palabra69 = "     Hola     5";
console.log(palabra69.trimStart());  //para quitar espacios del lado izquierdo, el end para el derecho i el trim ambos

//corta la palabra
console.log(palabra1con.split("ra"));

const elefate = "elefante" /*las varable con const tienen que inicializarse no se puede hacer
const cambiar
cambiar = "cambiar"

con let si que puedes
let puedo_cambiar
puedo_cambiar = ""cambiar
//mario te odios
*/

