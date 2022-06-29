

import {Salsa} from './Salsa.js'

class S_Romantica extends Salsa{
    constructor(genero,numEjemplares,tipo) {
        super(genero,numEjemplares)
        this.tipo = tipo
    }

    getType(){
        return this.tipo
    }

}

export{S_Romantica}