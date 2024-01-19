// Importation des modules nécessaires depuis React et react-router-dom
import React from "react";
import { useParams } from "react-router-dom";

// Importation des données logements depuis le fichier JSON
import jsonData from "../../data/logements.json";

// Importation des composants Collapse, Notfound et Carousel
import Collapse from "../../components/Collapse/Collapse.jsx";
import Notfound from "../NotFound/NotFound.jsx";
import Carousel from "../../components/Carousel/Carousel.jsx";

// Création d'un tableau représentant les étoiles pour les évaluations
const arrayStars = Array.from({ length: 5 }, (_, index) => index + 1);

// Définition de la fonction principale du composant Services
export default function Services() {
  // Utilisation du hook useParams pour récupérer les paramètres de l'URL
  const { id } = useParams();

  // Recherche de l'élément correspondant à l'ID dans les données JSON
  const selectedItem = jsonData.find((item) => item.id === id);

  // Vérification si l'élément est introuvable, affichage du composant Notfound
  if (!selectedItem) {
    return <Notfound />;
  }

  // Affichage du composant Services avec les détails du logement
  return (
    <div className="card-service">
      <Carousel className="caroussel" pictures={selectedItem.pictures} />
      <div className="info-container">
        <div className="top-info">
          <h2 className="title-service">{selectedItem.title}</h2>
          <div className="location-service">
            <p className="location-text">{selectedItem.location}</p>
          </div>
          <ul className="tags-list">
            {/* Utilisation de .map pour itérer sur les tags et les afficher */}
            {selectedItem.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>

        {/* Informations sur l'hôte et la notation du logement */}
        <div className="side-info">
          <div className="host-info">
            <p className="host-name">{selectedItem.host.name}</p>
            <img
              className="host-picture"
              src={selectedItem.host.picture}
              alt={selectedItem.host.name}
            />
          </div>

          {/* Affichage de la notation en étoiles du logement */}
          <div className="rating-info">
            <div className="stars">
              {/* Utilisation d'un tableau pour afficher les étoiles */}
              {arrayStars.map((element) => {
                // Conversion de la notation en nombre entier
                const starRating = parseInt(selectedItem.rating);
                // Affichage d'une étoile pleine ou vide en fonction de la notation
                return (
                  <span
                    key={"star-" + element}
                    className={element <= starRating ? "span1" : "span2"}
                  >
                    ★
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Utilisation du composant Collapse */}
      <div className="collapse-box">
        <div className="collapse-description">
          <Collapse title="Description">
            <p className="description-text">{selectedItem.description}</p>
          </Collapse>
        </div>
        <div className="collapse-equipements">
          <Collapse title="Équipements">
            <ul className="equipments-list">
              {/* Utilisation de .map pour itérer sur les équipements et les afficher */}
              {selectedItem.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>
    </div>
  );
}
