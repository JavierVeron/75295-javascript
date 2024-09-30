// Accediendo a los Nodos HTML
//console.log(document.body);
/* console.log(document.body.children[1]);
const parrafo = document.body.children[1]; // Accedo a la etiqueta #1 que es el párrafo
const etiquetaNegrita = parrafo.children[0]; // Accedo a la etiqueta b que es la negrita del párrafo
console.log(etiquetaNegrita);
etiquetaNegrita.innerHTML = "Desarrollo Web"; // Modificando el contenido de la etiqueta negrita desde JS */


// Accedo a la Cabecera de la Página
/* console.log(document.head);
const etiquetaTitulo = document.head.children[2];
console.log(etiquetaTitulo);
etiquetaTitulo.innerHTML = "Aprendiendo DOM de JavaScript"; */


// Modificar los estilos de la clase del encabezado de la página
/* console.log(document.body.children[0]);
const encabezado = document.body.children[0];
// Opción #1 - Modificando la propiedad className
//encabezado.className = "text-success bg-black p-3";
// Opción #2 - Accedienco a la classList
console.log(encabezado.classList);
//console.log();
encabezado.classList.remove("text-warning"); //quito una clase
encabezado.classList.add("text-danger"); // agrego otra clase */


// Accediendo a elementos HTML
// getElementById => Obtiene un solo elemento html
/* let etiquetaDiv = document.getElementById("app");
let parrafo = document.getElementById("parrafo");
console.log(etiquetaDiv);
console.log(parrafo);
parrafo.innerHTML = "Curso de JavaScript"; */

// getElementsByClassName => Obtiene uno o más elementos html por medio de su clase
let paises = document.getElementsByClassName("paises");
/* console.log(paises);
console.log(paises[1]);
paises[1].innerHTML = "Montevideo, Uruguay" */

// getElementsByTagname => Obtiene uno o más elementos html por medio de su etiqueta html
let contenedores = document.getElementsByTagName("div");
/* console.log(contenedores); */


// Recorriendo los elementos html
/* for (const elemento of paises) {
    console.log(elemento.innerHTML);
} */

/* for (const elemento of contenedores) {
    console.log(elemento.innerHTML);
} */

// Diferencia entre innerText e innerHTML
/* let etiquetaPrueba = document.getElementById("etiquetaPrueba");
console.log(etiquetaPrueba.innerText); // Devuelve el contenido en texto plano
console.log(etiquetaPrueba.innerHTML); // Devuelve el contenido en texto html
etiquetaPrueba.innerText = "Hola a <b>Todos!</b>"
etiquetaPrueba.innerHTML = "Hola a <b>Todos!</b><br /><br /><input type='text' value='Ismael López' />" */

/* let campoTexto = document.getElementById("nombre");
campoTexto.value = "Abi Ab..."; */


// Agregar y/o quitando Nodos
/* let parrafo = document.createElement("p")
parrafo.innerHTML = "Este es un párrafo <b>nuevo</p>";
parrafo.className = "text-secondary bg-dark";
document.body.append(parrafo); //Agregar a la etiqueta body un nuevo child parrafo

let contenedor = document.getElementById("contenedor");
contenedor.append(parrafo); // Agregar el nuevo párrafo al div contenedor */

// Eliminando Nodos
//contenedor.remove(); // Eliminar el nodo contenedor


// Crear contenido desde un Array
/* const desayunos = ["Mate", "Café", "Té", "Capuccino", "Chocolatada", "Mate Cocido", "Café Late"];

// Creamos las etiquetas
const lista = document.createElement("ul");

for (const elemento of desayunos) {
    let item = document.createElement("li"); // Crear un etiqueta li
    item.innerHTML = elemento; // Agregar el nombre del desayuno
    lista.append(item); // Adjuntar el item "li" a la etiqueta "ul"
}

const contenido = document.getElementById("contenido");
contenido.append(lista); // Agregar la etiqueta "ul" al div "contenido" */


// Plantillas literales o Template Strings
/* const producto = {id:1, nombre:"Coca Cola", precio:2000};
let texto = "ID: " + producto.id + "- Nombre: " + producto.nombre + " $"
texto += " " + producto.precio;
let texto2 = `ID: ${producto.id}- Nombre: ${producto.nombre.toUpperCase()}<br>
<b>$${producto.precio * 2}</b>`;
document.getElementById("contenido").innerHTML = texto2 */


// Recorriendo un array de productos
const productos = [
    {id:1, nombre:"Doble Cuarto de Libra con Queso", imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXt7Sq2/200/200/original?country=ar", precio:5000},
    {id:2, nombre:"Big Mac", imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqX3vl0y/200/200/original?country=ar", precio:6000},
    {id:3, nombre:"McNifica", imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXXaUUP/200/200/original?country=ar", precio:7000},
    {id:4, nombre:"Mc Oreo", imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcX83hlT/200/200/original?country=ar", precio:4000}
]

let salida = "";

for (const elemento of productos) {
    salida += `<div class="col-md-3">
        <div class="card border-0 mb-3">
            <img src="${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
            <div class="card-body text-center">
                <h5 class="card-title">${elemento.nombre}</h5>
                <p class="card-text">$${elemento.precio}</p>
            </div>
        </div>
    </div>`;
}

let contenido = document.getElementById("contenido");
contenido.innerHTML = salida;






