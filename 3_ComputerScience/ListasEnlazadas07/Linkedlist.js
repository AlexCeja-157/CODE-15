//* CREAR NUESTRA CLASE LLAMADA NODE 
//* eL NODE ES LA INFORMACION (DATA) DEL ELEMENTO (DEL OBJETO)
//* TIENE UN APUNTADOR AL SIGUIENTE NODE

class Node {
    constructor(){
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
        return this.head===null
    }

    // METODOS DE LISTA ENLAZADA

    addStar(data){
        const node = new Node (data) //creamos nuestro nodo con su data
        if(!this.head){  // QUE VERDADERAMENTE NUESTRA LISTA ESTA VACIA
                // asignamos primer nodo como la cabecera (head) de la lista
                this.head = node // Asignamos el primer nodo como la cabeceza o cabecera de la lista
                
        }else {

        }
    }

    addEnd(data){

    }



}
