// Función simulando una tarea asíncrona
function obtenerDatos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Datos obtenidos");
        }, 7000); // Simula un retraso de X segundos
    });
};

// Usando async y await
async function procesarDatos() {
    console.log("Esperando datos...");
    const datos = await obtenerDatos(); // Espera la resolución de la promesa
    console.log(datos); // "Datos obtenidos"
};

procesarDatos();