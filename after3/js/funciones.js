function cargarProductosAlCatalogo() {
    let id = prompt("Ingrese el ID del Producto (0 para salir)");

    while (id != "0") {
        let nombre = prompt("Ingrese el Nombre del Producto");
        let precio = prompt("Ingrese el Precio del Producto");
        let producto = new Producto(id, nombre, precio); // crea un objeto producto
        catalogo.agregarProducto(producto); // agrega al catalogo de productos el nuevo producto creado
        id = prompt("Ingrese el ID del Producto (0 para salir)");
    }
}

function agregarProductosAlCarrito() {
    let idProducto = prompt("Ingrese el ID del Producto para agregar al Carrito: (0 para salir)\n\n" + catalogo.listarProductos());

    while (idProducto != "0") {
        const producto = catalogo.buscarProducto(idProducto); // 2, busca en el catalogo el producto con id (2)
        carrito.agregarProducto(producto); // agregar al carrito el objeto producto
        idProducto = prompt("Ingrese el ID del Producto para agregar al Carrito: (0 para salir)\n\n" + catalogo.listarProductos());
    }
}

function eliminarProductosDelCarrito() {
    let idProducto = prompt("Ingrese el ID del Producto para eliminar del Carrito: (0 para salir)\n\n" + carrito.listarProductos());

    while (idProducto != "0") {
        carrito.eliminarProducto(idProducto);
        idProducto = prompt("Ingrese el ID del Producto para eliminar del Carrito: (0 para salir)\n\n" + carrito.listarProductos());
    }
}

function totalAPagar() {
    alert("Total a Pagar:\n\n" + carrito.listarProductos() + "\nTotal: $" + carrito.calcularSumaTotal());
}