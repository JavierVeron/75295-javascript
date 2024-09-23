// Arrays
// Definiendo un array
const persona = ["Daniel", "Agresta", 44, "Montevideo", "Uruguay", 2024, true];
/* console.log(persona);
console.log("Total Elementos", persona.length); */

// Accediendo a valores de un Array
/* console.log("Nombre:", persona[0]);
console.log("Apellido:", persona[1]);
console.log("Edad:", persona[2]);
console.log("Ubicación: ", persona[3] + ", " + persona[4]); */

// Modificando los valores de un Array
/* persona[2] = 51;
persona[10] = "Peñarol"
console.log(persona);
console.log(persona[8]); */

// Recorriendo un array
/* for (let i=0; i<persona.length; i++) {
    console.log(persona[i]);
} */


// Método y Propiedades
// Obteniendo la cantidad total de elmentos de mi array
//console.log(persona.length);

// Push => Permite agregar un elemento (al final del array)
const nombres = ["Lucas", "Melania", "Abi", "Daniel"];
//nombres.push("Juan");
//nombres.push("Juan");
//console.log(nombres);

// Ejemplo (validar si se ingresan elementos que no superen un determinado valor)
/* const max = 6
let nombre = prompt("Ingrese un nombre: (ESC para salir)")

while (nombre != "ESC") {
    if (nombres.length >= max) {
        alert("Error! Cupo lleno!");
        break;
    } else {
        nombres.push(nombre)
    }

    nombre = prompt("Ingrese un nombre: (ESC para salir)")
}

console.log(nombres);
console.log("Fin del Programa"); */

// Unshift => Agrega un elemento (al comienzo del array)
/* nombres.unshift("Fabiana");
console.log(nombres); */

// Pop => elimina un último elemento de mi array (y lo devuelve)
/* let valorEliminado = nombres.pop();
console.log(nombres);
console.log(valorEliminado); */

// Shift => elimina el primer elemento de mi array (y lo devuelve)
/* let valorEliminado = nombres.shift();
console.log(nombres);
console.log(valorEliminado);
console.log(nombres[0]); */

// Splice => elimina 1 o más elementos de un array. Primer parámetro es la posición, Segundo parámetro cantidad de elementos a eliminar
/* nombres.splice(2, 2);
nombres.splice(-2, 1);
console.log(nombres); */

// Join => concatena cada uno de los valores de mi array, con un valor indicado
/* const nombresModificados = nombres.join(" / ")
//const nombresModificados = nombres.join(".")
console.log(nombresModificados); */

// Concact => Permite concatenar 2 o más arrays
/* const perros = ["Mora"]
const gatos = ["Amy", "Benita"];
//const mascotas = perros.concat(gatos);
const pajaritos = ["pedro", "juan"];
const mascotas = gatos.concat(perros).concat(pajaritos);
//const mascotas2 = mascotas.concat(pajaritos)
console.log(mascotas); */

// Slice => Crearte un nuevo array a partir de una posición y cantidad de elementos especificados
/* const nuevosNombres = nombres.slice(1, 3);
console.log(nuevosNombres); */

// IndexOf => Sirve para buscar elementos en un array. Si encuentra en la primera ocurrencia devuelve la posición, sino lo encuentra devuelve -1
/* let pos = nombres.indexOf("ABI");
console.log(pos); */

// Ejemplo de indexOf
/* let nombre = prompt("Ingrese el nombre a buscar:");
let pos = nombres.indexOf(nombre);

if (pos > -1) {
    alert(nombre + " se encuentra en la posición: " + pos)
} else {
    alert("Error! No se encuentra ese nombre!")
} */

// Includes => Sirve para buscar elementos en un array. Si encuentra devuelve true, sino false
// Ejemplo de Includes
/* let nombre = prompt("Ingrese el nombre a buscar:");
let existe = nombres.includes(nombre);

if (existe) {
    alert(nombre + " existe en la BD!")
} else {
    alert("Error! No se encuentra ese nombre!")
} */

// Reverse => Invierto el orden de los elementos de mi array. Ojo, modifica el array original
/* nombres.reverse();
console.log(nombres);
nombres.reverse();
console.log(nombres); */

// Ejemplo aplicado #1
/* const listaNombres = [];
const limite = 5;

do {
    let nombreIngresado = prompt("Ingrese un Nombre:");
    listaNombres.push(nombreIngresado.toUpperCase());
    console.log("Cantidad de Elementos:", listaNombres.length);
} while(listaNombres.length != limite);

const listaNombresFinal = listaNombres.concat("Abi", "Fabiana");
alert(listaNombresFinal.join("\n")); */


// Ejemplo aplicado #2
/* let nombre = prompt("Ingrese el nombre a eliminar:");
let pos = nombres.indexOf(nombre); // buscar el elemento del texto ingresado y nos devuelve la posición

if (pos > -1) {
    let nombreEliminado = nombres.splice(pos, 1); // Eliminar el elemento de la posición "pos"
    alert(nombres.join("\n"));
    alert("Nombre Eliminado: " + nombreEliminado)
} else {
    alert("Error! No se encuentra ese nombre!")
} */


// Array de Objetos
/* const bebida1 = {id:1, nombre:"Coca Cola", precio:2000}; // Definir un objeto
const bebidas = [bebida1, {id:2, nombre:"Pepsi", precio:1900}]; // Definir un array
bebidas.push({id:3, nombre:"Seven Up", precio:1950}); // Agregar un objeto al array bebidas

let nuevoNombre = prompt("Ingrese Nombre de Bebida");
let nuevoPrecio = parseFloat(prompt("Ingrese Precio de Bebida:"))
let nuevoId = bebidas.length + 1;

bebidas.push({id:nuevoId, nombre:nuevoNombre, precio:nuevoPrecio}); // Agregar un objeto al array bebidas
console.log(bebidas); */


// For..of => Permite recorrer un array de una forma más sencilla
/* for (const valor of nombres) {
    console.log(valor.toUpperCase());    
} */


// Ejemplo aplicado #3
// Definir la clase Producto
/* class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
    }

    aplicarIVA() {
        this.precio = this.precio * 1.21
    }
}

// Defino un array de productos
const listaProductos = [];
listaProductos.push(new Producto("coca cola", 2000))
listaProductos.push(new Producto("pepsi", 1900))
listaProductos.push(new Producto("seven up", 1950))

// Recorrer el array de productos
for (const elemento of listaProductos) {
    elemento.aplicarIVA();
}

console.log(listaProductos); */


