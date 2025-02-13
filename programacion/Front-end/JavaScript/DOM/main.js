

//PRACTICA DEL DOM

//IR DESCOMENTANDO/Comentando EN BLOQUE

//cambiar texto
//let titulo = document.querySelector("#titulo")
//titulo.textContent = "Examen de Manipulación del DOM"

/*............................................................*/

//cambiar background
//let seccion2 = document.querySelector("#seccion2")
//seccion2.style.backgroundColor = "lightblue"

/*............................................................*/

//cambiar todos los textos 
//let parrafos = document.querySelectorAll("p")
//parrafos.forEach(par => par.textContent = "Este contenido ha sido modificado")

/*............................................................*/

//bordes
//let secciones = document.querySelectorAll("section")
//secciones.forEach(sec => sec.style.border = "2px solid red");

/*............................................................*/

//cambiar color de letra
//let footerText = document.querySelector("#footer-text")
//footerText.style.color = "blue"


/*............................................................*/

//crear elementos
//let newp = document.createElement("p")
//let seccion3 = document.querySelector("#seccion3")
//newp.textContent = "Este es un nuevo párrafo añadido dinámicamente."
//seccion3.appendChild(newp)

/*............................................................*/

//eliminar
//let seccion1 = document.querySelector("#seccion1")
//seccion1.remove()


/*............................................................*/


//let modp2 = document.querySelector("#seccion2 p")
//modp2.textContent = "Sección Modificada"



//Traversing the DOM

//.parentNode, .childNodes, .firstChild, .lastChild, .nextElementSibling, .previousElementSibling


//const nav1 = document.querySelector("#navegacion");
//const primerEnlace = nav1.firstElementChild; //diferencias entre firstElementChild y firstChild: firstElementChilddevuelve el primer nodo hijo Element , mientras que firstChilddevuelve el primer nodo hijo Node , independientemente de si es un Elemento, un Texto, un Comentario o algo más.
//primerEnlace.textContent = "Enlace Modificado";
//primerEnlace.removeAttribute("href") quitar el href para convertirlo en texto normal



/*............................................................*/


//const navegacion1 = document.querySelector("#navegacion");
//const enlaceprimero = navegacion1.firstElementChild;
//const padre = enlaceprimero.parentNode
//padre.style.backgroundColor = "green"

/*............................................................*/

//let seccion2 = document.querySelector("#seccion2") //seleccionamos el contenedor seccion2
//let primerh2 = seccion2.firstElementChild //vamos al primer elemento
//let segundop = primerh2.nextElementSibling //i vamos al siguiente
//segundop.textContent = "aqui"


/*............................................................*/

//let seccion3 = document.querySelector("#seccion3")
//seccion3.children[1].textContent = "aqui"

/*............................................................*/

//let seccion2 = document.querySelector("#seccion2");
//let segundoParrafo = seccion2.children[2];
//let parrafoAnterior = segundoParrafo.previousElementSibling;
//parrafoAnterior.textContent = "Este es el párrafo anterior modificado";











