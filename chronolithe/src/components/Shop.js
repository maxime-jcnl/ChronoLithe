import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Style.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [activeImage, setActiveImage] = useState({}); // État pour gérer l'image active

  useEffect(() => {
    // Charger les produits depuis le fichier JSON
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) =>
        console.error("Erreur lors du chargement des produits :", error)
      );
  }, []);

  return (
    <div className="shop">
      <nav className="navbar">
        <div className="brand">
          <Link to="/">CHRONOLITHE.</Link>
        </div>
        <ul>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/about">À Propos</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <h1 className="shop-title">Notre Collection</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.images[0]} // Utilise seulement la première image
              alt={product.name}
              className="product-image"
            />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">{product.price.toFixed(2)} €</p>
            <div className="product-colors">
  {product.colors.map((color, index) => (
    <div key={index} className="color-square" style={{ backgroundColor: color }}>
      <div></div>
    </div>
  ))}
</div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
