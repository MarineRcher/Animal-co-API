const express = require("express");

const productController = require("../controller/product.js");

const router = express.Router();

router.get("/products", productController.getProducts);

router.get("/product/:id", productController.getProductById);

router.get(
  "/product/:categoryAnimal/:category",
  productController.getProductByCategories
);

router.post("/product", productController.createProduct);

router.patch("/:id", productController.updateProduct);

router.delete("/:id", productController.deleteProduct);

module.exports = router;
