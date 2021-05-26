import React, { useState, useRef } from "react";

// import noPoster from "../assets/images/no-poster.jpg";

const apiKey = "4083683d"; // Intenta poner cualquier cosa antes para probar
const url = `http://www.omdbapi.com/?type=movie`;

async function getMovies(keywords, page) {
  const response = await fetch(
    url + `&s=${keywords}&apikey=${apiKey}&page=${page}`
  );
  return await response.json();
}

function SearchMovies() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const searchInput = useRef(null);

  async function getSearch(newPage) {
    const searchKeywords = searchInput.current.value;
    const result = await getMovies(searchKeywords, newPage);
    if (result.Search) {
      setMovies(result.Search);
      setMaxPage(Math.ceil(result.totalResults / 10));
    } else {
      setMovies([]);
    }
    console.log(result);
  }

  async function previousPage() {
    if (currentPage == 1) return;
    const newPage = currentPage - 1;
    setCurrentPage(newPage);

    await getSearch(newPage);
  }

  async function nextPage() {
    if (currentPage >= maxPage) return;
    const newPage = currentPage + 1;
    setCurrentPage(newPage);

    await getSearch(newPage);
  }

  async function search() {
    setCurrentPage(1);

    await getSearch(1);
  }

  return (
    <div className="container-fluid">
      {apiKey !== "" ? (
        <>
          <div className="row my-4">
            <div className="col-12 col-md-6">
              {/* Buscador */}
              <div className="form-group">
                <label htmlFor="">Buscar por título:</label>
                <input type="text" className="form-control" ref={searchInput} />
              </div>
              <button type="button" className="btn btn-info" onClick={search}>
                Search
              </button>
            </div>
          </div>
          <button type="button" className="btn btn-info" onClick={previousPage}>
            Pagina Anterior
          </button>
          <button type="button" className="btn btn-info" onClick={nextPage}>
            Siguiente Pagina
          </button>
          <div className="row">
            <div className="col-12">
              <h2>
                Películas para la palabra:{" "}
                {searchInput.current ? searchInput.current.value : ""}
              </h2>
              Pagina: {currentPage}
            </div>
            {/* Listado de películas */}
            {movies.length > 0 &&
              movies.map((movie, i) => {
                return (
                  <div className="col-sm-6 col-md-3 my-4" key={i}>
                    <div className="card shadow mb-4">
                      <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">
                          {movie.Title}
                        </h5>
                      </div>
                      <div className="card-body">
                        <div className="text-center">
                          <img
                            className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                            src={movie.Poster}
                            alt={movie.Title}
                            style={{
                              width: "90%",
                              height: "400px",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                        <p>{movie.Year}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          {movies.length === 0 && (
            <div className="alert alert-warning text-center">
              No se encontraron películas
            </div>
          )}
        </>
      ) : (
        <div className="alert alert-danger text-center my-4 fs-2">
          Eyyyy... ¿PUSISTE TU APIKEY?
        </div>
      )}
    </div>
  );
}

export default SearchMovies;
