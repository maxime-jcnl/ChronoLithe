import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./Style.css";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Erreur lors du chargement des produits :", error));
  }, []);

  return (
    <div>
      <Navbar />
      <h1 className="title-collection">Notre Collection</h1>

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
                <div
                  key={index}
                  className="color-square"
                  style={{ backgroundColor: color }}
                >
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
