
import {Sucursal} from './Sucursal.js'
import {Rock} from './Rock.js'
import {Salsa} from './Salsa.js'
import {Disco} from './Disco.js'
import { R_español } from './R_Español.js'
import { R_ingles } from './R_Ingles.js'
import { S_Bailar } from './S_Bailar.js'
import { S_Romantica } from './S_Romantica.js'
import { D_Setentas } from './D_Setentas.js'
import { D_Ochentas } from './D_Ochentas.js'

class Tienda {
    constructor(Sucursal){
        this.Sucursal=Sucursal
    }

    Reproducir(){

        

        return this.Sucursal.getSucursales() +
        "\n" + this.Sucursal.getHorario() +
        "\n" + this.Sucursal.setGeneros()
    }
}

/*  INSTANCIAS OBJETOS  */

const rockUno = new R_español ('Rock','150','Rock en Español')
const sucursalUnoA = new Sucursal ('01 - Centro','De 10am a 6pm',rockUno)
const sucursalCentroUno = new Tienda (sucursalUnoA)

const rockDos = new R_ingles ('Rock','100','Rock en Ingles')
const sucursalUnoB = new Sucursal ('01 - Centro','De 10am a 6pm',rockDos)
const sucursalCentroDos = new Tienda (sucursalUnoB)

const salsaUno = new S_Bailar ('Salsa','70','Salsa para Bailar')
const sucursalDosA = new Sucursal ('02 - Oriente','De 10am a 7pm',salsaUno)
const sucursalOrienteUno = new Tienda (sucursalDosA)

const salsaDos = new S_Romantica ('Salsa','120','Salsa Romantica')
const sucursalDosB = new Sucursal ('02 - Oriente','De 10am a 7pm',salsaDos)
const sucursalOrienteDos = new Tienda (sucursalDosB)

const discoUno = new D_Setentas ('Disco','50','Disco de los Setentas')
const sucursalTresA = new Sucursal ('03 - Sur','De 11am a 5pm',discoUno)
const sucursalSurUno = new Tienda (sucursalTresA)

const discoDos = new D_Ochentas ('Disco','60','Disco de los Ochentas')
const sucursalTresB = new Sucursal ('03 - Sur','De 11am a 5pm',discoDos)
const sucursalSurDos = new Tienda (sucursalTresB)


console.log(sucursalCentroUno.Reproducir())
console.log(sucursalCentroDos.Reproducir())
console.log(sucursalOrienteUno.Reproducir())
console.log(sucursalOrienteDos.Reproducir())
console.log(sucursalSurUno.Reproducir())
console.log(sucursalSurDos.Reproducir())


export {Tienda}