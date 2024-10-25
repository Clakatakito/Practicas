
//uso el continous porque el break ya lo se

let palabra = prompt("Dime palabra:")
let quitar = prompt("Que letra quieres quitar:")
let resultado = ""
for(let f in palabra){
    if (palabra[f] == quitar){
        continue
    }else{
        resultado += palabra[f]
    }
}
document.write(resultado)