import React from "react";
import "./serviceItem.css";

export const ServiceItem = ({ service }) => {
  return (
    <div className="block">
      <div className="serviceWrapper">
        <div className={service.id % 2 === 1 ? "img rightContent" : "img"}>
          <img
            className="icon"
            src={require(`../../media/vector/${service.icon}.png`)}
            alt=""
          />{" "}
        </div>
        <div className="desc">
          <h5>
            {service.header} ({service.time}min)
          </h5>
          <span>{service.text}</span>
          <div
            className={
              service.id % 2 === 1
                ? "servicePrice rightContent"
                : "servicePrice"
            }
          >
            {" "}
            <span>Cena: {service.cena},–</span>
          </div>
        </div>
      </div>
      {service.id !== 5 && (
        <hr
          className={service.id % 2 === 1 ? "thinHR rightContent" : "thinHR"}
        />
      )}
    </div>
  );
};
