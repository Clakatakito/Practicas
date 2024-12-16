let nombre = prompt("Cual es su nombre".toString());
let edad = parseInt(prompt("Ingresa tu edad"));
if (edad >= 18) {
    document.write("Bienvenido " , nombre.concat(" de edad ", edad));
    }else {
        if (edad < 18){
            document.write("Eres menor, señor " , nombre);
        }else{
            document.write("Pon algo perro"); //eso ya lo hace esta comanda
        }
    }
