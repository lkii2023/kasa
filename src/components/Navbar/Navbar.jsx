import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";

// Définition du composant fonctionnel "Navbar"
export default function Navbar() {
  // État local pour suivre le lien actif dans la barre de navigation
  const [activeLink, setActiveLink] = useState("");

  // Utilisation du hook useLocation pour obtenir l'emplacement actuel
  const location = useLocation();

  // Utilisation du hook useEffect pour mettre à jour l'état local 'activeLink' lorsque l'emplacement change
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <nav>
      <div className="nav-bar">
        <div id="logo">
          <img src={logo} className="App-logo-header" alt="logo" />
        </div>
        <div id="link">
          {/* Lien vers la page d'accueil avec classe active si c'est la page actuelle */}
          <Link
            className={`Nav-link ${activeLink === "/" ? "active" : ""}`}
            to="/"
          >
            Accueil
          </Link>

          {/* Lien vers la page "A propos" avec classe active si c'est la page actuelle */}
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
