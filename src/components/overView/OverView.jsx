import React from "react";
import "./overView.css";

export const OverView = ({
  selectedDateTime,
  servicesTotalPrice,
  servicesTotalTime,
  selectedAdditionalServices,
  selectedService,
}) => {
  return (
    <div className="reservationBlock">
      <div className="overViewWrapper">
        <h1>Přehled</h1>
        <div>
          <span>Vybraná služba: {selectedService.nazev}</span>
        </div>
        <div>
          <span>
            Délka návštěvy: {selectedService.delkaTrvani + servicesTotalTime}
          </span>
        </div>
        <div>
          <span>Celková cena: {selectedService.cena + servicesTotalPrice}</span>
        </div>
        <div>
          <span>Zvolený termín: {selectedDateTime}</span>
        </div>
      </div>
    </div>
  );
};
