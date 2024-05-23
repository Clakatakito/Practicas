
//no se porque exsiste esta forma de hacerlo, es una copia del if/else pero menos util porque no
//puedes poner "<", o "&&". 

var valor = parseInt(prompt("Ingresa un valor 1 o 2, perro:"));
switch (valor) {
    case 1:
        document.write("1");
        break;
        case 2:
            document.write("2");
            break;

    default:
        document.write("valor no valido");
        break;
}