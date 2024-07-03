
//PROGRAMACION ORIENTADA A OBJETOS


//Se crea la "plantilla"
class Coche {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo; 
    }
}

// Crear el objeto que tomara la platilla Coche
const miCoche = new Coche("Toyota", "Corolla");

// Usar la instancia para mostrar la información
document.write(`El coche ${miCoche.marca} con modelo ${miCoche.modelo} está arrancando.`);

document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");

//Ejemplo con las funciones

class Moto {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    arrancar() {
        document.write(`${this.marca} ${this.modelo} está arrancando.`);
    }

    detenerse() {
        document.write(this.marca, " " ,this.modelo , " esta detenido");
    }
    get la_marca() {
        return this.marca
    }
    set ModificarMarca(nueva_marca) {
        this.marca = nueva_marca;
    } 
}

const miMoto = new Moto('Honda', 'CBR500R');
miMoto.arrancar();
document.write("<br>");
miMoto.detenerse();
document.write("<br>")
document.write("<br>")
document.write(`La marca de la moto es: ${miMoto.la_marca}<br>`);

document.write("<br>")
document.write("<br>")

miMoto.modificarMarca = "Kamasaki"
document.write("Ahora el nuevo nombre es " , miMoto.modificarMarca)



