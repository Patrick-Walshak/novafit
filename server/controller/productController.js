const Product = require("../model/productModel");

// CREATE
async function createProduct(req, res) {
  try {
    const { name, description, price, stock, category, imageUrl } = req.body;

    if (!name || !description || !price || !category) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    const product = await Product.create({
      name,
      description,
      price,
      stock,
      category,
      imageUrl,
    });

    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", error: err.message });
  }
}

// GET ALL (with optional filters)
async function getProducts(req, res) {
  try {
    const { category, search } = req.query;
    const where = {};

    if (category) where.category = category;
    if (search) {
      const { Op } = require("sequelize");
      where.name = { [Op.like]: `%${search}%` };
    }

    const products = await Product.findAll({ where });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", error: err.message });
  }
}

// GET ONE
async function getProductById(req, res) {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", error: err.message });
  }
}

// UPDATE
async function updateProduct(req, res) {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    await product.update(req.body);
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", error: err.message });
  }
}

// DELETE
async function deleteProduct(req, res) {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    await product.destroy();
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", error: err.message });
  }
}

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};