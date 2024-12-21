import React from "react";
import "./Style.css";
import Carousel from "./Carousel";
import Navbar from "./Navbar";

const HomePage = () => {
  const images = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
  ];

  return (
    <div className="homepage">
      <Navbar />
      <Carousel images={images} />
    </div>
  );
};

export default HomePage;
