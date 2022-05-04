//VAMOS A CREAR UNA CLASE Y NUESTROS OBJETOS - CLASE PERSONA

class Persona{
    //ES EL SCOPE LOCAL

    //instanciar un objeto o bien un nuevo objeto a partir de uno ya creado
    //solo puede tener un constructor para cada clase

    constructor(nombre,apellido,edad,pais,ocupacion){

        //THIS NOS SIRVE PARA HACER UNA REFERENCIA A UNA PROPIEDAD DEL OBJETO
        //LO INVOCAMOS HASTA EL PRINCIPIO DE LA CLASE, ESTE PRESNETE EN TODO EL CODIGO
        this.nombre=nombre
        this.apellido=apellido
        this.edad=edad
        this.pais=pais
        this.ocupacion=ocupacion

    }

    //METODOS
    Saludar(){

        return `Hola mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años`

    }
    Hablar(){
        return `Bla bla bla estoy tarareando`
    }
    Caminar(){
        return `Voy caminando`
        "hola soy"
    }

}

//HARCODEADO - NOSOTROS VAMOS A PASARLE LA INFORMACION
//INSTACIAR NUESTROS OBJETOS DE LA CLASE

const personaUno = new Persona('Diego','Ceja',14,'Mexicano','Estudiante')
const personaDos = new Persona('Santy','Ceja',09,'Mexicano','Estudiante')
const personaTres = new Persona('Chris','Ceja',01,'Mexicano','Niño de Guarderia')

console.log(personaUno.Saludar())
console.log(personaDos.Hablar())