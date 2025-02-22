document.addEventListener("DOMContentLoaded", function(){
    const email = {
        email: "",
        asunto: "",
        mensaje: ""
    }
    const formulario = document.querySelector("#formulario")
    const inputEmail = document.querySelector("#email")
    const inputAsunto = document.querySelector("#asunto")
    const inputMensaje = document.querySelector("#mensaje")
    const botonForm = document.querySelector("#formulario button[type='submit']")



    inputEmail.addEventListener("blur", validar)

    inputAsunto.addEventListener("blur", validar)

    inputMensaje.addEventListener("blur", validar)
    botonForm.addEventListener("click", function(){
        const enviado = document.createElement("P")
        enviado.textContent = "ENVIADO!!!"
        enviado.color = "white"
        enviado.backgroundColor = "green"
        formulario.appendChild(enviado)

    })

    function validar(e){
        if(e.target.value.trim() === ""){
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement)
            email[e.target.name] = ""
            comprovarEmail()
            return
        }
        
        limpiarAlerta(e.target.parentElement)

        if(e.target.id === "email" && !validarEmai(e.target.value)){
            mostrarAlerta("Email no valido", e.target.parentElement)
            email[e.target.name] = ""
            comprovarEmail()
            return

        }
        email[e.target.name] = e.target.value.trim().toLowerCase()
        comprovarEmail()
        
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

    function comprovarEmail(){
        if(Object.values(email).includes("")){
            botonForm.classList.add("opacity-50")
            botonForm.disable = true

        }else{
            botonForm.classList.remove("opacity-50")
            botonForm.disable = false
        }
    }

})