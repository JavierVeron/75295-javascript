// Operador Spread
const nombres = ["Melania", "Daniel", "Alvaro", "Guillermo", "Fabiana"];
/* console.log(nombres);
console.log(nombres[0], nombres[1], nombres[2]);
console.log(...nombres); */

/* for (const elemento of nombres) {
    console.log(elemento);
} */

const numeros = [20, -5, 10, 0, 100]; // esto es un array
/* console.log(numeros);
console.log(Math.max(20, -5, 10, 0, 100));
console.log(Math.max(...numeros));
console.log(Math.min(20, -5, 10, 0, 100));
console.log(Math.min(...numeros)); */

// Spread de Arrays
/* const nombresMasc = ["Daniel", "Guillermo", "Abi", "Alvaro"];
const nombresFem = ["Fabiana", "Melania"];
const nombresNuevos = ["Pedro", ...nombresFem, "Juan", ...nombresMasc, "Laura"];
console.log(nombresNuevos);

const nombres2 = nombresMasc.concat(nombresFem);
nombres2.push("Laura");
console.log(nombres2); */

// Spread de Objetos
/* const producto1 = {id:1, id2:"uno", nombre:"Coca Cola", precio:2000, categoria:"gaseosas"};
const producto2 = {id:2, nombre:"Pepsi", precio:1800};
const producto3 = {...producto1, precio:3000, precioVenta:4000};
console.log(producto1);
console.log(producto3); */


// Variables por copia y variables por Referencia
// Variable primitas (string, number, float, null, bolean)
// Variable con valor por copia
/* let valor1 = 10;
let valor2 = valor1; // Copiar el valor de la variable valor1 en valor2 (SON VARIABLES INDEPENDIENTES)
console.log(valor1);
console.log(valor2);
valor1 = 5;
console.log(valor1); // 5
console.log(valor2); // 10 */

// Variable con valor por referencia (objetos, arrays y funciones)
// Variable con referencias (objetos)
/* const bebida1 = {id:1, nombre:"Coca Cola", precio:2000};
const bebida2 = bebida1; // Copia la referencia del objeto (SON VARIABLES QUE TIENE LA REFERENCIA DEL PRIMER OBJETO)
console.log(bebida1);
console.log(bebida2);
bebida1.precio = 3000;
console.log(bebida1);
console.log(bebida2); // Veo exactamente lo mismo en los 2 objetos
const bebida3 = {...bebida1}; // Crear un nuevo objeto (no es referencia, es una variable nueva e independiente)
bebida3.precio = 4000;
bebida2.nombre = "Pepsi";
console.log(bebida1);
console.log(bebida2);
console.log(bebida3); */

// Variables por referencia (arrays)
/* const nombresA1 = ["Daniel", "Guillermo", "Melania"];
const nombresA2 = nombresA1; // Copia la referencia del array nombresA1
console.log(nombresA1);
console.log(nombresA2);
nombresA1.push("Mario");
console.log(nombresA1);
console.log(nombresA2);
const nombresA3 = [...nombresA1]; // Crear un nuevo array con los elementos del array NombresA1
nombresA3.unshift("Fabiana"); // agregar al principio del array el valor Fabiana
console.log(nombresA1);
console.log(nombresA2);
console.log(nombresA3); */


// Rest parameters
/* function sumar(...numeros) {
    console.log(numeros)
}

sumar(20, 30);
sumar(30, 40, 50); */

/* const bebida1 = {id:1, nombre:"Coca Cola", precio:2000};

function imprimir(...objeto) {
    console.log(objeto);
}

imprimir(bebida1)
imprimir({nombre:"Juan", apellido:"Perez"}) */



