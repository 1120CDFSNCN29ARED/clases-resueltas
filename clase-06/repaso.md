# Repaso

- ¿Qué es un callback?
  Es una funcion cuando se la pasa como parametro de usa funcion durante su ejecucion para que dicha funcion siendo ejecutada la llame cuando necesite.

## Algunos Ejemplos

```js
function saludo (param1, param2) {
  return "Hola " + param1 " y "+ param2;
}

function otraFuncion(param1, param2, callback) {
  if (param1 == "Pablo"){
    return callback(param1,param2);
  }
  else{
    return "Solo aceptamos saludos a Pablo";
  }
}
otraFuncion("pepe","rolito",saludo);
```

## Demostracion de un Foreach

```js
const galletitas = ["pepitos", "oreos", "pepas"];

function forEach(callback) {
  for (let i = 0; i < galletitas.length; i++) {
    callback(galletitas[i], i, galletitas);
  }
}
forEach((galletita) => {
  console.log(galletita);
});

galletitas.forEach((value) => {
  console.log(value);
});
```
