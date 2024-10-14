// setTimeout
/* console.log("1- Inicio del Proceso");

setTimeout(()=> {
    console.log("2- Proceso asincrónico")
}, 3000)

console.log("3- Fin del Proceso"); */

// Ejemplo #1
const email = document.getElementById("email");
const emailInfo = document.getElementById("emailInfo");
const boton = document.getElementById("boton");
boton.onclick = () => {
    // Se ejecuta de forma síncrona
    emailInfo.innerHTML = "Esperando...";
    emailInfo.className = "text-danger";

    // Se ejecuta de forma asíncrona
    setTimeout(() => {
        let mensaje = "Ingresaste <b>" + email.value + "</b>";
        emailInfo.innerHTML = mensaje;
        emailInfo.className = "text-success";
    }, 2000);

    // Se ejecuta de forma síncrona
    emailInfo.innerHTML = "Respuesta Recibida!";
    emailInfo.className = "text-danger";
}


/* for (let letra of "hola") {
    console.log(letra)
} */

/* for (let letra of "hola") {
    setTimeout(() => {
        console.log(letra)
    }, 1000)
} */


/* console.log("Inicia proceso")

setTimeout(()=> {
    console.log("Mitad de proceso #1")
}, 2000)

setTimeout(()=> {
    console.log("Mitad de proceso #2")
}, 1000)

console.log("Fin proceso") */


// Ejemplo Callstack
/* function multiplicar(x, y) { //5, 5
    console.log("Hola #2");
    return x * y; //25
}

function imprimirCuadrado(x) {  //5
    console.log("Hola #1");
    let s = multiplicar(x, x); // 5, 5
    console.log("Hola #3");
    console.log(s);
}

imprimirCuadrado(5);
console.log("FIN"); */


// setInterval
/* setInterval(() => {
    console.log("Tic")
}, 1000) */

// clearInteval => Detiene la ejecución de un setInterval
/* let contador = 0;
boton.onclick = () => {
    clearInterval(interval);
    console.log("Detenido por evento Click!");
}

const interval = setInterval(() => {
    contador++;
    console.log("Contador: ", contador)

    if (contador >= 5) {
        clearInterval(interval); // Detener la ejecución
        console.log("Se removió el intervalo");
    }
}, 1000) */


// clearTimeout => Detiene la ejecución de un setTimeout
/* console.log("Inicio");

const fin = setTimeout(() => {
    console.log("--fin--")
}, 3000)

//clearTimeout(fin);

boton.onclick = () => {
    clearTimeout(fin);
    console.log("Detenido por evento Click!");
}

console.log("FIN FIN!"); */


// Promesas => Estado por defecto es pendiente, pero se pueden completar o rechazar y devuelven un valor

/* const promesa = new Promise( (resuelto, rechazado) => {
    //cuerpo de la promesa
    console.log("Estoy dentro de la promesa");
    //resuelto("El sábado vamos al Cine!"); // Para completar o pasar de estado fullfilled
    //rechazado("No puedo juntamre el sábado! Te mando un mando abrazo!"); // Para rechazar o pasar de estado rejected
})

console.log(promesa); */

// Ejemplo Then & Catch
/* const validarCodigo = (codigo) => {
    return new Promise((res, rej) => {
        if (codigo == "HOLA") {
            res("Codigo correcto!");
        } else {
            rej("ERROR! Código INCORRECTO!");
        }
    });
}

//console.log(validarCodigo("HOLA"));
//console.log(validarCodigo("CHAU"));
// Estoy validando el estado de la promesa "validarCodigo"
validarCodigo("HOLA")
.then(respuesta => {
    console.log("Se ejecutó el Método Then!");
    console.log(respuesta);
})
.catch(error => {
    console.log("Se ejecutó el Método Catch!");
    console.log(error);
}) */

const bebida = {id:1, nombre:"Coca Cola", precio:2000}

/* const validarCodigo = (codigo) => {
    return new Promise((res, rej) => {
        if (codigo == "HOLA") {
            let descuento = 10;
            res(descuento);
        } else {
            rej("ERROR! Código INCORRECTO!");
        }
    });
} */

// Estoy validando el estado de la promesa "validarCodigo"
/* validarCodigo("HOLA")
.then(descuento => {
    if (descuento) {
        bebida.precio = bebida.precio - ((bebida.precio * descuento) / 100);
    }
    console.log("Se completó la promesa!");
    console.log(bebida);
})
.catch(error => {
    console.log("Se rechazo la promesa!");
    console.log(error);
    console.log(bebida);
})
.finally( () => {
    console.log("Fin del proceso!")
}) */


// Ejemplo aplicado
const BD = [
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

const obtenerProductos = () => {
    mostrarLoading();

    return new Promise((res) => {
        setTimeout(() => {
            res(BD);
        }, 3000)
    })
}

const mostrarLoading = () => {
    let salida = `<div class="col text-center my-5">
    <div class="spinner-border text-warning" role="status">
    <span class="visually-hidden">Loading...</span>
    </div>
    </div>`;
    document.getElementById("contenido").innerHTML = salida;
}

const renderProductos = (productos) => {
    let salida = "";

    for (const elemento of productos) {
        salida += `<div class="col-md-3">
        <div class="card border-0 mb-3">
        <img src="${elemento.imagen}" class="img-fluid" alt="${elemento.nombre}">
        <div class="card-body text-center">
            <h5 class="card-title">${elemento.nombre}</h5>
        </div>
        </div>
        </div>`;
    }

    document.getElementById("contenido").innerHTML = salida;
}

obtenerProductos()
.then(respuesta => {
    renderProductos(respuesta);
})