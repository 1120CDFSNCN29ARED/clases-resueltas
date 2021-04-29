# Repaso

## Comportamiento por defecto

Si queremos frenar el comportamiento por defecto

```js
function listener(evt) {
    evt.preventDefault();
}
```

## Foco

```js
element.addEventListener("focus", (evt) => {
    evt.target;
});
```

# Otros eventos

-   blur -> contrario de focus
-   reset -> accion de reset del form.
-   submit -> accion de submit del form
-   input -> dispara un evento cada vez que el usuario agrega o remueve o toca de cualquier manera el input del input mientras lo está haciendo
-   change -> dispara un evento cuando el input pierde el foco SI y solo SI, el valor cambió desde la ultimavez.
-   invalid -> se dispara por cada input que falla sus validaciones.
