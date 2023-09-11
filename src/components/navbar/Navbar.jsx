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
        <Link className="link" to="/#uvod">
          <span>Úvod</span>
        </Link>
        <Link className="link" to="/#sluzby">
          <span>Služby</span>
        </Link>
        <Link className="link" to="/#kdojsem">
          <span>Kdo jsem</span>
        </Link>
        <Link className="link" to="/#galerie">
          <span>Galerie</span>
        </Link>
        <Link className="link" to="/#kontakt">
          <span>Kontakt</span>
        </Link>
      </div>
    </div>
  );
};
