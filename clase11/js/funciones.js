const guardarLocal = (clave, valor) => {
    localStorage.setItem(clave, valor);
}

const guardarProductosJSON = (productos) => {
    for (const elemento of productos) { // Recorrer cada uno de los elmentos del array bebida y crear una localstorage independiente
        guardarLocal("producto" + elemento.id, JSON.stringify(elemento))
    }
    
    guardarLocal("listaProductos", JSON.stringify(productos)); // almacenar un array completo en el local "listaProductos"
}

const obtenerProductosJSON = () => {
    let carrito = [];
    let carritoEnJS = JSON.parse(localStorage.getItem("listaProductos"));

    if (carritoEnJS) {
        carrito = carritoEnJS; // asignar a la variable carrito el contenido de la localStorage con todos los productos
    }

    return carrito;
}

const renderProductos = () => {
    const productos = obtenerProductosJSON();    
    let salida = "";

    if (productos.length == 0) {
        salida += `<div class="col my-5 text-center">
            <div class="alert alert-danger" role="alert">Error! No se encontraron Productos!</div>
        </div>`;
    } else {
        productos.forEach(item => {
            salida += `<div class="col-md-3">
            <div class="card border-0 mb-3">
                <img src="${item.imagen}" class="card-img-top" alt="${item.nombre}">
                <div class="card-body text-center">
                    <h5 class="card-title">${item.nombre}</h5>
                    <p class="card-text">$${item.precio}</p>
                </div>
            </div>
        </div>`;
        });
    }

    document.getElementById("contenido").innerHTML = salida;
}

function eliminarProductos() {
    let pregunta = confirm("Está seguro que desea eliminar todos los Productos?");

    if (pregunta) {
        localStorage.removeItem("listaProductos"); //solamente elimina la localStorage listaProductos
        //localStorage.clear(); // Barre con todas las localStorage de mi Pagina
        console.log("Se eliminaron los Productos correctamente!");
        document.getElementById("contenido").innerHTML = `<div class="my-5 alert text-center alert-success" role="alert">Se eliminaron los Productos correctamente!</div>`;
    }
}

// Asignar el evento click con la función eliminarProductos al boton 
document.getElementById("btnEliminar").addEventListener("click", eliminarProductos)