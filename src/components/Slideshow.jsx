import { useState } from "react";
import chevronLeft from "../assets/chevron_left.png";
import chevronRight from "../assets/chevron_right.png";
import "../styles/Slideshow.css";

function Slider({ imageSlider }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  

  const nextSlide = () => {
      setCurrentIndex(currentIndex === imageSlider.length - 1 ? 0 : currentIndex + 1);
  }; // Si l'image actuelle est la dernière, on revient à la première, sinon on passe à l'image suivante

  const prevSlide = () => {
      setCurrentIndex(currentIndex === 0 ? imageSlider.length - 1 : currentIndex - 1);
  }; // Si l'image actuelle est la première, on revient à la dernière, sinon on passe à l'image précédente

  if (!Array.isArray(imageSlider) || imageSlider.length <= 0) {
      return null;
  } // Si le tableau est vide, on ne retourne rien.

  return (
      <div className="slideShow">
          <div className="slideShow_img">
              <img key={imageSlider.id} className="slideShow_img" src={imageSlider[currentIndex]} alt={imageSlider.title}/>
          </div>
          <div className="slideShow_number">
              {currentIndex + 1}/{imageSlider.length}
          </div>
          <div>
              {imageSlider.length > 1 && ( // Si il y a plus d'une image, on affiche les chevrons
                  <>
                  <img className="chevron_left" src={chevronLeft} onClick={prevSlide} alt="chevron_left"/>
                  <img className="chevron_right" src={chevronRight} onClick={nextSlide} alt="chevron_right"/>
                  </>
              )}
          </div>
      </div>
  )
}

export default Slider;
