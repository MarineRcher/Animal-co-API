const product = require("./../models/product.js");
const products = require("./../models/product.js");
const asyncErrorHandler = require("./../error/asyncErrorHandler.js");

//get all products
exports.getProducts = asyncErrorHandler(async (req, res, next) => {
  const product = await products.find();

  res.status(200).json({
    message: "Products find",
    post: product,
  });
});

//get a product by id

exports.getProductById = asyncErrorHandler(async (req, res, next) => {
  const productid = req.params.id;
  products.findById(productid).then((product) => {
    // verifier si le post est correcte

    //si ok

    res.status(200).json({
      message: "product found",
      post: product,
    });
  });
});

//create a product

exports.createProduct = asyncErrorHandler(async (req, res, next) => {
  const name = req.body.name;
  const price = req.body.price;

  // TODO: ajouter des controles...
  const product = new products({
    name: name,
    price: price,
  });

  product
    .save()

    .then((result) => {
      res.status(201).json({
        message: "Product created successfully",
        product: result,
      });
    });
});
//update product

exports.updateProduct = asyncErrorHandler(async (req, res, next) => {
  const productid = req.params.id;
  const product = await products

    .findByIdAndUpdate(productid, {
      name: req.body.name,
      price: req.body.price,
    })
    .then((product) => {
      res.status(200).json({
        message: "product update",
        post: product,
      });
    });
});

//delete product

exports.deleteProduct = asyncErrorHandler(async (req, res, next) => {
  const productid = req.params.id;
  await products.findByIdAndRemove(productid).then((product) => {
    // verifier si le post est correcte

    //si ok

    res.status(200).json({
      message: "product found",
      post: product,
    });
  });
});
