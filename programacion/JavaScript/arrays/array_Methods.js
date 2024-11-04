
//Arrays Methods

let arrays = ["HTML", "CSS", "JAVASCRIPT", "PYTHON", "REACT.JS"];


//ejemplo con arrow function

const nuevoArray = arrays.filter((tech) => tech != "HTML"); //si es solo un parametro puedes cortar los () //const nuevoArray = arrays.filter(tech => tech != "HTML");
console.log(nuevoArray);



//sin arrow function

const tecnologias2 = arrays.filter(function(tech){
    if(tech != "HTML"){
        return tech;
    };
});
console.log(tecnologias2)