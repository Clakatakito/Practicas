

// Variables

let btnSubmit = document.querySelector(".button")
let formulario = document.querySelector("#formulario")
let listaMensajes = document.querySelector("#lista-mensajes")
let arrayMensajes = []

// Eventos

formulario.addEventListener("submit", agregarMensaje)


//funciones

function agregarMensaje(e){
    e.preventDefault()
    let mensaje = document.querySelector("#mensaje")
    let nuevoMensaje = mensaje.value.trim();
    const existe = arrayMensajes.includes(nuevoMensaje)
    if(nuevoMensaje != "" && !existe){
        console.log(mensaje.value)
        const resultado = mensaje.value.trim()
        arrayMensajes = [...arrayMensajes, resultado]//.push(resultado)
        console.log(arrayMensajes)
        mensaje.value = ""
        agregarContenedor()
    }else{
        mostrarAlerta()
    }
    
}

function mostrarAlerta(){
    const alerta = document.createElement("P")
    alerta.classList.add = ".error"
    alerta.textContent = "INGRESE UN VALOR"
    alerta.style.color = "white"
    alerta.style.backgroundColor = "red"
    alerta.style.textAlign = "center"
    formulario.appendChild(alerta)

    setTimeout(() => {
        formulario.removeChild(alerta)
    }, 1000);
}
function agregarContenedor(){
    limpiarHTML()
    
    arrayMensajes.forEach(mensaje =>{
        const mensajeContendedor = document.createElement("P")
        mensajeContendedor.textContent = mensaje
        listaMensajes.appendChild(mensajeContendedor)


    })
}
function limpiarHTML(){
    while(listaMensajes.firstChild){
        listaMensajes.removeChild(listaMensajes.firstChild)
    }
}