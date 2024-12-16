
//Arrows function

//si tienes 1 sola linea de codigo puedes hacerlo sin {}

const multiplicar = (nume1=0, num2=0) => console.log(nume1*num2);
const multiplicar2 = (nume1=0, num2=0) => {return nume1*num2}; //{return nume1*num2=0} error
console.log(multiplicar2(2,3));

multiplicar(5,5);

//const sumav = (mecago, mecago2) => return(mecago+mecago2)

const sumar = function(num1,num2){
    return num1 + num2;
};
const resultado = sumar(1,1);
console.log(resultado);

//que diferencia hay entre las arrow functions y las functions normales

/*
Las arrow functions en JavaScript tienen una sintaxis más breve y no crean su propio contexto de this,
manteniéndolo igual al contexto en el que fueron definidas, lo que es útil en callbacks. En cambio,
las funciones normales crean su propio this, que cambia según el contexto de llamada,
 lo que les da flexibilidad en situaciones donde el contexto puede variar.
*/