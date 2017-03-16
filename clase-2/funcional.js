/*
 Teoría básica y ejemplo rápido
 Una forma muy rápida y poco precisa de definir a las Funciones Puras sería decir que son aquellas
 que operan utilizando solo los parámetros de entrada sin recurrir a ningún otro elemento fuera de ellas.
 */

//########## Ejemplo 1: ############

/*
 Dado unos parámetros de entrada de idéntico valor, la función siempre devolverá el mismo resultado.
 El cómputo de la función, su lógica, no implica ningún efecto observable colateral fuera de ella.

*/

function pureFoo( a, b ) {
    return a + b;
}

console.info( pureFoo( 2, 4 ) ); // 6
console.info( pureFoo( 3, 6 ) ); // 9
console.info( pureFoo( 2, 4 ) ); // 6

/*
 La función anterior, que únicamente tiene como objetivo devolver la suma de sus dos argumentos de entrada
 (no hacemos ningún tipo de comprobación para mantenerla simple), cumple con los dos requisitos enunciados más arriba:

 Por un lado, podemos observar e intuir que siempre que llamemos a esta función con los mismos parámetros, el resultado será idéntico.
 Al no requerir o depender de ningún estado o valor fuera de ella, la salida debe ser siempre la misma para valores dados iguales.

 Por otro, el cálculo que realiza nuestra función no modifica durante el mismo nada fuera de ella.
 Eso es extensible a las mismas variables que recibe como entrada: ni a ni b son ‘mutadas’ durante el proceso.
 */

//Ejemplo 2 utilizando funciones puras nativas.
console.info( Math.min( 0, 150, 30, 20, -8, -200 ) ); // -200
console.info( Math.max( 0, 150, 30, 20, -8, -200 ) ); // 150
console.info( Math.sqrt( 16 ) ); // 4 retorna la raiz cuadrada de un numero


//Función no pura:
//<input type="text" id="input" value="26" />

function nonPureFoo ( a ) {
    var inputValue = document.querySelector("#input").value;
    return a + Number(inputValue); //Suma
    //return a + inputValue; //return string
}

console.log(`esto es una suma = ${nonPureFoo(5)}`);
/*
 Creo que queda perfectamente clara la diferencia en este ejemplo: ahora nuestra función requiere de un
  elemento externo para devolver un resultado. En concreto, estamos accediendo a lo que parece ser un campo
  de formulario con jQuery, obteniendo su valor, y sumándolo al parámetro de entrada.
  Esa dependencia impide que podamos garantizar el mismo resultado para una misma entrada.
  Estamos dependiendo aquí del valor externo del campo #userInput.
 */

