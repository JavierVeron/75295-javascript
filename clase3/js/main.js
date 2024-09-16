// Ciclos e Iteraciones
// For => Se ejecuta hasta que deja de cumplir la condición finita
// Recorro del 0 al 9
/* for (let i=0; i<10; i++) {
    console.log(i);
} */

// Recorro del 1 al 10
/* for (let i=1; i<=10; i++) {
    console.log(i);
} */

// Ejemplo Práctico #1 (original)
/* let numeroIngresado = parseInt(prompt("Ingrese el valor numérico:"));

for (let i=1; i<=10; i++) {
    let resultado = numeroIngresado * i;
    alert(numeroIngresado + "X" + i + " = " + resultado);
} */

// Ejemplo Práctico #2 (modificado)
/* let numeroIngresado = parseInt(prompt("Ingrese el valor numérico:"));
let cuantasVeces = parseInt(prompt("Cuantas veces desea multiplicar ese número?:"));

for (let i=1; i<=cuantasVeces; i++) {
    let resultado = numeroIngresado * i;
    console.log(numeroIngresado + "X" + i + " = " + resultado);
} */

// Ejemplo Práctico #3 (a la inversa, restando)
/* let numeroIngresado = parseInt(prompt("Ingrese el valor numérico:")); //9

for (let i=10; i>=1; i--) {
    let resultado = numeroIngresado * i;
    console.log(numeroIngresado + "X" + i + " = " + resultado);
} */

// Ejemplo Práctico #4
/* for (let i=1; i<=4; i++) {
    // En cada repetición solicitamos un nombre.
    let ingresarNombre = prompt("Ingresar nombre");
    // Informamos el turno asignado usando el número de repetición (i).
    alert("Turno N°" + i + " Nombre: " + ingresarNombre);
} */


// Sentencia Break
/* console.log("Inicio del Programa!");

for (let i=1; i<=10; i++) {
    let pregunta = confirm("Desea continuar la ejecución? Pulse cancelar para finalizar");

    if (!pregunta) {
        console.log("Cancelado por click!");
        break;
    }

    if (i == 5) {
        break;
    }
    
    console.log("Número: #" + i);
}

console.log("Fin del Programa!"); */


// Sentencia Continue
/* console.log("Inicio del Programa!");

for (let i=1; i<=10; i++) {
    if (i == 5) {
        console.log("Salta a la siguiente iteración");
        continue;
    }
    
    console.log("Número: #" + i);
}

console.log("Fin del Programa!"); */


// While => Se ejecuta hasta que la condición deja de ser válida
/* let entrada = prompt("Ingrese un texto: (ESC para salir)") */
// Opción #1
/* while (entrada != "ESC") {
    alert("Ingresaste: " + entrada);

    entrada = prompt("Ingrese otro texto: (ESC para salir)");

    if ((entrada == "") || (entrada == null)) {
        console.log("Estoy por aca");
        break;
    }
} */
// Opción #2
/* while ((entrada != "ESC") && (entrada != "") && (entrada != null)) {
    alert("Ingresaste: " + entrada);

    entrada = prompt("Ingrese otro texto: (ESC para salir)");
} */


// Do..While => Igual al While pero al menos se ejecuta la primera vez
/* let valor = 0;

do {
    valor = prompt("Ingrese un valor");
    console.log("Ingresaste: " + valor);
    
} while (parseInt(valor)) */


// Switch => Compara el valor de una variable con varios valores (en vez utilizar else if)
/* let numero = parseInt(prompt("Ingrese la nota de su último examen:"));

switch(numero) {
    case 10:
        alert("Excelente!");
        break;
    case 9:
        alert("Muy Bueno!");
        break;
    case 8:
        alert("Bueno!")
        break;
    default:
        alert("Meeehh");
        break;
} */

/* if (numero == 10) {
    alert("Excelente!");
} else if (numero == 9) {
    alert("Muy Bueno!");
} else if (numero == 8) {
    alert("Bueno!");
} else {
    alert("Meeehh");
} */


// Ejemplo aplicado: utilizamos switch y while
let nombreIngresado = prompt("Ingrese un nombre:").toUpperCase(); //esc ESC
// Opción #1
/* while(nombreIngresado != "ESC") {
    switch(nombreIngresado) {
        case "ANA":
            alert("Hola, " + nombreIngresado)
            break;
        case "JUAN":
            alert("Hola, " + nombreIngresado)
            break;
        default:
            alert("Quien $%%/& sos?")
            break;
    }

    nombreIngresado = prompt("Ingrese otro nombre (ESC para salir)").toUpperCase()
} */
// Opción #2
while(nombreIngresado != "ESC") {
    switch(nombreIngresado) {
        case "ANA":
        case "JUAN":
            alert("Hola, " + nombreIngresado)
            break;
        default:
            alert("Quien $%%/& sos?")
            break;
    }

    nombreIngresado = prompt("Ingrese otro nombre (ESC para salir)").toUpperCase()
}