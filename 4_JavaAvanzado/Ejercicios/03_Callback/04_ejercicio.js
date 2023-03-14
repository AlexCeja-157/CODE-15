console.log('ejecutando script ejercicio_cuatro');

function ordenSuperior(cadena, callback, callback2){
    result = callback(cadena) + callback2(cadena)
    return result;
}

function minus(cadena){
    return console.log(cadena.toLowerCase());
}

function mayus(cadena){
    return console.log(cadena.toUpperCase());
}

ordenSuperior('El que se duerme se lo lleva la corriente', mayus, minus)