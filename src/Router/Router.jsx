// Importation du module React et des composants de routage de react-router-dom
import React from "react";
import { Routes, Route } from "react-router-dom";

// Importation des pages à afficher pour chaque route
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import About from "../pages/About/About";
import NotFound from "../pages/NotFound/NotFound";

// Définition du composant fonctionnel "Router"
export default function Router() {
  return (
    <Routes>
      {/* Route pour la page d'accueil */}
      <Route path="/" element={<Home />} />

      {/* Routes pour la page des services, avec ou sans ID spécifique */}
      <Route path="/Services" element={<Services />} />
      <Route path="/Services/:id" element={<Services />} />

      {/* Route pour la page "About" */}
      <Route path="/About" element={<About />} />

      {/* Route par défaut pour afficher la page NotFound si aucune correspondance */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
