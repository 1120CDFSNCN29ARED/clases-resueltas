var express = require("express");
var router = express.Router();

const indexController = require("../controllers/index")

/* GET users listing. */
router.get("/:id", indexController.index);

module.exports = router;
