const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const router = express.Router();

// Inscription
router.post("/signup", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const user = new User({ firstName, lastName, email, password });
    await user.save();
    res.status(201).json({ message: "Utilisateur créé avec succès !" });
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de l'inscription." });
  }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    console.log("Email reçu :", email);
    console.log("Mot de passe reçu :", password);
  
    try {
      const user = await User.findOne({ email });
      if (!user) {
        console.log("Utilisateur non trouvé !");
        return res.status(401).json({ error: "Email ou mot de passe invalide." });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        console.log("Mot de passe incorrect !");
        return res.status(401).json({ error: "Email ou mot de passe invalide." });
      }
  
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
      console.log("Connexion réussie !");
      res.status(200).json({ token, user: { firstName: user.firstName, lastName: user.lastName } });
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
      res.status(500).json({ error: "Erreur lors de la connexion." });
    }
  });
  

module.exports = router;
