// 1. Crear una función que nos muestre en consola los días de la semana.

function semana () {

    console.log('Lunes');
    console.log('Martes');
    console.log('Miercoles');
    console.log('Jueves');
    console.log('Viernes');
    console.log('Sabado');
    console.log('Domingo');
       
}

//semana();

function mostrarDias() {
    let dias = ['Lunes','Martes','Miercoles','Jueves','Viernes'];
    for ( i=0; i < dias.length; i++) {
        console.log(dias[i]);
    }

}

//mostrarDias();

// NOTA iterar Array

let nombres = ['Ana','Luis','Diego'];

//console.log(nombres [0]);
//console.log(nombres[2]);


// 2. Crear una función que nos muestre un numero A, un numero B y la suma de A y B


function numeros () {

    //let numA = 10;
    //let numB = 8;
    let numA = prompt("Ingresa el primer numero");
    let numB = prompt("Ingresa el segundo numero");
    let resultado = parseInt(numA) + parseInt(numB);

    console.log(`La suma de ${numA} + ${numB} es igual a ${resultado}`);
}

//numeros();



// 3. Crear una función que nos muestre la longitud de un arreglo que tú crearás

function long () {
    let arreglo = [15, 30, 45, 50, 62, 71, 80];
    let largo = arreglo.length
    console.log(largo);

}

long();


