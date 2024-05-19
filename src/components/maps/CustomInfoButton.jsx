import React, { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "./icon.css";

function CustomInfoButton({ iconClass, URL, titleButton }) {
  const map = useMap();

  const navigateToPage = (pageURL) => {
    window.location.href = pageURL;
  };

  useEffect(() => {
    const navigationButton = L.control({ position: "topleft" });
    navigationButton.onAdd = () => {
      const container = L.DomUtil.create("div", "leaflet-bar leaflet-control custom-navigation-button");
      const button = L.DomUtil.create("button", "", container);

      // set title
      button.title = titleButton;

      // Set background color to white
      button.style.backgroundColor = "#ffffff";

      // Set text color to black
      button.style.color = "#000000";

      button.classList.add(iconClass);
      button.onclick = () => navigateToPage(URL); // Change URL to the desired destination

      return container;
    };

    navigationButton.addTo(map);

    // Cleanup function to remove the button when component unmounts
    return () => {
      map.removeControl(navigationButton);
    };
  }, [map]); // Only run this effect when the map instance changes

  return null;
}

export default CustomInfoButton;
