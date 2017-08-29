class Persona {
    constructor (genero){
        this.edad = 0
        this.genero = genero || ''
    }

    getEdad () {
        return this.edad;
    }

    setEdad (nuevaEdad) {
        this.edad = nuevaEdad;
    }

    getGenero () {
        return this.genero;
    }

    setGenero (genero) {
        this.genero = genero;
    }
}

class Empleado extends Persona {
    constructor (cargo, salario) {
        super();
        this.cargo = cargo;
        this.salario = salario;
    }

    getCargo () {
        return this.cargo;
    }

    setCargo (cargo) {
        this.cargo = cargo;
    }

    getSalario () {
        return this.salario;
    }

    setSalario (salario) {
        this.salario = salario;
    }

    aumentoSalario (aumento) {
        this.salario += aumento;
    }

}

let empleado = new Empleado('Supervisor',40000)
empleado.setGenero('Mujer')
empleado.setEdad(29)

console.log(`
	Empleado1:
  	Edad: ${empleado.getEdad()}
    Género: ${empleado.getGenero()}
    Cargo: ${empleado.getCargo()}
    Salario: ${empleado.getSalario()}    
`)
empleado.aumentoSalario(8000)
console.log(`
 		Nuevo salario: ${empleado.getSalario()}
 `)

