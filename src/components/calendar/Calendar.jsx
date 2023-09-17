import React from "react";
import "./calendar.css";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useState } from "react";
import { csCZ } from "@mui/x-date-pickers";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

import "dayjs/locale/cs";

import dayjs from "dayjs";

export const Calendar = () => {
  const [value, setValue] = useState(dayjs("2023-09-18"));
  console.log(value);
  return (
    <div className="calendarWrapper reservationBlock">
      <h2 className="reservationTitle">2) Zvolte požadované datum </h2>
      <div className="datePicker">
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          adapterLocale="cs"
          localeText={
            csCZ.components.MuiLocalizationProvider.defaultProps.localeText
          }
        >
          <StaticDatePicker orientation="portrait" openTo="day" value={value} />
        </LocalizationProvider>
      </div>

      {/* <div className="dateCalendar">
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          adapterLocale="cs"
          localeText={
            csCZ.components.MuiLocalizationProvider.defaultProps.localeText
          }
        >
          <DateCalendar
            value={value}
            onChange={(newValue) => setValue(newValue)}
            sx={{
              "& .MuiDataGrid-root": {
                height: "600px",
                width: "600px",
              },
            }}
          />
        </LocalizationProvider>
      </div> */}
    </div>
  );
};
