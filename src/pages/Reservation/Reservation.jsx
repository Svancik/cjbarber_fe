import React from "react";
import "./reservation.css";
import { Navbar } from "./../../components/navbar/Navbar";
import { Booking } from "../../components/booking/Booking";
import { Footer } from "./../../components/footer/Footer";
import { Calendar } from "../../components/calendar/Calendar";

export const Reservation = () => {
  return (
    <div className="reservationWrapper">
      <Navbar />
      <Calendar />
      <Booking />
      <Footer />
    </div>
  );
};
