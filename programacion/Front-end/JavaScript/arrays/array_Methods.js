
//Arrays Methods

let arrays = ["HTML", "CSS", "JAVASCRIPT", "PYTHON", "REACT.JS"];
let numeros = [10, 15, 20, 30]


//ejemplo con arrow function

const nuevoArray = arrays.filter((tech) => tech != "HTML"); //si es solo un parametro puedes cortar los () //const nuevoArray = arrays.filter(tech => tech != "HTML");
console.log(nuevoArray);



//sin arrow function

const tecnologias2 = arrays.filter(function(tech){
    if(tech != "HTML"){
        return tech;
    };
});
console.log(tecnologias2)

//include, solo soporta strings

const resultado = arrays.includes("PYTHON");
console.log(resultado);




//Copy Within

const array1 = ['a', 'b', 'c', 'd', 'e'];

// Copiar al índice 0 el elemento en el índice 3
console.log(array1.copyWithin(0, 3, 4));
// Resultado esperado: Array ["d", "b", "c", "d", "e"]

// Copiar al índice 1 todos los elementos desde el índice 3 hasta el final
console.log(array1.copyWithin(1, 3));
// Resultado esperado: Array ["d", "d", "e", "d", "e"]




//Sber el valor y el lenght

const array2 = ['a', 'b', 'c'];

const iterator1 = array2.entries();

console.log(iterator1.next().value);
// Resultado esperado: Array [0, "a"]

console.log(iterator1.next().value);
// Resultado esperado: Array [1, "b"]



const isBelowThreshold = (currentValue) => currentValue < 40;

const array3 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));






const array4 = [1, 2, 3, 4,5,6];

// El siguiente código muestra como rellenar el array array1 con el valor 0, comenzando desde la posición 2 hasta la posición 4:
console.log(array4.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// 
console.log(array4.fill(5, 1));
// Rellena la array de 5 desde la posicion 1, [1, 5, 5, 5, 5, 5]

console.log(array4.fill(6));
// Rellena toda la array de 6, [6, 6, 6, 6, 6, 6]






//encontrar

const arreglo = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"]
const busqueda = arreglo.findIndex(mes => mes === "Viernes")
console.log(busqueda)



//Some - Devuelve si almenos uno cumple la condicion

let some = numeros.some(num => num > 10)
console.log(some)



//Every - Retorno true o false si todos cumplen la condicion

//let numeros = [10, 15, 20, 30]
const every = numeros.every(num => num > 10)
console.log(every)

const every2 = numeros.every(num => num >= 10)
console.log(every2)



//Reduce - Retorna

const reduce = numeros.reduce((num, total) => {
    console.log(total)
    console.log(num)
    return total + num

}, 0)

const reduce2 = numeros.reduce((num, total) => total + num,0)//sino pones el ,0 se lo tomara como tal, como un (,0), en cambio si le pones (,x(el numero que quieras)) 
//si empezara por ese
console.log(reduce2)

const reduce3 = numeros.reduce((num, total) => {return total + num},0)//sino pones el 0 da lo mismo
console.log(reduce3)

/*
Sin valor inicial: .reduce() toma el primer elemento del array como valor inicial del acumulador y empieza a operar desde el segundo elemento.
Ejemplo: [10, 20, 30, 40] sin valor inicial → empieza con 10, y el primer paso es 10 + 20.
Con valor inicial: Si especificas un valor inicial, el acumulador comienza con ese valor y .reduce() recorre todos los elementos del array.
Ejemplo: [10, 20, 30, 40] con valor inicial 1 → empieza con 1, y el primer paso es 1 + 10.
Resultado: Si el array está vacío y no se da un valor inicial, se lanza un error. Con un valor inicial, simplemente devuelve ese valor
*/