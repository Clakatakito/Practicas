
//operadores && y || (and y or)

//Operador &&

var continente = prompt("Dime un continente".toString());//.toString al final no, dento del ()
var edad = parseInt(prompt("Dime tu edad"));
if (edad=="78" && continente=="america") {
    document.write("bien hecho");
}
document.write("<br>")

//Operador ||

var dia, mes, anio;
dia = parseInt(prompt("Dime un dia"));
mes = parseInt(prompt("Dime un mes"));
anio = parseInt(prompt("Dime un año"));
if (mes == 1 || mes == 2 || mes == 3) {
    document.write("Estas en el primer trimestre");
}else{
    document.write("No pertenece al primer trimestre")
}