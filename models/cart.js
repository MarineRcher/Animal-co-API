const mongoose = require('mongoose');

// Schéma pour la collection "cart"
const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
});

// Modèle pour la collection "Cart"
const Cart = mongoose.model('Cart', cartSchema);

module.exports = {
  Cart
};
