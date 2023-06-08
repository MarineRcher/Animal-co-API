const express = require ('express');

const productController = require('../controller/product.js')

const router = express.Router();

router.get("/products", productController.getProducts);

router.get("/:id", productController.getProductById);

router.post("/product", productController.createProduct);

router.patch("/:id", productController.updateProduct);

router.delete("/:id", productController.deleteProduct);

module.exports = router;
