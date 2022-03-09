/*alert ( 'Hello, Word!' );

console.log( 'Mensaje enviado a la consola' );
*/

/*let numA = prompt ("Ingresa primer numero");

let numB = prompt ("Ingresa Segundo numero");

let rest = (numA*numB);

console.log (rest)

alert(rest);*/

/*********************** Ejercicio condicional de IF *************************/

/* 
let edad = prompt ("Ingresa tu edad?");

if(edad >= 18){
    alert("Eres mayor de edad")
}else  if(edad < 18){
        alert("Eres menor de edad")
    };
 */

/*************************** Codigo de IF  ********************************/

    /* 
let calificacion = prompt ("Ingresa Calificacion");

if(calificacion <= 5){
    alert("Estas reprobado")
}else if(calificacion == 6){
    alert("De panzazo")
}else if(calificacion == 7){
    alert("Vas Mejorando")
}else if(calificacion == 8){
    alert("Sigue asi")
}else if(calificacion == 9){
    alert("Super")
}else if(calificacion == 10){
    alert("Excelente")
}else {
    alert("Calificacion no valida")
};
*/


/******************** Codigo de IF (convers tex a num)  **************************/

/*
let edad = parseInt(prompt("Cual es tu edad?"));

if(edad <= 3){
    alert("Estas muy joven")
}else if(edad >= 4 & edad <= 99){
    alert("Diviertete")
}else if(edad > 99){
    alert("Lo siento, pero para el domino no hay limite")
};
*/


/****************************** Codigo de Switch  *****************************/

let comidaFav = prompt("Cual es tu Comida Favorita?");

switch(comidaFav){
    case "carne":
    case "pollo":
        alert("Eres Carnivoro")
        break;
    case "lechuga":
    case "acelgas":
        alert("Eres Vegano")
        break;
    case "tofu":
        alert("Eres Vegano")
        break;
    default:
        alert("Eres alien?")
        break;
};


















































































