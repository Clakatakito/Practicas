
//Funciones
let veces = parseInt(prompt("Cuantas veces quieres ver la funcion:"));
let cont = 0;
alert("Esto es mio");
function funcion(){
    document.write("esto es una funcion");
}
while(cont != veces){
    funcion();
    document.write("<br>");
    cont++;
}
document.write("fin del bucle");

