const path = require("path");

module.exports = {
  index: (req, res) => {
    res.sendFile(path.resolve(__dirname, "../views/home.html"));
  },
  about: (req, res) => {},
};
