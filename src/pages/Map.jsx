import React from "react";

import MapView from "../components/maps/MapView";
import Navbar from "../components/Navbar";

import geoIrigasiLine from "../datas/statics/geo-irigasi-kotgor.json";
// import geoAgriSawahArea from "../datas/statics/geo-agrisawah-kotgor.json";
import geoAdminsLineKotGor from "../datas/statics/geo-admins-line-kotgor.json";
import geoAdminsAreaKotGor from "../datas/statics/geo-admins-area-kotgor.json";
import geoSawahKotGor from "../datas/statics/geo-sawah-kotgor.json";


const Map = () => {
    return (
        <div className="map">
            <Navbar />
            <MapView 
                geoSawahArea={geoSawahKotGor}
                geoIrigasiLine={geoIrigasiLine}
                geoAdminsArea={geoAdminsAreaKotGor}
                geoAdminsLine={geoAdminsLineKotGor}
            />

        </div>
    )
}

export default Map;
