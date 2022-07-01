// PASOS PARA DESARROLLAR EL CODIGO DEL ARBOL BINARIO

// CLASE NODO 

class Node { // CREAR NUESTROS NODOS -> recibe cierta data
    constructor(data, left, rigth){
        this.data = data
        this.left = left
        this.rigth = rigth
    }
}

class BinaryTree {  // VAMOS A CONSTRUIR NUESTRO ARBOL BINARIO
    constructor(){
        this.root = null
    }

    // VAMOA A TENER COMO METODOS PRINCIPALES 

    // agregar -> add: se encarga de agregar un dato
    // contiene -> contains: verifica si un nodo existe respecto a un dato
    // 

    add(data){
        // primero es verificar si root esta vacia
        if(this.root === null){
            // vamos a crear un nuevo nodo (data, null,null)
            this.root = new Node (data,null,null)
            return

        }
        // sino esta vacia 
        //vamos a crear un nuevo nodo -> currentNode
        let currentNode = this.root
        // agregamos un ciclo mientras cada nodo sea un subarbol
        while(true){
            if(data < currentNode.data){
                // revisar si el nodo de la izquierda esta vacio 
                if(currentNode.left !== null){
                    //mi nodo actual le asigno la posicion de la izquierda
                    currentNode = currentNode.left
                }else{
                    currentNode.left = new Node(data,null,null)
                    return currentNode.left
                }
            }else{
                // si el node de la derecha esta vacio
                if(currentNode.rigth !== null){
                    // agregamos nuevo nodo
                    currentNode = currentNode.rigth
                }else{
                    // cambiar nuestro nodo actual  por el hijho a la derecha
                    currentNode.rigth = new Node(data, null,null)
                    return currentNode.rigth
                }
            }
        }

    }

    contains(data){
        // partimos de la raiz
        let currentNode = this.root
        // mientra currentNode exista
        while(currentNode !== null){
            // exista data dentro del nodo
            if(data === currentNode.data){
                return true
            }else{
                // si mi data es menor es decir currentNode.data
                if(data < currentNode.data){
                    // me asigno a la izquierda
                    currentNode = currentNode.left
                }else{
                    // si mi data no es meno, es mayor
                    //asignamos a la derecha
                    currentNode = currentNode.rigth
                }
            }
        }
        return false
    }
}


// AGREGAR INFORMACION // LAS INSTANCIAS

const nodo = new BinaryTree()
nodo.add(12)
nodo.add(13)
nodo.add(11)
console.log(nodo.contains(20))
console.log(nodo)







