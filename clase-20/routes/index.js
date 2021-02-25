var express = require("express");
var router = express.Router();

const menu = require("../data");

/* GET home page. */
router.get("/", (req, res) => {
  res.render("index", { menu: menu });
});

module.exports = router;
