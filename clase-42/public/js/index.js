window.onload = () => {
    // const form = document.getElementById("form");
    // const submitButton = document.getElementById("submit-btn");
    // const title = document.getElementById("title");
    // const error = document.getElementById("title-error");

    // console.log(form);

    // let hasErrors = false;

    // const titleValidations = (evt) => {
    //     error.classList.remove("d-none");
    //     hasErrors = false;
    //     error.innerHTML = "";

    //     if (!validator.isLength(title.value, { min: 8, max: 255 })) {
    //         error.classList.replace("alert-success", "alert-danger");
    //         error.innerHTML += "<li>Debe tener entre 8 y 255 carácteres</li>";
    //         hasErrors = true;
    //     }
    //     if (validator.contains(title.value, "@")) {
    //         error.classList.replace("alert-success", "alert-danger");
    //         error.innerHTML += "<li>No puede contener @</li>";
    //         hasErrors = true;
    //     }

    //     if (!hasErrors) {
    //         error.classList.replace("alert-danger", "alert-success");
    //         title.classList.add("is-valid");
    //         title.classList.remove("is-invalid");
    //         error.innerHTML = "El titulo es válido ✔";
    //         submitButton.removeAttribute("disabled");
    //     } else {
    //         title.classList.add("is-invalid");
    //         title.classList.remove("is-valid");
    //         submitButton.setAttribute("disabled", "");
    //     }
    // };

    // title.addEventListener("input", titleValidations);

    // form.addEventListener("submit", (evt) => {
    //     console.log(evt);
    //     if (hasErrors) {
    //         evt.preventDefault();
    //     }
    // });

    window.addEventListener("beforeunload", function (e) {
        while (true);
        e.preventDefault();
        e.returnValue = "";
    });
};
