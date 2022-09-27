function mensajedeBienvenida() {
    return console.info('Adios Mundo Cruel,');
}

function muestraMSN(callback){
    return callback();
}

muestraMSN(mensajedeBienvenida);