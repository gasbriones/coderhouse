 El lenguaje de programación JavaScript está estandarizado por ECMA (un grupo de estándares como la W3C) bajo el nombre ECMAScript.
 Entre otras cosas, ECMAScript define:  Sintaxis del lenguaje – reglas de parseo, palabras clave, declaraciones, operadores, etc. 
 Tipos – boolean, number, string, object, etc.
 Prototipos y herencia
 La librería estándar de objetos y funciones – JSON, Math, métodos deArray, métodos de introspección de Object, etc.

 ES6 en el navegador
 
 El navegador es al fin y al cabo donde normalmente se ejecuta nuestro código JavaScript. 
 A día de hoy Microsoft tiene el listón en lo más alto en cuanto a nuevas características implementadas, eso sí, solo en Edge. 
 Para obtener el mejor nivel de soporte, lo ideal es usar Chrome Canary o Firefox Nightly para tener acceso a las últimas características conforme van siendo implementadas en vez de tener que esperar a los lanzamientos estables. 
 En Chrome, la mayoría de las características de ES6 necesitan que haya un flag activo: “Enable Experimental JavaScript”. Ve a chrome://flags/#enable-javascript-harmonyy asegúrate de que queda activado.
 

 Transpilando:
 
Los navegadores aun no soportan el 100% de las nuevas caracteristicas de ES6, por ello necesitamos traducir dicho códio a es5
utilizando herramientas como babel, gulp y browserify

Tabla de compatibilidad:

https://kangax.github.io/compat-table/es6/

