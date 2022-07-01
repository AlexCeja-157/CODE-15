console.log("Clase de Ordenamientos")

//Metodo de la burbuja

function cambiar(indiceA,indiceB,arreglo){
    const temp = arreglo[indiceA]
    arreglo[indiceA] = arreglo[indiceB]
    arreglo[indiceB] = temp
    return arreglo
}

function burbuja(arreglo){
    let longitud = arreglo.length
    for (let i = 0; i < arreglo.length; i++){
        for(let j = 0; j < longitud; j++){
            if(arreglo[j]>arreglo[j+1]){
                cambiar(j,j+1,arreglo)
            }
        }
    }
    longitud--
    return {
        ordenado:arreglo
    }
}


let numeros = [58,4,26,3,1,466,78,98,66,5556,74,1,40,64,89,46,5689,89,7,94,11,565,49]
console.log(numeros)
let numerosOrdenados = burbuja(numeros)
console.log(numerosOrdenados.ordenado)


//Metodo Merge

function mergeSort(unsortedArray){
    // si mi arreglo es solo un elemento o 0 elementos, lo regreso porque no hay nada que ordenar 
    if(unsortedArray.length <= 1 ){
        return unsortedArray
    }
    //Hallamos el tamaño del arreglo

    const size = unsortedArray.length

    // Hallamos la mitad del arreglo
    
    const middle = Math.floor(size/2)
    
    //Obtenemos las mitades derecha e izquierda

    const left = unsortedArray.slice(0,middle) // parte izquierda
    const rigth = unsortedArray.slice(middle) // parte derecha

 //   RECURSION Dividimos hasta llegar a uno  o tener un arreglo ordenado
 
    const sortedleft = mergeSort(left)
    const sortedrigth = mergeSort(rigth)

    return merge (sortedleft,sortedrigth)
        
    }

function merge (left,rigth){
    let resultArray = []
    let leftIndex = 0 , rigthIndex = 0

    // Agregamos los valores de cada lado (rigth,left) dentro de resultArray en orden
    while(leftIndex < left.length && rigthIndex < rigth.length){
        if(left[leftIndex] < rigth[rigthIndex]){
            resultArray.push(left[leftIndex])
            leftIndex++  // Movemos el indice hacia adelante del arreglo izquierdo

        }else {
            resultArray.push(rigth[rigthIndex])
            rigthIndex++ // Movemos el indice hacia adelante del arreglo derecho
        }
    }
    // Concatenar el remanente o sobrante, si concatenamos cuando los indices son iguales a la longitud  de las mitades, no se vera reflejado ningun cambio
    const final = resultArray.concat(left.slice(leftIndex)).concat(rigth.slice(rigthIndex))
    return final

}

let numerosOrdenados3 = mergeSort(numeros)
console.log("Merge")
console.log(numerosOrdenados3)