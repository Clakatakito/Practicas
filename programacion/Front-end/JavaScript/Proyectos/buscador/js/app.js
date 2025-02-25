//variables

const marca = document.querySelector("#marca")
const modelo = document.querySelector("#modelo")
const year = document.querySelector("#year")
const minimo = document.querySelector("#minimo")
const maximo = document.querySelector("#maximo")
const puertas = document.querySelector("#puertas")
const transmision = document.querySelector("#transmision")
const color = document.querySelector("#color")
const resultado = document.querySelector("#resultado")


//objeto que resultados

const datosBusqueda = {
    marca: "",
    modelo: "",
    year: "",
    color: "",
    puertas: "",
    transmision: ""
}

//eventos

document.addEventListener("DOMContentLoaded", () => {
    mostrarCoches(coches)
    llenarSelect()
})
marca.addEventListener("change", (e) => {
    datosBusqueda.marca = e.target.value
    filtrarCoches()
})
year.addEventListener("change", (e) => {
    datosBusqueda.year = e.target.value
    filtrarCoches()
})
minimo.addEventListener("change", (e) => {
    datosBusqueda.minimo = e.target.value
})
maximo.addEventListener("change", (e) => {
    datosBusqueda.maximo = e.target.value
})
puertas.addEventListener("change", (e) => {
    datosBusqueda.puertas = e.target.value
})
color.addEventListener("change", (e) => {
    datosBusqueda.color = e.target.value
})
transmision.addEventListener("change", (e) => {
    datosBusqueda.transmision = e.target.value
})


//funciones

function mostrarCoches(coches){
    limpiarHTML()
    coches.forEach(coche => {
        const {marca, modelo, year, puertas, color, transmision} = coche
        const autoHTML = document.createElement("P")
        autoHTML.textContent = `${marca} ${modelo} - ${puertas} Puertas ${color} ${transmision}`
        resultado.appendChild(autoHTML)
    })

}
function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    }
}
function llenarSelect(){
    const yearsUnicos = [...new Set(coches.map(coche => coche.year))].sort();
    yearsUnicos.forEach(cocheYear => {
        const option = document.createElement("option")
        option.textContent = `${cocheYear}`
        year.appendChild(option)
        
    })
    
}
function filtrarCoches(){
    const resultado = coches.filter(filtrarMarcas).filter(filtrarAño)
    mostrarCoches(resultado)
}
function filtrarMarcas(coche){
    if(datosBusqueda.marca){
        return coche.marca === datosBusqueda.marca
    }
    return coches
}
function filtrarAño(coche){
    if(datosBusqueda.year){
        return coche.year === parseInt(datosBusqueda.year)
    }
    return coches
}