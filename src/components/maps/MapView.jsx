import React, { useState } from "react";
import { MapContainer, TileLayer, GeoJSON, LayersControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import L from "leaflet";
import dataLayers from "../../datas/statics/data-layer.json";

const MapView = ({geoIrigasiLine, geoSawahArea, geoAdminsArea, geoAdminsLine}) =>{
    return (
        <div className="mapContainer">
            <MapContainer 
                center={[0.5205645791559364, 123.05812205598738]}
                zoom={13}
                style={{height: "100vh"}}
            >
            <LayersControl position="topright">
                {dataLayers.map((layer) => (
                    <LayersControl.BaseLayer key={layer.name} checked={layer.name === "OpenStreetMap"} name={layer.name}>
                        <TileLayer url={layer.url} attribution={layer.attribution} />
                    </LayersControl.BaseLayer>
                ))}
                <LayersControl.Overlay name="Jaringan Irigasi Lomaya Alale Pilohayanga">
                    {
                        geoIrigasiLine && (
                            <GeoJSON 
                                data={geoIrigasiLine.features}
                                style={
                                    {
                                        color: "blue"
                                    }
                                }
                            />
                        )
                    }
                </LayersControl.Overlay>
                
                <LayersControl.Overlay name="Area Sawah Kota Gorontalo">
                    { geoSawahArea && (
                            <GeoJSON 
                                data={geoSawahArea.features}
                                style={
                                    {
                                        color: "green",
                                        fillColor: "lightgreen"
                                    }
                                }
                            />
                        )
                    }
                </LayersControl.Overlay>

                <LayersControl.Overlay name="Batas Administrasi Kota Gorontalo">
                    { geoAdminsArea && (
                            <GeoJSON 
                                data={geoAdminsArea.features}
                                style={
                                    {
                                        color: "red",
                                        fillColor: "pink"
                                    }
                                }
                            />
                        )
                    }

                    {/* { geoAdminsLine && (
                            <GeoJSON 
                                data={geoAdminsLine.features}
                                style={
                                    {
                                        color: "orange",
                                    }
                                }
                            />
                        )
                    } */}
                </LayersControl.Overlay>



            </LayersControl>

            </MapContainer>

        </div>
    )
}

export default MapView;

