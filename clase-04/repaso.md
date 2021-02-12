# Clase 04

## Variables

```js
var variable2; //global <=== no lo usamos
let variable1; //local
const variable3 = "HOLA"; //local pero constante <=== preferimos usar const antes que let.

const MIN_VALOR_EN_CAJA = 5;

function saludarPersona(nombre) {
  const saludo = "HOLA " + nombre;
  console.log(saludo);
}

const estudiantes = [];
const estudiante = {
    nombre: "pepito";
    edad: 18
    descripcion: "valor",
};

estudiante.nombre = "frula"; //ES VALIDO
// estudiante.descripcion = "un estudiante re copado"; //ES VALIDO
estudiante.descripcion = undefined //true
```

## Tipos de datos

```js
let string = "HOLA MUNDO";
let numeros = -10;
let numeros = 265.3;
let booleanos = true;

let gato = {
  nombre: "Hyo",
  edad: 4,
};
arrays = [];
funciones;
```

```js
Number("15") + Number("15"); //== 30

Number("hola") == Number("hola"); //NaN == NaN => False

estudiante == null; //true
estudiante == undefined; //true
```

## Operadores

```js
let variable = 18;

let suma = variable + variable;
let resta = variable - variable;

let multiplicacion = variable * variable;
let division = variable / variable;
let modulo = variable % variable;
let potencia = variable ** variable;
```
