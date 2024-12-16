
//Map

const array = [1,2,3,4,5,6,7,8,9,10];

const multiplicar = array.map(function(num){
    return num * 2;
});

console.log(multiplicar);

//es lo mismo que:

const multiplicar2 = array.map(num => num*2);

console.log(multiplicar2);

//filter

const filtrar = array.filter(function(numfil){
    return numfil <= 5;
});

console.log(filtrar);

const filtrar2 = array.filter(numfil => numfil <= 5);
console.log(filtrar2);