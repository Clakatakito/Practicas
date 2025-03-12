
//frasses aleatorias

console.log("hola monstro")
frasesFamosas = document.querySelector("#frase-famosa")
const frases = [
    "La educación es el arma más poderosa que puedes usar para cambiar el mundo. — Nelson Mandela",
    "No hay medicina que cure lo que no cura la felicidad. — Gabriel García Márquez",
    "Un libro es un sueño que tienes en tus manos. — Neil Gaiman",
    "La vida es lo que pasa mientras estás ocupado haciendo otros planes. — John Lennon",
    "Piensa antes de hablar. Lee antes de pensar. — Fran Lebowitz",
    "La paciencia es la fortaleza del débil y la impaciencia, la debilidad del fuerte. — Immanuel Kant",
    "La única cosa que tienes que saber es la ubicación de la biblioteca. — Albert Einstein",
    "No todos los que vagan están perdidos. — J.R.R. Tolkien",
    "El futuro pertenece a quienes creen en la belleza de sus sueños. — Eleanor Roosevelt",
    "Es mejor ser odiado por lo que eres que ser amado por lo que no eres. — André Gide",
    "El éxito es aprender a ir de fracaso en fracaso sin desesperarse. — Winston Churchill",
    "Haz de tu vida un sueño, y de tu sueño una realidad. — Antoine de Saint-Exupéry",
    "No podemos resolver problemas pensando de la misma manera que cuando los creamos. — Albert Einstein",
    "La felicidad no es algo hecho. Viene de tus propias acciones. — Dalai Lama",
    "No cuentes los días, haz que los días cuenten. — Muhammad Ali",
    "El conocimiento habla, pero la sabiduría escucha. — Jimi Hendrix",
    "Un hombre que no se alimenta de sus sueños envejece pronto. — William Shakespeare",
    "La educación no es preparación para la vida; la educación es la vida en sí misma. — John Dewey",
    "A veces vemos nuestro propio destino con más claridad cuando lo vemos a través de los ojos de otros. — Carlos Ruiz Zafón",
    "No es la especie más fuerte la que sobrevive, ni la más inteligente, sino la que mejor responde al cambio. — Charles Darwin"
  ];
const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];

frasesFamosas.textContent = fraseAleatoria


//lluvia de estrellas

function lluvia(){
    const divLluvia = document.querySelector("#libro-mes")
    let cantidad = 40
    let i = 0
    while(i < cantidad){
        let caida = document.createElement("I")
        let size = Math.random() * 5
        let posX = Math.floor(Math.random()* window.innerWidth)
        let delay = Math.random() * -20
        let duration = Math.random() * 5

        caida.style.width = 0.2 + size + "px"
        caida.style.left = posX + "px"
        caida.style.animationDelay = delay + "s"
        caida.style.animationDuration = duration = 1 + duration + "s"
        divLluvia.appendChild(caida)
        i++
    }

}
lluvia()

