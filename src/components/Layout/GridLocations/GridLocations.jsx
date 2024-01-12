import React from "react";
import { Link } from "react-router-dom";
import jsonData from "../../../data/logements.json";

export default function GridLocations() {
  const visibleCards = jsonData.slice();

  return (
    <div className="grid-container">
      {visibleCards.map((item, index) => (
        <Link key={index} to={`/services/${item.id}`} className="card-link">
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
