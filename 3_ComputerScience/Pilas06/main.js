
console.log("Clase de Pilas")

// Implementacion de una pila usanndo clases con JavaScript

class Pila {
    constructor() {
        this.coleccion = []
        this.contador = 0
    }
    apilar (nuevoElemento){
        this.coleccion.push(nuevoElemento)
        this.contador ++
        return this.contador
    }
    borrar (){
        var elementoBorrado = this.coleccion.pop()
        this.contador --
        return elementoBorrado
    }
    Longitud(){
        return this.contador
    }
    peek(){
        if(this.Longitud()===0) return null
        return this.coleccion[this.contador -1]
    }
    estaVacia(){
        if (this.Longitud === 0){
            return true
        } else {
        return false
        }
    }
}


const pilaAlumnos = new Pila()

console.log(pilaAlumnos)
console.log(pilaAlumnos.apilar("Edwin"))
console.log(pilaAlumnos.apilar("Paulina"))
console.log(pilaAlumnos.apilar("RosaIsela"))
console.log(pilaAlumnos)

console.log(pilaAlumnos.borrar())
console.log(pilaAlumnos)
console.log(pilaAlumnos.Longitud())
console.log(pilaAlumnos.apilar("Jhonathan"))
console.log(pilaAlumnos.peek())
console.log(pilaAlumnos)


console.log(pilaAlumnos.estaVacia())

let numAlumnos = pilaAlumnos.contador

for(let i = 0; i < numAlumnos; i++){
    pilaAlumnos.borrar()
}

console.log(pilaAlumnos.estaVacia())
console.log(pilaAlumnos)

var arrayEstudiantesAutomatico = ["Rene","Jesua","Iris","Edwin","Mario","Roberto"]

const pilaNombres = new Pila()

for(let i = 0; i< arrayEstudiantesAutomatico.length; i++){
    pilaNombres.apilar(arrayEstudiantesAutomatico[i])
}

console.log(pilaNombres)

const miFuncion = (pila,numero)=>{
    if (pila.Longitud()<numero){
        return "Elige otro numero menor"
    }
    if (pila.Longitud()!== numero){
        pila.borrar()
        return miFuncion(pila,numero)
    }
    return pila
}

console.log(miFuncion(pilaNombres,3))





const remplazar=(pila,numero1,numero2)=>{
    let lon = pila.Longitud()
    for(let i = 0; i < lon; i++){
        if (pila.peek()== numero2){
            pila.borrar()
            pila.apilar(numero1)
            return pila
        }else {
            pila.borrar()
        }
    }
}

var arregloN = [42,4,67,8,3,334,66,4,3,7,9,24]

const pilaNueva = new Pila()

for(let i = 0; i< arregloN.length; i++){
    pilaNueva.apilar(arregloN[i])
}

console.log(pilaNueva)

console.log(remplazar(pilaNueva,666,4))
