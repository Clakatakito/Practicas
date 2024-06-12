
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
        document.write(`${this.marca} ${this.modelo} se ha detenido.`);
    }
}

const miMoto = new Moto('Honda', 'CBR500R');
miMoto.arrancar();
document.write("<br>");
miMoto.detenerse();

//Con Herencias

class Comanche {
    // Definición de propiedades privadas usando el prefijo #
    #kilometraje;
    
    constructor(marca, modelo, kilometrajeInicial) {
        this.marca = marca;    // Propiedad pública
        this.modelo = modelo;  // Propiedad pública
        this.#kilometraje = kilometrajeInicial;  // Propiedad privada
    }

    // Método público para obtener el kilometraje
    obtenerKilometraje() {
        return this.#kilometraje;
    }

    // Método público para incrementar el kilometraje
    conducir(km) {
        if (km > 0) {
            this.#kilometraje += km;
        } else {
            document.write("Kilometraje debe ser positivo");
        }
    }
}
document.write("<br>")
document.write("<br>")
const miComanche = new Comanche('Hosa', 'mamatua', 10000);

// Intentando acceder a la propiedad privada (esto dará un error)
//console.log(miComanche.#kilometraje); Error: Propiedad privada no accesible desde fuera de la clase

// Acceder a la propiedad privada a través de un método público
document.write("El Kilometraje es " , miComanche.obtenerKilometraje()); // Output: 10000

// Usar el método público para modificar la propiedad privada
miCoche.conducir(500);
document.write(miComanche.obtenerKilometraje()); // Output: 10500
