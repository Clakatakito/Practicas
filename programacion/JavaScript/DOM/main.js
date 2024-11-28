
//Selectores

const lista1 = document.querySelector(".titulo")
console.log(lista1)
console.log("El tag que tiene: " , lista1.tagName)
console.log(lista1.textContent)
console.log(lista1.classList)
console.log(lista1.id)


const enlaces = document.querySelector("nav a")
console.log(enlaces)
//solo te saldra el primero, el: <a href="#">este es un link1</a><br>

//querySelectorALL
const enlaces2 = document.querySelectorAll("nav a")
console.log(enlaces2)