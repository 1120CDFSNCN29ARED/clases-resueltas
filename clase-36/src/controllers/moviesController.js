const path = require("path");
const db = require("../database/models");
const sequelize = db.sequelize;
const { Op } = db.Sequelize;
const moment = require("moment");
const fetch = require("node-fetch");

//Aqui tienen otra forma de llamar a cada uno de los modelos
const { Movie, Genre, Actor } = db;

const API_ENDPOINT = "http://www.omdbapi.com/";
const API_KEY = "4083683d";

const moviesController = {
    list: (req, res) => {
        db.Movie.findAll({
            include: ["genre"],
        }).then((movies) => {
            res.render("moviesList.ejs", { movies });
        });
    },
    detail: (req, res) => {
        db.Movie.findByPk(req.params.id, {
            include: ["genre"],
        }).then((movie) => {
            res.render("moviesDetail.ejs", { movie });
        });
    },
    new: (req, res) => {
        db.Movie.findAll({
            order: [["release_date", "DESC"]],
            limit: 5,
        }).then((movies) => {
            res.render("newestMovies", { movies });
        });
    },
    recomended: (req, res) => {
        db.Movie.findAll({
            include: ["genre"],
            where: {
                rating: { [db.Sequelize.Op.gte]: 8 },
            },
            order: [["rating", "DESC"]],
        }).then((movies) => {
            res.render("recommendedMovies.ejs", { movies });
        });
    },
    //Aqui debo modificar para crear la funcionalidad requerida
    buscar: async (req, res) => {
        //Buscar mis movies en base a la query
        const words = req.query.title.split(" ");
        let movies = await Movie.findAll({
            where: {
                [Op.and]: words.map((word) => {
                    return {
                        title: { [Op.like]: `%${word}%` },
                    };
                }),
            },
        });

        if (movies.length == 0) {
            // Si no encuentro nada tengo que hacer
            // un pedido a la API de OMDB (fetch)
            const URL_FINAL =
                API_ENDPOINT + `?apikey=${API_KEY}&t=${words.join("+")}`;

            const response = await fetch(URL_FINAL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: "Hola mundo",
                }),
            });

            const data = await response.json();
            res.render("moviesDetailOmdb.ejs", { movie: data });
        } else {
            // Lo que sea que haya encontrado lo tengo que
            // renderizar.
            const movie = movies[0];
            res.render("moviesDetail.ejs", { movie });
        }
    },
    //Aqui dispongo las rutas para trabajar con el CRUD
    add: function (req, res) {
        let promGenres = Genre.findAll();
        let promActors = Actor.findAll();

        Promise.all([promGenres, promActors])
            .then(([allGenres, allActors]) => {
                return res.render(
                    path.resolve(__dirname, "..", "views", "moviesAdd"),
                    { allGenres, allActors }
                );
            })
            .catch((error) => res.send(error));
    },
    create: function (req, res) {
        Movie.create({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length,
            genre_id: req.body.genre_id,
        })
            .then(() => {
                return res.redirect("/movies");
            })
            .catch((error) => res.send(error));
    },
    edit: function (req, res) {
        let movieId = req.params.id;
        let promMovies = Movie.findByPk(movieId, {
            include: ["genre", "actors"],
        });
        let promGenres = Genre.findAll();
        let promActors = Actor.findAll();
        Promise.all([promMovies, promGenres, promActors])
            .then(([Movie, allGenres, allActors]) => {
                Movie.release_date = moment(Movie.release_date).format("L");
                return res.render(
                    path.resolve(__dirname, "..", "views", "moviesEdit"),
                    { Movie, allGenres, allActors }
                );
            })
            .catch((error) => res.send(error));
    },
    update: function (req, res) {
        let movieId = req.params.id;
        Movie.update(
            {
                title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length,
                genre_id: req.body.genre_id,
            },
            {
                where: { id: movieId },
            }
        )
            .then(() => {
                return res.redirect("/movies");
            })
            .catch((error) => res.send(error));
    },
    delete: function (req, res) {
        let movieId = req.params.id;
        Movie.findByPk(movieId)
            .then((Movie) => {
                return res.render(
                    path.resolve(__dirname, "..", "views", "moviesDelete"),
                    { Movie }
                );
            })
            .catch((error) => res.send(error));
    },
    destroy: function (req, res) {
        let movieId = req.params.id;
        Movie.destroy({ where: { id: movieId }, force: true }) // force: true es para asegurar que se ejecute la acción
            .then(() => {
                return res.redirect("/movies");
            })
            .catch((error) => res.send(error));
    },
};

module.exports = moviesController;
