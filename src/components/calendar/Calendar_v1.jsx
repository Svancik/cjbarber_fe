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

  const [date, setDate] = useState(dayjs().add(2, "days"));
  const [selectedTime, setSelectedTime] = useState(null);

  useEffect(() => {
    // Check if the initial date is in disabledDates
    if (shouldDisableDate(disabledDates)(date)) {
      // If yes, add 1 day to the date
      console.log("disabledDate: ", disabledDates, " | ", date);
      setDate(date.add(1, "day"));
    }
  }, [date, disabledDates]);

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

  console.log("kalendar", date.$d.toLocaleDateString());

  const shouldDisableDate = (disabledDates) => (day) => {
    // Implement your logic to check if the day should be disabled
    return disabledDates.some((disabledDate) =>
      dayjs(disabledDate, "MM/DD/YYYY").isSame(day, {
        dateFormat: "MM/DD/YYYY",
      })
    );
  };
  const disabledDates = ["02/27/2024", "02/28/2024", "02/29/2024"]; // Example array of disabled dates

  const minDate = dayjs().add(2, "days");
  const formattedMinDate = minDate.format("MM/DD/YYYY");
  useEffect(() => {
    setSelectedDateTime(`${date.$d.toLocaleDateString()} ${time}:00`);
  }, [time, date]);
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
              inputFormat="MM/DD/YYYY"
              fixedWeekNumber={6}
              shouldDisableDate={shouldDisableDate(disabledDates)}
              views={["day", "month"]}
              date={date}
              defaultValue={minDate}
              minDate={minDate}
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

  // const isTimeBlocked = (selectedTime) => {
  //   // Check if the selected date and time are in the JSON data
  //   // Return true if booked, false if available
  //   // You need to replace this logic with your actual JSON data comparison
  //   return bookedDates.some((appointment) => {
  //     return (
  //       dayjs(appointment.date).isSame(date, "day") &&
  //       appointment.time === selectedTime
  //     );
  //   });
  // };
  // const isDateBlocked = (dateToCheck) => {
  //   // Check if all time blocks are blocked for the selected date
  //   return times.every((time) =>
  //     isTimeBlockedForDate(dateToCheck, time.timeBlock)
  //   );
  // };
  // const renderDisabledDay = (date) => {
  //   return (
  //     <div className="disabledDay">
  //       <span>{date.format("D")}</span>
  //     </div>
  //   );
  // };
  // const isTimeBlockedForDate = (dateToCheck, timeToCheck) => {
  //   return bookedDates.some((appointment) => {
  //     return (
  //       dayjs(appointment.date).isSame(dateToCheck, "day") &&
  //       appointment.time === timeToCheck
  //     );
  //   });
  // };
