import React from "react";
import "./Style.css";
import Carousel from "./Carousel";

const HomePage = () => {
  const images = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
  ];

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
      <Carousel images={images} />
    </div>
  );
};

export default HomePage;
