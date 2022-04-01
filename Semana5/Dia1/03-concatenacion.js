let saludo = "Hola ";

let presentacion = "Soy Camila";

console.log(saludo + presentacion);

let a = "10" //string

let b = 2;

console.log("suma", a + b);

console.log( "resta", a - b);

//Template String, Template Literal
//${aqui adentro podemos poner codigo de JS}
let edad = 31;

//Backticks
let oracion = `Buenas Noches ${presentacion}, mucho gusto, tengo ${edad} años`;

console.log(oracion);

//prompt, simple de obtener datos del usuario
let cantidadMascotas = prompt("Hola cuantas mascotas tienes?");

console.log(`Mascotas : ${cantidadMascotas}`);

//typeof me muestra el tipo de dato de algo
//toda la informacion que obtenemos del ususario, suele estar en formato string
console.log(typeof cantidadMascotas);

//enteros
// let convertido = parseInt(cantidadMascotas);
//decimales
// let convertido = parseFloat(cantidadMascotas);
//se puede convertir facilmente un string a numeros colocandole un + adelante
let convertido = +cantidadMascotas;

console.log(convertido);
console.log(typeof convertido);

