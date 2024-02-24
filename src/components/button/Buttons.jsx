import React from "react";
import "./buttons.css";

export const GoldButton = ({ text, setStep, step }) => {
  return (
    <button
      className="goldButton"
      data-aos="fade-right"
      data-aos-duration="900"
      onClick={() => setStep(step + 1)}
    >
      {text}
    </button>
  );
};
