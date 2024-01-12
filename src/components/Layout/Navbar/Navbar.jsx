import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/logo.svg";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();

  useEffect(() => {
    // Mettez à jour l'état local activeLink lorsque l'emplacement change
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <nav>
      <div className="nav-bar">
        <div id="logo">
          <img src={logo} className="App-logo-header" alt="logo" />
        </div>
        <div id="link">
          <Link
            className={`Nav-link ${activeLink === "/" ? "active" : ""}`}
            to="/"
          >
            Accueil
          </Link>
          <Link
            className={`Nav-link ${activeLink === "/About" ? "active" : ""}`}
            to="/About"
          >
            À propos
          </Link>
        </div>
      </div>
    </nav>
  );
}
