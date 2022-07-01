console.log("Busqueda")

/* BUSQUEDA LINEAL
Este algoritmo recibe argumentos
Entrada:
    1) Lista de Elementos
    2) Elemento a buscar

Salidas:
    1) Si encuentra el valor, retorna la posicion o indice 
    2) Sino encuentra el valor retorna -1 o false
    
    PSEUDOCODIGO

    funcion BusquedaLineal(lista,elemento)
        tamañoLista = se halla el valor de la lista
        contador = indice desde donde vamos a iterar
        
        Mientras contador < tamañoLista:
            si lista[contador] == elemento
                si si REGRESA EL INDICE
                si no REGRESA -1

    FIN funcion

*/

const busquedaLineal = (lista,elementoABuscar)=>{
    const size = lista.length
    let index = 0
    let cantidadAparicion = 0
    let posicionAparicion = [] //""
    
    while(index<size){
        let elementoPresente = lista[index]
        if(elementoPresente===elementoABuscar){
            cantidadAparicion++
            posicionAparicion.push(index) // Con esta linea remplazamos lo de abajo y cambiando por array let posicionAparicion

           /* if(posicionAparicion){
                    posicionAparicion = posicionAparicion + "," + index
            }else{
                posicionAparicion = index
            }*/
        }
        index++
    }
    if(cantidadAparicion>0){
        return{
            numero_apariciones: cantidadAparicion,
            posiciones_encontradas: posicionAparicion 
        }

    }
    return `El elemento ${elementoABuscar} no se encontro`

}

const milista = [10,15,43,436324,34,65,334,6564,4,43,65,768,9,424,763,73,22,75,3,335]
const resultado = busquedaLineal(milista,43)

if(resultado.numero_apariciones>0){
    console.log(`Si existe tu numero, aparece ${resultado.numero_apariciones} veces, y esta en las posiciones: ${resultado.posiciones_encontradas} `)

}else{
    console.log(resultado)
}

/* BUSQUEDA BINARIA
    Nota: se requiere que la lista este ordenada previamente para hacer la busqueda 

    Entrada:
    1.- Una lista ordenada
    2.- Un elemento a encontrar en la lista 

    Salida:
    Si el elemento existe:
        si si, retornamos el indice o indices donde se encontro
        si no, regresamos -1

    PSEUDOCODIGO

    Funcion busquedaBinaria(listaOrdenada,elementoABuscar):
        min = el inicio de la lista (Se empieza por lo general en la posicion 0)
        max = el max de la lista  ( Es el largo de la lista menos 1)

        Mientras min <= max
            mitad = redondear hacia abajo (min+max/2)
            guess = listaOrdenada[mitad]
            si(elementoABuscar===guess){
                retorna mitad
            }  
            si(elementoABuscar>guess){
                min= mitad + 1
            }
            si(elementoABuscar<guess){
                max= mitad - 1
            }
            retornar -1
    
    FIN funcion

*/


var arrayNumeros = [4,2,76,3,6,5,454,44,11]
arrayNumeros.sort((a,b)=>a-b)
console.log(arrayNumeros)

const busquedaBinaria = (listaOrdenada,elemento)=>{
    let min = 0, max = listaOrdenada.length -1 , mitad = null , guess = null
    while(min<=max){
        mitad = Math.floor((min+max)/2)
        guess = listaOrdenada[mitad]
        if(elemento === guess){
            return mitad
        }
        if(elemento > guess){
            min = mitad +1
        }
        if(elemento < guess){
            max = mitad -1
        }
    } 
    return -1
}

milista.sort((a,b)=>a-b)
console.log(milista)
const resultadoBinario = busquedaBinaria(milista,75)
if(resultadoBinario>0)console.log(`Si existe tu numero y esta en la posicion ${resultadoBinario}`)
if(resultadoBinario===-1)console.log(`No existe tu numero`)

var palabras = ["vaca","casa","rene","alfabeto","Ignacio","beta"]
var minusculas = palabras.map((elemento,indice,arreglo)=>{
    return elemento.toLowerCase()
})
minusculas.sort()
console.log(minusculas)

/*palabras.sort()
console.log(palabras)
*/

const resultadoBinario2 = busquedaBinaria(minusculas,"rene")
if(resultadoBinario2>0)console.log(`Si existe tu palabra y esta en la posicion ${resultadoBinario2}`)
if(resultadoBinario2===-1)console.log(`No existe tu palabra`)




