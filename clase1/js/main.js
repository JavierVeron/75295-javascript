//alert("Vamos Uruguay!!!!!!!!")
/* alert("hola");
alert("hola"); */

/* document.getElementById("texto").innerHTML = "Coderhouse - Curso de JavaScript" */


// Declaración de Variables
/* let nombre = "Fabiana"; // Declarar la variable nombre y asignar el valor "Fabiana"
let apellido; // Declarar la variable apellido (no tiene ningún valor, por lo tanto esta con valor "undefined")
apellido = "Hernandez" // Asignar el valor "Hernandez";
const edad = 22; // Declarar la constante edad y asginar un valor (1 sola vez)
nombre = "Pablo"; // Volver a asignar un valor a la variable nombre
//edad = 45; // No se puede volver a asignar un valor a una constante
let importe = 100.50; //Los decimales se definen con punto
let nuevoImporte = importe + 10;
alert(nombre);
alert(edad);
alert(apellido)
alert(importe)
alert(nuevoImporte) */


// Operaciones Básicas (números)
let numeroA = 10;
let numeroB = 20;
let numeroC = 30;

// SUMA
/* let resultado = numeroA + numeroB;
alert(resultado) */

// RESTA
/* let resultado = numeroB - numeroA;
alert(resultado) */

// MULTIPLICACIÓN
/* let resultado = numeroA * numeroB;
alert(resultado) */

// DIVISIÓN
/* let resultado = numeroC / numeroA;
alert(resultado) */

// RESTO (%) => Se utiliza para validar si el resto es 0 (par) o 1 (impar)
/* let resultado = 5 % 2
alert(resultado) */

// Operación complejas
/* let resultado = (numeroA + (numeroB + 10)) * numeroC + 10;
alert(resultado) */


// Operaciones Básicas (texto)
/* let texto1 = "VAMOS";
let texto2 = "URUGUAY";
const espacio = " ";
let textoEspecial = "MIERDAAAAA";
let numero = 100;

// Concatenar texto1 y texto2
let resultado = texto1 + texto2;
let resultado2 = texto1 + espacio + texto2; // Forma #2
let resultado3 = texto1 + " " + texto2; // Forma #3
let resultado4 = texto1 + texto2; // Forma #4
let resultado5 = texto1 + " " + texto2 + " CARAJO"; // Forma #5
let resultado6 = texto1 + " - " + texto2 + " - " + textoEspecial; // Forma #5
let resultado7 = texto1 + " / " + texto2 + " / " + textoEspecial; // Forma #5
let resultado8 = texto1 + " / " + texto2 + " / " + numero; // Forma #5

alert(resultado5)
alert(resultado6)
alert(resultado7 + "!!!!!!")
alert(resultado8) */


// Prompts, Alert y Console
let nombre = prompt("Ingrese un Nombre:"); // Devuleve un String
let edad = parseInt(prompt("Ingrese su Edad:")) + 1;  // 25 + 1 = 26 
// parseInt => Convierte string numérico a número entero
// parseFloat => Convierte string numério con decimales a número con decimales
let textoSalida = "Hola, " + nombre.toUpperCase() + " (" + edad + ")";
alert(textoSalida) // Muestra un cuadro de diálogo en el navegador
console.log("[" + textoSalida + "]"); // Muestra un mensaje en la consola


