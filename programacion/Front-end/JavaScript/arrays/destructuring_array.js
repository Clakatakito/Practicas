
//Destructurin de arrays

//una forma de hacerlo

let arrays = ["HTML", "CSS", "JAVASCRIPT", "PYTHON", "REACT.JS"];
let PYTHON = arrays[3];
console.log(PYTHON);

//destructuring de arrays
/* 
En el de objetos se utiliza {} porque son objetos que se construyen con {}, pero como los arrays
se contruyen con [] el destructurin de arrays tambien se hace con []
*/

const [html] = arrays;
console.log(html);
//no es que js sepa cual quieres cojer, esque los va cojiendo en orden
const [js, python] = arrays;
console.log(js);
console.log(python); 

//si solo quieres un valor de la array para meterla en una variable es asi
//queremos la variable react con el valor "REACT.JS" de la array de arrays
const [, , , , react] = arrays;
console.log(react);

/*
Es un poco raro y confuso pero se hace cuando quieres hacer una variable del contenido que tu quieras
pero no quieres los valores de antes
*/