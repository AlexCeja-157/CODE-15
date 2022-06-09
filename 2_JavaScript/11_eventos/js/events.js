const solution = document.getElementById("solution");

function square(){
    const number = document.getElementById("square");
    solution.innerHTML= `El resultado es <strong>${number ** 2}</strong>`;
}

function halfNumber(){
    const number = document.getElementById("half");
    solution.innerHTML = `el resultado es <strong>${number / 2}</strong>`;
}