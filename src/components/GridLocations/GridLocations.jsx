// Importation des modules nécessaires depuis React et react-router-dom
import React from "react";
import { Link } from "react-router-dom";

// Importation des données logements depuis le fichier JSON
import jsonData from "../../data/logements.json";

// Définition du composant fonctionnel "GridLocations"
export default function GridLocations() {
  // Copie des données logements pour afficher toutes les cartes
  const visibleCards = jsonData.slice();

  // Rendu du composant avec une grille de cartes liées aux détails des logements
  return (
    <div className="grid-container">
      {/* Utilisation de .map pour itérer sur les données et créer des liens vers les détails de chaque logement */}
      {visibleCards.map((item, index) => (
        <Link key={index} to={`/services/${item.id}`} className="card-link">
          {/* Structure de la carte avec l'image et le titre du logement */}
          <div className="card">
            <img src={item.pictures[0]} alt={item.title} />
            <h3 className="title-card" style={{ textDecoration: "none" }}>
              {item.title}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
