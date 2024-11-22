
//Fetch API con Promises

const url = "https://jsonplaceholder.typicode.com/comments"

fetch(url)
    .then((response) =>{
        if(response.ok){
            return response.json()
        }if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    })
    .then(data =>{
        console.log(data)
    })
    
    .catch(error =>{
        console.log(error.message)
    })//el .catch solo funciona cuando hay error de conexion