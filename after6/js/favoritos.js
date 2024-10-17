const renderFavoritos = () => {
    const favoritos = cargarFavoritos();
    const productos = cargarProductos();
    let contenidoHTML = "";

    favoritos.forEach(favorito => {        
        let producto = productos.find(item => item.id == favorito);

        contenidoHTML += `<div class="row my-3 border-bottom">
            <div class="col-md-1">
                <img src="${producto.thumbnail} alt="${producto.title} class="img-fluid" />
            </div>
            <div class="col-md-10">
                <span>${producto.attributes[0].value_name}</span>
                <h2>${producto.title}</h2>
                <span>${producto.official_store_name ? "Por " + producto.official_store_name : ""}</span>
                <p><b>${producto.currency_id == "USD" ? "US$" : "$"} ${producto.price}</b></p>
                <p>en <span class="text-success">6 cuotas de ${producto.currency_id == "USD" ? "US$" : "$"} ${(producto.price / 6).toFixed(2)} sin interés</span></p>
                <p class="text-secondary">${producto.condition == "new" ? "" : producto.condition}</p>
            </div>
            <div class="col-md-1 text-center">
                <span>        
                    <i class="${buscarFavorito(producto.id) ? "bi-heart-fill" : "bi-heart"}" onclick="agregarFavorito('${producto.id}');"></i>
                </span>
            </div>
        </div>`;
    });

    document.getElementById("contenido").innerHTML = contenidoHTML;
}

renderFavoritos();