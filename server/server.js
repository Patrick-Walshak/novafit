const app = require("./app");
const sequelize = require("./config/db");
const User = require("./model/userModel");
const Product = require("./model/productModel");
const CartItem = require("./model/cartModel");
const cartRoutes = require("./routes/cartRoute");
app.use("/api/cart", cartRoutes);
const orderRoutes = require("./routes/orderRoute");
app.use("/api/orders", orderRoutes);

const PORT = process.env.PORT || 5000;

sequelize
  .authenticate()
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.error("Database connection failed:", err));

sequelize
  .sync()
  .then(() => console.log("Models synced with database"))
  .catch((err) => console.error("Sync failed:", err));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});