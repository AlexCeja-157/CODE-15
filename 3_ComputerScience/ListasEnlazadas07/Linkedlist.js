//* CREAR NUESTRA CLASE LLAMADA NODE 
//* eL NODE ES LA INFORMACION (DATA) DEL ELEMENTO (DEL OBJETO)
//* TIENE UN APUNTADOR AL SIGUIENTE NODE

class Node {
    constructor(data){
        this.data = data     //* en data guardamos cualquier objeto que queremos
        this.next = null    //* por defecto es null
    
    }
}


//* VAMOS A CREAR NUESTRA CLASE LLAMADA Linkedlist
//* UNA LISTA ENLAZADA DEBE TENER UNA CABECERA (Head)
//* TIENE UN TAMAÑO DE LISTA (Length)


//? LOS METODOS QUE PUEDEN TRABAJARSE EN UNA LISTA ENLAZADA
    //? AGREGAR UN ELEMENTO (add)
    //? AL PRINCIPIO (addStar) O AL FINAL (addEnd)
    //? BORRAR UN ELEMENTO delete(data)
    //? BUSCAR UN ELEMENTO  get(index)


class LinkedList {
    constructor(){
        this.head = null    //* Esto significa que no hay nada en la lista
        this.length = 0     //* no hay elementos dentro de la lista
    }

    //METODO AUXILIAR

    isEmpty(){
        return this.head===null // 0 nodos La lista esta vacia
    }

    // METODOS DE LISTA ENLAZADA

    addStar(data){
        const node = new Node (data) //creamos nuestro nodo con su data
        if(!this.head){  // QUE VERDADERAMENTE NUESTRA LISTA ESTA VACIA
                // asignamos primer nodo como la cabecera (head) de la lista
                this.head = node // Asignamos el primer nodo como la cabeceza o cabecera de la lista
                
        }else {
            // pequeño recorrido tomando el inicio  del nodo y la posicion actual
            node.next = this.head
            this.head= node //nuevo nodo
        }
        this.length++  // saber cuantos elementos tengo en mi lista
    }

    addEnd(data){
        const node  = new Node (data)
        if (this.head === null){
            this.head=node // Asignamos el primer nodo como la cabecera de la lista
        }else{
            // en este else ya sabemos que existe una cabecera (this.head)
            let currentNode = this.head 
            // bucle while: mientras (se cumpla la condicion) { haz esto }
            while(currentNode.next){
                //verificar si next tiene un nodo
                currentNode = currentNode.next //sustituyo el nodo que vive en next a mi nodo actual
            }
            //Cuando next sea nulo , entonces se sale del while y continua con el resto del codigo
            currentNode.next = node
        }
        this.length++  // saber cuantos elementos tengo en mi lista
    }

    delete(data){
        //vamos a verificar que dato va a ser borrado
        let currentNode = this.head
        let previousNode = null // Almacena el nodo con el que hay que reconectar
        if(currentNode.data===data){
            // Vamos a reasignar la cabecera a mi nodo
            this.head = currentNode.next // reasigno la cabeza(head) de mi nodo
        }else{
            // Estamos haciendo otro recorrido, puesto que estamos borrando nodos (por data)
            while(currentNode.data !== data && currentNode.next !== null){
                previousNode = currentNode // El currentNode se vuelve el previousNode
                currentNode = currentNode.next // pasar al siguiente nodo (reconectar)
            }
            previousNode.next = currentNode.next
        }
        this.length--
        return "la data: " + data + " ha sido eliminada"
    }

    getNode(index){
        if(this.head===null || index > this.length){
            return null
        }else{
            // 1 -> 2 -> 3 
            let counter = 1
            let currentNode = this.head
            while(counter !==  index){
                counter ++
                currentNode = currentNode.next
            }
            return currentNode
        }
    }

    print(){
        // nodo actual 
        let currentNode = this.head // tomar en cuenta la cabecera
        while(currentNode){
            console.log(currentNode.data)
            currentNode = currentNode.next
        }
    }

}


// Agregar datoa a nuestros nodos

const listaNumeros = new LinkedList ()

console.log(listaNumeros.isEmpty()) // True

// agregar nodos

listaNumeros.addStar(100)
listaNumeros.addStar(200)
listaNumeros.addStar(300)
listaNumeros.addStar(400)
listaNumeros.addEnd(500)

console.log("Nodo: ", listaNumeros)

//listaNumeros.print()


//Eliminar Data a nuestro nodo

console.log("Eliminado: ",listaNumeros.delete(100))
console.log("Nodo Actual: " ,listaNumeros)


//Buscar un nodo por su indice

console.log("Traer el indice 2: ",listaNumeros.getNode(2))