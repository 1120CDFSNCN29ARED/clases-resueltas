const sumar = require("./sumar");
const restar = require("./restar");

console.log("10 - 5 = " + restar(10, 5));
console.log("10 + 5 = " + sumar(10, 5));

const dividir = require("./dividir");
const multiplicar = require("./multiplicar");

console.log("10 * 5 = " + multiplicar(10, 5));
console.log("10 / 5 = " + dividir(10, 5));
console.log("10 / 0 = " + dividir(10, 0));
