
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

//que diferencia hay entre las arrow functions y las functions normales?