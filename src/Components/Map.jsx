import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ lat, lon }) => {
    console.log(lat);
    return (
        <MapContainer center={[lat, lon]} zoom={12} style={{ height: '300px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[lat, lon]}>
                <Popup>
                    Latitude: {lat}, Longitude: {lon}
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;
