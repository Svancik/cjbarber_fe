import React from "react";
import { CategoryBlock } from "../categoryBlock/CategoryBlock";
import "./selectService.css";

export const SelectService = ({ listOfServices, listOfServicesCategories }) => {
  return (
    <div className="selectServiceWrapper">
      {listOfServicesCategories.map((category) => (
        <CategoryBlock serviceCategory={category} />
      ))}
    </div>
  );
};
