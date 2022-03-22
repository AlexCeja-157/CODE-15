// SCOPE -> ESPACIO -> ALCANCE -> CONTEXTO ->

//SCOPE puede estar definido por llaves

// variables globales -> Se pueden utilizar en el contexto general del programa

var nombre = 'Alex';

console.log(nombre);
{
    console.log(nombre);
    var nombre2 = 'Serch';
    console.log(nombre2);
}

console.log(nombre2);

// variables locales -> Se utilizan solo en el contexto que fueron creadas

let nombre3 = 'Diana';
console.log(nombre3);
{
    console.log(nombre3);
    let nombre4 = 'Arturo'
    console.log(nombre4);    
}


// variables que son constantes -> Se utilizan solo en el contexto que fueron creadas y no cambian su valor

const nombre5 = 'Lupita'
console.log(nombre5);

{
    console.log(nombre5);
    const nombre6 = 'Carlos';
    
}

console.log(nombre6);
