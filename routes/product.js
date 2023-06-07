const express = require ('express');

const productController = require('../controller/product.js')

const router = express.Router();

router.get("/products", productController.getProducts);

router.post("/product", productController.createProduct)

module.exports = router;
