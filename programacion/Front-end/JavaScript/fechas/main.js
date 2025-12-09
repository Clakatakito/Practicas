
//fechas

const fechaActual = new Date()//.getFate, .getDay (metodos...)
const eligirFecha = new Date("1-1-2000")
const mejorFormato = new Date().toLocaleString()
console.log(fechaActual)
console.log(eligirFecha)
console.log(mejorFormato)

//hay varios metodos para new Date(), se dividen en get... y en set..., get obtiene la fecha en el formato deseado obvio, y set la modifica
//ej: cojeremos la fecha de hoy pero queremos que sea 2010

//no es lo mismo
/*
const fechaActualAModificar = new Date().setFullYear(2010)
console.log(fechaActualAModificar)
*/
//que:
const fechaActualAModificar = new Date()
fechaActualAModificar.setFullYear(2010)
console.log(fechaActualAModificar)