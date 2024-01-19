// Importation des modules nécessaires depuis React
import React, { useState, useRef, useEffect } from "react";

// Importation du composant ArrowAnimation pour l'animation de la flèche
import ArrowAnimation from "./Arrow/Arrow.jsx";

// Définition du composant fonctionnel "Collapse"
const Collapse = ({ title, children }) => {
  // État local pour gérer la visibilité du contenu et la hauteur de l'élément
  const [isContentVisible, setContentVisible] = useState(false);
  const [heightEl, setHeightEl] = useState();
  const refHeight = useRef();

  // Effet pour mettre à jour la hauteur de l'élément en fonction de la visibilité du contenu
  useEffect(() => {
    if (isContentVisible) {
      setHeightEl(`${refHeight.current.scrollHeight}px`);
    } else {
      setHeightEl("0px");
    }
  }, [isContentVisible]);

  // Fonction pour basculer la visibilité du contenu
  const toggleContent = () => {
    setContentVisible(!isContentVisible);
  };

  // Rendu du composant Collapse avec le titre, la flèche d'animation et le contenu
  return (
    <div className={`collapse ${isContentVisible ? "open" : "closed"}`}>
      {/* Bannière avec le titre et la flèche pour basculer le contenu */}
      <div className="banner">
        <h2 className="custom-title">{title}</h2>
        <div className="arrow" onClick={toggleContent}>
          <ArrowAnimation isUp={isContentVisible} />
        </div>
      </div>

      {/* Contenu avec gestion de la hauteur */}
      <div
        ref={refHeight}
        className={`visiblecollapse ${isContentVisible ? "open" : "closed"}`}
        style={{ height: isContentVisible ? `${heightEl}` : "0" }}
      >
        {/* Contenu à l'intérieur du Collapse */}
        {children}
      </div>
    </div>
  );
};

export default Collapse;
