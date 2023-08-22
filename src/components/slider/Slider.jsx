import React from "react";
import { useState } from "react";
import "./slider.css";
import { reality } from "./../../data";
import { SliderInfo } from "../sliderInfo/SliderInfo";

//TODO: DOKONČIT SLIDER responsivní zobrazení

export const Slider = () => {
  // eslint-disable-next-line
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideReality = reality.filter((realita) => realita.popis);

  console.log(slideReality);

  return (
    <div className="slider" id="uvod">
      <SliderInfo />
      <div
        className="container"
        style={{
          width: `${slideReality.length * 100}vw`,
          transform: `translateX(-${currentSlide * 100}vw)`,
        }}
      >
        {slideReality.map((slideRealita) => (
          <img src={require("../../media/slider.jpg")} alt="" />
        ))}
      </div>
    </div>
  );
};
