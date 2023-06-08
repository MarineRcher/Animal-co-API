const mongoose = require("mongoose");
const { stringify } = require("querystring");
const Schema = mongoose.Schema;

// Un schema determine la structure du document en base
const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("products", productSchema);
