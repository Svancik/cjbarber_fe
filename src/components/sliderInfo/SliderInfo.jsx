import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import "./sliderInfo.css";

export const SliderInfo = () => {
  return (
    <div className="sliderInfo">
      <div className="top">
        <div className="row">
          <h1>CJ´s BARBERSHOP</h1>
          <hr />
        </div>
      </div>
      <div className="bottom">
        <div className="row">
          <LocationOnIcon className="mui" />
          <span>Orlova 135, Roudnice nad Labem</span>
        </div>

        <div className="row">
          <LocalPhoneIcon className="mui" />
          <span>777 606 447</span>
        </div>

        <div className="row">
          <hr />
          <table className="openingHours">
            <tr>
              <td className="day">Pondělí: </td>
              <td className="hours">zavřeno</td>
            </tr>

            <tr>
              <td className="day">Úterý: </td>
              <td className="hours">10:00 - 22:00</td>
            </tr>

            <tr>
              <td className="day">Středa: </td>
              <td className="hours">10:00 - 22:00</td>
            </tr>

            <tr>
              <td className="day">Čtvrtek: </td>
              <td className="hours">10:00 - 22:00</td>
            </tr>

            <tr>
              <td className="day">Pátek: </td>
              <td className="hours">10:00 - 22:00</td>
            </tr>

            <tr>
              <td className="day">Sobota: </td>
              <td className="hours">10:00 - 22:00</td>
            </tr>

            <tr>
              <td className="day">Neděle: </td>
              <td className="hours">zavřeno</td>
            </tr>
          </table>
        </div>

        <button className="reservation">Online Rezervace</button>
      </div>
    </div>
  );
};
