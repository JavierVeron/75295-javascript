// Abstracción
/* let total = 0;

for (let i=1; i<=10; i++) {
    //total += i;    
    total = total + i; // equivalente a la línea de arriba
}

console.log(total); */

// Definir una función y abstraer el código de arriba
/* function sumar(tope) {
    let total = 0;

    for (let i=1; i<=tope; i++) {
        total += i;    
    }

    return total;
}

let contador = sumar(10);
console.log("Contador", contador); */


// Funciones de orden superior
/* function mayorQue(x) { //10 Esto sería una función de orden superior. Recibo un valor y devuelvo una función
    return (y) => (y > x) // (y) => (y > 10)
}

const mayorQue10 = mayorQue(10); // (y) => (y > 10) mayorQue10 sería una función anónima con (y) => (y > 10)
console.log(mayorQue10);
let valor1 = mayorQue10(5); // => (5) => (5 > 10) // false
let valor2 = mayorQue10(25); // => (25) => (25 > 10) // true
console.log(valor1); //false
console.log(valor2); //true */


// Otro ejemplo de fn de orden superior
/* const operacion = (op) => {
    if (op == "sumar") {
        return (a, b) => a + b
    } else if (op == "restar") {
        return (a, b) => a - b
    } else {
        return (a, b) => a * b
    }
}

const suma = operacion("sumar"); //return (a, b) => a + b
const resta = operacion("restar"); //return (a, b) => a - b
const multi = operacion("multi"); //return (a, b) => a * b
let resultado1 = suma(10, 20); // (10, 20) => 10 + 20
let resultado2 = resta(20, 10); // (10, 20) => 10 + 20
let resultado3 = multi(10, 20); // (10, 20) => 10 + 20
console.log("Resultado #1", resultado1);
console.log("Resultado #2", resultado2);
console.log("Resultado #3", resultado3); */


// Funciones que reciben funciones como parámetros
// Declaración de una función que recibe un array y una función como parámetro
function porCadaUno(unArray, unaFuncion) {
    for (const element of unArray) {
        unaFuncion(element);
    }
}

const numeros = [1, 2, 3, 4, 5];
//porCadaUno(numeros, console.log);

// Otro ejemplo #1
/* let total = 0;

function acumular(valor) {
    total += valor;
}

porCadaUno(numeros, acumular);
console.log("Total:", total); */

// Otro ejemplo #2
// Declaro un array vacío
/* const arrayDuplicados = []; 

// Ejecutar la función porCadaUno, enviarle el array "numeros"  y definir ahí mismo una función que multiple por 2 el valor que ingrese a la función
porCadaUno(numeros, (valor) => { 
    arrayDuplicados.push(valor * 2)
})

console.log(numeros);
console.log(arrayDuplicados); */


// Métodos de búsqueda y Transformación
// Foreach
/* numeros.forEach(item => {
    console.log(item);
}) */

/* let total = 0;

numeros.forEach(item => {
    total += item;
})

console.log(total); */

// Find => Devuelve el primer elemento que coincida con la comparación, sino no lo encuentra devuelve undefined
const cursos = [
    {id:1, nombre:"Desarrollo Web", precio:90000},
    {id:2, nombre:"JavaScript", precio:100000},
    {id:3, nombre:"React JS", precio:110000},
    {id:4, nombre:"Angular JS", precio:105000},
]

/* const curso1 = cursos.find(item => item.nombre == "JavaScript");
const curso2 = cursos.find(item => item.precio > 100000);
console.log(curso1);
console.log(curso2); */

// Filter => Devuelve un array resultante de la comparación, en caso de que no coincida ninguno devuleve un array vacío
/* const cursos1 = cursos.filter(item => item.nombre.includes("JS"));
const cursos2 = cursos.filter(item => item.precio > 90000 && item.precio < 120000);
console.log(cursos1);
console.log(cursos2); */

// Some => Devuelve true o false si existe un objeto a partir de la función comparadora
/* let existeAngular = cursos.some(item => item.nombre == "Angular"); // false
let existeJS = cursos.some(item => item.nombre == "JavaScript"); // true
console.log(existeAngular);
console.log(existeJS); */

// Map => Devuelve un nuevo array resultante
/* //const cursosIVA = cursos.map(item => ({nombre:item.nombre.toUpperCase(), precio:item.precio * 1.21}));
//const cursosIVA = cursos.map(item => (item.nombre.toUpperCase()));
const cursosIVA = cursos.map(item => (Math.round(item.precio * 1.1)));
console.log(cursosIVA); */

// Reduce
// Saber la suma total del arary numeros
// Opción #1 forEach
/* let total = 0;

numeros.forEach(item => {
    total += item
})

console.log("Total:", total); */

// Opción #2 reduce
/* const total = numeros.reduce((acum, item) => acum += item, 0);
console.log(total); */

function calcularPromedios(unArray) {
    /* let resultado = 0;

    unArray.forEach(elemento => {
        resultado += elemento
    }); */

    let resultado = numeros.reduce((acum, item) => acum += item, 0);

    return (resultado / unArray.length);
}

/* // 15 / 5 = 3
let promedio = calcularPromedios(numeros);
console.log("Promedio:", promedio); */

// Calcular la suma total del precio de los cursos
/* const precioTotal = cursos.reduce((acumulador, item) => acumulador += item.precio, 0);
console.log("Suma Total:", precioTotal); */

// Sort => Ordena el array a partir de una función comparadora
/* const numeros2 = [50, 20, -10, 0, 2];
numeros2.sort((a, b) => a - b); // Para Ordenar de forma ascendente
console.log(numeros2);
numeros2.sort((a, b) => b - a); // Para Ordenar de forma descendente
console.log(numeros2); */

// Para ordenar un array de Objetos
// Ordenar por Nombre el Array Cursos
/* cursos.sort((a, b) => {
    if (a.nombre > b.nombre) {
        return 1
    } else if (a.nombre < b.nombre) {
        return -1
    } else {
        return 0
    }
})

console.log(cursos); */

// Ordenar por Precio el Array Cursos
/* cursos.sort((a, b) => {
    if (a.precio > b.precio) {
        return 1
    } else if (a.precio < b.precio) {
        return -1
    } else {
        return 0
    }
})

console.log(cursos); */