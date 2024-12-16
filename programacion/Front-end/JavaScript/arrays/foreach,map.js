

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