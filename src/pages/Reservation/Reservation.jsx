import React, { useEffect, useState } from "react";
import { Navbar } from "./../../components/navbar/Navbar";
import { Booking } from "../../components/booking/Booking";
import { Footer } from "./../../components/footer/Footer";
import { Calendar } from "../../components/calendar/Calendar";
import { OverView } from "./../../components/overView/OverView";
import { ClientInfo } from "../../components/clientInfo/ClientInfo";
import { GoldButton } from "../../components/button/Buttons";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import emailjs from "emailjs-com";

import "./reservation.css";

export const Reservation = () => {
  const [selectedService, setSelectedService] = useState(false);
  const [step, setStep] = useState();
  const [selectedAdditionalServices, setSelectedAdditionalServices] = useState(
    []
  );
  const [servicesTotalPrice, setServicesTotalPrice] = useState(0);
  const [additionalServicesTimeTotal, setAdditionalServicesTimeTotal] =
    useState(0);
  const [clientData, setClientData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });
  const [selectedDateRecord, setSelectedDateRecord] = useState("");
  const [selectedTimeRecord, setSelectedTimeRecord] = useState("");
  const [serviceTimeTotal, setServiceTimeTotal] = useState(15);
  useEffect(() => {
    setStep(1);
    setAdditionalServicesTimeTotal(0);
    setSelectedAdditionalServices([]);
    setServicesTotalPrice(0);
    setServiceTimeTotal(15);
    setSelectedTimeRecord("");
    setClientData({
      fullName: "",
      email: "",
      phone: "",
    });
  }, []);

  useEffect(() => {
    setServiceTimeTotal(
      selectedService.delkaTrvani + additionalServicesTimeTotal
    );
  }, [selectedService, additionalServicesTimeTotal]);

  const sendEmail = () => {
    let additionalServicesString = "";
    if (selectedAdditionalServices && selectedAdditionalServices.length > 0) {
      additionalServicesString = selectedAdditionalServices
        .map((service) => service.nazev)
        .join(", ");
    }

    const templateParams = {
      clientName: clientData.fullName,
      clienPhone: clientData.phone,
      clientEmail: clientData.email,
      service: selectedService.nazev, // Assuming selectedService has a name property
      date: selectedDateRecord.format("DD.MM.YYYY"),
      time: selectedTimeRecord,
      totalPrice: selectedService.cena + servicesTotalPrice,
      duration: serviceTimeTotal,
      additionalServices: additionalServicesString,
    };

    // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_USER_ID' with your actual EmailJS values
    emailjs
      .send(
        "service_g4d9g3i",
        "template_61ft0mg",
        templateParams,
        "wPds4JUSeJ59Rg_xF"
      )
      .then(
        (response) => {
          console.log("Email successfully sent!", response);
          alert("Reservation confirmation email has been sent.");
        },
        (err) => {
          console.error("Failed to send email. Error: ", err);
          alert("Failed to send reservation confirmation email.");
        }
      );
  };
  console.log("phone", clientData.phone);
  //https://www.emailjs.com/ POKRAČOVÁNÍ ZÍTRA

  return (
    <div className="reservationWrapper">
      <Navbar />
      {step > 1 && (
        <ArrowBackIosNewIcon
          style={{ height: "5rem", width: "5rem" }}
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
              setSelectedDateRecord={setSelectedDateRecord}
              setSelectedTimeRecord={setSelectedTimeRecord}
              serviceTimeTotal={serviceTimeTotal}
              setStep={setStep}
            />
          </div>
        </div>
      )}
      {step === 3 && (
        <div className="reservationSection">
          <div
            className="reservationFrame"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <ClientInfo setClientData={setClientData} />
            <OverView
              servicesTotalPrice={servicesTotalPrice}
              serviceTimeTotal={serviceTimeTotal}
              selectedAdditionalServices={selectedAdditionalServices}
              selectedService={selectedService}
              selectedTimeRecord={selectedTimeRecord}
              selectedDateRecord={selectedDateRecord}
            />
            <span className="cancelReservation">
              Zrušte svou rezervaci minimálně 2h před termínem pomocí zavolání,
              či SMS načíslo 777 607 447. V případě že rezervaci nezrušíte,
              budete při další návštěvě platit příplatek 100Kč.
            </span>
            <button
              className="reserveBtn"
              text="Rezervovat termín"
              setStep={setStep}
              onClick={sendEmail}
              step={step}
              disabled={
                !(clientData.fullName && clientData.email && clientData.phone)
              }
            >
              Rezervovat termín
            </button>
          </div>
        </div>
      )}{" "}
      <Footer />
    </div>
  );
};
