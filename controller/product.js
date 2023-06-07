const products = require("./../models/product.js");

exports.getProducts = async (req, res) => {
  const product = await products.find();

  res.status(200).json({
    message: "Products find",
    post: product,
  });
};

exports.createProduct = (req, res) => {
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
    })
    .catch((error) => {
      console.log("error: ", error);
      // envoyer une reponse appropriee
    });
};
