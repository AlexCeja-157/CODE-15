// PELICULAS  ES MI SUBCLASE

import {Largometraje} from './Largometraje.js'

class Pelicula extends Largometraje {
    constructor (titulo,duracion,genero){
    // SUPER (Indicamos que atributos de  i clase padre se van a hererdar)
    super(titulo,duracion)
    this.genero=genero

    }
    //METODO

    getGender(){
        return this.genero
    }
}

export {Pelicula}