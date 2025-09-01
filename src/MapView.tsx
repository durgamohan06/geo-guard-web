import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import HeatmapLayerFactory from "@vgrid/react-leaflet-heatmap-layer";
import type { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { heatmapData, alerts } from "./data";

const HeatmapLayer = () => {
  const Heatmap = HeatmapLayerFactory({
    radius: 30,
    points: heatmapData,
  });
  return <>{Heatmap}</>;
};

const MapView: React.FC = () => {
  const position: LatLngExpression = [20.5937, 78.9629]; // Center of India

  return (
    <div className="h-full w-full">
      <MapContainer
        center={position}
        zoom={5}
        style={{ height: "100%", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <HeatmapLayer />
        {alerts.map((alert) => (
          <Marker
            key={alert.id}
            position={[alert.location.lat, alert.location.lng]}>
            <Popup>
              <b>{alert.tourist.name}</b>
              <br />
              Status: {alert.status}
              <br />
              Contacts: {alert.tourist.emergencyContacts.join(", ")}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
