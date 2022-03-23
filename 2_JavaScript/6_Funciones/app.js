// FUNCIONES

// nombreFuncion();

{
    // SCOPE
}

// console.log('mensaje fuera de una funcion');
// console.log('mensaje fuera de una funcion');
// console.log('mensaje fuera de una funcion');

// Estructura de una funcion

function nombreFuncion () {
    // Instrucciones
    //Las instrucciones declaradas dentro del cuerpo de una funcion
    //solo se ejecutaran cuando yo invoque a la funcion

    console.log('mensaje dentro de una funcion');
    console.log('sigo siendo la misma funcion');
}


// Mandar Llamar/Ejecutar/Correr/Invocar una funcion
// con su nombre y parentesis

// nombreFuncion();
// nombreFuncion();
// nombreFuncion();
// nombreFuncion();
// nombreFuncion();

function saludar() {
    // Instrucciones

    let nombre = "Alex";
    console.log(`Hola ${nombre}`);

}

saludar();


// Revisar archivo ejercicios1.js

//Uso de parametros en funciones
// Los parametros nos sirven para que las funciones sean dinamicas

//Ejemplo sin parametros

function sumarDosNumeros(){

    let num1 = 10;
    let num2 = 7;
    console.log(num1 + num2);

}

// sumarDosNumeros();
// sumarDosNumeros();


function sumarDosNumerosConParametros(numeroA, numeroB) {
     let suma = numeroA + numeroB;
     console.log(suma);
}

// Mandar a llamar la funcion y enviar valores como parametros
// sumarDosNumerosConParametros(5,2);
// sumarDosNumerosConParametros(30,15);
// sumarDosNumerosConParametros(8,6);


function registrarUsuario(nombreUsuario) {
    console.log(`Bienvenido, ` + nombreUsuario);
}

// registrarUsuario('Jorge');
// registrarUsuario('Santy');
// registrarUsuario('Chris');

let nombre = "Alexander";

// registrarUsuario(nombre);


function mostrarNumeros(limite) {
    for(let i = 1; i <= limite; i++) {
        console.log(i);
    }
}

// mostrarNumeros(15);
// mostrarNumeros(3);
// mostrarNumeros(20);


// Revisar ejercicios2.js 

// LEER

// Funciones con Return

function calcularAreaCuadrado(lado) {
    let area = lado * lado;
    // return nos indica el final de la funcion
    // El return nos entrega el valor final de la funcion 
    return area;
}

let resultado = calcularAreaCuadrado(5);

console.log(resultado);

let resultado2 = calcularAreaCuadrado(10);

console.log(resultado2);

console.log(calcularAreaCuadrado(8));

function crearCodigo(nombre, edad) {
    let codigo = nombre[0]+edad;
    return codigo;
}

let codigoCreado = crearCodigo('Alex',34);

console.log(codigoCreado);

function validarCodigo (codigoCreado) {
    if (codigoCreado.length === 3){
        return `El codigo ${codigoCreado} Si es valido`
    } else {
        return `El codigo ${codigoCreado} No es valido`
    }
}

console.log(validarCodigo(codigoCreado));













