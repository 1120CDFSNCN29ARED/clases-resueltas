# Ayuda memoria

-   Crear el metodo controlador. (funcion controladora)
    (async para poder usar await)
-   Crear la ruta que use ese controlador
-   List: const lista = (await <Model>.findAll())

```js
const prop1 = "algo";
const prop2 = unaFuncionReUtil();
res.status(200).json({
    meta: {
        prop1,
        prop2,
    },
    data: lista,
});
```
