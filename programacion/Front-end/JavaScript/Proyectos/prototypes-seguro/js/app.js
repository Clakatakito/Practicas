

function Seguro(marca, year, tipo){
     this.marca = marca
     this.year = year
     this.tipo = tipo
}

function UI(){

}


UI.prototype.llenarOpciones = () =>{
     const max = new Date().getFullYear(),
          min = max - 20
     const selectYear = document.querySelector("#year")    
     
     for(let i = max; i > min; i-- ){
          let optin = document.createElement("option")
          optin.value = i
          optin.textContent = i
          selectYear.appendChild(optin)
     }
}

const ui = new UI()

document.addEventListener("DOMContentLoaded", ()=> {
     ui.llenarOpciones()

     //variables

     const form = document.querySelector("#cotizar-seguro")
     

     //eventos
     form.addEventListener("submit", contizarSeguro)

     validar()
     function validar(){
          if(marca.value.trim() == ""){
               crearAlerta()
               

          }
     }
     function crearAlerta(){
          const alerta = document.createElement("P")
          alerta.textContent = "Escriba algo"
          alerta.style.color = "white"
          alerta.style.backgroundColor = "red"
          form.appendChild(alerta)
     }
     function contizarSeguro(e){
          e.preventDefault()
          //marca
          const marca = document.querySelector("#marca").value
          
          //año
          const year = document.querySelector("#year").value
          
          
          //tipo
          const tipo = document.querySelector('input[name="tipo"]:checked').value
          

          if(marca == "" || year == "" || tipo == ""){
               console.log("no")
          }else{
               console.log("si")
          }

     }

})