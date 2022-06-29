

import {Disco} from './Disco.js'

class D_Ochentas extends Disco{
    constructor(genero,numEjemplares,tipo) {
        super(genero,numEjemplares)
        this.tipo = tipo
    }

    getType(){
        return this.tipo
    }

}

export{D_Ochentas}
