const db = require("../../database/models");

const Genre = db.Genre;

module.exports = {
  list: (req, res) => {
    Genre.findAll().then((genres) => {
      res.render("genresList", { genres });
      //   res.send(genres);
    });
  },
  detail: (req, res) => {
    Genre.findByPk(req.params.id).then((genre) => {
      res.render("genresDetail", { genre });
    });
  },
};
