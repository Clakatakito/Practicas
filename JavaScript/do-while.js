
//Do-While

var usuario, contraseña, usuariopedir, contraseñapedir, cont

usuario = prompt("Cual es su usuario?:");
contraseña = prompt("Cual es su contraseña?:")
cont = 0
do {
    usuariopedir = prompt("Cual es su usuario?:");
    contraseñapedir = prompt("Cual es su contraseña?:")
    if (usuario == usuariopedir && contraseña == contraseñapedir) {
        cont = cont + 1
        
    }
} while (cont != 1);
document.write("Entro señor ", usuario)
document.write("<br>")
document.write("<br>")
document.write("<br>")

//Ahora con While

var usuario2, contraseña2, usuariopedir2, contraseñapedir2, cont2
usuario2 = prompt("Cual es su usuario?:");
contraseña2 = prompt("Cual es su contraseña?:")
cont2 = 0
while (cont2 != 1) {
    usuariopedir2 = prompt("Repita el usuario?:");
    contraseñapedir2 = prompt("Repita la contraseña?:")
    if (usuario2 == usuariopedir2 && contraseña2 == contraseñapedir2)
        cont2 = cont2 +1
}
document.write("bienvenido ", usuario2)