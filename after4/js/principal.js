cargarDatosCliente();
document.getElementById("cuentaDestino").addEventListener("focusout", validarDatosTransferencia);
document.getElementById("importe").addEventListener("focusout", validarDatosTransferencia);
document.getElementById("btnForm2").addEventListener("click", transferir);
document.getElementById("btnSalir").addEventListener("click", logout);