/*
 Find le permite iterar a través de una matriz y recuperar el primer elemento
 que hace que la función callback devuelta true.
 Una vez que se ha encontrado un elemento, la función devuelve inmediatamente.
 Es una manera eficiente de obtener sólo el primer elemento que coincide con una condición dada:
 */

let numeros = [10, 2, 30, 1, 5];
let resultado = numeros.find((x) => x % 10 == 0);
console.log('El primer numero que cumple la condición es: --> ',resultado);

let nombres = ['Alan', 'Zoe', 'Ana', 'José'];
let resultado2 = nombres.find((x) => x.length == 4);

console.log('El primer nombre que cumple la condición es: --> ',resultado2);

let resultado3 = nombres.find(function(x){
    return x.length == 4;
});

console.log('El primer nombre que cumple la condición es: --> ',resultado3);


/*
 FindIndex
 */
let numeros = [10, 2, 30, 1, 5];
let resultado4 = numeros.findIndex((x) => x % 10 == 0);

console.log('el index del primer numero que cumple la condición es: --> ',resultado4);

let ejemplo = [1, NaN, 'b'].findIndex(y => Object.is(1, y));

console.log('ejemplo --> ',ejemplo);



/*
Array From
 El método Array.from() crea una nueva instancia de Array a partir de un objeto iterable.
 */

let array1 = Array.from("foo");
console.log('array1 --> ',array1);


let array2 = [10, 20, 30, 44, 55, 60];

let resultado5 = Array.from(array2, x =>  x + x);

console.log('resultado --> ', resultado5);

/*
 <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
 </ul>
 */


let lis = document.getElementsByTagName('li'); //html collection
//let lis = document.querySelectorAll('ul li'); //Node List
Array.from(lis).forEach(function (node) {
    console.log(node);
});

lis.forEach(function (node) {
    console.log(node);
});

