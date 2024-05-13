import React from "react";

import { MapContainer, TileLayer, GeoJSON} from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import L from "leaflet";

const MapView = ({geoIrigasiLine, geoSawahArea, geoAdminsArea, geoAdminsLine}) =>{
    return (
        <div className="mapContainer">
            <MapContainer 
                center={[0.5605645791559364, 123.05812205598738]}
                zoom={13}
                style={{height: "100vh"}}
            >
                <TileLayer 
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyrigth'>OpenStreetMap</a> Contributors"

                />

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

                { geoAdminsLine && (
                        <GeoJSON 
                            data={geoAdminsLine.features}
                            style={
                                {
                                    color: "orange",
                                }
                            }
                        />
                    )
                }


            </MapContainer>

        </div>
    )
}

export default MapView;

