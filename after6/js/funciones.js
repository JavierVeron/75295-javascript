const buscarProductosAPI = async (texto) => {
    const url = "https://api.mercadolibre.com/sites/MLU/search?q=" + texto;
    fetch(url + textoBusqueda)
    .then(respuesta => respuesta.json())
    .then(datos => {
        console.log(datos);
        return datos;
    })
}

const buscarProductoAPI = async (id) => {
    const url = "https://api.mercadolibre.com/items/";
    fetch(url + id)
    .then(respuesta => respuesta.json())
    .then(datos => {
        console.log(datos);
        return datos;
    })
}

const buscarProducto = async () => {
    let textoBusqueda = document.getElementById("textoBusqueda").value.trim();
    const url = "https://api.mercadolibre.com/sites/MLU/search?q=" + textoBusqueda + "&limit=20";
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(datos => {
        guardarProductos(datos.results);
        renderProductos(datos.results);
    })
}

const guardarFavoritos = (favoritos) => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos))
}

const cargarFavoritos = () => {
    return JSON.parse(localStorage.getItem("favoritos")) || [];
}

const guardarProductos = (productos) => {
    const productosAnteriores = cargarProductos();
    const productosActualizados = productosAnteriores.concat(productos);
    localStorage.setItem("productos", JSON.stringify(productosActualizados));
}

const cargarProductos = () => {
    return JSON.parse(localStorage.getItem("productos")) || [];
}

const agregarFavorito = (id) => {
    const favoritos = cargarFavoritos();

    if (buscarFavorito(id)) {
        let pos = favoritos.indexOf(item => item.id == id);
        favoritos.splice(pos, 1);
    } else {        
        favoritos.push(id);        
    }

    guardarFavoritos(favoritos);
    buscarProducto();
}

const buscarFavorito = (id) => {
    const favoritos = cargarFavoritos();
    return favoritos.some(item => item == id);
}

document.getElementById("btnBuscar").addEventListener("click", buscarProducto);