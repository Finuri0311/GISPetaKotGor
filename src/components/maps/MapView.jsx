import React, { useState } from "react";
import { MapContainer, TileLayer, GeoJSON, LayersControl } from "react-leaflet";
import dataLayers from "../../datas/statics/data-layer.json";
import "leaflet/dist/leaflet.css";
import L, { map } from "leaflet";

const MapView = ({ geojsonData }) => {
  return (
    <div className="mapContainer">
      <MapContainer center={[0.5605645791559364, 123.05812205598738]} zoom={13} style={{ height: "100vh" }}>
        <LayersControl position="topright">
          {dataLayers.map((layer) => (
            <LayersControl.BaseLayer key={layer.name} checked={layer.name === "OpenStreetMap"} name={layer.name}>
              <TileLayer url={layer.url} attribution={layer.attribution} />
            </LayersControl.BaseLayer>
          ))}
          <LayersControl.Overlay name="Jaringan Irigasi Lomaya Alale Pilohayanga">
            <GeoJSON data={geojsonData.features} />
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
    </div>
  );
};

export default MapView;
