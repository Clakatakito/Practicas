
//Templete literal

//Importante usarlo con ` ` no con " "

var marca = 'Toyota';
var modelo = 'Corolla';
var mensaje = (`La marca de este coche es ${marca} y el modelo es ${modelo}.`); /*No se puede
empezar con " " i luego poner dentro `${}` si hay que hacer un templete en algun caso el document.write
hay que empezarlo con ` `*/ 
document.write(mensaje); // "Toyota Corolla está arrancando."