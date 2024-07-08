




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
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")

//SUBCLASES

document.write("SUBCLASES")
document.write("<br>")
document.write("<br>")

class Personaje{
    constructor(nombre, edad, pelo) {
        this.nombre = nombre;
        this.edad = edad; 
        this.pelo = pelo;
    }
    saludar(){
        return (`${this.nombre} te saluda`)
    }
    despedir(){
        document.write(`${this.nombre} se despide de ti`)
    }
    get verNombre(){
        return this.nombre
    }
    set CambiarNombre(NuevoNombre){
        this.nombre = NuevoNombre
    }
}

const personaje1 = new Personaje("Mario", "30", "negro")

personaje1.saludar() //Mario te saluda
document.write("<br>")
personaje1.despedir() //Mario se despide de ti
document.write("<br>")
document.write(personaje1.verNombre) //Mario
personaje1.CambiarNombre = "MANOLO"
document.write("<br>")
document.write(personaje1.verNombre); //MANOLO
document.write("<br>")
document.write("<br>")
document.write("<br>")

class Enemigo extends Personaje {
    constructor(nombre, edad, pelo, bigote){ //Pondremos los mismos paramentos de la otra clase mas nuevos si queremos
        super(nombre, edad, pelo) //ponemos aqui los que venga de la clase que estamos tomando, de la que no no
        this.bigote = bigote
    }
    atacar(){
        document.write(this.nombre, " te ataca")
    }
    
    //no tenemos que hacer un get ni set ya que ya los cojemos de la clse heredada
}

const enemigo1 = new Enemigo("Bowser", "100", "no", "no")

enemigo1.atacar()
document.write("<br>")
enemigo1.saludar() //No tengo ninguna funcion en esta clase llamada saludar(), ya que es de la heredada
console.log(enemigo1.saludar());




