let disponible = 4000; //ir cambiando
let retirar = 4000; //ir cambiando
let auth = true; //ir cambiando

if(disponible == retirar && auth==true){
    console.log("iguales");

}else{
    console.log("no son iguales");
};



if(auth){ //si dejas sola la variable JavaScript se lo tomara como un booleano
    console.log("autenticado");
}else{
    console.log("no autenticado");
};



if(!auth){
    console.log("autenticado");
}else{
    console.log("no autenticado");
};