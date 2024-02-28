import React from "react";
import "./calendar.css";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useState } from "react";
import { csCZ } from "@mui/x-date-pickers";
import { times } from "../../barberData";
import "dayjs/locale/cs"; // Import Czech locale
import localizedFormat from "dayjs/plugin/localizedFormat";
import dayjs from "dayjs";
import { useEffect } from "react";

/*TODO:

A) Rozdělit kroky 1 - 3 na jednotlivé divy sekce a proklikávat se krok dopředu => dozadu - OnePage.
B) Nastavit zablokované termíny pokud se nachází v bookedDates
C) Nastavit odeslání mailem
D) Nastavit zobrazení kalendáře
E) Dodělat view na mobil

*/
dayjs.extend(localizedFormat);
dayjs.locale("cs"); // Use Czech locale globally

const openingHours = "10:00";
const closingHours = "21:00";

const bookedDates = [
  {
    id: 1,
    date: "02/28/2024",
    startTime: "10:00",
    finishTime: "20:30",
    clientName: "Jane Smith",
    selectedService: "Follow-up",
    additionalServices: ["ServiceC"],
  },
];

const convertTimeToMinutes = (time) => {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};

const convertMinutesToTime = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;
};

const getTimeBlocks = (date, timeBlockLength) => {
  // Convert the dayjs object to a string in the "MM/DD/YYYY" format for comparison
  if (!date || !date.format) {
    console.error("Date is undefined or not a dayjs object.");
    return [];
  }
  const formattedSelectedDate = date.format("MM/DD/YYYY");
  const opening = convertTimeToMinutes(openingHours);
  const closing = convertTimeToMinutes(closingHours);
  const blocks = [];

  for (
    let time = opening;
    time + timeBlockLength <= closing;
    time += timeBlockLength
  ) {
    const endTime = time + timeBlockLength;
    if (endTime > closing) break;

    const formattedStartTime = convertMinutesToTime(time);
    const formattedEndTime = convertMinutesToTime(endTime);

    const isBooked = bookedDates.some((booking) => {
      // Compare formattedSelectedDate with booking.date directly
      if (booking.date !== formattedSelectedDate) return false;

      const bookingStart = convertTimeToMinutes(booking.startTime);
      const bookingEnd = convertTimeToMinutes(booking.finishTime);

      // Check if the time block is within the booked period
      return time < bookingEnd && endTime > bookingStart;
    });

    if (!isBooked) {
      blocks.push(`${formattedStartTime}`);
    }
  }
  return blocks;
};

// Function to check if there are available time blocks for a service time total
const hasAvailableTimeBlocks = (date, serviceTimeTotal) => {
  const formattedDate = date.format("MM/DD/YYYY");
  const opening = convertTimeToMinutes(openingHours);
  const closing = convertTimeToMinutes(closingHours);
  let available = false;

  bookedDates.forEach((booking) => {
    if (booking.date === formattedDate) {
      const bookingStart = convertTimeToMinutes(booking.startTime);
      const bookingEnd = convertTimeToMinutes(booking.finishTime);
      if (
        bookingStart - opening >= serviceTimeTotal ||
        closing - bookingEnd >= serviceTimeTotal
      ) {
        available = true;
      }
    }
  });

  // If there are no bookings for the date, the entire day is available
  if (!bookedDates.some((booking) => booking.date === formattedDate)) {
    available = true;
  }

  return available;
};

// Function to find the next available date based on service time total
const findNextAvailableDate = (startDate, serviceTimeTotal) => {
  let date = dayjs(startDate);
  while (!hasAvailableTimeBlocks(date, serviceTimeTotal)) {
    date = date.add(1, "day");
  }
  return date;
};

export const Calendar = ({ setSelectedDateTime, serviceTimeTotal }) => {
  const [date, setDate] = useState(dayjs());
  const [selectedDate, setSelectedDate] = useState(
    findNextAvailableDate(dayjs(date), serviceTimeTotal)
  );
  const [availableTimeBlocks, setAvailableTimeBlocks] = useState([]);
  const minDate = findNextAvailableDate(dayjs(date), serviceTimeTotal);

  // const [minDate, setMinDate] = useState(
  //   findNextAvailableDate(dayjs(date), serviceTimeTotal)
  // );
  // const currentDate = dayjs();
  useEffect(() => {
    // Check if the date is disabled, directly passing the date to be checked
    if (shouldDisableDate(date)) {
      // If the date is disabled, move to the next day
      setDate(date.add(1, "day"));
    }
  }, [date]);

  // useEffect(() => {
  //   const calculatedMinDate = findNextAvailableDate(dayjs(), serviceTimeTotal); // Use the current date or a specific start date
  //   setMinDate(calculatedMinDate); // Assuming you have a state [minDate, setMinDate] to hold this
  // }, [serviceTimeTotal]);

  useEffect(() => {
    // Ensure selectedDate is always a dayjs object
    if (selectedDate && selectedDate.format) {
      const newAvailableTimeBlocks = getTimeBlocks(
        selectedDate,
        serviceTimeTotal
      );
      setAvailableTimeBlocks(newAvailableTimeBlocks);
    }
  }, [selectedDate, serviceTimeTotal]);

  const handleDateChange = (newDate) => {
    setSelectedDate(dayjs(newDate)); // This should ensure 'selectedDate' is always a dayjs object
  };

  const handleTimeBlockClick = (timeBlock) => {
    // Implement what happens when a time block is clicked
    console.log("Time block clicked:", timeBlock);
    // For example, setting the selected time (you might need to adjust this based on your app's needs)
    setSelectedDateTime(timeBlock);
  };
  const shouldDisableDate = (date) => {
    const dayjsDate = dayjs(date);

    const isSundayOrMonday = dayjsDate.day() === 0 || dayjsDate.day() === 1;
    const isDisabledDate = disabledDates.some((disabledDate) =>
      dayjsDate.isSame(dayjs(disabledDate, "MM/DD/YYYY"), "day")
    );

    return isSundayOrMonday || isDisabledDate;
  };

  // Your disabled dates array
  const disabledDates = ["03/27/2024", "04/28/2024", "03/29/2024"];

  return (
    <div className="reservationBlock">
      <h2 className="reservationTitle">
        {" "}
        Zvolený datum: {selectedDate.format("DD/MM/YYYY")}
      </h2>

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
              shouldDisableDate={shouldDisableDate}
              views={["day", "month"]}
              date={date}
              minDate={minDate}
              disableHighlightToday
              value={selectedDate}
              onChange={handleDateChange}
              showDaysOutsideCurrentMonth
            />
          </LocalizationProvider>
        </div>
        <div className="timeBlocks">
          {availableTimeBlocks.length > 0 ? (
            availableTimeBlocks.map((block, index) => (
              <div
                key={index}
                className="timeBlock"
                onClick={() => handleTimeBlockClick(block)}
              >
                {block}
              </div>
            ))
          ) : (
            <p>No available time slots for this date.</p>
          )}
        </div>
      </div>
    </div>
  );
};
