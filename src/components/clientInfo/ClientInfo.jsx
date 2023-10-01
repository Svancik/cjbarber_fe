import React from "react";
import "./clientInfo.css";
import { FormControl } from "@mui/material";
import { PersonIcon } from "@mui/icons-material/Person";

export const ClientInfo = () => {
  return (
    <div className="reservationBlock">
      <h2 className="reservationTitle">3) Zadejte kontaktní údaje </h2>
      <div className="formWrapper">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="">
              Jméno a Přijmení
            </span>
          </div>
          <input type="text" className="form-control" />
          <input type="text" className="form-control" />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              Email
            </span>
          </div>
          <input
            type="email"
            className="form-control"
            placeholder="@"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>

        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">
              Telefonní číslo (+420)
            </span>
          </div>
          <input
            type="number"
            class="form-control"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>
    </div>
  );
};
