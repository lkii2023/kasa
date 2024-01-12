import React from "react";
import GridLocations from "../../Layout/GridLocations/GridLocations";

export default function Home() {
  return (
    <div>
      <div className="home-banner">
        <h1 className="home-title">
          Chez vous, <br className="mobile-break" /> partout et ailleurs
        </h1>
      </div>
      <GridLocations />
    </div>
  );
}
