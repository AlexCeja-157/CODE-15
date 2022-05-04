
class Sala {
    constructor(numSala,cantGente,movie){
        this.numSala=numSala
        this.cantGente=cantGente
        this.movie=movie

    }
    //METODO
    setMovie(){
        return "Se esta reproduciendo: " + this.movie.getTitle() +
                    "Duracion " + this.movie.getDuration();
    }

    getPeople(){
        return this.cantGente

    }

    getSalaNumber(){
        return this.numSala
    }
}


//EXPORTAMOS NUESTRA PLANTILLA (CODIGO)
//USAMOS LA FORMA DEFINIDA POR ECMASCRIP

export{Sala}