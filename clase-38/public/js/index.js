window.addEventListener("load", function () {
    //JavaScript del Index
    let container = document.querySelector(".container");
    let subtitulo = document.querySelector(".subtitulo");
    let destacado = document.querySelectorAll("p");
    let fondo = document.querySelector("body");
    let enlace = document.querySelector("a");

    subtitulo.style.textTransform = "uppercase";
    fondo.classList.add("fondo");
    enlace.style.color = "#E51B3E";
    console.log(destacado);
    for (let i = 0; i < destacado.length; i++) {
        if (i % 2 == 0) {
            destacado[i].classList.add("destacadoPar");
        } else {
            destacado[i].classList.add("destacadoImpar");
        }
    }

    const logo = document.getElementById("logoDH");
    const menu = document.getElementById("menu");
    logo.addEventListener("mouseenter", () => {
        menu.classList.add("mostrar");
    });

    function disableMenu() {
        menu.classList.remove("mostrar");
    }

    menu.addEventListener("mouseleave", disableMenu);
    // logo.addEventListener("mouseleave", disableMenu);
});
