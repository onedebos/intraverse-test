import React from "react";
import image1 from "../assets/images/img-1.png";
import image2 from "../assets/images/img-2.png";
import image3 from "../assets/images/img-3.png";
import image4 from "../assets/images/img-4.png";
import image5 from "../assets/images/img-5.png";
import image6 from "../assets/images/img-6.png";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Carousel = () => {
  return (
    <div className="max-w-md flex justify-center items-center m-auto">
      <AliceCarousel
        autoPlay
        autoPlayInterval={2000}
        buttonsDisabled
        fadeOutAnimation
      >
        <img alt="laptop" src={image1} />
        <img alt="generator" src={image2} />
        <img alt="washing-machine" src={image3} />
        <img alt="video-game-console" src={image4} />
        <img alt="air-conditioner" src={image5} />
        <img alt="iphone" src={image6} />
      </AliceCarousel>
    </div>
  );
};

export default Carousel;
