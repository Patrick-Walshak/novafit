const express = require("express");
const {
  addToCart,
  getCart,
  updateCartItem,
  removeCartItem,
} = require("../controller/cartController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.use(protect); // every cart route requires login

router.post("/", addToCart);
router.get("/", getCart);
router.put("/:id", updateCartItem);
router.delete("/:id", removeCartItem);

module.exports = router;