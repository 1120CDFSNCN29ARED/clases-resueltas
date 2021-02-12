var express = require("express");
var router = express.Router();

const menu = [
  {
    id: 15,
    title: "Carpaccio fresco",
    desc: "Entrada Carpaccio de salmón con cítricos",
    price: 65.5,
  },
  {
    id: 4,
    title: "Risotto de berenjena",
    desc: "Risotto de berenjena y queso de cabra",
    price: 47.0,
  },
  {
    id: 6,
    title: "Mousse de arroz",
    desc: "Mousse de arroz con leche y aroma de azahar",
    price: 27.5,
  },
  {
    id: 32,
    title: "Espárragos blancos",
    desc: "Espárragos blancos con vinagreta de verduras y jamón ibérico",
    price: 37.5,
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { menu: menu });
});

module.exports = router;
