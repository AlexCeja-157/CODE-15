function modificarColor() {
    const parrafo = document.getElementById("text");
    parrafo.className = "nuevoParrafo"
}


function cambiarDatos() {
    const nombre = document.getElementsByName("fname")[0]
    const apellido = document.getElementsByName("lname")[0]
    
    nombre.value = "Alex"
    apellido.value = "Ceja"

}


