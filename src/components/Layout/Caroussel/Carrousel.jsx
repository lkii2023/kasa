import React, { useState } from "react";
import ArrowLeft from "../../../assets/Arrow-left.png";
import ArrowRight from "../../../assets/Arrow-right.png";

function Carousel({ pictures }) {
  const [index, setIndex] = useState(0); // variable de compteur, défini au départ sur 0
  const totalPictures = pictures.length - 1; // nombre max d'images

  if (index < 0) setIndex(totalPictures); // si inférieur à zéro, défini le nombre d'images max
  if (index > totalPictures) setIndex(0); // si supérieur au max d'images, alors met à zéro

  return (
    <div className="carousel">
      <div className="caroussel-picture">
        <img
          src={pictures[index]}
          className="classImage"
          key={"car-" + index}
          alt={"photo " + index}
        />
      </div>

      {totalPictures > 0 && (
        <div>
          <button onClick={() => setIndex(index - 1)}>
            {index}
            <img
              src={ArrowLeft}
              className="arrow-left"
              alt={"Left arrow to change the photo." + index}
            />
          </button>
          <button onClick={() => setIndex(index + 1)}>
            {index}
            <img
              src={ArrowRight}
              className="arrow-right"
              alt={"Right arrow to change the photo." + index}
            />
          </button>
        </div>
      )}

      {totalPictures > 0 && (
        <div className="div-compteur">
          <p className="compteurImages">
            {index + 1}/{totalPictures + 1}
          </p>
        </div>
      )}
    </div>
  );
}

export default Carousel;
