import React, { useState } from "react";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./Carousel.css";

function Carousel() {
  function handleNext() {
    setCurrentIndex(function(prevIndex) {
      return (prevIndex + 1) % images.length;
    });
  }

  function handlePrev() {
    setCurrentIndex(function(prevIndex) {
      return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
    });
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const { title, img, subtitle } = images[currentIndex];

  return (
    <div className="carousel-container">
      <div className="arrow left-arrow" onClick={handlePrev}>
        <ArrowBackIosIcon />
      </div>
      <div className="carousel-content">
        <h1 className="title">{title}</h1>
        <img src={img} alt={title} className="image" />
        <h3 className="subtitle">{subtitle}</h3>
      </div>
      <div className="arrow right-arrow" onClick={handleNext}>
        <ArrowForwardIosIcon />
      </div>
    </div>
  );
}

export default Carousel;
