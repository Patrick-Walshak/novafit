require("dotenv").config();
const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/userRoute");
const productRoutes = require("./routes/productRoute");
const { protect } = require("./middleware/authMiddleware");


const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, my server is working!");
});

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

app.get("/api/protected-test", protect, (req, res) => {
  res.json({ message: "You accessed a protected route!", user: req.user });
});

module.exports = app;