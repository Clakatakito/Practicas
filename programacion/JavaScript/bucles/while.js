
//While

var pregunta
while (pregunta != "españa" ) {
    pregunta = prompt("Dime el mejor pais de todos");
}
document.write("Bien dicho")
document.write("<br>")

var numero1, numero3, numero2;



//mas o menos lo entiendo el (!(condicion))

numero1 = parseInt(prompt("Primer valor"))
numero2 = parseInt(prompt("Segundo valor"))
numero3 = parseInt(prompt("Entre esos numeros valor"))
/*while (numero1 <= numero3 <= numero2){
}*/
while (numero1 <= numero3 && numero3 <= numero2) {
    numero3 = parseInt(prompt("El tercer número esta entre el ", numero1 , " y el " , numero2));
}

document.write("El tercer número no está entre el primero y el segundo.");
