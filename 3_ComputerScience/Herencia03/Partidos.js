//  PARTIDOS ES MI SUBCLASE

import {Largometraje} from './Largometraje.js'

class Partido extends Largometraje {
    constructor(titulo,duracion,equipos){
        super(titulo,duracion)
        this.equipos=equipos
    }
    //METODO

    getTeam(){
        return this.equipos
    }
}

export {Partido}