// ************ Require's ************
const express = require("express");
const path = require("path");
const multer = require("multer");
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const folder = path.join(__dirname, "../../public/images/products");
    // if(file.mimetype!="image/jpeg"){
    //     return cb(new Error("Solo se aceptan imagenes en jpg"))
    // }
    cb(null, folder);
  },
  filename: (req, file, cb) => {
    const imageName = Date.now() + path.extname(file.originalname);
    cb(null, imageName);
  },
});

const upload = multer({ storage });

// ************ Controller Require ************
const productsController = require("../controllers/productsController");

/*** GET ALL PRODUCTS ***/
router.get("/", productsController.index);

/*** CREATE ONE PRODUCT ***/
router.get("/create/", productsController.create);
router.post("/", upload.single("image"), productsController.store);

/*** GET ONE PRODUCT ***/
router.get("/:id", productsController.detail);

/*** EDIT ONE PRODUCT ***/
router.get("/:id/edit", productsController.edit);
router.put("/:id", upload.single("image"), productsController.update);

/*** DELETE ONE PRODUCT ***/
router.delete("/:id", productsController.destroy);

module.exports = router;
