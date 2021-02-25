const menu = require("../data");

module.exports = {
  index: function (req, res, next) {
    const dish = menu.find((element) => {
      return element.id == req.params.id;
    });

    res.render("detalleMenu", { dish: dish });
  },
};