/*
 JavaScript sigue siendo un lenguaje de programación basado en prototipos no obstante las clases
 en realidad son solo una forma más bonita de escribir los prototipos de manera que sea más sencillo
 para la gente que llega de otros lenguajes el acostumbrarse a JavaScript.
 Hay muchas de las características de ES6 que no son más que una forma más sencilla/bonita
 de hacer algo que siempre hemos hecho.
 */

/*
 Clases
 Los métodos no se declaran de forma explícita con var, let o const.
 Al tratarse de un constructor y no una función, no hay una salida de datos explícita con return.
 Encontramos nuevas palabras reservadas: constructor, super, get, set y static.

 constructor
 En programación orientada a objetos (POO), un constructor es una subrutina cuya misión es inicializar
 un objeto de una clase. En el constructor se asignan los valores iniciales del nuevo objeto.

 getter y setter
 Los ‘setters‘ funcionan mediante asignación, no como funciones.
 Son un canal directo para modificar el valor de las propiedades del objeto instanciado. El ‘get‘, como los anteriores, no es una función que tenga que ser ejecutada, sino un acceso a la propiedad del objeto instanciado. Usamos _ para los nombres de variables porque acceder a un ‘setter‘ que modifica una propiedad con su mismo nombre, crea una llamada de función recursiva infinita.
 */

function Empleado (nombre, apellidos) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.salario = 16000;
    this.trabajoRealizado = 0;
}

Empleado.prototype.nombreCompleto = function() {
    return this.nombre + ' ' + this.apellidos;
};

Empleado.prototype.trabajar = function() {
    this.trabajoRealizado += 100;
};

Empleado.prototype.subirSalario = function(cantidad) {
    cantidad = cantidad || 1000;

    this.salario += cantidad;
};

var empleado = new Empleado('Diego', 'Maradona');
console.log(empleado.nombreCompleto()); // Antonio Laguna

class Empleado {
    constructor(nombre, apellidos) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.salario = 16000;
    }

    nombreCompleto() {
        return this.nombre + ' ' + this.apellidos;
    }

    trabajar() {
        this.trabajoRealizado += 100;
    }

    subirSalario(cantidad) {
        cantidad = cantidad || 1000;

        this.salario += cantidad;
    }
}

let empleado = new Empleado('Antonio', 'Laguna');
console.log(empleado.nombreCompleto()); // Antonio Laguna




/*
 Métodos estáticos

 Es habitual que las clases tengan métodos estáticos.
 Por ejemplo, la clase String, tiene métodos de instancia como .replace, .trim o .toUpperCase
 y métodos estáticos como String.fromCharCode o String.fromCodePoint.
 */

class Empleado {
    constructor(nombre, apellidos) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.salario = 16000;
    }

    static tieneMasSueldo(empleado1, empleado2) {
        return empleado1.salario > empleado2.salario;
    }

    nombreCompleto() {
        return this.nombre + ' ' + this.apellidos;
    }

    trabajar() {
        this.trabajoRealizado += 100;
    }

    subirSalario(cantidad) {
        cantidad = cantidad || 1000;

        this.salario += cantidad;
    }
}

let juan = new Empleado('Juan', 'Gómez');
let pepe = new Empleado('Pepe', 'González');
pepe.salario = 1;

console.log(Empleado.tieneMasSueldo(pepe, juan)); // true

//Herencia de clases
class Jefe extends Empleado {
    static despedir(empleado) {
        console.log(empleado.nombreCompleto() + ' estás despedido!');
        empleado.despedido = true;
    }
}

let javi = new Jefe('Javi', 'Perales');
let pedro = new Empleado('Pedro', 'Ortiz');

Jefe.despedir(pedro); // 'Pedro Ortiz estás despedido!';
pedro.despedir(javi); // "TypeError: pedro.despedir is not a function