// Declaramos las clases
class Producto {
    constructor(id, nombre, precio) {
        this.id = parseInt(id);
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
    }
}

class Catalogo {
    constructor() {
        this.productos = [];
    }

    buscarProducto(id) {
        return this.productos.find(item => item.id == id);
    }

    agregarProducto(producto) {
        this.productos.push(producto)
    }

    listarProductos() {
        let salida = "";

        this.productos.forEach(item => {
            salida += item.id + "- " + item.nombre + " $" + item.precio + "\n"
        })

        return salida;
    }
}

class Carrito {
    constructor() {
        this.productos = [];
        this.descuento = 10;
        this.productosConDescuento = 2;
        this.total = 0;
    }
    
    existeProducto(id) {
        return this.productos.some(item => item.id == id);
    }

    agregarProducto(producto) {
        if (this.existeProducto(producto.id)) {
            const productoCarrito = this.productos.find(item => item.id == producto.id);
            productoCarrito.cantidad += 1;
        } else {
            producto.cantidad = 1;
            this.productos.push(producto);
        }

        console.log("Se agregó correctamente el producto #" + producto.id);
    }

    eliminarProducto(id) {
        // Opción #1
        //this.productos = this.productos.filter(item => item.id != id);

        // Opción #2
        const productoCarrito = this.productos.find(item => item.id == id);

        if (productoCarrito.cantidad > 1) {
            productoCarrito.cantidad -= 1;
        } else {
            this.productos = this.productos.filter(item => item.id != id);
        }

        console.log("Se eliminó correctamente el producto #" + id);
    }

    aplicarDescuento() {
        if (this.calcularTotalProductos() > this.productosConDescuento) {
            this.total = this.total - ((this.total * this.descuento) / 100);
        }
    }

    calcularTotalProductos() {
        // Opción #1
        return this.productos.length;
    }

    calcularSumaTotal() {
        // Opción #1
        /* let total = 0;

        this.productos.forEach(item => {
            total += item.precio
        })

        return total; */

        // Opción #2
        this.total = this.productos.reduce((acum, item) => acum += item.precio * item.cantidad, 0);
        this.aplicarDescuento();

        return this.total;
    }

    listarProductos() {
        let salida = "";

        this.productos.forEach(item => {
            salida += item.id + "- " + item.nombre + " $" + item.precio + " X" + item.cantidad + " => $" + (item.precio * item.cantidad).toFixed(2) + "\n";
        })

        return salida;
    }
}