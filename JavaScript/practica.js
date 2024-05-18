document.write("hola");
document.write("<br>")
document.write("<br>")
var si = "hola"
var no = 54
var tio = {eltio: "pepe", edad: 78}
var variable = 5
var variable2= "laotra"
var nombre = "alex"
var apellido = "serrano"
var nombreful = nombre.concat(" " + apellido)
document.write(nombreful)
document.write("Mi nombre es" , " " , nombre)
document.write("<hr>")
//putos todos
/*var tutio = "antonio";
document.write(tutio);*/
const constante = 56
document.write("La constante es " + constante)
document.write("<br>")
//rendondea a decimal
var precio = Math.round(500.6)
document.write (precio)
document.write("<br>")
//redondea sin mas al siguiente numero
var precio2 = Math.ceil(347.1)
document.write(precio2)
document.write("<br>")
//redonde hacia bajo
var precio3 = Math.floor(700.1)
document.write(precio3)
document.write("<br>")
var palabra
palabra = "palabra"
//longitud de caracteres de una
document.write("La longitud de la palabra es " , palabra.length)
document.write("<br>")
//la letras del x asta x
document.write("La letras " , palabra.slice(0,4))
document.write("<br>")

//remplazar
var saludo = "hola manito"
document.write(saludo.replace("hola" , "ADIOS"))
document.write("<br>")

/*var saludo = "hola manito"
saludo(saludo.replace("hola" , "ADIOS"))
document.write(saludo)*/

//mayusculas

var mayus
mayus = "quiero masyusculas"
document.write(mayus.toUpperCase())
document.write("<br>")

//minusculas
var menores
menores = "Maduras"
document.write(menores.toLowerCase())
document.write("<br>")

//mas concatenar i de forma mas util
var palabra1con, palabra2con;
palabra1con = "primera"
palabra2con = "segunda"
document.write(palabra1con.concat(" " , palabra2con))
document.write("<br>")

//acortar (no se visualiza bien)
var palabra69 = "     Hola     5"
document.write(palabra69.trimStart())//para quitar espacios del lado izquierdo, el end para el derecho i el trim solo ambos
document.write("<br>")
document.weite("<br>")
document.weite("<br>")
document.weite("<br>")
document.weite("<br>")
document.weite("<br>")

//corta la palabra
document.write(palabra1con.split("ra"))