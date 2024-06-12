
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

document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")

class Moto {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    arrancar() {
        document.write(`${this.marca} ${this.modelo} está arrancando.`);
    }

    detenerse() {
        document.write(`${this.marca} ${this.modelo} se ha detenido.`);
    }
}

const miMoto = new Moto('Honda', 'CBR500R');
miMoto.arrancar();
document.write("<br>")
miMoto.detenerse();