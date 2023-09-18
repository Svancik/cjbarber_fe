import React from "react";
import { services, servicesCategories } from "../../barberData";
import { CategoryBlock } from "./../categoryBlock/CategoryBlock";
import { useState } from "react";
import "./booking.css";
export const Booking = ({ setSelectedService, selectedService }) => {
  /*
        TODO:         
        
        Načerapt inspiraci z booking stránky.

        Krok 1 - vybrat: Vousy, Vlasy, Kombinace, Extravagant
        Krok 2 - vybrat: Přídavky (masáž, atd.)
        Krok 3 - sečíst délku procedůr a cenu (když zvolím kombinaci - zamezit možnost volby vlasy nebo vousy)
        Krok 4 - rezervovat termín a přidat čas a datum do databáze unavailable date
        *** Zvážit strap.io databáze ***


        */

  const [selectedCategory, setSelectedCategory] = useState();
  console.log(selectedCategory);
  const additionalServices = services.filter(
    (service) => service.categoryId === "5"
  );

  return (
    <div className="bookingWrapper reservationBlock">
      <h2 className="reservationTitle">1) Zvolte požadovanou službu </h2>

      <div className="mainSelect">
        <div className="categorySelectWrapper">
          {servicesCategories.map(
            (category) =>
              !category.isAdditional && (
                <CategoryBlock
                  serviceCategory={category}
                  setSelectedCategory={setSelectedCategory}
                />
              )
          )}
        </div>

        <div className="serviceSelectWrapper">
          {selectedCategory && (
            <>
              <img
                className="icon"
                src={require(`../../media/vector/${selectedCategory.icon}.png`)}
                alt=""
              />
              <h1>{selectedCategory.header}</h1>
            </>
          )}
        </div>
      </div>

      <div className="additionalSelect">
        <h3>Přídavky:</h3>
        <ul>
          {additionalServices.map((additional) => (
            <>
              <label>
                <input type="checkbox" />
                {additional.nazev}
              </label>
            </>
          ))}
        </ul>
      </div>
      {selectedCategory && (
        <span>Zvolená kategorie: {selectedCategory.header}</span>
      )}

      <br />
      <span>Zvolený servis: {selectedService}</span>
    </div>
  );
};
