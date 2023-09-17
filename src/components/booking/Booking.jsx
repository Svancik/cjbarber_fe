import React from "react";
import { services, servicesCategories } from "../../barberData";
import "./booking.css";
import { SelectService } from "../selectService/SelectService";

export const Booking = () => {
  /*
        TODO:         
        
        Načerapt inspiraci z booking stránky.

        Krok 1 - vybrat: Vousy, Vlasy, Kombinace
        Krok 2 - vybrat: Přídavky (masáž, atd.)
        Krok 3 - sečíst délku procedůr a cenu (když zvolím kombinaci - zamezit možnost volby vlasy nebo vousy)
        Krok 4 - rezervovat termín a přidat čas a datum do databáze unavailable date
        *** Zvážit strap.io databáze ***


        */

  return (
    <div className="bookingWrapper reservationBlock">
      <h2 className="reservationTitle">1) Zvolte požadovanou službu </h2>
      <SelectService
        listOfServices={services}
        listOfServicesCategories={servicesCategories}
      />
    </div>
  );
};
