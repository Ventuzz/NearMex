import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./MapSection.css";

const markers = [
  { name: "El Terrible Juan Café", coords: [20.6736, -103.344], type: "Café" },
  { name: "Plaza Andares", coords: [20.6625, -103.391], type: "Centro Comercial" },
];

const MapSection = () => {
  return (
    <div className="map-section">
      <MapContainer center={[20.6736, -103.344]} zoom={13} scrollWheelZoom={false} style={{ height: "400px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((m) => (
          <Marker key={m.name} position={m.coords}>
            <Popup>{m.name} - {m.type}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapSection;
