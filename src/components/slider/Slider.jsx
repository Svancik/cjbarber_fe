import React from "react";
import { useState } from "react";
import "./slider.css";
import { SliderInfo } from "../sliderInfo/SliderInfo";

//TODO: DOKONČIT SLIDER responsivní zobrazení

export const Slider = () => {
  // eslint-disable-next-line

  return (
    <div
      className="slider"
      id="uvod"
      data-aos="fade-right"
      data-aos-duration="2000"
    >
      <SliderInfo />
      <div className="container">
        <img src={require("../../media/samBG.jpeg")} alt="" />
      </div>
    </div>
  );
};

