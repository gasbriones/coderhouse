/*
 Promises
 El objeto Promise se usa para operaciones diferidas o asíncronas.
 No hay que olvidar que Javascript es un lenguaje que funciona como single-thread, o sea,
 en un solo hilo de ejecucionUna Promesa puede estar en uno de estos estados:
 Sabiendo esto, sabemos que la Promesa tiene uno de estos tres estados:

 Pendiente: Hasta que una promesa sea resuelta/rechazada, está en estado pendiente.
 Resuelta: Cuando la primera función es llamada, la Promesa se considera resuelta con el valor que se le proporcione.
 Rechazada: Cuando se llama la segunda función, la Promesa se considera rechazada con el valor que se le proporcione.
 */

// Una promesa que ya está resuelta
let promesa = Promise.resolve({
    foo: 'bar'
});

// Aunque la promesa ya ha sido resuelta, podemos acceder al valor
promesa.then(resultado => console.log(resultado.foo));

//Ejemplo 2

let otraPromesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve(73), 2000);
});

// La función no puede cambiar el valor
otraPromesa.then(resultado => {
    resultado += 2;
    console.log(resultado);
});


/*
 La forma estándar de crear una Promesa es usando el constructor new Promise el cual acepta una función
 que recibe dos funciones como parámetros.
 El primer parámetro (normalmente llamado resolve) es una función que llamaremos cuando el valor futuro
 esté listo mientras que
 el segundo parámetro (normalmente llamado reject) es una función para rechazar la Promesa (si no puede obtener el valor).
 */

let promesa = new Promise((resolve, reject) => {
    let flag = false;
    if (flag) {
        resolve({manzana:"verde"});  // Resuelta con éxito
    } else {
        reject(/* motivo */);  // Error, rechazada
    }
});


promesa.then(respuesta => {
    console.log("Esto es una respuesta de la promesa --> ",respuesta)
}); //muestra una exception , si la encadenamos con .catch deja de mostrarla

promesa.catch(error => {
    console.log("Error --> ",error)
});



/*
 Merece la pena mencionar, que .then puede recibir un segundo parámetro, que hará de .catch:
 */

let promesa = new Promise().resolve({foo:'bar'});

promesa.then(
    respuesta => {
        // Gestionar respuesta
    },
    error => {
        // Gestionar error
    }
);

/*
 De la misma forma que podemos omitir el segundo parámetro de la función .then,
 podemos omitir el primero también usando .then(null, rechazo).
 */

/*
 Then y Catch
 .then y .catch son dos métodos realmente especiales ya que lo que devuelven esos métodos,
 son promesas con el valor que devolvamos en estas funciones.
 Esto nos permite encadenar varios .then, a la vez que transformamos el valor.
 */

let promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(4);
    }, 2000);
});

promesa.then(resultado => resultado + 2)
    .then(resultado => {
        console.log(resultado); // 6
    })

promesa.then(resultado => {
    console.log(resultado); // 4
});


//Fetch
 /*
  Durante muchos años, nos hemos tenido que conformar usando XMLHttpRequest para hacer peticiones
  Ajax bien fuera directamente o bien fuera a través de la función $.ajax de jQuery.
  Este tipo de peticiones, nos han permitido crear nuevos tipos de experiencias interactivas en las páginas.

  La intención del API Fetch es la de reemplazar XMLHttpRequest como el recurso por defecto de comunicación
  con recursos remotos. Veamos cómo funciona este nuevo API y,
  sobre todoo, qué nos aporta para que decidamos (o no) cambiar.
  */

 //API Fetch
/*
 El API nos proporciona una función fetch() definida en el objeto window por lo que la función está disponible globalmente. Esta nos permite realizar peticiones.
 El método devuelve una Promesa que puedes usar para obtener la respuesta de la petición.
 */

var URL = 'https://pokeapi.co/api/v2/pokemon/4/';

fetch(URL).then(function(respuesta) {
    return respuesta.json();
}).then(function(datos) {
    console.log(datos.name); // charmander
}).catch(function() {
    console.log('Falló!');
});