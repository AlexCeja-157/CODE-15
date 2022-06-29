

import {Disco} from './Disco.js'

class D_Setentas extends Disco{
    constructor(genero,numEjemplares,tipo) {
        super(genero,numEjemplares)
        this.tipo = tipo
    }

    getType(){
        return this.tipo
    }

}

export{D_Setentas}
