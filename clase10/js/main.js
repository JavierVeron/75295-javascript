function hacerClick() {
    let mensaje = "Curso de JavaScript!"
    console.log(mensaje);
    alert(mensaje);
    document.getElementById("texto").innerHTML = mensaje;
}

let boton = document.getElementById("btnClick");

// 3 Formas de Asignar Eventos
// Opción #1 => addEventListener(evento, función)
//boton.addEventListener("click", hacerClick); // Asignar la función hacerClick al Botón "btnClick"
/* boton.addEventListener("click", () => { // Defino y asigno una función al Botón "btnClick"
    alert("Estoy Acá!");
}) */

// Opción #2 => Modificar la propiedad onclick
//boton.onclick = hacerClick; // Modificar la propiedad "onclick" para que llame a la función "hacerClick"
/* boton.onclick = () => { // Definir y asignar una función al Botón "btnClick"
    alert("Estoy Acá!");
} */


// Otros Eventos de JS
// Eventos del Mouse
/* boton.addEventListener("click", () => {
    console.log("Hiciste Click!");
}) */
/* boton.addEventListener("mouseover", () => {
    console.log("Estás sobre el botón!");
})
boton.addEventListener("mouseout", () => {
    console.log("Estás fuera del botón!");
})
boton.addEventListener("mousedown", () => {
    console.log("Estás presionando el botón!");
})
boton.addEventListener("mouseup", () => {
    console.log("Estás soltando el botón!");
})
boton.addEventListener("mousemove", () => {
    console.log("Estás moviendo el mouse!");
}) */


// Eventos del Teclado
let campoNombre = document.getElementById("nombre");
let campoEmail = document.getElementById("email");

/* campoNombre.addEventListener("keydown", () => {
    console.log("Estas presionando una tecla!");
})
campoNombre.addEventListener("keyup", () => {
    console.log("Estas soltando una tecla!");
}) */

/* function contarCaracteres() {
    const caractesMaximo = 20;
    campoNombre.max = caractesMaximo; // limitando el ingreso de lo que dice la variable caracteresMaximo
    let textoIngresado = campoNombre.value;
    let caracteresDisponibles = caractesMaximo - textoIngresado.length;
    let infoNombre = document.getElementById("infoNombre");
    infoNombre.innerHTML = "Caracteres Disponibles: " + caracteresDisponibles
    
    if (caracteresDisponibles > 0) {
        infoNombre.className = "text-secondary";
    } else {      
        campoNombre.value = textoIngresado.substr(0, caractesMaximo);
        infoNombre.className = "text-danger";
    }    
}

campoNombre.onkeyup = contarCaracteres; */

// Evento Change
/* let paises = document.getElementById("paises");

function paisSeleccionado() {
    document.getElementById("contenido").innerHTML = `País seleccionado: <b>${paises.value}</b>`;
}

paises.addEventListener("click", paisSeleccionado); // Opción #1 usando el addEventListener
paises.onchange = paisSeleccionado; // Opción #2 usando la propiedad onChange */


// Validación de Formularios


function validarFormulario(event) {
    event.preventDefault(); // Detiene el envío del Formulario (no es necesario si el boton del form es tipo button)

    let campoNombre = document.getElementById("nombre");
    let campoEmail = document.getElementById("email");
    let infoNombre = document.getElementById("infoNombre");
    let infoEmail = document.getElementById("infoEmail");

    if (campoNombre.value.length == 0) {
        campoNombre.classList.add("is-invalid");
        infoNombre.className = "text-danger";
        infoNombre.innerHTML = "Error! Debe completar el campo Nombre!"
        return false
    } else {
        campoNombre.classList.remove("is-invalid");
        campoNombre.classList.add("is-valid");
        infoNombre.innerHTML = "";
    }

    if (campoEmail.value.length == 0) {
        campoEmail.classList.add("is-invalid");
        infoEmail.className = "text-danger";
        infoEmail.innerHTML = "Error! Debe completar el campo Email!"
        return false;
    } else {
        campoEmail.classList.remove("is-invalid");
        campoEmail.classList.add("is-valid");
        infoEmail.innerHTML = "";
    }

    console.log("Envío del Formulario");
    document.getElementById("form1").submit(); // Envío del Formulario
}

//document.getElementById("btnForm").addEventListener("click", validarFormulario);

// Opción #1 - Botón tipo button
// Modificar el atributo type del botón "btnForm" a button

// Opción #2 - Botón tipo submit
// Modificar el atributo type del botón "btnForm" a submit


// Validando un Formulario sin IDs
function validarFormulario2(e) {
    //Cancelamos el comportamiento del evento
    e.preventDefault();
    //Obtenemos el elemento desde el cual se disparó el evento
    let formulario = e.target;
    console.log(formulario);
    
    //Obtengo el valor del primero hijo <input type="text">
    console.log(formulario.children[0].value); 
    //Obtengo el valor del segundo hijo <input type="number"> 
    console.log(formulario.children[1].value); 
}

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", validarFormulario2);