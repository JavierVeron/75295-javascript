function solicitarDato(texto) {
    let valor = prompt(texto)

    while (valor == "") {
        valor = prompt(texto)

        if (valor == null) {
            break;
        }
    }

    return valor
}

function crearCurso(nro) {
    let nombre = solicitarDato("Ingrese el Nombre del Curso #" + nro)
    let descripcion = solicitarDato("Ingrese la Descripción del Curso #" + nro)
    let duracion = parseInt(solicitarDato("Ingrese la Duración del Curso #" + nro))
    let precio = parseFloat(solicitarDato("Ingrese el Precio del Curso #" + nro))
    const nuevoCurso = new Curso(nombre, descripcion, duracion, precio);
    
    return nuevoCurso;
}

function crearAlumno() {
    let nombre = solicitarDato("Ingrese el Nombre del Alumno")
    let email = solicitarDato("Ingrese el Email del Alumno")
    let coderbeca = confirm("Posee Coderbeca");    
    const nuevoAlumno = new Alumno(nombre, email, coderbeca);
    
    return nuevoAlumno;
}

function agregarCurso(alumno, curso) {
    if (!alumno.tieneCursoAsignado()) {
        let activo = confirm("El Curso sigue activo?")
    
        if (activo) {
            curso.activarCurso();
        } else {
            curso.desactivarCurso();
        }
    } else {
        let eliminar = confirm("Desea eliminar el Curso actual?");

        if (eliminar) {
            alumno.eliminarCursoAsignado();
        }
    }

    alumno.agregarCurso(curso)    
}