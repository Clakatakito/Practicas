const carrito = document.querySelector("#carrito")
const contenedorCarrito = document.querySelector("#lista-carrito tbody")
const vaciarCarrito = document.querySelector("#vaciar-carrito")
const listaCursos = document.querySelector("#lista-cursos")
let artiCulosCarritos = []
function CargarEventos(){
    listaCursos.addEventListener("click", agregarCurso)
    listaCursos.addEventListener("mouseover", mostrarMensaje);
    listaCursos.addEventListener("mouseout", restaurarTexto);
    carrito.addEventListener("click", eliminarCurso)
    vaciarCarrito.addEventListener("click",  ()=>{
        artiCulosCarritos = [] //vaciamos el arreglo
        limpiarHTML()
    })
    document.addEventListener("DOMContentLoaded", ()=>{
        artiCulosCarritos = JSON.parse(localStorage.getItem("curso")) || []
        carritoHTML()
    })
}
CargarEventos()


function mostrarMensaje(e) {
    if (e.target.classList.contains("agregar-carrito")) {
        e.target.dataset.textoOriginal = e.target.textContent; // Guardar el texto original
        e.target.textContent = "Añadir al carrito?";
    }
}

function restaurarTexto(e) {
    if (e.target.classList.contains("agregar-carrito")) {
        e.target.textContent = e.target.dataset.textoOriginal; // Restaurar el texto original
    }
}





function agregarCurso(e){
    e.preventDefault()

    if(e.target.classList.contains("agregar-carrito")){

        //Guardar los diseños originales
        e.target.dataset.textoOriginal = e.target.textContent;
        e.target.dataset.bgOriginal = e.target.style.backgroundColor;
        e.target.dataset.colorOriginal = e.target.style.color;

        // Cambiar el botón
        e.target.textContent = "AÑADIDO";
        e.target.style.backgroundColor = "green";
        e.target.style.color = "white";
        e.target.style.transition = "0.3s";

        // Restaurar después de 5 segundos
        setTimeout(() => {
            e.target.textContent = "AGREGAR AL CARRITO";
            e.target.style.backgroundColor = e.target.dataset.bgOriginal;
            e.target.style.color = e.target.dataset.colorOriginal;
        }, 500);



        const cursoSeleccionado = e.target.parentElement.parentElement
        console.log(cursoSeleccionado)
        leerDatosCurso(cursoSeleccionado)
    }
} 



function eliminarCurso(e){
    if(e.target.classList.contains("borrar-curso")){
        console.log(e.target.getAttribute("data-id"))

        const cursoId = e.target.getAttribute("data-id")
        console.log(cursoId)
        //Eliminar del arreglo de articulosCarrito por el data-id
        artiCulosCarritos = artiCulosCarritos.filter(curso => curso.id !== cursoId)
        carritoHTML()
    }
}


function leerDatosCurso(curso){
    const infoCurso = {
        img: curso.querySelector("img").src,
        titulo: curso.querySelector("h4").textContent,
        autor: curso.querySelector("p").textContent,
        precio: curso.querySelector(".precio span").textContent,
        id: curso.querySelector("a").getAttribute("data-id"),
        cantidad: 1
    }

    const existe = artiCulosCarritos.some(curso => curso.id === infoCurso.id)
    if(existe){
        //Actualizamos cantidad
        const cursos = artiCulosCarritos.map(curso => {
            if(curso.id === infoCurso.id){
                curso.cantidad++
                return curso //retorna el objeto actualizado
            }else{
                return curso //retorna los objetos que no estan duplicados
            }
        })
        //artiCulosCarritos.push(cursos)
    }else{
        artiCulosCarritos.push(infoCurso)
    }





    console.log(infoCurso)
    
    console.log(artiCulosCarritos)
    carritoHTML()

}

function carritoHTML(){

    //limpiar HTML
    limpiarHTML()
    artiCulosCarritos.forEach(curso => {
        const row = document.createElement("tr")
        row.innerHTML = `
            <td>
                <img src="${curso.img}" width="100">
            </td>
            <td>
                ${curso.titulo}
            </td>
            <td>
                ${curso.precio}
            </td>
            <td>
                ${curso.cantidad}
            </td>
            <td>
                <a href="#" class="borrar-curso" data-id="${curso.id}">ELIMINAR </a>
            </td> 

        `;
        contenedorCarrito.appendChild(row)
    })
    agregarLocalStorage()
}
function agregarLocalStorage(){
    localStorage.setItem("curso", JSON.stringify(artiCulosCarritos))
}

function limpiarHTML(){
    //FORMA LENTA
    //contenedorCarrito.innerHTML = ""
    //MEJOR
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)

    }


}
