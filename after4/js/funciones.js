const guardarClientesLS = (unArray) => {
    if (!localStorage.getItem("clientes")) {
        localStorage.setItem("clientes", JSON.stringify(unArray))
    }
}

const actualizarBD = (unArray) => {
    localStorage.setItem("clientes", JSON.stringify(unArray))
}

const cargarClientesLS = () => {
    return JSON.parse(localStorage.getItem("clientes"))
}

const guardarClienteLS = (id) => {
    localStorage.setItem("cliente", JSON.stringify(id));
}

const cargarCliente = () => {
    return JSON.parse(localStorage.getItem("cliente"));
}

const validarLogin = () => {
    const nrodoc = document.getElementById("nrodoc");
    const clave = document.getElementById("clave");
    const nrodocError = document.getElementById("nrodocError");
    const claveError = document.getElementById("claveError");
    const btnForm = document.getElementById("btnForm");

    if (nrodoc.value == "") {
        nrodoc.classList.add("is-invalid");
        nrodocError.className = "text-danger";
        nrodocError.innerHTML = "Ingresá tu número de documento.";
        return false;
    } else {
        nrodoc.classList.remove("is-invalid");
        nrodoc.classList.add("is-valid");
        nrodocError.innerHTML = "";
    }

    if ((clave.value.length != 4)) {
        clave.classList.add("is-invalid");
        claveError.className = "text-danger";
        claveError.innerHTML = "Ingresá tu clave de 4 dígitos.";
        return false;
    } else {
        clave.classList.remove("is-invalid");
        clave.classList.add("is-valid");
        claveError.innerHTML = "";
    }

    btnForm.className = "btn btn-danger";
    btnForm.disabled = false;
}

const login = () => {
    const clientesBD = cargarClientesLS();
    const nrodoc = document.getElementById("nrodoc");
    const clave = document.getElementById("clave");

    const cliente = clientesBD.find(item => item.dni == nrodoc.value);

    if (cliente) {
        if (cliente.password == clave.value) {
            guardarClienteLS(cliente.id);
            location.href = "principal.html"; // nrodoc y clave esten ok
        } else {
            clave.classList.add("is-invalid");
            clave.focus();
            claveError.className = "text-danger";
            claveError.innerHTML = "La clave ingresada es inválida.";
            return false;
        }
    } else {
        nrodoc.classList.add("is-invalid");
        nrodoc.focus();
        nrodocError.className = "text-danger";
        nrodocError.innerHTML = "No existe un Cliente con el DNI ingresado.";
        return false;
    }
}

const cargarDatosCliente = () => {
    const clientes = cargarClientesLS();
    const idCliente = cargarCliente();
    const cliente = clientes.find(item => item.id == idCliente);
    console.log(cliente);
    
    const nombreCliente = document.getElementById("nombreCliente");
    const importePesos = document.getElementById("importePesos");
    const importeDolares = document.getElementById("importeDolares");
    nombreCliente.innerHTML = cliente.nombre;
    importePesos.innerHTML = cliente.pesos;
    importeDolares.innerHTML = cliente.dolares;
}

const validarDatosTransferencia = () => {
    const cuentaDestino = document.getElementById("cuentaDestino");
    const importe = document.getElementById("importe");
    const cuentaDestinoError = document.getElementById("cuentaDestinoError");
    const importeError = document.getElementById("importeError");
    const btnForm2 = document.getElementById("btnForm2");

    if (cuentaDestino.value == "") {
        cuentaDestino.classList.add("is-invalid");
        cuentaDestinoError.className = "text-danger";
        cuentaDestinoError.innerHTML = "Ingresá un Nro. de Cuenta o Alias.";
        return false;
    } else {
        cuentaDestino.classList.remove("is-invalid");
        cuentaDestino.classList.add("is-valid");
        cuentaDestinoError.innerHTML = "";
    }

    if ((importe.value.length == "")) {
        importe.classList.add("is-invalid");
        importeError.className = "text-danger";
        importeError.innerHTML = "Ingresá un Importe para transferir.";
        return false;
    } else {
        importe.classList.remove("is-invalid");
        importe.classList.add("is-valid");
        importeError.innerHTML = "";
    }

    btnForm2.className = "btn btn-danger";
    btnForm2.disabled = false;
}

const transferir = () => {    
    const clientesBD = cargarClientesLS();
    const idCliente = cargarCliente();
    const cliente = clientesBD.find(item => item.id == idCliente);
    const cuentaDestino = document.getElementById("cuentaDestino");
    const importe = document.getElementById("importe");
    const valorImporte = parseFloat(importe.value);
    const respuesta = document.getElementById("respuesta");

    const clienteDestino = clientesBD.find(item => (item.nroCuenta == cuentaDestino.value) || (item.alias == cuentaDestino.value));    

    if (clienteDestino) {
        if (valorImporte <= cliente.pesos) {
            cliente.pesos -= valorImporte; // Acá me resto el importe ingresado
            actualizarBD(clientesBD);
            clienteDestino.pesos += valorImporte; // Acá sumo al cliente destino el importe destino
            actualizarBD(clientesBD);
            respuesta.innerHTML = "La transferencia se realizó correctamente!";
            respuesta.className = "text-white bg-success p-3";
            document.getElementById("importePesos").innerHTML = cliente.pesos;
            cuentaDestino.value = "";
            importe.value = "";
            cargarCliente();
        } else {
            respuesta.innerHTML = "No tienes fondos sufiecientes para realizar la transferencia!";
            respuesta.className = "text-white bg-danger p-3";
        }
    } else {
        respuesta.className = "text-white bg-danger p-3";
        respuesta.innerHTML = "No existe un Nro. de Cuenta o Alias ingresado.";
    }
}

const logout = () => {
    localStorage.removeItem("cliente");
    location.href = "index.html";
}