document.write("hola");
document.write("<br>");
document.write("<br>");
let si = "hola";
let no = 54;
let tio = {eltio: "pepe", edad: 78};
let letiable = 5;
let letiable2= "laotra";
let nombre = "alex";
let apellido = "serrano";
let nombreful = nombre.concat(" " + apellido);
document.write(nombreful);
document.write("Mi nombre es" , " " , nombre);
document.write("<hr>");
//putos todos
/*let tutio = "antonio";
document.write(tutio);*/
const constante = 56;
document.write("La constante es " + constante);
document.write("<br>");
//rendondea a decimal
let precio = Math.round(500.6);
document.write (precio);
document.write("<br>");
//redondea sin mas al siguiente numero
let precio2 = Math.ceil(347.1);
document.write(precio2);
document.write("<br>");
//redonde hacia bajo
let precio3 = Math.floor(700.1);
document.write(precio3);
document.write("<br>");
let palabra;
palabra = "palabra";
//longitud de caracteres de una
document.write("La longitud de la palabra es " , palabra.length);
document.write("<br>");
//la letras del x asta x
document.write("La letras " , palabra.slice(0,4));
document.write("<br>");

//remplazar
let saludo = "hola manito";
document.write(saludo.replace("hola" , "ADIOS"));
document.write("<br>");

/*let saludo = "hola manito"
saludo(saludo.replace("hola" , "ADIOS"))
document.write(saludo)*/

//mayusculas

let mayus;
mayus = "quiero masyusculas";
document.write(mayus.toUpperCase());
document.write("<br>");

//minusculas
let menores
menores = "Maduras";
document.write(menores.toLowerCase());
document.write("<br>");

//mas concatenar i de forma mas util
let palabra1con, palabra2con;
palabra1con = "primera";
palabra2con = "segunda";
document.write(palabra1con.concat(" " , palabra2con));
document.write("<br>");

//acortar (no se visualiza bien)
let palabra69 = "     Hola     5";
document.write(palabra69.trimStart());  //para quitar espacios del lado izquierdo, el end para el derecho i el trim ambos
document.write("<br>");
document.weite("<br>");

//corta la palabra
document.write(palabra1con.split("ra"));

const elefate = "elefante" /*las varable con const tienen que inicializarse no se puede hacer
const cambiar
cambiar = "cambiar"

con let si que puedes
let puedo_cambiar
puedo_cambiar = ""cambiar

*/

