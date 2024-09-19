// Iniciar la carga de datos del Curso
// Agregar Curso #1
const nuevoCurso1 = crearCurso(1);
console.log(nuevoCurso1);

// Agregar Curso #2
const nuevoCurso2 = crearCurso(2);
console.log(nuevoCurso2);

// Agregar un Alumno
const nuevoAlumno = crearAlumno();
console.log(nuevoAlumno);

// Asignar el Curso #1 al Alumno
agregarCurso(nuevoAlumno, nuevoCurso1); // Agregar el Curso de DW
console.log(nuevoAlumno);

// Asignar el Curso #2 al Alumno
agregarCurso(nuevoAlumno, nuevoCurso2); // Agregar el Curso de JS (me tendria que bochar)
console.log(nuevoAlumno);