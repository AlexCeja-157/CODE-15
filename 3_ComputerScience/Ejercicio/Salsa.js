

class Salsa {
    constructor(genero,numEjemplares){
        this.genero = genero
        this.numEjemplares = numEjemplares

    }

    getGenero(){
        return this.genero
    }

    getEjemplares(){
        return this.numEjemplares
    }

}

export {Salsa}