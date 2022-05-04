//VAMOS A TENER NUESTRA CLASE ESTUDIANTES

class Estudiantes {

    constructor(nombre,apellido,caliFinal,inscrito){
        this.nombre=nombre
        this.apellido=apellido
        this.caliFinal=caliFinal
        this.inscrito=inscrito

    }

    //METODOS DE LA CLASE

    Aprobado(){
        //Desarrollar logica (IF / Else) 
        
        if (this.caliFinal >= 7.6){
            return "Aprobado con calificacion de " + Math.round(this.caliFinal)
        } else if(this.caliFinal <= 7.5){
            return "Reprobado con calificacion de " + Math.round(this.caliFinal)
        }else{
            return "Calificacion no valida, Error! "
        }
    }

    Inscrito(){
        if(this.inscrito === true){
            return  `El estudiante ${this.nombre} ${this.apellido} si esta inscrito en el semestre`
        }else if(this.inscrito === false){
            return  `El estudiante ${this.nombre} ${this.apellido} no esta inscrito en el semestre`       
        }else{
            return "Error en el sistema consultar mas tarde..."
        }   
    }
}

const estudianteUno = new Estudiantes("Juanito","Perez",8.0,true) 
const estudianteDos = new Estudiantes("Pedrito","Lopez",6.5,false) 
const estudianteTres = new Estudiantes("Carlitos","Gomez",9.7,true) 

console.log(estudianteUno.Inscrito(),"porque esta ",estudianteUno.Aprobado())
console.log(estudianteDos.Inscrito(),"porque esta ",estudianteDos.Aprobado())
console.log(estudianteTres.Inscrito(),"porque esta ",estudianteTres.Aprobado())
