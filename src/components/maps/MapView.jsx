import React from "react";

import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { map } from "leaflet";

const MapView = ({ geojsonData }) => {
  return (
    <div className="mapContainer">
      <MapContainer center={[0.5605645791559364, 123.05812205598738]} zoom={13} style={{ height: "100vh" }}>
        <TileLayer url="https://api.maptiler.com/maps/satellite/256/{z}/{x}/{y}.jpg?key=UwNIQPKbRyGGA9A86zvC" attribution="&copy; <a href='https://www.openstreetmap.org/copyrigth'>OpenStreetMap</a> Contributors" />
        <GeoJSON data={geojsonData.features} />
      </MapContainer>
    </div>
  );
};

export default MapView;
