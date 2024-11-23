
//Fetch API con Promises

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