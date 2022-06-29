

import { Rock } from "./Rock.js"

class R_ingles extends Rock{
    constructor(genero,numEjemplares,tipo) {
        super(genero,numEjemplares)
        this.tipo = tipo
    }

    getType(){
        return this.tipo
    }

}

export{R_ingles}