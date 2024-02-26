import React, { useEffect, useState } from "react";
import "./reservation.css";
import { Navbar } from "./../../components/navbar/Navbar";
import { Booking } from "../../components/booking/Booking";
import { Footer } from "./../../components/footer/Footer";
import { Calendar } from "../../components/calendar/Calendar";
import { OverView } from "./../../components/overView/OverView";
import { ClientInfo } from "../../components/clientInfo/ClientInfo";
import dayjs from "dayjs";
import { calendarData } from "../../calenderData";
import { GoldButton } from "../../components/button/Buttons";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export const Reservation = () => {
  const [selectedService, setSelectedService] = useState(false);
  const [step, setStep] = useState();
  const [selectedAdditionalServices, setSelectedAdditionalServices] = useState(
    []
  );
  const [selectedDateTime, setSelectedDateTime] = useState(0);
  const [servicesTotalPrice, setServicesTotalPrice] = useState(0);
  const [additionalServicesTimeTotal, setAdditionalServicesTimeTotal] =
    useState(0);
  const [clientInfo, setClientInfo] = useState("");
  const [date, setDate] = useState(dayjs()); // Assuming dayjs is used for date handling
  const [selectedTime, setSelectedTime] = useState(null);
  const [serviceTimeTotal, setServiceTimeTotal] = useState(15);

  useEffect(() => {
    setStep(1);
    setAdditionalServicesTimeTotal(0);
    setSelectedAdditionalServices([]);
    setServicesTotalPrice(0);
    setServiceTimeTotal(0);
  }, []);

  useEffect(() => {
    setServiceTimeTotal(
      selectedService.delkaTrvani + additionalServicesTimeTotal
    );
  }, [selectedService, additionalServicesTimeTotal]);

  return (
    <div className="reservationWrapper">
      <Navbar />

      {step > 1 && (
        <ArrowBackIosNewIcon
          style={{ height: "120px", width: "120px" }}
          className="arrowBackIcon"
          onClick={() => {
            setStep(step - 1);
            setAdditionalServicesTimeTotal(0);
          }}
          data-aos="fade-right"
          data-aos-duration="1200"
        />
      )}

      {step === 1 && (
        <div className="reservationSection">
          <div
            className="reservationFrame"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <Booking
              setSelectedService={setSelectedService}
              selectedService={selectedService}
              setServicesTotalPrice={setServicesTotalPrice}
              selectedAdditionalServices={selectedAdditionalServices}
              setSelectedAdditionalServices={setSelectedAdditionalServices}
              setAdditionalServicesTimeTotal={setAdditionalServicesTimeTotal}
            />
            {selectedService && (
              <GoldButton
                text="Pokračovat k rezervaci termínu"
                setStep={setStep}
                step={step}
              />
            )}
          </div>
        </div>
      )}
      {step === 2 && (
        <div className="reservationSection">
          <div
            className="reservationFrame"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <Calendar
              setSelectedDateTime={setSelectedDateTime}
              selectedAdditionalServices={selectedAdditionalServices}
              serviceTimeTotal={serviceTimeTotal}
            />
            <OverView
              selectedDateTime={selectedDateTime}
              servicesTotalPrice={servicesTotalPrice}
              serviceTimeTotal={serviceTimeTotal}
              selectedAdditionalServices={selectedAdditionalServices}
              selectedService={selectedService}
            />
          </div>
        </div>
      )}
      <ClientInfo setClientInfo={setClientInfo} cientInfo={clientInfo} />

      <Footer />
    </div>
  );
};
