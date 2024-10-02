// localStorage => Siempre guardan la información en formato "String"
// Creando localStorage o sessionStorage
// setItem => Para guardar
/* localStorage.setItem("nombre", "Guillermo Hill");
localStorage.setItem("email", "guillehill@gmail.com");
localStorage.setItem("edad", 55);
localStorage.setItem("ciudad", "Montevideo"); */


// Para editar, si existía la localStorage te la pisa sino te la crea
//localStorage.setItem("nombre", "Guillermo Hill");


// getItem => Para Cargar
/* console.log("Nombre Completo: ", localStorage.getItem("nombre"));
console.log("20");
console.log(20);
console.log(localStorage.getItem("edad")); */


// Objetos
/* localStorage.setItem("bebida", {id:1, nombre:"Coca Cola", precio:2000}) */

// Arrays
/* localStorage.setItem("bebidas", [{nombre:"Coca Cola"}, {nombre:"Sprite"}, {nombre:"Pepsi"}]) */


// SessionStorage => La vigencia de los datos se hasta que se cierre la pestaña o se cierre el navegador. O se eliminen las sessionStorage
/* sessionStorage.setItem("nombre", "Antonio Fernandez") */

// Ejemplo #1
/* document.getElementById("nombre").value = sessionStorage.getItem("nombre") */

// Recorriendo localStorages
/* for (let i=0; i<localStorage.length; i++) {
    let clave = localStorage.key(i); // Obtener el nombre de la Clave
    console.log("Clave: " + clave + " - Valor: " + localStorage.getItem(clave)); // Pasarle el nombre de la clave a getItem
} */


// Editando local o session storages
/* localStorage.nombre = "Daniel Agresta"; // Opción #1
localStorage["nombre"] = "Andrés Rava"; // Opción #2
localStorage["apellido"] = "López"; // Si no existe la localstorage, te la agrega! */


// Eliminando localStorage o sessionStorage
//localStorage.removeItem("ciudad"); // Eliminar solamente la localStorage ciudad

// Eliminar TODAS las localStorage
/* localStorage.clear();
sessionStorage.clear(); // eliminar todas las sessión storage */


// JSON
// Para guardar un objeto o array en una local/session Storage => Hay que convertir a JSON y almacenar
// Para leer la localStorage => Hay que parsear el valor y luego podemos utilizarlo

// Para almacenar un objeto o array
const bebida = {id:1, nombre:"Coca Cola", precio:2000};
const productos = [
    {id:1, nombre:"Doble Cuarto de Libra con Queso", imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXt7Sq2/200/200/original?country=ar", precio:5000},
    {id:2, nombre:"Big Mac", imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqX3vl0y/200/200/original?country=ar", precio:6000},
    {id:3, nombre:"McNifica", imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXXaUUP/200/200/original?country=ar", precio:7000},
    {id:4, nombre:"Mc Oreo", imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcX83hlT/200/200/original?country=ar", precio:4000}
]

/* let bebidaJSON = JSON.stringify(bebida); // El objeto bebida convertido en formato JSON
localStorage.setItem("producto", bebidaJSON);
//localStorage.setItem("producto", JSON.stringify(bebida)); // Es equivalente a la línea de arriba

// Para leer un objeto o array de una local/session Storage
bebidaJSON = JSON.parse(localStorage.getItem("producto"));
console.log(bebidaJSON); */

/* localStorage.setItem("productos", JSON.stringify(bebidas));
let bebidasJSON = JSON.parse(localStorage.getItem("productos"));
console.log(bebidasJSON); */


// Ejemplo aplicado
// #1 - Guardar Productos en localStorage
guardarProductosJSON(productos);

// #2 - Mostrar los Productos en Pantalla
renderProductos();