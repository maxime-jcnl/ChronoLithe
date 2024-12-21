import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Style.css";
import Navbar from "./Navbar";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Charger les produits depuis le fichier JSON
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("Données chargées :", data); // Vérifie les données ici
        setProducts(data);
      })
      .catch((error) =>
        console.error("Erreur lors du chargement des produits :", error)
      );
  }, []);
  

  return (
    <div className="shop">
      <Navbar />
      <h1 className="shop-title">Notre Collection</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.images[0]}
              alt={product.name}
              className="product-image"
            />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">{product.price.toFixed(2)} €</p>
            <div className="product-colors">
              {product.colors.map((color, index) => (
                <span
                  key={index}
                  className="color-circle"
                  style={{ backgroundColor: color }}
                ></span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
