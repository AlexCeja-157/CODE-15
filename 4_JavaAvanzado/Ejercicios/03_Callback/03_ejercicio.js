console.log('ejecutando script ejercicio_tres');


function suma(num1,num2){
    var result = num1 + num2 
    return result 
};

function resta(num1, num2){
    var result = num1 - num2 
    return result
};

function multiplicacion(num1, num2){
    var result = num1 * num2 
    return result
};

function calculator (a,b,operation){
    var result = operation(a,b)
    return console.log(result);  

}

calculator(10,20,multiplicacion);
