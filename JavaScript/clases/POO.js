const { JSDOM } = require('jsdom');

const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);
global.document = dom.window.document;
global.window = dom.window;

document.write('Hello, Quokka!');

console.log('Quokka is running...');




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
console.log(`El coche ${miCoche.marca} con modelo ${miCoche.modelo} está arrancando.`);

//Ejemplo con las funciones

class Moto {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    arrancar() {
        return (`${this.marca} ${this.modelo} está arrancando.`);
    }

    detenerse() {
        return (this.marca + " " + this.modelo + " esta detenido");
    }
    get la_marca() {
        return this.marca;
    }
    set ModificarMarca(nueva_marca) {
        this.marca = nueva_marca;
    } 
}

const miMoto = new Moto("Honda", "CBR500R");
console.log(miMoto.arrancar());
console.log(miMoto.detenerse());
console.log(`La marca de la moto es ${miMoto.la_marca}`);



miMoto.ModificarMarca = "Kamasaki";
console.log("Ahora el nuevo nombre es " + miMoto.la_marca);
console.log(miMoto.la_marca);

//SUBCLASES

console.log("SUBCLASES");

class Personaje{
    constructor(nombre, edad, pelo) {
        this.nombre = nombre;
        this.edad = edad; 
        this.pelo = pelo;
    }
    saludar(){
        return (`${this.nombre} te saluda`);
    }
    despedir(){
        return (`${this.nombre} se despide de ti`);
    }
    get verNombre(){
        return this.nombre;
    }
    set CambiarNombre(NuevoNombre){
        this.nombre = NuevoNombre;
    }
}

const personaje1 = new Personaje("Mario", "30", "negro");

console.log(personaje1.saludar());
console.log(personaje1.despedir());
console.log(personaje1.verNombre);
personaje1.CambiarNombre = "MANOLO";
console.log(personaje1.verNombre);
class Enemigo extends Personaje {
    constructor(nombre, edad, pelo, bigote){ //Pondremos los mismos paramentos de la otra clase mas nuevos si queremos
        super(nombre, edad, pelo); //ponemos aqui los que venga de la clase que estamos tomando, de la que no no
        this.bigote = bigote;
    }
    atacar(){
        return (this.nombre + " te ataca");
    }
    saludar(){
        return super.saludar() + " y encima te pega";
    }
    despedir(){
        return super.despedir() + " y encima te pega";
    }
    
    //no tenemos que hacer un get ni set ya que ya los cojemos de la clse heredada
}

const enemigo1 = new Enemigo("Bowser", "100", "no", "no");

console.log(enemigo1.atacar());
console.log(enemigo1.saludar()); //No tengo ninguna funcion en esta clase llamada saludar(), ya que es de la heredada
console.log(enemigo1.saludar());
console.log(enemigo1.despedir());


//Atributos y métodos estáticos

class Mascota {
    static cola = "tiene"; //valor statico, no puede heredarlo los objetos
    static contarmascota = 0;
    pelo = "rizado";
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        this.contador = ++ Mascota.contarmascota;
    }
    static saludo(){
        return "mover la cola";
    }
    get contadormascota(){
        return this.contador;
    }
}

const mascota1 = new Mascota("Tobby", "20");
console.log(mascota1.nombre);
console.log(Mascota.cola);
console.log(mascota1.cola);
console.log(mascota1.pelo);
console.log(mascota1)
const mascota2 = new Mascota("Perla", "10");
console.log(mascota2);

console.log(mascota1.contadormascota);
console.log(mascota2.contadormascota);

console.log(Mascota.saludo());
//console.log(mascota1.saludo()); mascota1.saludo is not a fuction

//Creados una clase hijo

class Perro extends Mascota{
    constructor(nombre, edad, raza){
        super(nombre, edad);
        this.raza = raza;
    }
}

console.log(Perro.cola);

console.log(Perro.contarmascota);
const perro1 = new Perro("Rufus", "20", "Perro");
console.log(Perro.contarmascota); //aqui como lo llamas desde la classe Perro y no desde el objeto 
//perro1 puede ir a la variable satica de esa clase
console.log(perro1.contadormascota); //aqui va directamente a la funcion get
console.log(perro1.contarmascota); //aqui no funciona porque no eres una clase