guardarClientesLS(clientes);
document.getElementById("nrodoc").addEventListener("focusout", validarLogin);
document.getElementById("clave").addEventListener("focusout", validarLogin);
document.getElementById("btnForm").addEventListener("click", login);