import React from "react";
import "./calendar.css";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useState } from "react";
import { csCZ } from "@mui/x-date-pickers";
import { times } from "../../barberData";

import "dayjs/locale/cs";

import dayjs from "dayjs";
import { useEffect } from "react";

//

export const Calendar = ({ setSelectedDateTime }) => {
  const [date, setDate] = useState(dayjs());
  const [time, setTime] = useState();

  useEffect(() => {
    setSelectedDateTime(`${date.$d.toLocaleDateString()} ${time}:00`);
  }, [time, date]);

  console.log("kalendar", date.$d.toLocaleDateString());
  return (
    <div className="reservationBlock">
      <h2 className="reservationTitle">Objednejte se na termín </h2>

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
              className="timeBlock"
              key={time.timeBlock}
              onClick={() => setTime(time.timeBlock)}
            >
              <span>{time.timeBlock}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
