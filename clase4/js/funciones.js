// Declaración de la función
function saludar() {
    console.log("Hola!");
    console.log("Estamos cursando JavaScript en Coder!");
    console.log("Adios!");
}

function solicitarDato(texto) {
    return parseFloat(prompt("Ingrese su " + texto + ":"))
}

function calcularIMC(peso, altura) {
    return peso / (altura * altura)
}

function informarIMC(imc) {
    let cc = ""

    if (imc < 18.5) {
        cc = "Peso inferior al normal"
    } else if (imc < 25) {
        cc = "Normal"
    } else if (imc < 30) {
        cc = "Peso superior al normal"
    } else {
        cc = "Obesidad"
    }

    return cc
}

function mostrarMensaje(imc, estado) {
    alert("Tu IMC es: " + imc.toFixed(2) + "%\nTu Estado de Salud es: " + estado)
}

function informarEstadoSalud() {
    let pesoVar = solicitarDato("Peso")
    let alturaVar = solicitarDato("Altura")
    let imc = calcularIMC(pesoVar, alturaVar)
    let estado = informarIMC(imc)
    mostrarMensaje(imc, estado)
}