
//Mas arrays

let arrays = ["HTML", "CSS", "JAVASCRIPT", "PYTHON", "REACT.JS"]
arrays[4] = "REACT"
console.log(arrays)
console.table(arrays)
arrays[10] = "PHP"
console.log(arrays)
console.table(arrays)
arrays.push("Java")
console.log(arrays)
console.table(arrays)
arrays[6] = "kOTLIN"
console.log(arrays)
console.table(arrays)

let nuevaArray = ["primer sitio", ...arrays, "ultimo sitio"]
console.log(nuevaArray)
console.table(nuevaArray)

