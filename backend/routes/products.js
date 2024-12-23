const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

// Obtenir tous les produits
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la récupération des produits." });
  }
});

module.exports = router;
