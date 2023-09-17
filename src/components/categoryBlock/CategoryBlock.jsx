import React from "react";
import "./categoryBlock.css";

export const CategoryBlock = ({ serviceCategory }) => {
  return <div className="categoryBlock">{serviceCategory.header}</div>;
};
