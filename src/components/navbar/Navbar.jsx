import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <img src={require("../../media/logoVector.png")} alt="" />
      </div>
      <div className="right">
        <div className="menuItem">
          <Link className="link" to="/#uvod">
            <span>Úvod</span>
          </Link>
        </div>
        <div className="menuItem">
          <Link className="link" to="/#sluzby">
            <span>Služby</span>
          </Link>
        </div>
        <div className="menuItem">
          <Link className="link" to="/#kdojsem">
            <span>Já</span>
          </Link>
        </div>
        <div className="menuItem">
          <Link className="link" to="/#galerie">
            <span>Galerie</span>
          </Link>
        </div>
        <div className="menuItem">
          <Link className="link" to="/#kontakt">
            <span>Kontakt</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
