function ordenSuperior(cadena,callback) {
    return callback(cadena)
}

function minus(cadena){
    return console.log(cadena.toLowerCase());
}

function mayus(cadena){
    return console.log(cadena.toUpperCase());
}

ordenSuperior('CaRmEn sE Me pErdiO La cAdeNiTa', minus)