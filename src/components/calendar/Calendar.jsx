import React from "react";
import "./calendar.css";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useState } from "react";
import { csCZ } from "@mui/x-date-pickers";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { times } from "../../barberData";

import "dayjs/locale/cs";

import dayjs from "dayjs";

export const Calendar = () => {
  const [value, setValue] = useState(dayjs());
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
            <StaticDatePicker
              orientation="portrait"
              openTo="day"
              value={value}
            />
          </LocalizationProvider>
        </div>
        <div className="timeBlocks">
          {times.map((time) => (
            <div className="timeBlock">
              <span>{time.timeBlock}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
