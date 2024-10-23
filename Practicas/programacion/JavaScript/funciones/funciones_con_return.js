
//Funcion con retur

function ladelreturn (valor1, valor2){
    valor1 = parseInt(prompt("Ingrese primer valor:"))
    valor2 = parseInt(prompt("Ingrese segundo valor:"))
    let resultado = valor1 + valor2
    document.write(resultado)
}
ladelreturn();
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")

function ladelreturnsi (valor3, valor4){
    return valor3 + valor4
}
document.write(ladelreturnsi(100,50))//no se puede hacer "ladelreturn();" ya que vamos con el return

document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")

//curioso lo siguiente

function saludo(){
    return "hola!!!"
}
let mensaje = saludo()
document.write(mensaje)