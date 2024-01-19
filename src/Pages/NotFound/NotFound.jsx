import React from "react";
import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <div className="not-found">
      <span className="code">404</span>
      <h4 className="not-found-text">
        Oups! La page que vous demandez n'existe pas.
      </h4>
      <p className="link-home">
        <Link to="/">Retourner sur la page d’accueil</Link>
      </p>
    </div>
  );
}
