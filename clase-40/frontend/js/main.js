window.addEventListener("load", async () => {
    const app = document.getElementById("root");
    const container = document.createElement("div");
    container.setAttribute("class", "container");
    app.appendChild(container);

    // Aqui debemos agregar nuestro fetch
    const url = "http://localhost:3031/api/movies";
    const response = await fetch(url);
    const peliculas = await response.json();

    /** Codigo que debemos usar para mostrar los datos en el frontend*/
    let data = peliculas.data;

    data.forEach((movie) => {
        const card = document.createElement("div");
        container.appendChild(card);
        card.setAttribute("class", "card");

        const h1 = document.createElement("h1");
        const anchor = document.createElement("a");
        anchor.href = "/formulario.html?id=" + movie.id;
        card.appendChild(anchor);
        anchor.appendChild(h1);
        h1.textContent = movie.title;

        const p = document.createElement("p");
        card.appendChild(p);
        p.textContent = `Rating: ${movie.rating}`;

        if (movie.genre !== null) {
            const genero = document.createElement("p");
            genero.textContent = `Genero: ${movie.genre.name}`;
            card.appendChild(genero);
        }

        const duracion = document.createElement("p");
        duracion.textContent = `Duración: ${movie.length}`;
        card.appendChild(duracion);
    });
});
