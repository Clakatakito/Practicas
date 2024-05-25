
//for

for (let variable = 10; variable <= 20; variable++) {
    if (variable == 15) {
        document.write("va por la ", variable)
        document.write("<br>") 
    } 
    document.write(variable)
    document.write("<br>")
}
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")

//for con array i muy chula



const garaje = ["nada" ,"patinete", "libro", "bici"];
for (var num = 1; num < garaje.length; num++) {
    document.write("Cosas en el garaje numero ", num, " = ", garaje[num]);
    document.write("<br>");
}