console.log("clase de arrays")
//Primera manera de declarar un arreglo

var arreglo1 = new Array()
var alumnos = new Array("Rene","Mario","Luis","Jesus")

console.log(alumnos)
console.log(alumnos.length)

//Segunda manera y mas usada es con los []

var alumnos2 = ["Ander","William","Estela","Natanael","Iris","Edwing","Erick"]

console.log(alumnos2[2])

// Ciclo FOR

for (let i = 0; i <= alumnos2.length; i +=2){
    console.log(alumnos2[i])
}

//concatenar 2 array

var primerArray = ["Juan","Luis"]
var segundoArray = ["Pedro", "Jose"]


var concatenado = primerArray.concat(segundoArray,alumnos2)
console.log(concatenado)

var junto = alumnos2.join(",")
console.log(junto)

//Pop  elimina el ultimo elemento y lo regresa 

var ultimo = alumnos2.pop()
console.log(ultimo)

alumnos2.push(ultimo)

console.log(alumnos2)


//Splice (indice de inicio, num de elementos a borrar, elemento nuevo)

// en caso de solo borrar solo se ocupan los 2 primeros parametros

console.log(alumnos2)
alumnos2.splice(2,0,"Maria")
console.log(alumnos2)

alumnos2.unshift("Thomas")
console.log(alumnos2)

var primerElemento = alumnos2.shift()
console.log (primerElemento)
console.log(alumnos2)


//split

var juntado = "perros,gatos,tortugas,conejo,vivora,hamster,iguana,peces,llamas"

var separado = juntado.split(",")

console.log(separado)


var comida = "tacos; Tortas: Chilaquiles. Tostadas/ Pozole, Quesadillas; enchiladas flautas+ Pancita"


console.log(comida)

var comidas = comida.split(";")
console.log(comidas)


// var separadores = [","," ","/",":","+",".",";"]

// for(let x = 0; x < comida.length; x ++){

//     if (separadores[y]== comida[x]){
//         comida = comida.replace(separadores[y],",")
//     }

// }

// var final = comida.split(",")
// console.log(final)


//Arrays con json javascript Object notation

var estudiantes = [
    {
        nombre: "Andres",
        apellido: "Guevara",
        edad: "28",
        mayor: false,
        sueldo: 5000
    },
    {
        nombre: "Maria de los Angeles",
        apellido: "Baltazar",
        edad: "40",
        mayor: false,
        sueldo: 15000
    },
    {
        nombre: "Rene",
        apellido: "Manzano",
        edad: "30",
        mayor: false,
        sueldo: 25000
    },
    {
        nombre: "Miguel",
        apellido: "Sauza",
        edad: "25", 
        mayor: false,
        sueldo: 20000   
    }
]

for (let i = 0; i < estudiantes.length; i++){
    console.log(estudiantes[i].nombre)
}


// Metodos funcionales

//Recorrer con un for each

estudiantes.forEach((elementoActual,indice,array)=>{
    console.log(elementoActual)
    console.log(indice)
    console.log(array)
})


//MAP

var estudiantesnuevo = estudiantes.map((elementoActual,indice,array)=>{
    if (elementoActual.edad > 29){
        return{...elementoActual, mayor:true}
    }
    else {
        return{...elementoActual, mayor:false
        }}
    
})

var estudiantesIncrementoSueldo = estudiantes.map((elementoActual,indice,array)=>{
    return {...elementoActual,sueldo:elementoActual.sueldo+1500, seguroMedico:true}

})

console.log(estudiantesIncrementoSueldo)


//Filter

// nos permite crear un nuevo arreglo a partir de otro pero con una condicion dada

var estudiantesFilatrados = estudiantes.filter((elemento,indice,array)=>{
    return elemento.sueldo >= 10000
})

console.log(estudiantesFilatrados)


//Reduce

const numerosArreglo = [1,5,10,15,20]
const funcion = (acumulador,valor) => acumulador + valor
console.log(numerosArreglo.reduce(funcion))







