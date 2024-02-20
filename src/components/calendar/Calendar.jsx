import React from "react";
import "./calendar.css";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useState } from "react";
import { csCZ } from "@mui/x-date-pickers";
import { times } from "../../barberData";

import dayjs from "dayjs";
import { useEffect } from "react";
import { calendarData } from "../../calenderData";

//

export const Calendar = ({ setSelectedDateTime }) => {
  // const [date, setDate] = useState(dayjs());
  const [time, setTime] = useState(null);

  const [date, setDate] = useState(dayjs()); // Assuming dayjs is used for date handling
  const [selectedTime, setSelectedTime] = useState(null);

  const isTimeBlocked = (selectedTime) => {
    // Check if the selected date and time are in the JSON data
    // Return true if booked, false if available
    // You need to replace this logic with your actual JSON data comparison
    return calendarData.some((appointment) => {
      return (
        dayjs(appointment.date).isSame(date, "day") &&
        appointment.time === selectedTime
      );
    });
  };

  const isDateBlocked = (dateToCheck) => {
    // Check if all time blocks are blocked for the selected date
    return times.every((time) =>
      isTimeBlockedForDate(dateToCheck, time.timeBlock)
    );
  };

  const isTimeBlockedForDate = (dateToCheck, timeToCheck) => {
    return calendarData.some((appointment) => {
      return (
        dayjs(appointment.date).isSame(dateToCheck, "day") &&
        appointment.time === timeToCheck
      );
    });
  };

  const renderDisabledDay = (date) => {
    return (
      <div className="disabledDay">
        <span>{date.format("D")}</span>
      </div>
    );
  };
  
  useEffect(() => {
    setSelectedDateTime(`${date.$d.toLocaleDateString()} ${time}:00`);
  }, [time, date]);

  console.log("kalendar", date.$d.toLocaleDateString());
  return (
    <div className="reservationBlock">
      <h2 className="reservationTitle">2) Zvolte termín </h2>

      <div className="calendarWrapper">
        <div className="datePicker">
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            adapterLocale="cs"
            localeText={
              csCZ.components.MuiLocalizationProvider.defaultProps.localeText
            }
          >
            <DateCalendar
              label="Date"
              minDate={dayjs()}
              inputFormat="MM/DD/YYYY"
              date={date}
              views={["day", "month"]}
              onChange={(newValue) => setDate(newValue)}
              showDaysOutsideCurrentMonth
            />
          </LocalizationProvider>
        </div>

        <div className="timeBlocks">
          {times.map((time) => (
            <div
              className={`timeBlock ${
                isTimeBlocked(time.timeBlock) ? "blocked" : ""
              }`}
              key={time.timeBlock}
              onClick={() => setSelectedTime(time.timeBlock)}
            >
              <span>{time.timeBlock}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
