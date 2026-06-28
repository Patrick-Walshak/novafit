const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./userModel");

const Order = sequelize.define("Order", {
  total: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("pending", "paid", "shipped", "delivered", "cancelled"),
    defaultValue: "pending",
  },
});

User.hasMany(Order);
Order.belongsTo(User);

module.exports = Order;