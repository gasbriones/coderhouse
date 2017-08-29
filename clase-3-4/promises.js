//nos permiten definir cómo se tratará un dato que sólo estará disponible en un futuro,
// especificando qué se realizará con ese dato más adelante.
//Las promesas se utilizan para la realización de tareas asíncronas,
// como por ejemplo la obtención de respuesta a una petición HTTP.
//https://desarrolloweb.com/articulos/introduccion-promesas-es6.html

/*
Una promesa puede tener 4 estados:

Pendiente: Es su estado inicial, no se ha cumplido ni rechazado.
Cumplida: La promesa se ha resuelto satisfactoriamente.
Rechazada: La promesa se ha completado con un error.
Arreglada: La promesa ya no está pendiente. O bien se ha cumplido, o bien se ha rechazado.
 */

let miPrimeraPromise = new Promise((resolve, reject) => {
    // Llamamos a resolve(...) cuando lo que estabamos haciendo finaliza con éxito, y reject(...) cuando falla.
    // En este ejemplo, usamos setTimeout(...) para simular código asíncrono.
    // En la vida real, probablemente uses algo como XHR o una API HTML5.
    setTimeout(function(){
        resolve("¡Éxito!"); // ¡Todo salió bien!
    }, 250);
});

miPrimeraPromise.then((successMessage) => {
    // succesMessage es lo que sea que pasamos en la función resolve(...) de arriba.
    // No tiene por qué ser un string, pero si solo es un mensaje de éxito, probablemente lo sea.
    console.log("¡Sí! " + successMessage);
});


let miPromise = new Promise ((resolve, reject) => {
    if(false){
        resolve('exito!')
    }else {
        reject('error')
    }

    fetch('https://jsonplaceholder.typicode.com/users')
        .then((user) => {
            return user.json()
        })
        .then(data => {
            console.log(data)
        }).catch((e) => {
        console.log(e)
    })
})

miPromise.then((msg) => {
    console.log(msg)
}).catch((e) => {
    console.log(e)
} )

