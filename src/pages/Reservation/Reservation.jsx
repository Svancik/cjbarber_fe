import React, { useState } from "react";
import "./reservation.css";
import { Navbar } from "./../../components/navbar/Navbar";
import { Booking } from "../../components/booking/Booking";
import { Footer } from "./../../components/footer/Footer";
import { Calendar } from "../../components/calendar/Calendar";

export const Reservation = () => {
  const [selectedService, setSelectedService] = useState("");
  const [additionalTotal, setAdditionalTotal] = useState(0);

  return (
    <div className="reservationWrapper">
      <Navbar />
      <Booking
        setSelectedService={setSelectedService}
        selectedService={selectedService}
        setAdditionalTotal={setAdditionalTotal}
        additionalTotal={additionalTotal}
      />
      {selectedService.id && (
        <>
          <Calendar />
        </>
      )}
      {console.log(
        "vybrana sluzba: ",
        selectedService.delkaTrvani + additionalTotal
      )}
      <Footer />
    </div>
  );
};
