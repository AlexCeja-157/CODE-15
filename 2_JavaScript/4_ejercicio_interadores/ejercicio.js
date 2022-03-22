//*Dado un arreglo de calificaciones obtener la calificación máxima, mínima y promedio
//* *Nota: sólo con for, no se vale usar funciones que ya existan

/*
var calificaciones = [90, 80, 50, 90, 95, 60, 30, 20, 98, 50, 40, 99];
console.log(calificaciones);

// Ordenando de Mayor a menor

var calificacionesOrdenadas = calificaciones.sort(function(a,b){return a-b});

console.log(calificacionesOrdenadas);

var numMayor = calificacionesOrdenadas[calificaciones.length - 1];
console.log('numMayor',numMayor);

var numMenor = calificacionesOrdenadas[0];
console.log('numMenor',numMenor);

var sumatoria = 0;

for(var i = 0; i < calificaciones.length; i++) {
    sumatoria = sumatoria + calificaciones [i];
};

console.log('sumatoria',sumatoria);

var promedio = sumatoria / calificaciones.length;

console.log('promedio', promedio);

*/

// Ejercicio 2
// Crear un arreglo con los numeros  de la serie fibonacci

var limite = 10;
var serie = [0, 1];

for(var i = 2; i < limite; i++) {
    serie[1] + serie [0]
    serie.push(serie[i-1] + serie[i-2]);
}

console.log(serie);

// Ejercicio 3

//Crea un programa con ayuda de iteraciones que muestre en la consola una pirámide de asteriscos como la siguiente:
/*

    *
   ***
  *****
 *******
*********

*/
// Ejercicio 4

// Mostrar en la consola la table de un número (del 1 al 10)
// Tabla del 2
// 1 x 2 = 2
// 2 x 2 = 4
// 3 x 2 = 6 
// .
// .
// 10 x 2 = 20

// Ejercicio 5 

// Paco hizo travesuras en el salón y la maestra lo castigó, para poder salir tiene
// escribir en el pizarrón todos los números pares  del 1 al 100, ¿puedes ayudarle a Paco a
// hacer un algoritmo que haga esto por el?



// Ejercicio 6

//Escribir todos los números que terminan en 0 y estén entre 2 y 121










