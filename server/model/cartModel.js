const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./userModel");
const Product = require("./productModel");

const CartItem = sequelize.define("CartItem", {
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
});

// Relationships:
// A User can have many CartItems
User.hasMany(CartItem);
CartItem.belongsTo(User);

// A Product can appear in many CartItems
Product.hasMany(CartItem);
CartItem.belongsTo(Product);

module.exports = CartItem;