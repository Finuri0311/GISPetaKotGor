import React, { useRef, useState } from "react";

import { Map, TileLayer } from "react-leaflet";

const Map = () => {
  const [center, setCenter] = useState({ lat: 13.0844622, lng: 80.248357 });
  const ZOOM_LEVEL = 9;
  const mapRef = useRef();

  return (
    <>
      <Map center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
        <TileLayer
          url={"https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=UwNIQPKbRyGGA9A86zvC"}
          attribution={'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors'}
        />
      </Map>
    </>
  );
};

export default Map;
