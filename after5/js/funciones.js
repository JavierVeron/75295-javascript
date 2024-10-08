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
    const idProducto = cargarIdProducto(); // 4
    const productos = cargarProductosLS();
    const producto = productos.find(item => item.id == idProducto);
    let contenidoHTML = `<div class="col-md-4 offset-md-2">
        <img src="${producto.imagen}" class="img-fluid" alt="${producto.nombre}" />
    </div>
    <div class="col-md-4">
        <h1>${producto.nombre}</h1>
        <p>${producto.descripcion}</p>
        <p>$${producto.precio}</p>
        <p><button class="btn btn-warning">Agregar (+)</button></p>
    </div>`;
    
    document.getElementById("contenido").innerHTML = contenidoHTML;
    
    
}