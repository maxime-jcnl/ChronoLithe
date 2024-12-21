const fs = require("fs");
const path = require("path");

// Chemin vers le dossier des images
const imagesDir = path.join(__dirname, "public/images");

// Chemin où le fichier images.json sera écrit
const outputFile = path.join(imagesDir, "images.json");

// Fonction pour lister les fichiers d'images
const generateImagesJson = () => {
  // Extensions des fichiers d'images supportées
  const supportedExtensions = [".jpg", ".jpeg", ".png", ".svg"];

  // Lire les fichiers du dossier images
  const files = fs.readdirSync(imagesDir).filter((file) =>
    supportedExtensions.includes(path.extname(file).toLowerCase())
  );

  // Générer les chemins relatifs pour chaque fichier
  const images = files.map((file) => `/images/${file}`);

  // Écrire le fichier images.json
  fs.writeFileSync(outputFile, JSON.stringify(images, null, 2));
  console.log("Fichier images.json généré :", images);
};

// Exécuter la fonction
generateImagesJson();
