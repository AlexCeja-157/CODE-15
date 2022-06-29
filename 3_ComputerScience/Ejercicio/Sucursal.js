

class Sucursal{
    constructor(numSucursal,horario,Genero,){
        this.numSucursal = numSucursal
        this.horario = horario
        this.Genero = Genero

    }

    /*Metodos*/

    setGeneros(){
        return 'Cuenta con el genero ' + this.Genero.getGenero() + ' y en el subgenero ' + this.Genero.getType() +
        ' con ' + this.Genero.getEjemplares() + ' ejemplares';
    }

    getHorario(){
        return 'Trabaja en un Horario de ' + this.horario
    }

    getSucursales(){
        return 'La Sucursal ' + this.numSucursal
    }
    

}

export{Sucursal}