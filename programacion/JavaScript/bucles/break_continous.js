
//uso el continous porque el break ya lo se

var palabra = prompt("Dime palabra:")
var quitar = prompt("Que letra quieres quitar:")
var resultado = ""
for(var f in palabra){
    if (palabra[f] == quitar){
        continue
    }else{
        resultado += palabra[f]
    }
}
document.write(resultado)