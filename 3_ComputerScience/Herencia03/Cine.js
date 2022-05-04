
import {Sala} from './Sala.js'
import {Pelicula} from './Pelicula.js'
import {Documental} from './Documental.js'
import {Partido} from './Partidos.js'

class Cine {
    constructor(sala){
        this.sala=sala

    }
    //METODO

    Reproducir(){
        return this.sala.setMovie() +
        "\n" + this.sala.getPeople() +
        "\n" + this.sala.getSalaNumber() 
        
    }
}

//INSTANCIAR OBJETOS

//INSTANCIAR NUESTRO OBJETO PELICULA

const peliculaUno = new Pelicula ('Rocky','120min','Accion')
const salaUno = new Sala ('1','250 Personas',peliculaUno)
const cinepolisPolanco = new Cine (salaUno)

//INSTANCIAR NUESTRO OBJETO DOCUMENTAL

const documentalUno = new Documental ('CATFISH','130min','MTV')
const salaDos = new Sala ('2','200 Personas',documentalUno)
const cinemex = new Cine (salaDos)

//INSTANCIAR NUESTRO OBJETO DOCUMENTAL

const partidoFut = new Partido ('Champions','125min','Madrid vs MCity')
const salaTres = new Sala ('3','200 Personas',partidoFut)
const cineMexico = new Cine (salaTres)

//IMPRIMIR NUESTROS OBJETOS EN LA CONSOLA

console.log(cinepolisPolanco.Reproducir())
console.log(cinemex.Reproducir())
console.log(cineMexico.Reproducir())


export {Cine}