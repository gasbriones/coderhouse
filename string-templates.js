console.log("línea 1 de cadena de texto\n\
línea 2 de cadena de texto");
// "línea 1 de cadena de texto
// línea 2 de cadena de texto"

console.log(`línea 1 de la cadena de texto
línea 2 de la cadena de texto`);
// "línea 1 de la cadena de texto
// línea 2 de la cadena de texto"

//Interpolación de expresiones

var a = 5;
var b = 10;
console.log("Quince es " + (a + b) + " y\nno " + (2 * a + b) + ".");
// "Quince es 15 y
// no 20."

var a = 5;
var b = 10;
console.log(`Quince es ${a + b} y\nno ${2 * a + b}.`);
// "Quince es 15 y
// no 20."


var a = 5;
var b = 10;

function tag(strings, ...values) {
    console.log(strings[0]); // "Hola "
    console.log(strings[1]); // " mundo "
    console.log(values[0]);  // 15
    console.log(values[1]);  // 50

    return "Bazinga!";
}

console.log(`Hola ${ a + b } mundo ${ a * b}`);