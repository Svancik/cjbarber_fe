import React from "react";
import "./categoryBlock.css";

export const CategoryBlock = ({ serviceCategory, setSelectedCategory }) => {
  return (
    <div
      className="categoryBlock"
      onClick={() => setSelectedCategory(serviceCategory)}
    >
      {serviceCategory.header}
    </div>
  );
};
