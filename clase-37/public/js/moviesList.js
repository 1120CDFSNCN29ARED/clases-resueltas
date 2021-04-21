const h1 = document.querySelector("h1");
const body = document.querySelector("body");

const resp = confirm("Desea modo oscuro?");

if (resp) {
  body.style.backgroundColor = "#7f7f7f";
  body.classList.add("fondoMoviesList");
}
