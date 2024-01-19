// Importation des modules nécessaires depuis React
import React, { useState, useEffect } from "react";

// Importation des flèches gauche et droite depuis les assets
import ArrowLeft from "../../assets/Arrow-left.png";
import ArrowRight from "../../assets/Arrow-right.png";

// Définition du composant fonctionnel "Carousel" prenant en paramètre une liste d'images 'pictures'
function Carousel({ pictures }) {
  // État local 'index' pour suivre la position actuelle dans la liste d'images
  const [index, setIndex] = useState(0);
  // Nombre total d'images dans la liste
  const totalPictures = pictures.length - 1;

  // Effet useEffect pour précharger les images afin d'assurer des transitions plus fluides
  useEffect(() => {
    pictures.forEach((picture) => {
      const img = new Image();
      img.src = picture;
    });
  }, [pictures]); // Réexécute l'effet lorsque 'pictures' change

  // Correction de l'index si inférieur à zéro, le ramenant à la fin de la liste
  if (index < 0) setIndex(totalPictures);
  // Correction de l'index si supérieur au nombre total d'images, le ramenant au début de la liste
  if (index > totalPictures) setIndex(0);

  return (
    <div className="carousel">
      <div className="carousel-picture">
        <img
          src={pictures[index]}
          className="carousel-image"
          key={"car-" + index}
          alt={"photo " + index}
        />
      </div>

      {/* Affichage des boutons gauche et droit seulement s'il y a plus d'une image */}
      {totalPictures > 0 && (
        <div>
          {/* Bouton pour passer à l'image précédente */}
          <button onClick={() => setIndex(index - 1)}>
            <img
              src={ArrowLeft}
              className="arrow-left"
              alt={"Flèche gauche pour changer la photo." + index}
            />
          </button>

          {/* Bouton pour passer à l'image suivante */}
          <button onClick={() => setIndex(index + 1)}>
            <img
              src={ArrowRight}
              className="arrow-right"
              alt={"Flèche droite pour changer la photo." + index}
            />
          </button>
        </div>
      )}

      {/* Affichage du compteur d'images seulement s'il y a plus d'une image */}
      {totalPictures > 0 && (
        <div className="counter">
          <p className="image-counter">
            {/* Affichage du numéro de l'image actuelle et le total d'images */}
            {index + 1}/{totalPictures + 1}
          </p>
        </div>
      )}
    </div>
  );
}

export default Carousel;
