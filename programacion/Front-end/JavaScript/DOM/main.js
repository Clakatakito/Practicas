
//Selectores

const lista1 = document.querySelector(".titulo")
console.log(lista1)
console.log("El tag que tiene: " , lista1.tagName)
console.log(lista1.textContent)
console.log(lista1.classList)
console.log(lista1.id)


const enlaces = document.querySelector("nav a")
console.log(enlaces)
//solo te saldra el primero, el: <a href="#">este es un link1</a><br>

//querySelectorALL
const enlaces2 = document.querySelectorAll("nav a")
console.log(enlaces2)


//Manipular elemetos HTML con JavaScript

const segundon = document.querySelector(".tituloh2")
console.log(segundon.textContent)
segundon.textContent = ("nuevo titulo") //antes ponia "Manipulacion de objetos"
segundon.id = "idiferente"
console.log(segundon.id) //antes ponia "segundo titulo"

//eliminar el cambio

//segundon.removeAttribute("id") //le quita el id
//segundon.removeAttribute("class") //le quita la clase
//ir descomenta

//segundon.remove("nuevo titulo") //elimina


//Inputs

const primerInput = document.querySelector("#segundoInput") //date cuenta que se llama primerInput pero esta cojiendo realmente el del segundo, el segundoInput
primerInput.value = "Jessica"

//enlaces

//enlaces.textContent = "otro nombre de enlace" //solo cambia el primero

enlaces2.forEach(enlaces => enlaces.textContent = "todos iguales")

//Eventos del DOM - Clicks

const tituloclick = document.querySelector(".click2") //ir cambiando el . por # para ver diferencias
tituloclick.textContent = "Click con DOM"

tituloclick.addEventListener("mouseenter", () => {  //ir probando con mouseenter, click
    tituloclick.textContent = "Nuevo titulo al dar click/pasar por encima"
    //alert("se pulso")
    
})
tituloclick.addEventListener("mouseleave", () => tituloclick.textContent = "Click con DOM" ) //ir probando con mouseenter
    //alert("se pulso")

//enlaces

enlaces2.forEach( enlaces => {
    enlaces.addEventListener("click", (e)=> {
        e.preventDefault()
        e.target.textContent = "Diste click"
    })
})

//Eventos del DOM - Inputs

const input1 = document.querySelector(".input1")
const input2 = document.querySelector(".input2")
input1.addEventListener("click", function(){
    input1.value=""
})
input2.addEventListener("click", function(){
    input2.value=""
})
input2.addEventListener("input", function(){
    input2.type="text"
    setTimeout(() => {
        input2.type="password" //si pones input2.vale="lo que sea" el usuario no podra cambiarlo, es gracioso     
    }, 300);

})



const boton = document.querySelector(".formulario");
boton.addEventListener("submit", function(e) {
    e.preventDefault();
    if (input1 === "" || input2 === "") {
        alert("rellena todos los campos")
    }else{
        alert("Enviando");
    }
});

//falta

