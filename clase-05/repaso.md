- ¿Por qué es necesario saber que existe el formato JSON?

Es un formato de datos comodo para la transferencia de datos entre sistemas

- ¿Qué hace JSON.parse(texto) y para qué sirve?

Convierte el formato JSON (string) a un tipo de dato manipulable en javascript (objeto, array, primitivos)

- ¿Qué hace el método slice() en un string?

```js
const saludo = "hola mundo";

const substring = saludo.slice(0, 4); //Hola
```

- ¿Para qué sirve el método trim() en un string?

```js
const saludo = "   hola mundo   ";

const substring = saludo.trim(); //hola mundo
```

- Si queremos reemplazar una porción de texto dentro de un string, ¿qué podemos usar?

Replace

```js
const saludo = "hola mundo";

const substring = saludo.replace("mundo", "fabio"); //hola fabio
```

- ¿Qué es un objeto literal? ¿Cómo lo diferenciamos de un JSON?
  Es un objeto que tiene propiedades, se define con llaves adentro de una variable y la diferencia con el JSON es un string.

```js
const variable = {
  hola: "mundo",
  saludo: () => {},
};
console.log(variable.hola); //mundo
variable.saludo();

variable.hola = {
  prueba: 1234,
};

const json = "{ 'hola': 'mundo' }";
console.log(json.hola); //ERROR
```

- ¿Qué son las arrow functions? ¿Cuál es su diferencia con las funciones tradicionales?

Son funciones que nos permiten escribirlas con una sintaxis más compacta

```js
prueba();
variable.saludo(); //ERROR

function prueba() {
  console.log("hola mundo");
}

const variable = {
  hola: "mundo",
  saludo: (param1) => {
    console.log("hola mundo");
  },
};

variable.saludo(); //TODO BIEN
```
