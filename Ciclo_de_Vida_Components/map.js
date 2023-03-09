console.log("Este es un ejemplo de map")
//listas o arrays que tiene precargados metodos y atributos

const estudiantes = [
	{nombre:"Rolando",mascota:"cuca"},
	{nombre:"Rene",mascota:"Thor"},
	{nombre:"Quidel",mascota:"Pandoro"},
	{nombre:"Cristobal",mascota:"Firulais"}
]
//un atributo precargado seria length que nos da el tamanio de la lista

console.log(`este es el tamanio de mi lista de estudiantes ${estudiantes.length}`)

//metodo funcional for each, map , filter, reduce. El mas comun en React es map, porque nos recorre una lista entregandonos un arrelgo nuevo

var estudiantesMascotas = estudiantes.map((elemento,indice,arreglo)=>{
	return [elemento.nombre,elemento.mascota].join(" ")


})

console.log(`Este es mi nuevo arreglo ${estudiantesMascotas}`)
// Lo hacemos con forEach pero no es eficiente

var prueba = []

estudiantes.forEach((elemento)=>{
	prueba.push([elemento.nombre,elemento.mascota].join(" "))

})
console.log(`Esta es la manera alternativa de hacer lo mismo con foreach ${prueba}`)
