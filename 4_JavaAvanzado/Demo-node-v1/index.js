const suma = require("./suma");
const resta = require("./resta");

const name = "Alexander";
const sexo = "niño";
const edad = 2;
const num = 1;

function HelloCumpleaños(name){
    console.log(`Hola ${name}, Feliz Cumpleaños ya tienes ${suma(edad,num)}, ya eres un ${sexo} grande`);
    console.log (`Ayer tenias solo ${resta(3,1)} años`)

};

HelloCumpleaños(name);

