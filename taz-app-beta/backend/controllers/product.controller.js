const Product = require('../models/product.model');

// Get all products

const getAllProducts = async (req, res) => {

  try {

    const products = await Product.find();

    res.json(products);

  } catch (err) {

    res.status(500).json({ error: err.message });

  }

};

// Add a new product

const addProduct = async (req, res) => {
  const { name, description, price } = req.body;
  const newProduct = new Product({ name, description, price });

  try {
    await newProduct.save();
    res.json('Product added!');
  } catch (err) {
    res.status(400).json({ error: err.message });
  }

};

// Implement update and delete operations as needed
module.exports = { getAllProducts, addProduct };