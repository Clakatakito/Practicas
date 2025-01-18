const formulario = document.querySelector(".formulario");
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");

formulario.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita el envío del formulario

    // Eliminamos cualquier alerta previa
    const alertaPrevia = formulario.querySelector(".alerta");
    alertaPrevia?.remove()

    // Creamos una nueva alerta
    const alerta = document.createElement("div");
    alerta.classList.add("alerta");

    // Validación de los campos
    if (input1.value === "" || input2.value === "") {
        alerta.textContent = "Rellena todos los campos";
        alerta.classList.add("clase-1", "clase-2", "bg-red-500");
    } else {
        alerta.textContent = "Todos los campos están completos";
        alerta.classList.add("clase-3", "clase-4", "bg-green-500");
    }

    formulario.appendChild(alerta);

    // Eliminamos la alerta después de 3 segundos
    setTimeout(() => {
        alerta.remove();
    }, 3000);
});

input2.addEventListener("input", function () {
    setTimeout(() => {
        input2.type = "password";
    }, 300);
});
