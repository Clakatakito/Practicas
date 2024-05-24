
//While

var pregunta
while (pregunta != "españa" ) {
    pregunta = prompt("Dime el mejor pais de todos");
}
document.write("Bien dicho")

var numero1, numero3, numero2;



//mas o menos lo entiendo el (!(condicion))

numero1 = parseInt(prompt("Primer valor"))
numero2 = parseInt(prompt("Segundo valor"))
numero3 = parseInt(prompt("Entre esos numeros valor"))
while (!(numero1 <= numero3 && numero3 <= numero2)) {
    numero3 = parseInt(prompt("El tercer número debe estar entre el primero y el segundo. Inténtalo de nuevo."));
}

document.write("El tercer número está entre el primero y el segundo.");
