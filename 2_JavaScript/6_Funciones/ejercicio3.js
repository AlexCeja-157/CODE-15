// 1. Crear una función que reciba un array de strings y números como este [4,"dos",8,"tres",5,9,1,"cero" y nos regrese un arreglo con sólo los elementos tipo number

function filtarArreglo (arreglo) {
    let nuevoArreglo = [];
    for( let i = 0; i < arreglo.length; i++){
        if(typeof arreglo[i] === 'number'){
            nuevoArreglo.push(arreglo[i])
        }
    }
    return nuevoArreglo;
}

let arreglo = [4,"dos",8,"tres",5,9,1,"cero"]

console.log(filtarArreglo(arreglo));



// 2. Crear una función que reciba un número como parámetro nos devuelva un arreglo con los números pares desde el 0 hasta el número recibido como parámetro

function crearNumerosPares (limite){
    let pares = [];
    
    for(let i = 0;i <= limite; i++){
        if(i%2 === 0){
            pares.push(i);
        }
    }
    return pares;
}

console.log(crearNumerosPares(30));

// 3. Crear una función que me entregue un número entero random entre 1 y 100

function crearRandom(limInferior,LimSuperior){
    let numRandom = Math.floor(Math.random() * (LimSuperior - limInferior)) + limInferior;

    return numRandom
}

console.log(crearRandom(1, 100));
console.log(crearRandom(1, 100));
console.log(crearRandom(1, 100));
console.log(crearRandom(1, 100));
console.log(crearRandom(1, 100));


// 4. Crear una función que me ayude a codificar un mensaje, la función debe recibir un string y entregarme el mensaje codificado, la codificación reemplaza las 'a' con 4, las 'e' con 3, las 'i' con 7, las 'o' con 6 y las 'u' con 2

let palabra = 'Murcielago';

function codificarMensaje(palabra){
    let nuevaPalabra = palabra.split('');

    for(let i = 0;i < palabra.length; i++){
        if  (palabra[i] === 'a') {
            nuevaPalabra[i] = 4; 
        }else if(palabra[i] === 'e'){
            nuevaPalabra[i] = 3;
        }else if (palabra[i] === 'i'){
            nuevaPalabra[i] = 1;
        }else if (palabra[i] === 'o'){
            nuevaPalabra[i] = 0;
        }else if (palabra[i] === 'u'){
            nuevaPalabra[i] = 6;
        }
    }
    return nuevaPalabra.join('');
}


console.log(codificarMensaje(palabra));




