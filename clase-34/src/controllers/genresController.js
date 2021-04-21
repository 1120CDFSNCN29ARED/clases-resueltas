const db = require("../database/models");
const sequelize = db.sequelize;

const genresController = {
    list: (req, res) => {
        db.Genre.findAll().then((genres) => {
            res.render("genresList.ejs", { genres });
        });
    },
    detail: (req, res) => {
        db.Genre.findByPk(req.params.id).then((genre) => {
            res.render("genresDetail.ejs", { genre });
        });
    },
    //Async/Await
    delete: async function (req, res) {
        const movies = await db.Movies.findAll({
            where: {
                genre_id: req.params.id,
            },
        });

        if (movies.length > 0) {
            const promiseArray = movies.map((movie) => {
                return movie.destroy();
            });

            await Promise.all(promiseArray);
        }

        await db.Genre.destroy({
            where: {
                id: req.params.id,
            },
        });

        res.redirect("/genres");
    },
};

module.exports = genresController;
