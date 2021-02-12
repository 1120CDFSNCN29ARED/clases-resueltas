const express = require("express");
const path = require("path");

const app = express();

app.listen(3000, () => {
  console.log("Sevidor funcionando");
});

const expressStatic = express.static(path.resolve(__dirname, "public"));
app.use(expressStatic);

const mainRouter = require("./routers/main");

app.use("/home", mainRouter);
