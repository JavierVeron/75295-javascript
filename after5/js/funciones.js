const guardarProductosLS = (productos) => {
    localStorage.setItem("productos", JSON.stringify(productos));
}

const cargarProductosLS = () => {
    return JSON.parse(localStorage.getItem("productos")) || []; // Devuelve un Array
}

const guardarIdProducto = (id) => {
    localStorage.setItem("idProducto", JSON.stringify(id));
}

const cargarIdProducto = () => {
    return JSON.parse(localStorage.getItem("idProducto"));
}

const guardarCarritoLS = (productos) => {
    localStorage.setItem("carrito", JSON.stringify(productos));
}

const cargarCarritoLS = () => {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

const mostrarMensaje = (texto) => {
    Swal.fire({
        position: "top-center",
        icon: "success",
        title: texto,
        showConfirmButton: false,
        timer: 2000
    });
}

const mostrarMensajeConBoton = (texto, funcion) => {
    Swal.fire({
        title: "Felicitaciones!",
        text: texto,
        icon: "sucess",
        showCancelButton: false,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Ir al Home!"
      }).then((result) => {
        funcion();
    });
}

const buscarProducto = (id) => {
    const carrito = cargarCarritoLS();

    return carrito.some(item => item.id == id);
}

const agregarProducto = (id) => {
    const productos = cargarProductosLS();
    const carrito = cargarCarritoLS();
    let producto;
    
    if (buscarProducto(id)) {      
        producto = carrito.find(item => item.id == id); 
        producto.cantidad += 1;
        console.log(producto);
    } else {
        producto = productos.find(item => item.id == id);
        producto.cantidad = 1;
        carrito.push(producto);
    }

    guardarCarritoLS(carrito);
    renderBotonCarrito();
    mostrarMensaje("El producto se agregó correctamente!");
}

const cantTotalProductosCarrito = () => {
    const carrito = cargarCarritoLS();

    return carrito.reduce((acum, item) => acum += item.cantidad, 0);
}

const sumaTotalProductosCarrito = () => {
    const carrito = cargarCarritoLS();

    return carrito.reduce((acum, item) => acum += item.cantidad * item.precio, 0);
}

const renderBotonCarrito = () => {
    let contenidoHTML = `<button type="button" class="btn btn-warning position-relative">
    <i class="bi bi-cart"></i>
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">${cantTotalProductosCarrito()}</span>
    </button>`;
    document.getElementById("botonCarrito").innerHTML = contenidoHTML;
}

const limpiarCarrito = () => {
    localStorage.removeItem("carrito");
    renderCarrito();
    renderBotonCarrito();
}

const eliminarProductoCarrito = (id) => {
    const carrito = cargarCarritoLS();
    const pos = carrito.findIndex(item => item.id == id);
    carrito.splice(pos, 1);
    guardarCarritoLS(carrito);
    renderCarrito();
    renderBotonCarrito();
    //mostrarMensaje("El producto se eliminó correctamente!");
}

const irPaginaPrincipal = () => {
    location.href = "index.html";
}

const finalizarCompra = () => {
    let mensaje = `El total a pagar es $${sumaTotalProductosCarrito()}`;
    mostrarMensaje(mensaje);
    limpiarCarrito();
    mostrarMensajeConBoton(mensaje, irPaginaPrincipal);
}

const renderProductos = () => {
    const productos = cargarProductosLS();
    let contenidoHTML = "";

    for (const item of productos) {
        contenidoHTML += `<div class="col-md-4">
            <div class="card h-100 border-0 mb-3 text-center">
                <a href="producto.html" class="text-dark text-decoration-none" onclick="guardarIdProducto(${item.id})">
                    <img src="${item.imagen}" class="img-fluid" alt="${item.nombre}">
                    <div class="card-body">
                        <p class="card-text">${item.nombre}<br><b>$${item.precio}</b></p>
                    </div>
                </a>
            </div>
        </div>`;
    }

    document.getElementById("contenido").innerHTML = contenidoHTML;
}

const renderProducto = () => {
    const idProducto = cargarIdProducto();
    const productos = cargarProductosLS();
    const producto = productos.find(item => item.id == idProducto);
    let contenidoHTML = `<div class="col-md-4 offset-md-2">
        <img src="${producto.imagen}" class="img-fluid" alt="${producto.nombre}" />
    </div>
    <div class="col-md-4">
        <h1>${producto.nombre}</h1>
        <p>${producto.descripcion}</p>
        <p>$${producto.precio}</p>
        <p><button class="btn btn-warning" onclick="agregarProducto(${producto.id});">Agregar (+)</button></p>
    </div>`;
    
    document.getElementById("contenido").innerHTML = contenidoHTML;   
}

const renderCarrito = () => {
    const carrito = cargarCarritoLS();
    let contenidoHTML;

    if (carrito.length > 0) {
        contenidoHTML= `<table class="table">
        <tr>
        <td colspan="5" class="text-end"><button class="btn btn-warning" onclick="limpiarCarrito();">Limpiar Carrito</button></td>
        </tr>`;

        for (const item of carrito) {
            contenidoHTML += `<tr>
            <td><img src="${item.imagen}" class="img-fluid" alt="${item.nombre}" width="80"></td>
            <td class="align-middle">${item.nombre}</td>
            <td class="align-middle text-center">$${item.precio} X ${item.cantidad}</td>
            <td class="align-middle text-center">$${item.precio * item.cantidad}</td>
            <td class="align-middle text-end"><i class="bi bi-trash" onclick="eliminarProductoCarrito(${item.id});"></i></td>
            </tr>`;
        }

        contenidoHTML += `<tr>
        <td colspan="3"><b>Total a Pagar</b></td>
        <td class="text-center"><b>$${sumaTotalProductosCarrito()}</b></td>
        <td class="text-end"><button class="btn btn-warning" onclick="finalizarCompra();">Finalizar Compra</button></td>
        </tr>
        </table>`;
    } else {
        contenidoHTML = `<div class="alert alert-warning p-5 text-center" role="alert">No se encontraron Productos en el Carrito!</div>`;
    }
    
    document.getElementById("contenido").innerHTML = contenidoHTML;
}