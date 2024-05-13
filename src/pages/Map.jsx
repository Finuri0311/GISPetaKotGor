import React from "react";

import MapView from "../components/maps/MapView";
import geoIrigasiLine from "../datas/statics/geo-irigasi-kotgor.json";
import geoAgriSawahArea from "../datas/statics/geo-agrisawah-kotgor.json";
import geoAdminsLineKotGor from "../datas/statics/geo-admins-line-kotgor.json";
import geoAdminsAreaKotGor from "../datas/statics/geo-admins-area-kotgor.json";


const Map = () => {
    return (
        <div className="map">
            <MapView 
                geoSawahArea={geoAgriSawahArea}
                geoIrigasiLine={geoIrigasiLine}
                geoAdminsArea={geoAdminsAreaKotGor}
                geoAdminsLine={geoAdminsLineKotGor}
            />

        </div>
    )
}

export default Map;