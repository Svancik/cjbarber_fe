import React, { useState } from "react";
import "./reservation.css";
import { Navbar } from "./../../components/navbar/Navbar";
import { Booking } from "../../components/booking/Booking";
import { Footer } from "./../../components/footer/Footer";
import { Calendar } from "../../components/calendar/Calendar";

export const Reservation = () => {
  const [selectedService, setSelectedService] = useState("");

  return (
    <div className="reservationWrapper">
      <Navbar />
      <Booking
        setSelectedService={setSelectedService}
        selectedService={selectedService}
      />
      {/* <Calendar /> */}
      {/* <Footer /> */}
    </div>
  );
};
