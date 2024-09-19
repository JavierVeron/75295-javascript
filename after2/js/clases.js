// Definir la Clase Curso
class Curso {
    constructor(nombre, descripcion, duracion, precio) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.duracion = duracion;
        this.precio = precio;
        this.activo = true;
        this.finalizado = false;
    }

    informarDuracion() {
        return this.duracion + " semanas";
    }

    aplicarDescuento() {
        this.precio = this.precio * 0.9
    }

    activarCurso() {
        this.activo = true;
    }

    desactivarCurso() {
        this.activo = false;
    }
}

// Defino la Clase Alumno
class Alumno {
    constructor(nombre, email, coderbeca) {
        this.nombre = nombre;
        this.email = email;
        this.coderbeca = coderbeca;
        this.cursoAsignado = false;
    }

    agregarCurso(curso) {
        if (!this.cursoAsignado) {
            if (curso.activo) {
                if (this.coderbeca) {
                    curso.aplicarDescuento();    
                }
        
                this.cursoAsignado = curso;
            } else {
                alert("Error! No se puede agregar el Curso porque no está activo!")
            }
        } else {
            alert("Error! Ya tiene un Curso asignado!")
        }
    }

    eliminarCursoAsignado() {
        this.cursoAsignado = false
    }

    tieneCursoAsignado() {
        return this.cursoAsignado
    }
}