const db = require("../database/models");
const sequelize = db.sequelize;

async function list() {
    return await db.Genre.findAll();
}

const genresController = {
    list: async (req, res) => {
        res.render("genresList.ejs", { genres: await list() });
    },
    detail: (req, res) => {
        db.Genre.findByPk(req.params.id).then((genre) => {
            res.render("genresDetail.ejs", { genre });
        });
    },
};

module.exports = genresController;
