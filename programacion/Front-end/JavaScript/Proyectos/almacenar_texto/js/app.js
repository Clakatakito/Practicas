

// Variables

let btnSubmit = document.querySelector(".button")
let formulario = document.querySelector("#formulario")
let listaMensajes = document.querySelector("#lista-mensajes")
let arrayMensajes = []

// Eventos

formulario.addEventListener("submit", agregarMensaje)

document.addEventListener("DOMContentLoaded", () =>{
    arrayMensajes = JSON.parse(localStorage.getItem("mensajes")) || []
    localStorage.removeItem("mensajes")
    agregarContenedor()
})


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
        //mensaje.value = ""
        formulario.reset()
        agregarContenedor()
    }else{
        mostrarAlerta()
    }
    
}

function mostrarAlerta(){
    const alerta = document.createElement("P")
    alerta.classList.add = ".error"
    alerta.textContent = "INGRESE OTRO VALOR"
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
        //crear
        const mensajeContendedor = document.createElement("P")
        const btnEliminar = document.createElement("A")

        //ESTILOS
        btnEliminar.textContent = "X"
        btnEliminar.classList.add("borrar-mensaje")
        mensajeContendedor.textContent = mensaje
        listaMensajes.appendChild(mensajeContendedor)
        mensajeContendedor.appendChild(btnEliminar)
        btnEliminar.onclick = e =>{
            const eliminar = e.target.parentNode
            const index = Array.from(eliminar.parentNode.children).indexOf(eliminar);

            if (index !== -1) {
                arrayMensajes.splice(index, 1); // Elimina el elemento del array
            }
            eliminar.remove()
            
        }
        transformarLocalStorage()


    })
}
function limpiarHTML(){
    while(listaMensajes.firstChild){
        listaMensajes.removeChild(listaMensajes.firstChild)
    }
}

function transformarLocalStorage(){
    localStorage.setItem("mensajes", JSON.stringify(arrayMensajes))
}