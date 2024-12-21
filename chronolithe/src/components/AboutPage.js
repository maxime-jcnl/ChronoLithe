import React from "react";
import Navbar from "./Navbar";
import "./Style.css";

const AboutPage = () => {
  return (
    <div className="about-page">
      <Navbar />
      <div className="about-content">
        <h1>À Propos de ChronoLithe</h1>
        <p>
          Bienvenue chez <strong>ChronoLithe</strong>, une marque française dédiée à la 
          création d'horloges uniques et modernes. Chaque pièce est conçue avec 
          passion, imprimée en 3D, et finie à la main pour garantir une qualité 
          exceptionnelle et un design inégalé.
        </p>
        <p>
          Nous croyons en l'importance de l'artisanat local et de la durabilité. 
          En combinant technologie et savoir-faire traditionnel, nous offrons 
          des produits à la fois innovants et respectueux de l'environnement.
        </p>
        <p>
          Merci de soutenir notre vision et de faire partie de notre aventure.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
