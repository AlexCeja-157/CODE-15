// 1. Crear una función que reciba un número y nos muestre en la consola si es positivo o negativo


function tipoNumero (numero) {
        if (numero < 0){
            console.log(`El numero es negativo`);
        } else if (numero > 0) {
            console.log(`El numero es positivo`);
        } else {
            console.log(`El numero no es ni positivo ni negativo`)
        }
}

//tipoNumero(-7);

// 2. Crear una función que reciba el nombre de un cliente y un numero que hace referencia a un ahorro y nos muestre en la consola un mensaje con el nombre del cliente y el monto ahorrado

function infoCliente(nombre, monto) {
    
    console.log(`El cliente ${nombre} a ahorrado ${monto} pesos`);

}

//      let nombre = prompt("Nombre del cliente");
//      let monto = prompt("Monto a ahorrar");


//  infoCliente(nombre, monto);


// 3. Crear una función que reciba un arreglo de calificaciones y nos muestre el promedio

let calificaciones = [8, 9, 7, 9, 10, 8, 9]

let sumatoria = 0;

function promedioCalificaciones(){
    for(let i = 0; i < calificaciones.length; i++) {
        sumatoria = sumatoria + calificaciones [i];
    };

    let prom = sumatoria / calificaciones.length
    console.log(`El promedio es ${prom}`);
}

//promedioCalificaciones();



// 4. Crear una función que reciba un número y nos diga si es par o impar




// 5. Crear una función que reciba un código (elige tres códigos diferentes) y por cada código nos entregue un cupón de descuento (tú defines el valor del cupón)

// 6. Crear una función que reciba base y altura de un triángulo y nos muestre cuál es su perímetro

// 7. Crear una función que reciba base y altura de un triángulo y nos muestre cuál es su área

// 8. Crear una función que reciba 2 números y me entregue el número más alto

// 9. Crear una función que reciba 2 números y me entregue el número más pequeño

// 10. Crear una función que reciba 3 strings y nos muestre cuál tiene más caracteres

// 11. Crear una función que reciba 1 número y me lo muestre al cubo

// 12. Crear una función que reciba una palabra y me muestre cuántas "a" contiene

// 13. Crear una función que reciba una palabra y la transforme a minúsculas

// 14. Crear una función que reciba una palabra y la transforme a mayúsculas

// 15. Crear una función que reciba un número del 0 al 5 y me muestre en la consola el valor del arreglo que tiene ese índice let array = ['a', 'b', 'c',' d', 'e', 'f']