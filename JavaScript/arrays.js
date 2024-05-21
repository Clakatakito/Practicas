
//arrays, elegir el caracter deseado, tambien con 

/*var array = [1,2,3,4,5,4,5,]
document.write(array.slice(0,1));*/

//cambiar valor de una array

/*var array = [3,4,5]
array.push(1,2,8,9,10)
array.sort()
document.write(array)
document.write("<br>")*/

//el .sort() tambien ordenada alfabeticamente los nombre

var array = [3,4,5]
array.push(1,2,8,9,10,)
array.sort()
document.write(array)
document.write("<br>")
document.write("<br>")

//ir al ultimo valor de un array
document.write("Ultimo valor de la cadena array " , array[array.length-1]);
document.write("<br>")
document.write("<br>")

//arrays de tipo texto

var frutas = ["kiwi", "manzana", "platano"]
document.write("Pasar a string " , array.toString())
document.write("<br>")
document.write("<br>")

//unir tipos de array, basicamente concat

var letras, letras2
numeros = [1,2,3,4]
letras = ["a", "b", "c"]
document.write(numeros.concat("Basicamente el concat " , " " , letras))
document.write("<br>")
document.write("<br>")

//borar el ultimo elemento de una array
numeros.pop()
document.write("Elimina el ultimo caracter de la array " , numeros)
document.write("<br>")
document.write("<br>")

//agregar elemento a una array

array.push(4,6,7)
document.write("Agrega numeros " , array)
document.write("<br>")
document.write("<br>")

//elimina primer elemento
array.shift()
document.write("Quitamos el primer valor de la array " , array)
document.write("<br>")
document.write("<br>")


//añade un elemento al principio de una array

array.unshift(100)
document.write("Agregamos en elemento al principio de una array " , array)
document.write("<br>")
document.write("<br>")

//cortar los elementos que no esten etre eso sitioa

document.write("El splice otro vez" , array.splice(0,3));
document.write("<br>")
document.write("<br>")

//copiar una array
var cosas = [100,101.102,103,104,105];
var copia = document.write(cosas);
document.write("<br>")
document.write("<br>")

//Lo contrario al .sort(), el reverse
var reverse = ["alex" , "neumatico" , "zorra"]
document.write("Lista al reves " , reverse.reverse())
document.write("<br>")
document.write("<br>")

//sustituir el len[x] por otro valor
 var coches = ["Honda", "Toyota", "Mercedes"]
 coches[0] = "picnic"
 document.write(coches)