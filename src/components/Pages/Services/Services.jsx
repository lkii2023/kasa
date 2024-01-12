import React from "react";
import { useParams } from "react-router-dom";
import jsonData from "../../../data/logements.json";
import Collapse from "../../Layout/Collapse/Collapse.jsx";
import Notfound from "../NotFound/NotFound.jsx";
import Carousel from "../../Layout/Caroussel/Carrousel.jsx";

const arrayStars = Array.from({ length: 5 }, (_, index) => index + 1);

export default function Services() {
  const { id } = useParams();
  const selectedItem = jsonData.find((item) => item.id === id);

  if (!selectedItem) {
    return <Notfound />;
  }

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
            {selectedItem.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>

        <div className="side-info">
          <div className="host-info">
            <p className="host-name">{selectedItem.host.name}</p>
            <img
              className="host-picture"
              src={selectedItem.host.picture}
              alt={selectedItem.host.name}
            />
          </div>
          <div className="rating-info">
            <div className="stars">
              {arrayStars.map((element) => {
                const nbreEtoiles = parseInt(selectedItem.rating);
                return (
                  <span
                    key={"star-" + element}
                    className={element <= nbreEtoiles ? "span1" : "span2"}
                  >
                    ★
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="collapse-box">
        <div className="collapse-description">
          <Collapse title="Description">
            <p className="description-text">{selectedItem.description}</p>
          </Collapse>
        </div>

        <div className="collapse-equipements">
          <Collapse title="Équipements">
            <ul className="equipments-list">
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
