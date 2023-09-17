import { useState } from "react";
import chevronLeft from "../assets/chevron_left.png";
import chevronRight from "../assets/chevron_right.png";
import "../styles/Slideshow.css";

export default function Slider({imageSlider}) {
    const [currentIndex, setCurrentIndex] = useState(0); //je définis l'index du premier slide à 0
    
    const nextSlide = () => {
        setCurrentIndex(currentIndex + 1);
        if (currentIndex === imageSlider.length - 1) setCurrentIndex(0); // on repart au premier slide quand on arrive au dernier
    };
    const prevSlide = () => {
        setCurrentIndex(currentIndex - 1)
        if (currentIndex === 0) setCurrentIndex(imageSlider.length - 1); // on repart au dernier slide quand on est au premier
    };


  return (
    <div className="slideShow">
      <div className="slideShow_img">
        <img src={imageSlider[currentIndex]} alt="image_lodging" />
      </div>
      <div>
        <div>
          <img
            src={chevronLeft}
            alt="chevron_left"
            className={imageSlider.length <= 1 ? "chevron_none" : "chevron_left"}
            onClick={prevSlide}
          />
        </div>
        <div className="slideShow_number">
          {currentIndex + 1}/{imageSlider.length}
        </div>
        <div>
          <img
            src={chevronRight}
            alt="chevron_right"
            className={imageSlider.length <= 1 ? "chevron_none" : "chevron_right"}
            onClick={nextSlide}
          />
        </div>
      </div>
    </div>
  );
}

