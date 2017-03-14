/*
 La expresión de función flecha dispone de una sintaxis más corta comparada con la expresión de función convencional
 y no vincula su propio this, arguments, super, o new.target.
 Las funciones flecha siempre son anónimas.
 Estas funciones son funciones no relacionadas con métodos y no pueden ser usadas como constructores.

 (param1, param2, paramN) => { statements }
 (param1, param2, paramN) => expression
 // Equivalente a: () => { return expression; }

 // Los paréntesis son opcionales cuando sólo dispone de un argumento: singleParam => { statements }
 singleParam => expression

 // Una función sin argumentos requiere paréntesis:
 () => { statements }

 */

function add ( a, b ) {
    return a + b;
}

console.log('suma sin arrow function --> ',add(5,3));

var add = ( x, y ) => x + y;

console.log('suma con arrow function --> ',add(5,3));





//Map
var elementos = [
    "Hidrógeno",
    "Helio",
    "Litio"
];

var elementos2 = elementos.map(function(elemento){ return elemento });

var elementos3 = elementos.map( e => e );

console.log('elementos 2 --> ',elementos2);
console.log('elementos 3 --> ',elementos3);

/*
 this Contextual
 Anterior a las funciones flecha, cada nueva función definía su propio valor de this
 (un nuevo objeto en el caso de un constructor, undefined en llamadas a funciones en modo estricto,
 el objeto contextual si la función se llama como un "método de un objeto", etc.).
 Lo cual resultaba molesto cuando se intentaba aplicar programación orientada a objetos.

 */

function Persona() {
    // El constructor Persona() define `this` como una instancia de sí mismo.
    this.edad = 0;
    setInterval(function crecer() {
        // En modo no estricto, la función crecer() define `this`
        // como el objeto global, el cual es diferente al objeto `this`
        // definido por el constructor Persona().
        console.log('Edad --> ',this.edad++);
    }, 1000);
}

//var p = new Persona();


//Correccion en ES5

function PersonaES5() {
    // El constructor Persona() define `this` como una instancia de sí mismo.
    var self = this;
    self.edad = 0;
    setInterval(function crecer() {
        // En modo no estricto, la función crecer() define `this`
        // como el objeto global, el cual es diferente al objeto `this`
        // definido por el constructor Persona().
        console.log('Edad ES5 --> ',self.edad);
    }, 1000);
}

//var p = new PersonaES5();

//Usando bind (this)

function PersonaES5Bind() {
    this.edad = 0;
    window.setInterval(function crecer() {
        console.log('Edad ES5 --> ',this.edad++);
    }.bind(this), 1000); // or }.bind(this), 1000) and skip that = this
}

//var p = new PersonaES5Bind();


//var p = new PersonaES5();

//ES6 no puese usarse como constructor

var PersonaES6ComoConstructor = () => {
    this.edad = 0;
    setInterval(()=>{
        console.log('Edad ES5 --> ',this.edad++);
    },1000);
};

//var p = new PersonaES6ComoConstructor();


//ES6

function PersonaES6() {
    this.edad = 0;
    window.setInterval(() => console.log('edad -->', this.edad++), 1000);
}

var p = new PersonaES6();


