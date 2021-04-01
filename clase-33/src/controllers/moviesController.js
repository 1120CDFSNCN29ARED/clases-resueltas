const path = require("path");
const { Movie, Genre, sequelize } = require("../database/models");
const { Op } = require("sequelize");

//Aqui tienen una forma de llamar a cada uno de los modelos

const moviesController = {
    list: (req, res) => {
        Movie.findAll().then((movies) => {
            res.render("moviesList.ejs", { movies });
        });
    },
    detail: (req, res) => {
        Movie.findByPk(req.params.id, {
            include: ["genre"],
        }).then((movie) => {
            res.render("moviesDetail.ejs", { movie });
        });
    },
    new: (req, res) => {
        Movie.findAll({
            order: [["release_date", "DESC"]],
            limit: 5,
        }).then((movies) => {
            res.render("newestMovies", { movies });
        });
    },
    recomended: (req, res) => {
        Movie.findAll({
            where: {
                rating: { [db.Sequelize.Op.gte]: 8 },
            },
            order: [["rating", "DESC"]],
        }).then((movies) => {
            res.render("recommendedMovies.ejs", { movies });
        });
    },
    //Aqui dispongo las rutas para trabajar con el CRUD
    add: function (req, res) {},
    create: function (req, res) {},
    edit: function (req, res) {
        Movie.findByPk(req.params.id, {
            include: ["genre"],
        }).then((movie) => {
            Genre.findAll().then((allGenres) => {
                res.render("moviesEdit.ejs", { movie, allGenres });
            });
        });
    },

    update: function (req, res) {
        Movie.update(req.body, {
            where: {
                id: req.params.id,
            },
        }).then(() => {
            res.redirect(`/movies/detail/${req.params.id}`);
        });
    },
    delete: function (req, res) {},
    destroy: function (req, res) {},
};

module.exports = moviesController;
