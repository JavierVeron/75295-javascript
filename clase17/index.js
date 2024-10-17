const productos = [
    {id:1, nombre:"Big Mac", imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kvXcLCtf/200/200/original?country=uy", descripcion:"¿Ques es lo que hace al Big Mac único? Quizás sean las dos hamburguesas de pura carne con salsa y queso derretido, el toque de cebolla y el crocante de pepino. Bueno, quizá sea solo que es el más alto...", precio:380, categoria:"hamburguesas"},
    {id:2, nombre:"Cuarto de Libra con Queso", imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kvX9qg4j/200/200/original?country=uy", descripcion:"Doble queso derretido… la companía perfecta para que la hamburguesa no se sienta sola. Simple, pero funciona.", precio:280, categoria:"hamburguesas"},
    {id:3, nombre:"Doble Cuarto de Libra con Queso", imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kvXCSLEA/200/200/original?country=uy", descripcion:"El donde de sabor, A ver… empecemos con una cuarto de libra de pura carne con los quesos que lo acompañan, hasta ahí, muy bien, solo que encima de todo eso, agregamos otro cuarto de libra, igual al anterior, ¡Mucho mejor!", precio:480, categoria:"hamburguesas"},
    {id:4, nombre:"Chicken McNuggets 20 unidades", imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kvXNfLWN/200/200/original?country=uy", descripcion:"Las infaltables Nuggets de pollo para compartir.", precio:290, categoria:"pollo"},
    {id:5, nombre:"McPollo", imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kvXyesgs/200/200/original?country=uy", descripcion:"Deliciosa pechuga de pollo, acompañada de lechuga y mayonesa.", precio:350, categoria:"pollo"},
    {id:6, nombre:"McCrispy Chicken Spicy", imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kuXAHC95/200/200/original?country=uy", descripcion:"El más rico y crujiente pollo crispy, tomate, lechuga y una deliciosa salsa Spicy acompañado con pan de papa.", precio:420, categoria:"pollo"},
    {id:7, nombre:"Coca-Cola Chica", imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$coca-cola.png/200/200/original?country=uy", descripcion:"Preparate para vencer la sed con una bebida helada.", precio:200, categoria:"bebidas"},
    {id:8, nombre:"Coca-Cola Mediana", imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$coca-cola.png/200/200/original?country=uy", descripcion:"Preparate para vencer la sed con una bebida helada.", precio:250, categoria:"bebidas"},
    {id:9, nombre:"Coca-Cola Grande", imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$coca-cola.png/200/200/original?country=uy", descripcion:"Preparate para vencer la sed con una bebida helada.", precio:300, categoria:"bebidas"}
];

let categoria = "pollo"
const productoBuscado = productos.find(item => item.categoria == categoria);
//console.log(productoBuscado);
console.log(productos);

