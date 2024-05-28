
//uso el continous porque el break ya lo se

var palabra = prompt("Dime palabra:")
var resultado = ""
for(var f in palabra){
    if (palabra[f] == "a"){
        continue
    }else{
        resultado += palabra[f]
    }
}
document.write(resultado)