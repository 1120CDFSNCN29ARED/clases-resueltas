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
  // Root - Show all products
  index: (req, res) => {
    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    res.render("products", { products, toThousand });
  },

  // Detail - Detail from one product
  detail: (req, res) => {
    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    const prodId = req.params.id;
    const product = products.find((prod) => {
      return prod.id == prodId;
    });
    res.render("detail", { product, toThousand });
  },

  // Create - Form to create
  create: (req, res) => {
    res.render("product-create-form");
  },

  // Create -  Method to store
  store: (req, res) => {
    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    newId = products.length > 0 ? products[products.length - 1].id + 1 : 1;

    const newProduct = {
      id: newId,
      ...req.body,
      discount: Number(req.body.discount),
      price: Number(req.body.price),
    };

    products.push(newProduct);

    fs.writeFileSync(productsFilePath, JSON.stringify(products));

    res.redirect("/");
  },

  // Update - Form to edit
  edit: (req, res) => {
    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    const prodId = req.params.id;
    const product = products.find((prod) => {
      return prod.id == prodId;
    });

    res.render("product-edit-form", { product });
  },
  // Update - Method to update
  update: (req, res) => {
    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    const prodId = req.params.id;
    const product = products.find((prod) => {
      return prod.id == prodId;
    });

    product.name = req.body.name;
    product.category = req.body.category;
    product.description = req.body.description;
    product.price = Number(req.body.price);
    product.discount = Number(req.body.discount);

    fs.writeFileSync(productsFilePath, JSON.stringify(products));

    res.redirect(`/products/${prodId}`);
  },

  // Delete - Delete one product from DB
  destroy: (req, res) => {
    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

    const productIndex = products.findIndex((prod) => {
      return prod.id == req.params.id;
    });
    products.splice(productIndex, 1);

    fs.writeFileSync(productsFilePath, JSON.stringify(products));
    res.redirect(`/`);
  },
};

module.exports = controller;
