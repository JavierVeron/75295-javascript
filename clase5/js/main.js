// Objetos
// Definir un objeto persona
/* let nombre = prompt("Ingrese su Nombre");
let apellido1 = prompt("Ingrese su Apellido");
const persona = {nombre:nombre, apellido:apellido1, edad:27, pais:"Uruguay"};
const persona2 = {nombre:nombre, apellido:apellido1, edad:27, pais:"Uruguay", ciudad:"Montevideo"};
console.log(persona);
console.log(persona2);
console.log(persona.nombre); //Acceder a la propiedad nombre del objeto persona
console.log("Edad: " + persona.edad); */

// Definimos otro tipo de objeto
/* const datosContacto = {email:"pato@gmail.com", celular:"+5984445555"}
const persona3 = {nombre:"Patricia Mallo", edad:27, casada:true, contacto:datosContacto}
console.log(persona3); */


//const persona = {nombre:"Patricia", apellido:"Mallo", edad:27, pais:"Uruguay"};

// Acceder a las propiedades de un objeto
// Opción #1
/* console.log(persona.nombre);
console.log(persona.dni); // Sale undefined porque no existe esa propiedad en el objeto persona
// Opción #2
console.log(persona["nombre"]);
console.log(persona["contactos"]); // Sale undefined porque no existe esa propiedad en el objeto persona */

// Modificamos valores
/* persona.nombre = "Abi";
persona["edad"] = 40;
persona.dni = 28999999; // Si antes no tenías la propiedad dni, te la agrega
console.log(persona); */


// Constructores
// Creamos un Constructor a partir de parámetros
/* function Persona(valor1, valor2, valor3) {
    this.nombre = valor1; // Estas son las propiedades del objeto Persona
    this.edad = valor2; // Estas son las propiedades del objeto Persona
    this.direccion = valor3; // Estas son las propiedades del objeto Persona
}

const persona1 = new Persona("Patricia", 30, "Canelones, Uruguay")
const persona2 = new Persona("Patricia", 27)
persona2.direccion = "Montevideo 1234"
console.log(persona1);
console.log(persona2); */

// Creamos un Constructor a partir de un objeto
/* function DatosContacto(datos) {
    this.phone = datos.telefono,
    this.email = datos.email,
    this.address = datos.direccion
}

const datos = {telefono:"11223344", email:"ismalopez@gmail.com", direccion:"Av. Artigas 123"}
const contacto1 = new DatosContacto(datos)
console.log(contacto1); */


// Propiedades y Método de un Objeto
/* let texto = "Curso";
console.log("Longitud:", texto.length); // Accedí a la propiedad length
console.log("Mayúsculas:", texto.toUpperCase()); // Ejecuté el método toUpperCase()
console.log("Minúsculas:", texto.toLowerCase()); // Ejecuté el método toLowerCase() */


// Defino un objeto constructor con propiedades y métodos
/* function Curso (nombre, descripcion, precio) {
    this.nombre = nombre; //propiedad
    this.descripcion = descripcion; //propiedad
    this.precio = precio; //propiedad
     this.categoria = "Programación"; //propiedad
    this.precioPromocional = function() { // Esto es un método
        return this.precio * 0.9
    }
}

const cursoJS = new Curso("JavaScript", "Curso de Programación en JS", 120) // Es una instancia del objeto Curso
const cursoNuevo = new Curso("UX/UI", "Curso de UX/UI", 110) // Es una instancia del objeto Curso
console.log(cursoJS);
console.log(cursoNuevo);
console.log("Nombre", cursoJS.nombre);
console.log("Precio", cursoJS.precio);
console.log("Precio Promocional", cursoJS.precioPromocional());
console.log(cursoJS.precioPromocional()) */


// Operador IN y For..IN
/* console.log(persona);
console.log("nombre" in persona); // true // "in" comprobar si existe la propiedad en mi objeto
console.log("ciudad" in persona); // pais

for (const clave in persona) {
    console.log("Clave: ", clave);
    console.log("Valor: ", persona[clave]);
    console.log("---");
} */


// Clases en JS
// Definimos una Clase Persona
/* class Persona {
    constructor(nombre, edad, direccion) {
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
    }
}    

class DatosContacto {
    constructor(datos) {
        this.phone = datos.telefono,
        this.email = datos.email,
        this.address = datos.direccion
    }
}

const persona1 = new Persona("Ismael Lopez", 40, "Av. Artigas 123")
const persona2 = new Persona("Melania Lopez", 38, "Av. Montevideo 125")
console.log(persona1);
console.log(persona2);
const dato1 = new DatosContacto({telefono:"112233344", email:"il@gmail.com", direccion:"Av. Artigas 123"});
console.log(dato1); */


// Definimos una Clase con sus propiedades y métodos
/* class Curso {
    constructor(nombre, descripcion, precio) {
        this.nombre = nombre; //propiedad
        this.descripcion = descripcion; //propiedad
        this.precio = precio; //propiedad
        this.descuento = 10
    }

    precioPromocional() {
        return this.precio - ((this.precio * this.descuento) / 100)
    }
}

const curso1 = new Curso("JavaScript", "Curso de JS en Coder", 100);
console.log(curso1.nombre);
console.log(curso1.precio);
console.log(curso1.precioPromocional()); */


// Ejempo integrador
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre.toUpperCase();
        this.precio = precio;
        this.vendido = false;
    }

    aplicarIVA() {
        this.precio = this.precio * 1.21;
    }

    vender() {
        this.vendido = true;
    }
}

const producto1 = new Producto("Samsung Galaxy Fold", 1000);
const producto2 = new Producto("iPhone 15 Pro", 1100);
producto1.aplicarIVA();
producto1.vender();
console.log(producto1);
console.log(producto2);


