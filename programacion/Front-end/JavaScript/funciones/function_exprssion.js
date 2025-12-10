
//Function Declaration



suma(1.5, 2); //puede ser llamada antes que la función


function suma(num1=0, num2=0){
    console.log(num1 + num2);
};



//Function expresion

//console.log(sumar2(3,1)); error, no puede ser llamada antes que la función

const sumar2 = function(nume1, nume2=0){
    console.log(nume1 + nume2)
};

console.log(sumar2(3,1));


// Ejemplo de una función flecha con parámetros y valor predeterminado

//sumar(3, 1); error

const sumar = (nume1, nume2 = 0) => {
    console.log(nume1 + nume2);
};

sumar(3, 1);


/*
Diferencia principal entre una función declarativa y una expression
esque la declarativa la defines y la puedes llamar desde cualquier punto
incluso antes incluso de ser llamada, la expression no, tiene que llamarse depues
*/

