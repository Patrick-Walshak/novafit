const CartItem = require("../model/cartModel");
const Product = require("../model/productModel");

// ADD TO CART
async function addToCart(req, res) {
  try {
    const { productId, quantity } = req.body;
    const userId = req.user.id;

    if (!productId) {
      return res.status(400).json({ message: "productId is required" });
    }

    // check if this product is already in the user's cart
    let cartItem = await CartItem.findOne({
      where: { UserId: userId, ProductId: productId },
    });

    if (cartItem) {
      // already in cart, just increase the quantity
      cartItem.quantity += quantity || 1;
      await cartItem.save();
    } else {
      cartItem = await CartItem.create({
        UserId: userId,
        ProductId: productId,
        quantity: quantity || 1,
      });
    }

    res.status(201).json(cartItem);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", error: err.message });
  }
}

// GET CART (with product details)
async function getCart(req, res) {
  try {
    const userId = req.user.id;

    const cartItems = await CartItem.findAll({
      where: { UserId: userId },
      include: [{ model: Product }],
    });

    res.json(cartItems);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", error: err.message });
  }
}

// UPDATE QUANTITY
async function updateCartItem(req, res) {
  try {
    const { quantity } = req.body;
    const cartItem = await CartItem.findByPk(req.params.id);

    if (!cartItem || cartItem.UserId !== req.user.id) {
      return res.status(404).json({ message: "Cart item not found" });
    }

    cartItem.quantity = quantity;
    await cartItem.save();

    res.json(cartItem);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", error: err.message });
  }
}

// REMOVE ITEM
async function removeCartItem(req, res) {
  try {
    const cartItem = await CartItem.findByPk(req.params.id);

    if (!cartItem || cartItem.UserId !== req.user.id) {
      return res.status(404).json({ message: "Cart item not found" });
    }

    await cartItem.destroy();
    res.json({ message: "Item removed from cart" });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", error: err.message });
  }
}

module.exports = { addToCart, getCart, updateCartItem, removeCartItem };