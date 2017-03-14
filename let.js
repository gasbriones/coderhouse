/*
 La sentencia let funciona de manera similar a una sentencia var, es decir, nos permite crear una variable.
 No obstante, let se comporta de manera diferente en cuanto a ámbitos se refiere.
 */

for (var i = 0; i < 10; i++) {
    i++;
}
console.log('valor de i = ',i);


for (let e = 0; e< 10; e++ ){
    e++;
}
console.log('valor de e = ',e);


//En funciones
function ejemplo1(){
    let color = 'rojo';

    if(true){
        let color = 'amarillo';
        console.log('subfunction 1 color --> ',color);
    }

    console.log('ejemplo 1 color --> ',color);
}
console.log('fuera de la function color --> ',color);
ejemplo1();