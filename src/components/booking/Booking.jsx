import React from "react";
import { services, servicesCategories } from "../../barberData";
import { CategoryBlock } from "./../categoryBlock/CategoryBlock";
import { useState } from "react";
import "./booking.css";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
export const Booking = ({ setSelectedService, selectedService }) => {
  /*
        TODO:         
        
        Načerapt inspiraci z booking stránky.


        Krok 3 - sečíst délku procedůr a cenu (když zvolím kombinaci - zamezit možnost volby vlasy nebo vousy)
        Krok 4 - rezervovat termín a přidat čas a datum do databáze unavailable date
        *** Zvážit strap.io databáze ***


        DODĚLAT USEFFECT => se změnou kategorie setSerlectedService("")
        DODĚLAT UKLÁDÁNÍ PŘÍDAVKŮ DO STATE - Pole vybraných přídavků

        */

  const [selectedCategory, setSelectedCategory] = useState({
    id: 1,
    icon: "vlasyStrih",
    header: "Vlasy",
  });

  const servicesOfSelectedCategory = services.filter(
    (service) => service.categoryId == selectedCategory.id
  );

  console.log(servicesOfSelectedCategory);

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
                  selectedCategoryID={selectedCategory.id}
                />
              )
          )}
        </div>

        <div className="serviceSelectWrapper">
          <div className="serviceSelectHeader">
            <div className="categoryHeader">
              <img
                className="icon"
                src={require(`../../media/vector/${selectedCategory.icon}.png`)}
                alt=""
              />
              <h1>
                {selectedCategory.header} <hr className="headerUnderline" />{" "}
              </h1>
            </div>
          </div>

          <div className="serviceSelectBody">
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
              >
                {servicesOfSelectedCategory.map((service) => (
                  <FormControlLabel
                    value={service.id}
                    control={<Radio />}
                    label={`${service.nazev} - ${service.cena},–`}
                    onClick={() => setSelectedService(service)}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </div>
        </div>
      </div>

      <div className="additionalSelect">
        <h3>Přídavky:</h3>
        <ul>
          {additionalServices.map((additional) => (
            <>
              <label className="additionalService">
                <input type="checkbox" />
                <span>{`${additional.nazev} - ${additional.cena},–`}</span>
              </label>
            </>
          ))}
        </ul>
      </div>
      {selectedCategory && (
        <span>Zvolená kategorie: {selectedCategory.header}</span>
      )}

      <br />
      <span>Zvolený servis: {selectedService.nazev}</span>
    </div>
  );
};
