import React from "react";
import { services } from "../../barberData";
import "./services.css";
import { ServiceItem } from "../serviceItem/ServiceItem";

export const Services = () => {
  return (
    <div className="servicesWrapper" id="sluzby">
      <div className="services">
        <h1 className="sluzby">SLUŽBY A CENY</h1>
        <hr className="headerUnderline" />
        {services.map((service) => (
          <ServiceItem service={service} />
        ))}
      </div>
    </div>
  );
};
