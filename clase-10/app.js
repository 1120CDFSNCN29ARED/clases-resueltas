const express = require("express");
const app = express();

require("./views/prueba");

const path = require("path");

app.use(express.static(path.resolve(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/index.html"));
});
app.get("/lovelace", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/lovelace.html"));
});

app.listen(3000, () => {});
