// Valores de Configuración
const montoMin = 10000
const montoMax = 1000000
const NombrePlan1 = "1- HSBC Premier Black";
const NombrePlan2 = "2- HSBC Premier";
const NombrePlan3 = "3- HSBC Advance";
const Plazo1 = "1- 12 Meses"
const Plazo2 = "2- 24 Meses"
const Plazo3 = "3- 36 Meses"
let TNA = 0;
let TEA = 0;
let cantCuotas = 0;

// Solicitar tipo de cliente
let mensaje = "Seleccione el Tipo de Cliente:\n\n" + NombrePlan1 + "\n" + NombrePlan2 + "\n" + NombrePlan3
let tipoCliente = parseInt(prompt(mensaje));
console.log("Tipo de Cliente", tipoCliente);

if (isNaN(tipoCliente) || ((tipoCliente < 1 || tipoCliente > 3))) {
    alert("Error! Ingresaste un Tipo de Cliente inválido!") //check
} else {
    // Solicitar el Monto
    mensaje = "Ingrese el Monto a Solicitar:"
    let monto = parseInt(prompt(mensaje));
    console.log("Monto Solicitado:", monto);

    if (isNaN(monto)) {
        alert("Error! Ingresaste un Monto inválido!") //check
    } else if (monto < montoMin || monto > montoMax) {
        alert("Debe ingresar un monto entre $" + montoMin + "  y $" + montoMax) //check
    } else {
        // Solicitar cantidad de cuotas
        mensaje = "Seleccione el Plazo:\n\n" + Plazo1 + "\n" + Plazo2 + "\n" + Plazo3
        let plazo = parseInt(prompt(mensaje));
        console.log("Plazo", plazo);

        if (isNaN(plazo) || ((plazo < 1 || plazo > 3))) {
            alert("Error! Ingresaste un Plazo inválido!") //check
        } else {
            if (tipoCliente == 1) {
                TNA = 62;
                TEA = 83.07;
            } else if (tipoCliente == 2) {
                TNA = 66;
                TEA = 99.16;
            } else if (tipoCliente == 3) {
                TNA = 78;
                TEA = 112.98;
            }

            if (plazo == 1) {
                cantCuotas = 12
            } else if (plazo == 2) {
                cantCuotas = 24
            } else {
                cantCuotas = 36
            }

            // Realizamos los cálculos 
            let montoTNA = (monto * TNA) / 100
            let montoTEA = (monto * TEA) / 100
            console.log("Interes TNA:", montoTNA);
            console.log("Interes TEA:", montoTEA);
            let montoTotal = monto + montoTNA + montoTEA;
            console.log("Prestamo:", montoTotal);
            let valorCuota = montoTotal / cantCuotas;
            console.log("Valor Cuota:", valorCuota);
            
            // Salida
            mensaje = "PRESTAMO SOLICITADO:\n\n";
            mensaje += "Monto: $" + monto + "\n"; //concatenando lo anterior + lo nuevo
            mensaje += "Plazo: " + cantCuotas + " Meses\n";
            mensaje += "Valor de Cuota: $" + valorCuota.toLocaleString() + " pesos\n";
            alert(mensaje)
        }
    }
}


