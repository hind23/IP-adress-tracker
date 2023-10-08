import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { useEffect, useState } from "react";

export const Map = (props) => {
  const [markerPosition, setMarkerPosition] = useState(props.geocode);

  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/854/854929.png",
    iconSize: [38, 38],
  });

  // Use useEffect to update marker position when geocode changes
  useEffect(() => {
    setMarkerPosition(props.geocode);
  }, [props.geocode]);

  // Update the map center every time the markerPosition changes
  const mapCenter = markerPosition;

  return (
    <MapContainer center={mapCenter} zoom={13} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">openstreetmap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={markerPosition} icon={customIcon}></Marker>
    </MapContainer>
  );
};
