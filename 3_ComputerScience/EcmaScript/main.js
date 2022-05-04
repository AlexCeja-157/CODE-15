console.log("Ya se conecto el archivo de javascript")

var alumno= "Alex Ceja"

console.log("El siguiente Alumno "+alumno+" es muy aplicado");

///ECMASCRIPT 6 TEMPLATE LITERALS

console.log(`El Alumno ${alumno} es muy aplicado`)


//NOTACION REST

function suma(a,b){
    var c = a + blur

    return c
}

var primer = 50;
var segunda = 100;

var respuesta = suma(primer, segunda)

console.log(`La suma de la variable primer ${primer}  y segunda ${segunda} es ${respuesta}`)

var numeros = [10,20,30,40,100]

function sumarest(...num){
    for(let i of num){

        console.log(i)

    }
}

console.log("aqui se esta llamando la notacion rest")
sumarest(1,3,4,5,7,76,656,77,345,54,65,44)

function sumaarray(arreglo){
    var suma = 0
    for(let i=0; i < arreglo.length; i++){
        suma = suma + arreglo[i]
        // suma += arreglo[i]
    }

    return suma
}

var resultadoarray = sumaarray(numeros);
console.log(`sumaarray es igual a ${resultadoarray}`);