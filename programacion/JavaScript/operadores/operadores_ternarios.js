
//Operadores ternarios

const saldo = 1200;
const pagar = 1300;
const auth = true;
const tarjeta = true;

if(auth){
    console.log("esta autenticado");
}else{
    console.log("no esta autenticado");
};

//se puede hacer mas fACIL con los operadores ternarios

auth ? console.log("esta autenticado") : console.log("no esta autenticado");

//A JavaScript no le importa los espacios asqie tambien se puede hacer asi, es mas es la manera mas comun de verlo

auth ?
    console.log("esta autenticado"):
    console.log("no esta autenticado");



saldo > pagar ?
console.log("puede pagar"):
console.log("no puede pagar");


saldo > pagar ?
    console.log("puede pagar"):
    tarjeta ?
        console.log("puede pagar con tarjeta"):
        console.log("no puede pagar");


saldo > pagar || tarjeta ? //solo poner un ?
console.log("puede pagar"):
console.log("no puede pagar");        
                
                