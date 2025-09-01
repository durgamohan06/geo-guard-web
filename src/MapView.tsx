
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import HeatmapLayer from 'react-leaflet-heatmap-layer-v3';
import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { heatmapData, alerts } from './data';

const MapView: React.FC = () => {
  const position: LatLngExpression = [20.5937, 78.9629]; // Center of India

  return (
    <div className="h-full w-full">
      <MapContainer center={position} zoom={5} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <HeatmapLayer
          points={heatmapData}
          longitudeExtractor={(m: any) => m.lng}
          latitudeExtractor={(m: any) => m.lat}
          intensityExtractor={(m: any) => m.intensity}
        />
        {alerts.map(alert => (
          <Marker key={alert.id} position={[alert.location.lat, alert.location.lng]}>
            <Popup>
              <b>{alert.tourist.name}</b><br />
              Status: {alert.status}<br />
              Contacts: {alert.tourist.emergencyContacts.join(', ')}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
