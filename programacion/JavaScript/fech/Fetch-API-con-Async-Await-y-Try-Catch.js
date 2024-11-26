

const url = "https://jsonplaceholder.typicode.com/comments"


const consultaAPI = () =>{
    fetch(url)
    .then((response) =>{
        if(response.ok){
            return response.json()
        }if(!response.ok){
            throw new Error(`Hay un error crack: ${response.status}`);
        }
    })
    .then(datos =>{
        console.log(datos)
    })
    
    .catch(error =>{
        console.log(error.message)
    })//el .catch solo funciona cuando hay error de conexion
}    
consultaAPI()
document.write("<br>")
document.write("<br>")
document.write("<br>")

const url2 = "https://jsonplaceholder.typicode.com/comment"
const consultarApi = async () =>{
    try {
        const response = await fetch(url2)
        if(!response.ok) {
            throw new Error(`Hubo un error...`)
        }
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error.message)
    }
    
}
consultarApi()