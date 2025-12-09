

//Mas cosas de arrays

//forEach //ejecuta una funcion dada por la cantidad de parametros dento de la array

let arrays = ["HTML", "CSS", "JAVASCRIPT", "PYTHON", "REACT.JS"];

arrays.forEach(function() {
    console.log("dento de la funcion");
});

arrays.forEach(function(lenguajes) {
    console.log(lenguajes);
});

//map //map te genera una array nueva segun los datos que le des

arrays.map(function(tech3) {
    console.log(tech3);
});

let masarray = arrays.map(tec45 => tec45 + " 5")
console.log(masarray)

let nuevoArray = arrays.map(function(tech3) {
    return tech3 + " avanzado";
});
console.log(nuevoArray);

let nuevoArray2 = arrays.map(tec5 => tec5 + " mas avanzado")
console.log(nuevoArray2)

// for ... of

for(let tech4 of arrays){
    console.log(tech4);
};


let arreglo = ["triciclo", "mapa", "tesoro"]
let arreglo2 = [1,3,5,7,9]

arreglo.forEach((num) => {
    console.log(`tengo ${num}`)
})

mas = arreglo2.map(num => num*2)
console.log(mas)

mas2 = arreglo2.map(function(num){
    console.log(num*2)
})

mas3 = arreglo2.filter(fil =>{
    return fil > 5
})
console.log(mas3)

mas4 = arreglo2.filter(numfil => numfil >5)
console.log(mas4)