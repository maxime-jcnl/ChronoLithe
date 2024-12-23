const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config(); // Pour gérer les variables d'environnement

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

// Routes
const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/products");

app.use("/auth", authRoutes); // Routes pour l'authentification
app.use("/products", productRoutes); // Routes pour les produits

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
