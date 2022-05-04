// LARGOMETRAJE ES MI CLASE PADRE

class Largometraje {
    constructor(titulo,duracion){
        this.titulo=titulo
        this.duracion=duracion
    }
    //METODOS (GET --> LEER / SET --> ENVIAR O MANDAR)

    getTitle(){
        return this.titulo

    }

    getDuration (){
        return this.duracion
    }

}


export {Largometraje}