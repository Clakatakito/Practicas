const formulario = document.querySelector(".formulario");
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");

formulario.addEventListener("submit", function(e) {
    e.preventDefault(); // Evita el envío del formulario
    
    // Validación de los campos
    if (input1.value === "" || input2.value === "") {
        alert("Rellena todos los campos");
    } else {
        alert("Formulario enviado");
    }
});
