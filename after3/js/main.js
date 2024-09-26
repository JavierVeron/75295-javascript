/* Carrito de Compras
1- Carga de productos => CHECK
2- Listado de Productos donde puede agregar al Carrito => CHECK
3- Listado de Carrito donde permita eliminar al Producto => CHECK
4- Total a Pagar => CHECK (Si hay más de 3 productos agregados al Carrito, aplicar 10% de Descuento) */

// 1- Carga de Productos
const catalogo = new Catalogo();
const carrito = new Carrito();

cargarProductosAlCatalogo();
agregarProductosAlCarrito();
eliminarProductosDelCarrito();
totalAPagar();