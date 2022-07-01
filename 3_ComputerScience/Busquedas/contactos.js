console.log("Contactos")

/* CREAR CLASE LLAMADA CONTACTO CON LOS SIGUIENTES DATOS

- NOMBRE
- APELLIDOS
- TELEFONO

DESPUES CREAR UNA CLASE LLAMADA LISTACONTACTOS LA CUAL TENDRA 2 METODOS

-AGREGAR UN CONTACTO
-BUSCAR UN CONTACTO POR NOMBRE

*/

class Contacto {
    constructor(nombre,apellido,telefono){
        this.nombre = nombre
        this.apellido = apellido
        this.telefono = telefono

    }
}

class Agenda {
    constructor(){
        this.lista = [] // Constructor vacio que inicia con un array vacio
    }

    //Metodo para agregar un contacto a nuestra agenda (a this.lista)

    agregar(contacto){ 
        this.lista.push(contacto)
    }

    //Metodo para buscar un nombre en nuestra agenda, recorre la lista de contactos 1 x 1 y compara con el nombre recibido

    buscar(nombre){
        var listaaux = this.lista

        for(let i = 0; i<listaaux.length; i++){
            if(nombre === listaaux[i].nombre){
                return `Se encontro el contacto ${listaaux[i].nombre} , ${listaaux[i].apellido} , con num telefonico ${listaaux[i].telefono}` // listaaux[i]   //En caso de encontrarse el nombre regresa el contacto completo
            }
        }
        return `No se encontro ${nombre} en la agenda`
    }

}


var alexContacto = new Contacto ("Alex","Ceja",5553766287)
var reneContacto = new Contacto ("Rene","Manzano", 5537281958)
var jesuaContacto = new Contacto ("Jesua","Lujan", 5575321761)
var adrianContacto = new Contacto ("Adrian","Aviles", 5576432734)
var erickContacto = new Contacto ("Erick","Hernandez", 5597432869)


var agendaDevf = new Agenda()

// Agregamos los contactos que creamos a nuestra agenta 

agendaDevf.agregar(alexContacto)
agendaDevf.agregar(reneContacto)
agendaDevf.agregar(jesuaContacto)
agendaDevf.agregar(adrianContacto)
agendaDevf.agregar(erickContacto)

console.log(agendaDevf)

// Realizamos una busqueda por nombre 

console.log(agendaDevf.buscar("Alex"))


