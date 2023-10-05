import React from "react";
import "./clientInfo.css";
import { FormControl } from "@mui/material";
import { PersonIcon } from "@mui/icons-material/Person";

export const ClientInfo = () => {
  return (
    <div className="reservationBlock">
      <h2 className="reservationTitle">3) Zadejte kontaktní údaje </h2>
      <div className="formWrapper">
        <div className="card">
          <h2>Jméno a příjmení</h2>
          <label className="input">
            <input className="input__field" type="text" placeholder=" " />
          </label>
        </div>

        <div className="card">
          <h2>Email</h2>
          <label className="input">
            <input className="input__field" type="text" placeholder="@" />
          </label>
        </div>

        <div className="card">
          <h2>Telefonní číslo (+420)</h2>
          <label className="input">
            <input className="input__field" type="text" placeholder="@" />
          </label>
        </div>
      </div>
    </div>
  );
};
