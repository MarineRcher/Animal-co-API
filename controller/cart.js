const { Cart } = require('./../models/cart');

exports.postCart = async (req, res) => {
  const { userId, productId, quantity } = req.body;

  try {
    // Create a new cart document
    const cart = new Cart({
      userId,
      productId,
      quantity
    });

    // Save the document to the database
    cart.save()
      .then((result) => {
        res.status(201).json({
          message: "Product added successfully",
          product: result,
        });
      });
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

// Patch the cart quantity for a specific product
exports.patchCart = async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;

  try {
    // Update the quantity of the product in the cart
    await Cart.findByIdAndUpdate(id, { quantity });

    res.json({ success: true, message: 'Product quantity updated successfully' });
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

// Delete a product from the cart
exports.deleteCart = async (req, res) => {
  const { id } = req.params;

  try {
    // Remove the product from the cart
    await Cart.findByIdAndDelete(id);

    res.json({ success: true, message: 'Product removed from cart successfully' });
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

// Get all cart items by userId
exports.getAllCartByUserId = async (req, res) => {
  const { userId } = req.params;

  try {
    // Get all cart items by userId
    const cartItems = await Cart.find({ userId });

    res.json({ success: true, cartItems });
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
};
