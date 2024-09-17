// Ejecuto la función saludar
//saludar();

/* function solicitarNombre() {
    let nombre = prompt("Ingrese su Nombre y Apellido:");
    alert("Tu Nombre es: " + nombre);
}

solicitarNombre();
solicitarNombre();
solicitarNombre(); */

// Declaro la función solicitarNombre con Parámetros (nombre y apellido)
//let name = prompt("Ingrese su Nombre:") //Tipee el usuario
//let surname = prompt("Ingrese su Apellido:")

// Declaración de la función
/* function solicitarNombre(nombre, apellido) {
    if ((nombre == "") || (nombre == undefined) || (apellido == "") || (apellido == undefined)) {
        alert("No ingresaste Nombre o Apellido!")
    } else {
        alert("Su Nombre es: " + apellido.toUpperCase() + ", " + nombre.toUpperCase())
    }
}

//solicitarNombre(name, surname)
//solicitarNombre("Guillermo", "Hill")
//solicitarNombre(prompt("Ingrese su NOMBRE:"), prompt("Ingrese su APELLIDO:"))
//solicitarNombre("Guillermo", "Hill", 40, "Contador")
solicitarNombre("guille", "hill") */

// Ejemplo aplicado
/* let resultado = 0;

function sumar(valor1, valor2) {
    resultado = valor1 + valor2
}

function mostrarResultado() {
    console.log(resultado)
}

sumar(20, 30)
mostrarResultado() */

// Declaramos una Función que devuelve un valor
/* function sumar(valor1, valor2) {
    return (valor1 + valor2)
}

let resultado = sumar(40, 50)
console.log("El resultado de la suma es: " + resultado); */

// Calculadora de IMC
/* informarEstadoSalud() */


// Scope: Variables globales vs variables locales
// Ejemplo Variable Global
/* let resultado = 0; // resultado sería una variable global

function sumar(valor1, valor2) {
    resultado = valor1 + valor2
}

function mostrarResultado() {
    console.log(resultado)
}

sumar(20, 30)
console.log(resultado); */

// Ejemplo Variable Local
/* function sumar(param1, param2) {
    let resultado = param1 + param2 // resultado sería una variable local, solamente puede ser accedida dentro de la función
    console.log("Resultado: " + resultado);
    

    return resultado
}

console.log(sumar(20, 40));
console.log(resultado); */


// Otro ejemplo de Variables
/* let resultado = 10; // definir la variable global "resultado"

function sumar(valor1, valor2) {
    let resultado = valor1 + valor2 // definir la variable local "resultado"
    //resultado = valor1 + valor2 // pisar la variable global resultado con un nuevo valor
    
    return resultado
}

let resultadoSuma = sumar(200, 300)
console.log(resultadoSuma)
console.log(resultado)
console.log("El resultado de la suma es: " + resultadoSuma); */


// Funciones Anónimas
/* const suma = function (valor1, valor2) {
    return valor1 + valor2
}

let resultado = suma(20, 40)
console.log("Suma: " + resultado);

// Declaro una función anómima llamada solicitarNombre (siempre definirlas como Constantes)
const solicitarNombre = function() {
    let nombre = prompt("Ingrese su Nombre");
    console.log("Tu Nombre es " + nombre);   
}

solicitarNombre()
//solicitarNombre = "Pepe";
solicitarNombre(); */

// Funciones Flecha => No es necesario utilizar la palabra function, sino utilizamos una flecha. (Siempre definirlas como Constantes)
/* const suma = (valor1, valor2) => {
    return valor1 + valor2
}

let resultado = suma(20, 40)
console.log("Suma: " + resultado); */


// Ejemplo Aplicado
// Declaro las funciones
const suma = (valor1, valor2) => { 
    return valor1 + valor2
}

const resta = (valor1, valor2) => {
    return valor1 - valor2
}

const iva = (valor) => {
    return valor * 0.21
}

let PrecioProducto = 500
let descuento = 50
let nuevoPrecio = resta(suma(PrecioProducto, iva(PrecioProducto)), descuento);
console.log(nuevoPrecio);
