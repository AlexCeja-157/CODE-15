function dotask(tipeValue, Value){
    var text = 'La variable es de tipo ' + tipeValue + ' y su valor es ' + Value
    return console.log(text)
}

function readValue(data){
    var tipeValue = typeof data 
    dotask(tipeValue, data);
}

readValue(01)
