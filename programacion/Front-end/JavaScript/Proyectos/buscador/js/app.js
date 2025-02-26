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
    minimo: "",
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
    filtrarCoches()
})
maximo.addEventListener("change", (e) => {
    datosBusqueda.maximo = e.target.value
    filtrarCoches()
})
puertas.addEventListener("change", (e) => {
    datosBusqueda.puertas = parseInt(e.target.value)
    filtrarCoches()
})
color.addEventListener("change", (e) => {
    datosBusqueda.color = e.target.value
    filtrarCoches()
})
transmision.addEventListener("change", (e) => {
    datosBusqueda.transmision = e.target.value
    filtrarCoches()
})


//funciones

function mostrarCoches(coches){
    limpiarHTML()
    coches.forEach(coche => {
        const {marca, modelo, year, puertas, color, transmision, precio} = coche
        const autoHTML = document.createElement("P")
        autoHTML.textContent = `${marca} ${modelo} - ${puertas} Puertas ${color} ${transmision} ${precio}`
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
    const resultado = coches.filter(filtrarMarcas).filter(filtrarAño).filter(filtrarPrcioMin).filter(filtrarPrcioMax).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor)
    
    if(resultado = length){
        mostrarCoches(resultado)
    }else{
        limpiarHTML()
        alerta()
    }
}
function filtrarMarcas(coche){
    if(datosBusqueda.marca){
        return coche.marca === datosBusqueda.marca
    }
    return coche
}
function filtrarAño(coche){
    if(datosBusqueda.year){
        return coche.year === parseInt(datosBusqueda.year)
    }
    return coche
}
function filtrarPrcioMin(coche){
    const {minimo} = datosBusqueda
    if(minimo){
        return coche.precio >= minimo
    }
    return coche
}
function filtrarPrcioMax(coche){
    const {maximo} = datosBusqueda
    if(maximo){
        return coche.precio <= maximo
    }
    return coche
}
function filtrarPuertas(coche){
    const {puertas} = datosBusqueda
    if(puertas){
        return coche.puertas === datosBusqueda.puertas
    }
    return coche
}
function filtrarTransmision(coche){
    const {transmision} = datosBusqueda
    if(transmision){
        return coche.transmision === datosBusqueda.transmision
    }
    return coche
}
function filtrarColor(coche){
    const {color} = datosBusqueda
    if(color){
        return coche.color === datosBusqueda.color
    }
    return coche
}
function alerta(){
    const alerta = document.createElement("P")
    alerta.textContent = "NO HAY ESOS COCHES, BUSCA OTROS"
    alerta.style.backgroundColor = "red"
    alerta.style.color = "white"
    resultado.appendChild(alerta)
    
}