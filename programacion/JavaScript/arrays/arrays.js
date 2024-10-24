
//arrays, elegir el caracter deseado, tambien con 

/*let array = [1,2,3,4,5,4,5,]
console.log(array.slice(0,1));*/

//cambiar valor de una array

/*let array = [3,4,5]
array.push(1,2,8,9,10)
array.sort()
console.log(array)*/

//el .sort() tambien ordenada alfabeticamente los nombre

let array = [3,4,5];
array.push(1,2,8,9,10);
console.log(array)
array = array.sort()
console.log(array);

//ir al ultimo valor de un array
console.log("Ultimo valor de la cadena array " , array[array.length-1]);

//arrays/variables de tipo texto

let frutas = ["kiwi", "manzana", "platano"];
console.log(typeof frutas)
frutas = frutas.toString()
console.log(typeof frutas)
let vaaserunstring = 7
console.log(typeof vaaserunstring)
vaaserunstring = vaaserunstring.toString()
console.log(typeof vaaserunstring)

//unir tipos de array, basicamente concat

let letras, letras2;
numeros = [1,2,3,4];
letras = ["a", "b", "c"];
console.log(numeros.concat("Basicamente el concat " , " " , letras));

//borar el ultimo elemento de una array
numeros.pop();
console.log("Elimina el ultimo caracter de la array " , numeros);

//agregar elemento a una array

array.push(4,6,7);
console.log("Agrega numeros " , array);

//elimina primer elemento
array.shift();
console.log("Quitamos el primer valor de la array " , array);


//añade un elemento al principio de una array

array.unshift(100);
console.log("Agregamos en elemento al principio de una array " , array);

//cortar los elementos que no esten etre eso sitioa

console.log("El splice otro vez" , array.splice(0,3));

//copiar una array
let cosas = [100,101.102,103,104,105];
let copia = console.log(cosas);

//Lo contrario al .sort(), el reverse
let reverse = ["alex" , "neumatico" , "zorra"];
console.log("Lista al reves " , reverse.reverse());

//sustituir el len[x] por otro valor
 let coches = ["Honda", "Toyota", "Mercedes"];
 coches[0] = "picnic";
 console.log(coches);