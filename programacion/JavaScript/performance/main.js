
//Performance

const url = "https://jsonplaceholder.typicode.com/comments"
const consultarApi = async () =>{
    try {
        const inicio = performance.now()
        const response = await fetch(url)
        if(!response.ok) {
            throw new Error(`Hubo un error...`)
        }
        const data = await response.json()
        console.log(data)
        const fin = performance.now()
        console.log("El resultado es: ", inicio - fin)
    } catch (error) {
        console.log(error.message)
    }
    
}
consultarApi()
//eso medira cuantos ms de arriba a abjo tarda el codigo pero que pasa si tenemos mas de una peticion?


const url2 = "https://jsonplaceholder.typicode.com/photos"
const url3 = "https://jsonplaceholder.typicode.com/todos"

consultarTodasLasAPI = async () =>{
    const inicio2 = performance.now()

    const [response, response2, response3] = await Promise.all([fetch(url), fetch(url2), fetch(url3)])
    const [data, data2, data3] = await Promise.all([response.json(), response2.json(), response3.json()])
    console.log(data)
    console.log(data2)
    console.log(data3)
    const fin2 = performance.now()
    console.log(inicio2 - fin2)
}
consultarTodasLasAPI()

//ese seria el codigo correcto ya que si hacemos la peticiones de 1 en 1 tardara mucho mas





//Ejemplo de como no hacerlo:



const consultarTodasLasAPImal = async () => {
    const inicio2 = performance.now();

    try {
        // Llamada a la primera API
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        // Llamada a la segunda API
        const response2 = await fetch(url2);
        const data2 = await response2.json();
        console.log(data2);

        // Llamada a la tercera API
        const response3 = await fetch(url3);
        const data3 = await response3.json();
        console.log(data3);
    } catch (error) {
        console.error("Error en las llamadas a las APIs:", error);
    }

    const fin2 = performance.now();
    console.log(fin2 - inicio2);
};

consultarTodasLasAPImal();

