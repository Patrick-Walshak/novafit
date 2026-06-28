const Order = require("../model/orderModel");
const OrderItem = require("../model/orderItemModel");
const CartItem = require("../model/cartModel");
const Product = require("../model/productModel");

// CHECKOUT - turn cart into an order
async function createOrder(req, res) {
  try {
    const userId = req.user.id;

    const cartItems = await CartItem.findAll({
      where: { UserId: userId },
      include: [{ model: Product }],
    });

    if (cartItems.length === 0) {
      return res.status(400).json({ message: "Your cart is empty" });
    }

    // calculate total
    let total = 0;
    cartItems.forEach((item) => {
      total += item.Product.price * item.quantity;
    });

    // create the order
    const order = await Order.create({ total, UserId: userId });

    // create an OrderItem for each cart item
    for (const item of cartItems) {
      await OrderItem.create({
        OrderId: order.id,
        ProductId: item.ProductId,
        quantity: item.quantity,
        price: item.Product.price,
      });
    }

    // clear the cart now that checkout is done
    await CartItem.destroy({ where: { UserId: userId } });

    res.status(201).json({ message: "Order placed successfully", order });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", error: err.message });
  }
}

// GET MY ORDERS
async function getMyOrders(req, res) {
  try {
    const orders = await Order.findAll({
      where: { UserId: req.user.id },
      include: [{ model: OrderItem, include: [Product] }],
      order: [["createdAt", "DESC"]],
    });

    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", error: err.message });
  }
}

// GET ONE ORDER
async function getOrderById(req, res) {
  try {
    const order = await Order.findByPk(req.params.id, {
      include: [{ model: OrderItem, include: [Product] }],
    });

    if (!order || order.UserId !== req.user.id) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json(order);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", error: err.message });
  }
}

module.exports = { createOrder, getMyOrders, getOrderById };