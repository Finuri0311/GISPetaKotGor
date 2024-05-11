import React from "react";

import MapView from "../components/maps/MapView";
import geojsonData from "../datas/statics/map-data.json";

const Map = () => {
    return (
        <div className="map">
            <MapView geojsonData={geojsonData}/>
        </div>
    )
}

export default Map;