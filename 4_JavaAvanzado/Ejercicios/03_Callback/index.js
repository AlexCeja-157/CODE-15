function saludar(nombre){
    console.log('Hola como estas ' + nombre);
}

function entradaUsuario(callback){
    var nombre = "Alex Ceja";
    callback(nombre);
}

saludar('Alex')
entradaUsuario(saludar)

function firts(seconds){
    setTimeout(function(){
    console.log('Primero');
    seconds();
    }, 5000)
};

function seconds(){
    setTimeout(function(){
    console.log('Segundo')
    },3000)
};

firts(seconds);
seconds();

function soyCien(){
    return 100;
}

function soyDocientos(){
    return 200;
}
function sumarDosFunciones(functionUno, functionDos){
    const suma = functionUno() + functionDos();
    return suma;
}

setTimeout(function(){
console.log(sumarDosFunciones(soyCien,soyDocientos));
},7000)
