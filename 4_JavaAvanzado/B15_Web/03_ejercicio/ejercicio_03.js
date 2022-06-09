function suma(num1, num2){
    var result = num1 + num2
    return result
}

function resta(num1, num2){
    var result = num1 - num2
    return result
}

function multiplicacion(num1, num2){
    var result = num1 * num2
    return result
}

function calculator(a,b,operation){
    var operacion = operation(a,b)
    return console.log(operacion)
}

calculator(17,7,suma)

