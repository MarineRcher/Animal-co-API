const express = require("express");

const cartController = require("../controller/cart.js");

const router = express.Router();

router.get("/product/:userId", cartController.getAllCartByUserId);

router.post("/product", cartController.postCart);

router.patch("/product/:id", cartController.patchCart);

router.delete("/product/:id", cartController.deleteCart);

module.exports = router;