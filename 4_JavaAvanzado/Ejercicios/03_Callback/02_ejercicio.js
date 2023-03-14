console.log('ejecutando script ejercicio_dos');

function doTask(typeValue,value){
    var text = 'La variable es de tipo ' + typeValue + ' y su valor es ' + value
    return console.log(text)
};

function readValue(data){
    var tipeValue = typeof data
    doTask(tipeValue,data);
};

readValue({"nombre": "Alex"})