document.addEventListener("DOMContentLoaded", function(){
    const formulario = document.querySelector("#formulario")
    const inputEmail = document.querySelector("#email")
    const inputAsunto = document.querySelector("#asunto")
    const inputMensaje = document.querySelector("#mensaje")



    inputEmail.addEventListener("blur", validar)

    inputAsunto.addEventListener("blur", validar)

    inputMensaje.addEventListener("blur", validar)

    function validar(e){
        if(e.target.value.trim() === ""){
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement)
            return
        }
        
        limpiarAlerta(e.target.parentElement)

        if(e.target.id === "email" && !validarEmai(e.target.value)){
            mostrarAlerta("Email no valido", e.target.parentElement)
            return

        }
        
    }

    function mostrarAlerta(mensaje, referencia){
        const alerta = referencia.querySelector(".error")
        if(alerta){
            alerta.remove()
        }
        const error = document.createElement("P")
        error.classList.add("error")
        error.textContent = mensaje
        error.style.color = "white"
        error.style.backgroundColor = "red"
        referencia.appendChild(error)

    }

    function limpiarAlerta(referencia){
        const alerta = referencia.querySelector(".error")
        if(alerta){
            alerta.remove()
        }
    }
    function validarEmai(email){
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
        const regexResultado = regex.test(email)
        return regexResultado
    }
})  