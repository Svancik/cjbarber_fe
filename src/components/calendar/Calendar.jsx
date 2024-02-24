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
import { bookedDates } from "../../calenderData";

/*TODO:

A) Rozdělit kroky 1 - 3 na jednotlivé divy sekce a proklikávat se krok dopředu => dozadu - OnePage.
B) Nastavit zablokované termíny pokud se nachází v bookedDates
C) Nastavit odeslání mailem
D) Nastavit zobrazení kalendáře
E) Dodělat view na mobil

*/

export const Calendar = ({ setSelectedDateTime, serviceTimeTotal }) => {
  const [time, setTime] = useState(null);

  const [date, setDate] = useState(dayjs().add(2, "days"));
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedTime, setSelectedTime] = useState(null);

  // Opening hours for reservations
  const openingHours = { start: 10, end: 21 };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Function to generate time slots dynamically
  const generateTimeSlots = () => {
    const timeSlots = [];
    const startTime = openingHours.start * 60; // Convert to minutes
    const endTime = openingHours.end * 60; // Convert to minutes
    const interval = serviceTimeTotal; // Desired service length in minutes
    for (
      let currentTime = startTime;
      currentTime < endTime;
      currentTime += interval
    ) {
      const time = new Date(
        0,
        0,
        0,
        Math.floor(currentTime / 60),
        currentTime % 60
      );
      const formattedTime = time.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      // console.log("selectedDate:", selectedDate.format("MM/DD/YYYY"));
      // console.log("formatedTime:", formattedTime);
      // Check if the time slot is not booked
      const isBooked = bookedDates.some(
        (bookedDate) =>
          (bookedDate.date === selectedDate.format("MM/DD/YYYY") &&
            dayjs(bookedDate.startTime, "HH:mm").isSame(time)) ||
          (dayjs(bookedDate.startTime, "HH:mm").isBefore(time) &&
            dayjs(bookedDate.finishTime, "HH:mm").isAfter(time))
      );

      //console.log("isBooked:", isBooked);
      if (!isBooked) {
        timeSlots.push({ timeBlock: formattedTime, isBlocked: false });
      } else {
        console.log(
          "*************** ******** *** JE BLOKOVÁNO *************** ********"
        );
        timeSlots.push({ timeBlock: formattedTime, isBlocked: true });
      }
    }

    return timeSlots;
  };

  useEffect(() => {
    // Check if the initial date is in disabledDates
    if (shouldDisableDate(disabledDates)(date)) {
      // If yes, add 1 day to the date
      setDate(date.add(1, "day"));
    }
  }, [date, disabledDates]);

  // Update time slots when selectedDate or serviceLength changes
  useEffect(() => {
    const times = generateTimeSlots();
    // Set the generated time slots to your state or perform any other action
    console.log(times);
  }, [selectedDate]);

  //console.log("kalendar", dayjs(date).format("MM/DD/YYYY"));

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

  return (
    <div className="reservationBlock">
      <h2 className="reservationTitle"> Zvolte termín </h2>

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
              value={selectedDate}
              onChange={handleDateChange}
              showDaysOutsideCurrentMonth
            />
          </LocalizationProvider>
        </div>

        <div>
          <div className="timeBlocks">
            {generateTimeSlots().map((time) => (
              <div
                className={`timeBlock ${time.isBlocked ? "blocked" : ""}`}
                key={time.timeBlock}
                onClick={() => setSelectedTime(time.timeBlock)}
              >
                <span>{time.timeBlock}</span>
              </div>
            ))}
          </div>
          {/* Display selected time or perform further actions */}
          {selectedTime && <p>Selected Time: {selectedTime}</p>}
        </div>
      </div>
    </div>
  );
};
