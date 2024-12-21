import React from "react";
import "./Style.css"; // Import du fichier CSS

const HomePage = () => {
  return (
    <div className="homepage">
      <nav className="navbar">
        <div className="brand">CHRONOLITHE.</div>
        <ul>
          <li>Shop</li>
          <li>A Propos</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
