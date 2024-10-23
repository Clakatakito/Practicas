
//For In

let esta = "latiene";

for (let i in esta){
    document.write(esta[i]);
    document.write("<br>");
}
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");

let pregunta = prompt("Ingresa una palabra:");
let cont = 0;
for(let x in pregunta){
    if (pregunta[x]/*x*/ == "a" || pregunta[x]/*x*/ == "e" || pregunta[x]/*x*/ == "i" || pregunta[x]/*x*/ == "o" || pregunta[x]/*x*/ == "u") {
        cont++;
    }
}
document.write("Tu palabra tiene " , vocal);
