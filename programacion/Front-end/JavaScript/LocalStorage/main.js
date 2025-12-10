
//para ver en el navegador el localStorage: inspeccionas, le das a las flechas ">>" y a "Application", y en "Storage" ves a "Local Storage"



//SOLO DETECTA STRINGS
const usuario = localStorage.setItem("usuario", "Claka");

const edadUser = localStorage.setItem("edad", 18); //aunque lo pongas como entero sera un string

//con objetos puedes

const objt = {
    propietario: "Paco",
    anulado: false
};

const objetoStr = JSON.stringify(objt) //transforma el objeto a string, tambien funciona con con arrays
const objtLocalStorage = localStorage.setItem("producto", objetoStr)//no se porque sale triple

//obtener el valor(string, objt)

const nombre = localStorage.getItem("usuario")
console.log(nombre) //claka
console.log(localStorage.getItem("producto") )//imprime el objeto pasado a string
console.log(JSON.parse(localStorage.getItem("producto"))) //lo vuelve a pasar a objeto(mientras tenga la misma sintaxis que un objeto)


//obtener el valor(arrays)

const messes = ["Enero", "Febrero", "Marzo", "Abril"];
const guardarMesses = JSON.stringify(messes);// Convertir a string

localStorage.setItem("messes", guardarMesses);// Guardar en localStorage

console.log(localStorage.getItem("messes"));// Verificar el valor guardado

console.log(JSON.parse(localStorage.getItem("messes")))// Convertir de nuevo a array


//eliminar localStorage

localStorage.removeItem("pro") //duplicados
localStorage.removeItem("nombre") //duplicados

//localStorage.clear() //elimina todo el localStorage
