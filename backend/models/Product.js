const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  images: [String],
  description: String,
  category: String,
  colors: [String],
  availability: { type: String, default: "En stock" },
});

module.exports = mongoose.model("Product", productSchema);
