import React from "react";
import "./footer.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";

export const Footer = () => {
  return (
    <div className="footerWrapper" id="kontakt">
      <div className="footerRow">
        <LocationOnIcon className="mui" />
        <div className="location">
          <span className="name">CJ´s BARBERSHOP</span>
          <span>Orlova 135, Roudnice nad Labem</span>
        </div>
      </div>

      <div className="footerRow">
        <PhoneCallbackIcon className="mui" />
        <span className="bold">+420 777 606 447</span>
      </div>

      <div className="footerRow">
        <EmailIcon className="mui" />
        <span className="bold">cjs@barbershop.cz</span>
      </div>

      <div className="footerRow">
        <FacebookIcon className="mui" />
        <span className="bold">facebook</span>
      </div>
    </div>
  );
};
