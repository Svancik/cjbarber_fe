import React, { useState } from "react";
import "./reservation.css";
import { Navbar } from "./../../components/navbar/Navbar";
import { Booking } from "../../components/booking/Booking";
import { Footer } from "./../../components/footer/Footer";
import { Calendar } from "../../components/calendar/Calendar";
import { OverView } from "./../../components/overView/OverView";
import { ClientInfo } from "../../components/clientInfo/ClientInfo";

export const Reservation = () => {
  const [selectedService, setSelectedService] = useState(false);
  const [selectedAdditionalServices, setSelectedAdditionalServices] = useState(
    []
  );
  const [selectedDateTime, setSelectedDateTime] = useState("");
  const [servicesTotalPrice, setServicesTotalPrice] = useState(0);
  const [servicesTotalTime, setServicesTotalTime] = useState(0);
  const [clientInfo, setClientInfo] = useState("aa");

  return (
    <div className="reservationWrapper">
      <Navbar />
      <Booking
        setSelectedService={setSelectedService}
        selectedService={selectedService}
        setServicesTotalPrice={setServicesTotalPrice}
        selectedAdditionalServices={selectedAdditionalServices}
        setSelectedAdditionalServices={setSelectedAdditionalServices}
        setServicesTotalTime={setServicesTotalTime}
      />
      {/* {selectedService.id && (
        <>
          <Calendar />
        </>
      )} */}
      <Calendar setSelectedDateTime={setSelectedDateTime} />
      <ClientInfo setClientInfo={setClientInfo} cientInfo={clientInfo} />
      <OverView
        selectedDateTime={selectedDateTime}
        servicesTotalPrice={servicesTotalPrice}
        servicesTotalTime={servicesTotalTime}
        selectedAdditionalServices={selectedAdditionalServices}
        selectedService={selectedService}
      />
      <Footer />
    </div>
  );
};
