import React, { useEffect } from "react";
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


        DODĚLAT SLIDER => ZVOLÍM SLUŽBU POKRAČUJU NA DALŠÍ KROK

        Volba termínu - vytvořit div časové bloky (10:00 - 11:00) dle nezabookovaného místa v databázi a dle otevíracích hodin a dle délky


        */

  const [selectedCategory, setSelectedCategory] = useState({
    id: 1,
    icon: "vlasyStrih",
    header: "Vlasy",
  });

  const [additionalTotal, setAdditionalTotal] = useState(0);
  console.log("Cena celkem: ", additionalTotal + selectedService.cena);

  const servicesOfSelectedCategory = services.filter(
    (service) => service.categoryId === selectedCategory.id
  );

  console.log(servicesOfSelectedCategory);

  const additionalServices = services.filter(
    (service) => service.categoryId === 5
  );

  const [checkedState, setCheckedState] = useState(
    new Array(additionalServices.length).fill(false)
  );

  const handleCheckboxOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + additionalServices[index].cena;
        }
        return sum;
      },
      0
    );

    setAdditionalTotal(totalPrice);
  };

  useEffect(() => {
    setSelectedService("s");
  }, [selectedCategory]);

  return (
    <div className="bookingWrapper reservationBlock">
      <h2 className="reservationTitle">Zvolte službu </h2>

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
                {selectedCategory.header}{" "}
                {/* <hr className="headerUnderline" /> */}
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
                    className="formControlLabel"
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </div>
        </div>
      </div>

      <div className="additionalSelect">
        <h3>Zvolte extra služby (volitelné):</h3>
        <div className="checkBoxGrid">
          {additionalServices.map((additional, index) => (
            <>
              <label className="additionalService">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxOnChange(index)}
                  checked={checkedState[index]}
                />
                <span>{`${additional.nazev} - ${additional.cena},–`}</span>
              </label>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
