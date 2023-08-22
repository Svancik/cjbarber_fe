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
        <Link to="/#uvod">
          <span>Úvod</span>
        </Link>
        <Link to="/#sluzby">
          <span>Služby</span>
        </Link>
        <Link to="/#kdojsem">
        <span>Kdo jsem</span>
        </Link>
        <Link to="/#galerie">
        <span>Galerie</span>
        </Link>
        <Link to="/#kontakt">
        <span>Kontakt</span>
        </Link>
      </div>
    </div>
  );
};
