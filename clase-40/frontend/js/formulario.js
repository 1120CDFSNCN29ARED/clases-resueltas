window.onload = async () => {
    const form = document.getElementById("form");
    const title = document.getElementById("title");
    const rating = document.getElementById("rating");
    const awards = document.getElementById("awards");
    const release_date = document.getElementById("release_date");
    const length = document.getElementById("length");

    const urlParams = new URLSearchParams(location.search);
    const id = urlParams.get("id");

    const response = await fetch("http://localhost:3031/api/movies/" + id);
    const movie = (await response.json()).data;

    title.value = movie.title;
    rating.value = movie.rating;
    awards.value = movie.awards;
    length.value = movie.length;

    let releaseDate = new Date(movie.release_date);
    const fullYear = releaseDate.getFullYear();
    const month = (releaseDate.getMonth() + 1).toString().padStart(2, "0");
    const date = (releaseDate.getDate() + 1).toString().padStart(2, "0");

    release_date.value = `${fullYear}-${month}-${date}`;

    form.onsubmit = async (evt) => {
        evt.preventDefault();
        console.dir(evt.submitter);

        const body = JSON.stringify({
            title: title.value,
            rating: rating.value,
            awards: awards.value,
            length: length.value,
            release_date: release_date.value,
        });

        if (evt.submitter.id == "editBtn") {
            console.log("entre");
            await fetch("http://localhost:3031/api/movies/update/" + id, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body,
            });
            return;
        }

        if (evt.submitter.id == "createBtn") {
            console.log("entre");
            await fetch("http://localhost:3031/api/movies/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body,
            });
            return;
        }

        if (evt.submitter.id == "deleteBtn") {
            console.log("entre");
            await fetch("http://localhost:3031/api/movies/delete/" + id, {
                method: "DELETE",
            });
            return;
        }
    };
};
