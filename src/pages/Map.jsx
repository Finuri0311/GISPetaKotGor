import React from "react";

import MapView from "../components/maps/MapView";
import Navbar from "../components/Navbar";
import geojsonData from "../datas/statics/map-data.json";

const Map = () => {
  return (
    <div className="map">
      <Navbar />
      <MapView geojsonData={geojsonData} />
    </div>
  );
};

export default Map;
