var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  if (algo) {
    return;
  }

  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return res.render("algo");
  }
  res.render("algo", { errors: errors.array() });
});

module.exports = router;
