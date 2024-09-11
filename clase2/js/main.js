// Condicionales
/* let sosFeliz = false;

if (sosFeliz) {
    console.log("Soy Feliz!");
}

console.log("Estoy fuera del IF"); */

// Condicional Ejemplo #1
/* let edad = parseInt(prompt("Ingresa tu Edad:"));
console.log(edad); //analizar con que tipo de dato me llega el valor ingresado

if (isNaN(edad)) {
    alert("Por favor, ingrese solo números!")
}

if (edad >= 18) {    
    alert("Podes tomar alcohol!")
} else {
    alert("No, podes tomar alcohol!")
}

console.log("FIN del programa"); */

// Operador == es igual a que
// Operador != es distino a que

//let color = prompt("Ingrese su color preferido:"); //gris

// gris == rojo
/* if (color == "rojo") { //Aquí pregunto cuando el color es igual a rojo
    alert("1-Sos un genio, por haber elegido el rojo!")
} else {
    alert("1-Elegí un color más lindo!") //En la parte falsa
} */

// gris != rojo
/* if (color != "rojo") { //Aquí pregunto cuando el color es distinto a rojo
    alert("2-Elegí un color más lindo!") //En la parte verdadero
} else {
    alert("2-Sos un genio, por haber elegido el rojo!")
} */

// Ejemplo #2
/* let nombreIngresado = prompt("Ingrese su Nombre:");
console.log(nombreIngresado);
// null != null
if (nombreIngresado != null) {
    if (nombreIngresado == "") {
        alert("Error! No ingresaste un Nombre!");
    } else {
        alert("Hola, " + nombreIngresado + "!");
    }
    
    if (nombreIngresado != "") {
        alert("Hola, " + nombreIngresado + "!");
    } else {
        alert("Error! No ingresaste un Nombre!");
    }
} */

// Ejemplo #3
/* let temperatura = parseFloat(prompt("Ingrese la temperatura:")); //6 15 27

if (temperatura < 0) {
    alert("Hace frío, quedate en casa!")
} else if (temperatura < 10) {
    alert("Hace frío!")
} else if (temperatura < 20) {
    alert("Está fresco!")
} else if (temperatura < 30) {
    if (temperatura >= 25) {
        alert("Hace calor!")
    } else {
        alert("Esta lindo!")
    }
} else {
    alert("Hace calor, quedate en casa!")
} */


// Variables Boolenas
/* let numero = 5
let esValido = (numero != 10) //10 >= 10 => true
console.log(esValido);
esValido = 0;
console.log(esValido);

if (esValido) {
    alert("El valor ingresado es distinto que 10!")
} */


// Operador lógicos
let valorA = 5
let valorB = 3

// Operador "==" => compara solo valor
/* if (valorA == valorB) {
    alert("A y B son iguales!")
} */

// Operador "===" => compara valor y tipo de datos
/* if (valorA === valorB) {
    alert("A y B son estrictamente iguales!")
} */

// Operador "!=" => es distinto a que
/* if (valorA != valorB) {
    alert("A y B son distintos!")
} */

// Operador "!==" => es estrictamente distinto a que (valor y tipo de dato)
/* if (valorA != valorB) {
    alert("A y B son estrictamente distintos!")
} */

// Operador AND "&&" => Se deben cumplir ambas condiciones para ser verdadero
/*
V y V => V
V y F => F
F y V => F
F y F => F
*/

/* if ((valorA == 10) && (valorB == 10)) {
    alert("A y B son iguales a 10!")
} */

// Operador OR "||" => Se deben cumplir al menos una condición para ser verdadero, si todas las condiciones son falsas, la condición general va a resultar falsa
/*
V o V => V
V o F => V
F o V => V
F o F => F
*/

/* if ((valorA == 10) || (valorB == 10)) {
    alert("A y B son iguales a 10!")
} */

// Operador NOT (!) => invierte la condición
/* if (!(valorA == 10)) {
    alert("A es igual a 10!")
}  */


// Ejemplo aplicado
/* let nombre = prompt("Ingrese nombre:")
let apellido = prompt("Ingrese apellido:")

if ((nombre != "") && (apellido != "")) {
    alert("Hola, " + nombre + " " + apellido)
} else {
    alert("Ingrese Nombre y Apellido")
} */

// Ejemplo aplicado #2
//let nombre = prompt("Ingrese nombre:")
/* let nombre = prompt("Ingrese nombre:").toLowerCase(); //capturo el nombre ingresado y lo convierto en minúscula
console.log(nombre.length); //4

if (nombre.length != 4) {
    alert("El nombre ingresado debe tener 4 caracteres!")
}

if ((nombre == "juan") || (nombre == "JUAN")) {
    alert("Hola, " + nombre)
} else {
    alert("Ingrese el Nombre juan o JUAN")
} */

// Ejemplo aplicado
let nombre = prompt("Ingrese nombre:")
let edad = parseInt(prompt("Ingrese edad:"))

/* if ((edad >= 18) && ((nombre == "fabi") || (nombre == "FABI"))) {
    alert("Hola, " + nombre)
} else {
    alert("Acceso denegado")
} */

if (((edad >= 18) && (nombre == "fabi")) || (nombre == "FABI")) {
    alert("Hola, " + nombre)
} else {
    alert("Acceso denegado")
}