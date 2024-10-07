// Operador Avanzados
// Sugar Syntax
// Operador ++
/* let numero = 10;
numero = numero + 1; // Opción #1
console.log(numero);
numero += 10; // Opción #2
console.log(numero);
numero++; // Opción #3 (OJO solo suma o decrementa en 1)
console.log(numero); */

// Operador Ternario
let temperatura = 31

// Código tradicional
/* if (temperatura > 30) {
  alert("Día caluroso!")
} else {
  alert("Día agradable")
} */

// Mismo ejemplo con Operador Ternario
//temperatura > 30 ? alert("Día caluroso!") : alert("Día agradable");

// Otro ejemplo
/* const usuario = {
    nombre:"Melania",
    edad:24
} */

/* let permiso

if (usuario.edad >= 18) {
  permiso = true
} else {
  permiso = false
}

if (permiso) {
  alert("Puede comprar cerveza!")
} else {
  alert(usuario.nombre + ", No puede comprar!")
} */

// Ejemplo simplificado con Operador Ternario
//const permiso = usuario.edad >= 38 ? true: false;
//permiso ? alert(usuario.nombre + ", puede comprar cerveza!") : alert(usuario.nombre + ", no puede comprar!");

// Mismo ejemplo más simplificado
//alert(usuario.nombre + (permiso ? ", puede comprar cerveza!" : ", no puede comprar!"));

// Otro ejemplo de Operador Ternario
/* if (temperatura < 10) {
    alert("Hace frío!")
} else if (temperatura < 20) {
    alert("Está fresquito!")
} else if (temperatura < 30) {
    alert("Está agradable")
} else {
    alert("Hace calor!")
} */

/* alert(temperatura < 10 ? "Hace frío!" : temperatura < 20 ? "Está fresquito!" : temperatura < 30 ? "Está agradable" : "Hace calor!") */


// Operador AND
//const carrito = [];

/* if (carrito.length == 0) {
    console.log("El carrito está vacío!");
} */
//carrito.length == 0 && console.log("El carrito está vacío!"); // Solo se va ejecutar el segundo operador si la primera parte es verdadera

// Otro ejemplo
/* const registroIngreso = usuario.edad >= 48 && new Date(); // true o false
console.log(registroIngreso); */


// Operador OR
/* console.log( 0 || "No cumple")  // Valor falso
console.log( 1 || "No cumple")  // Valor verdero
console.log( -2 || "No cumple")  // Valor verdero
console.log( 40 || "No cumple")  // Valor verdadero
console.log( null || "No cumple")  // Valor falso
console.log( undefined || "No cumple")  // Valor falso
console.log( "Hola Mundo" || "No cumple")  // Hola Mundo
console.log( "" || "No cumple")  // Valor falso
console.log( NaN || "No cumple")  // Valor falso
console.log( true || "No cumple")  // Valor verdadero
console.log( false || "No cumple")  // Valor falso
console.log( "false" || "No cumple")  // Valor verdadero */

// Ejemplo de OR
const usuario2 = null;

/* console.log(usuario || "El usuario no existe!");
console.log(usuario2 || "El usuario2 no existe!"); */

// Otro ejemplo de OR
/* let carrito;

let carritoLocalStorage = JSON.parse( localStorage.getItem('carrito') )

if (carritoLocalStorage) {
  carrito = carritoLocalStorage
} else {
  carrito = []
} */
//localStorage.setItem("carrito", JSON.stringify([1, 2, 3]))
/* const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

console.log(carrito); */


// Operador Nullish
/* console.log( 0 ?? "Nullish")  // Valor verdadero
console.log( 40 ?? "Nullish")  // Valor verdadero
console.log( null ?? "Nullish")  // Valor falso
console.log( undefined ?? "Nullish")  // Valor falso
console.log( "Hola Mundo" ?? "Nullish")  // Valor falso
console.log( "" ?? "Nullish")  // Valor verdadero
console.log( NaN ?? "Nullish")  // Valor verdadero Nan
console.log( true ?? "Nullish")  // Valor verdadero
console.log( false ?? "Nullish")  // Valor verdadero */

// Ejemplo aplicado
/* const usuario3 = null

//console.log( usuario3.nombre || "El usuario no existe" )
// Error: "No se pueden leer propiedades de NULL"

console.log( usuario3?.nombre || "El usuario no existe")
// "El usuario no existe" */

/* const usuario3 = {
    nombre: "John Doe",
    edad: 22,
    cursos: {
      javascript: "aprobado"
    }
  } */

/* const usuarios = [
    {id:1, usuario:"juan"},
    {id:2, usuario:"pedro"},
    {id:3, usuario:"abi"}
]; */
  
/*   console.log( usuario3?.cursos?.javascript || "La propiedad no existe")
  // "aprobado"
  console.log(usuario3?.trabajos?.coderhouse);
  
  console.log( usuario3?.trabajos?.coderhouse || "La propiedad no existe")
  // "La propiedad no existe" */
  
/*   console.log(usuarios[3]);
  console.log(usuarios[3] || "No existe un usuario en dicha posición" );
  console.log(usuarios[2]?.categoria ?? "No existe un usuario en dicha posición" ); */
  
// Desestructuración => Podes declarar variables con los mismos nombres de las propiedades del objeto
/* const usuario = {
    nombre: "Ismael López",
    edad: 40,
    cursos: ["Desarrollo Web", "JavaScript"],
    telefono: {
        cel: 113334444,
        casa: null,
        trabajo: 113325555
    }
} */

/* let nombre = usuario.nombre
let edad = usuario.edad */

// Mismo ejemplo pero con desestructuración
/* let {nombre, edad, cursos, telefono:{cel}} = usuario;
console.log(nombre, edad, cursos, cel); */


// Alias => Desestructurar propieda bajo otro nombre
/* const item = {
    item_id: 432,
    product_name: "Some product",
    price_per_unit: 5600
}

const {
    item_id: idProducto,
    product_name: nombreProducto,
    price_per_unit: precioProducto
} = item

console.log(idProducto) // 432
console.log(nombreProducto) // "Some product"
console.log(precioProducto) // 5600 */


// Desestructuración en parámetros
/* const producto = {
    id: 10,
    nombre: "Curso Javascript",
    precio: 12500
} */

const bebida = {id:1, nombre:"Coca Cola"}

/* const desestructurar = (item) => {
    // desestructurando dentro del bloque
    const {id, nombre} = item
    console.log(id, nombre)
} */

/* const desestructurar = ({id, nombre}) => {
    console.log(id, nombre)
}

desestructurar(bebida) */


// Desestructuración de Arrays
const nombres = ["Melania", "Fabiana", "Guillermo", "Alvaro", "Juan"]

const [pepe, pepito] = nombres

console.log(pepe) // "Melania"
console.log(pepito) // "Fabiana"

const [,a,,b] = nombres;
console.log(a);
console.log(b);
