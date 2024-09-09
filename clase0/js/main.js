// Defino una variable del tipo String o Cadena de Texto (conjunto de caractares)
let curso = "JavaScript";

let parrafo = document.getElementById("curso");

console.log("hola gente!");
console.log("cómo están?");
console.log(curso);
console.log(parrafo);

parrafo.innerHTML = "Curso de JavaScript en Coderhouse!";
parrafo.addEventListener("click", () => {
    parrafo.innerHTML = "Modifico el Contenido de mi Párrafo con un CLICK!";
    parrafo.className = "colorVerde";
})
