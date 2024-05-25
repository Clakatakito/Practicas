
//For In

var esta = "latiene";

for (var i in esta){
    document.write(esta[i]);
    document.write("<br>");
}
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");

var pregunta = prompt("Ingresa una palabra:");
var vocal = 0;
for(var x in pregunta){
    if (pregunta[x]/*x*/ == "a" || pregunta[x]/*x*/ == "e" || pregunta[x]/*x*/ == "i" || pregunta[x]/*x*/ == "o" || pregunta[x]/*x*/ == "a") {
        vocal++;
    }
}
document.write("Tu palabra tiene " , vocal);