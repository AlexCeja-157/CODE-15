const suma = require('./suma')

function HelloWorld(name){
    console.log("Hello " + name)
    console.log(suma(1, 2))
}

HelloWorld("Alex");
