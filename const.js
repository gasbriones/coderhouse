/*
 Las constantes presentan un ámbito de bloque tal y como lo hacen las variables definidas usando la instrucción let,
 con la particularidad de que el valor de una constante no puede cambiarse a través de la reasignación, y no se puede redeclarar.
 */
const name = "Juan";
console.log('Mi nombre es ' + name);

//Reasignación de la constante name
name = "Pablo";

console.log("Mi nuevo nombre es " + name);

const obj = {frutas: {manzana: {color: 'rojo'}}};
console.log('obj.frutas.manzana.color --> ',obj.frutas.manzana.color);

obj.frutas.manzana.color = 'verde';

console.log('obj.frutas.manzana.color 2 --> ',obj.frutas.manzana.color);

obj = {verduras:{papa:{color:'marron'}}};

console.log('obj.verduras.papa.color --> ',obj.verduras.papa.color);



//Más en: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/const