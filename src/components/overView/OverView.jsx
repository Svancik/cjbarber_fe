import React from "react";
import "./overView.css";

export const OverView = ({
  serviceTimeTotal,
  servicesTotalPrice,
  serviceTime,
  selectedAdditionalServices,
  selectedService,
}) => {
  return (
    <div className="reservationBlock">
      <div className="overViewWrapper">
        <div>
          <span>
            Vybraná služba: <b>{selectedService.nazev}</b>
          </span>
        </div>
        {selectedAdditionalServices && (
          <div>
            <span>
              Extra služby:{" "}
              {selectedAdditionalServices.map((s, index) => (
                <React.Fragment key={s.nazev}>
                  <b>{s.nazev}</b>
                  {index < selectedAdditionalServices.length - 1 && ", "}
                </React.Fragment>
              ))}
            </span>
          </div>
        )}
        <div>
          <span>
            Délka návštěvy:{" "}
            {/* <b> {selectedService.delkaTrvani + serviceTime}min </b> */}
            <b>{serviceTimeTotal}</b>
          </span>
        </div>
        <div>
          <span>
            Celková cena: <b>{selectedService.cena + servicesTotalPrice}Kč</b>
          </span>
        </div>
        {/* <div>
          {selectedDateTime && (
            <span>
              Zvolený termín: <b>{selectedDateTime}</b>
            </span>
          )}
        </div> */}
      </div>
    </div>
  );
};
