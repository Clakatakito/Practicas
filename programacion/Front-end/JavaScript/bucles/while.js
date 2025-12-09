
//While
/* 
let pregunta
while (pregunta != "españa".toLocaleLowerCase()) {
    pregunta = prompt("Dime el mejor pais de todos");
}
document.write("Bien dicho")
document.write("<br>")

let numero1, numero3, numero2;



//mas o menos lo entiendo el (!(condicion))

numero1 = parseInt(prompt("Primer valor"))
numero2 = parseInt(prompt("Segundo valor"))
numero3 = parseInt(prompt("Entre esos numeros valor"))
/*while (numero1 <= numero3 <= numero2){
}*/
/* while (numero1 <= numero3 && numero3 <= numero2) {
    numero3 = parseInt(prompt("El tercer número esta entre el ", numero1 , " y el " , numero2));
}

document.write("El tercer número no está entre el primero y el segundo."); */ 

let i = 1
while(i < 100){
    if(i % 2 ==0){
        console.log(`El numero ${i} es par`)
    }else{
        console.log(`El numero ${i} no es par`)
    }
    i++;
}   