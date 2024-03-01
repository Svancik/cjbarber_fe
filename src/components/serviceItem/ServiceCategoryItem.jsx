import React from "react";
import "./serviceCategoryItem.css";
import { services } from "../../barberData";

export const ServiceCategoryItem = ({ serviceCategory }) => {
  let servicesFiltered = services.filter(
    (service) => service.categoryId == serviceCategory.id
  );
  return (
    <div
      className="block"
      data-aos={serviceCategory.id % 2 === 0 ? "fade-right" : "fade-left"}
      data-aos-duration="1800"
    >
      <div className="serviceWrapper">
        <div className={serviceCategory.id % 2 === 1 ? "img " : "img"}>
          <img
            className="icon"
            src={require(`../../media/vector/${serviceCategory.icon}.png`)}
            alt=""
          />{" "}
        </div>

        <div className="desc">
          <h5>{serviceCategory.header}</h5>
          <ul>
            {servicesFiltered.map((service) => (
              <>
                {" "}
                <li key={service.id}>
                  <span className="serviceName">{service.nazev}</span>{" "}
                  <span className="servicePrice">{service.cena}</span>
                </li>{" "}
              </>
            ))}
          </ul>
        </div>
      </div>
      {serviceCategory.id !== 5 && (
        <hr
          className={
            serviceCategory.id % 2 === 1 ? "thinHR rightContent" : "thinHR"
          }
        />
      )}
    </div>
  );
};
