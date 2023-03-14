console.log('ejecuto script ejercicio_uno');

function mensajeBienvenida(){
    return console.info('Hola Bienvenido JS')
};

function muestraMB(callback){
    return callback();
}

muestraMB(mensajeBienvenida);