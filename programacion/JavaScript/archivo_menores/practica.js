let si = "hola";
let no = 54;
let tio = {eltio: "pepe", edad: 78};
console.log(typeof tio)
let variable = 5;
let variable2= "laotra";
let nombre = "alex";
let apellido = "serrano";
let nombreful = nombre.concat(" " + apellido);
console.log(nombreful);
console.log("Mi nombre es" + " " + nombre);
let neumatico, neumatico2;
neumatico = 1;
neumatico2 = 3;
console.log(neumatico + neumatico2);

let numerogrande = 18282828282828282828282828282828282882382839237829;
let numerograndebig = BigInt(18282828282828282828282828282828282882382839237829);
console.log(numerogrande);
console.log(typeof numerogrande);
console.log(numerograndebig);
console.log(typeof numerograndebig);

//booleans

const buleano = true;
console.log(typeof buleano);
const buleano2 = false;
console.log(typeof buleano2);

//Symbols

let primersymbol, segundosymbol;
primersymbol = Symbol(30);
segundosymbol = Symbol(30);
console.log(primersymbol == segundosymbol);
console.log(primersymbol === segundosymbol);
let machupichu1,machupichu2;
machupichu1 = 3 //entero
machupichu2 = 3 //entero
console.log(machupichu1 === machupichu2); 
machupichu1 = 3 //entero
machupichu2 = "3" //string
console.log(machupichu1 == machupichu2);
console.log(machupichu1 === machupichu2);
machupichu1 = 3 //entero
machupichu2 = 4 //entero
console.log(machupichu1 == machupichu2);
console.log(machupichu1 === machupichu2);

//los symbols son siempre diferentes, da igual el valor de dento o el tipo de dato

/*
el primer = es de igual, ejemplo, let ejemplo es = wuhdwu, le ordenas a que tenga ese valo, el ==
se fija en que si el valor de dentro es el mismo sin importar el tipo de dato y el === se fija en el
valor de dentro y en el tipo de dato
*/

//putos todos
/*let tutio = "antonio";
console.log(tutio);*/
const constante = 56;
console.log("La constante es " + constante);
//rendondea a decimal
let precio = Math.round(500.6);
console.log (precio);
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
puedo_cambiar = "cambiar"
//hola marios
*/
