import React, { useState, useEffect } from "react";
import "./Style.css";

const Carousel = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Charger dynamiquement la liste des images depuis le fichier JSON
  useEffect(() => {
    fetch("/images/images.json")
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) =>
        console.error("Erreur lors du chargement des images :", error)
      );
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      {images.length > 0 ? (
        <>
          <div className="carousel-images">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index}`}
                className={`carousel-image ${
                  index === currentIndex ? "active" : ""
                }`}
              />
            ))}
          </div>
          {images.length > 1 && (
            <>
              <button className="carousel-button left" onClick={goToPrevious}>
                &#10094;
              </button>
              <button className="carousel-button right" onClick={goToNext}>
                &#10095;
              </button>
            </>
          )}
          <div className="carousel-dots">
            {images.map((_, index) => {
              console.log("Dot rendu pour l'index :", index); // Vérifie les dots dans la console
              return (
                <span
                  key={index}
                  className={`dot ${index === currentIndex ? "active" : ""}`}
                  onClick={() => goToImage(index)}
                ></span>
              );
            })}
          </div>
        </>
      ) : (
        <p>Pas d'images disponibles.</p>
      )}
    </div>
  );
};

export default Carousel;
