const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Order = require("./orderModel");
const Product = require("./productModel");

const OrderItem = sequelize.define("OrderItem", {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false, // price at time of order, in case product price changes later
  },
});

Order.hasMany(OrderItem);
OrderItem.belongsTo(Order);

Product.hasMany(OrderItem);
OrderItem.belongsTo(Product);

module.exports = OrderItem;