const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");

const toThousand = (n) => {
  return n.toLocaleString("es-AR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

const controller = {
  index: (req, res) => {
    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    res.render("index", {
      products,
      toThousand,
    });
  },
  search: (req, res) => {
    const products = JSON.parse(
      fs.readFileSync(productsFilePath, "utf-8")
    ).filter((prod) => {
      return prod.name.toLowerCase().includes(req.query.keywords);
    });

    res.render("results", {
      products,
      toThousand,
    });
  },
};

module.exports = controller;
