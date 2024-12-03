// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import Overlay from './Overlay.jsx';

export default function LeafletMap() {
    const [markers, setMarkers] = useState([]);

    useEffect(() => {
        const storedMarkers = JSON.parse(localStorage.getItem('markers')) || [];
        setMarkers(storedMarkers);
    }, []);

    const addMarker = (marker) => {
        const updatedMarkers = [...markers, marker];
        setMarkers(updatedMarkers);
        localStorage.setItem('markers', JSON.stringify(updatedMarkers));
    };

    return (
        <>
            <MapContainer
                center={[34.236698, -77.946198]}
                zoom={13}
                scrollWheelZoom={false}
                style={{ height: '100vh', width: '100vw', overflow: 'auto' }}
                id={'map'}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {markers.map((marker, index) => (
                    <Marker key={index} position={[marker.lat, marker.lng]}>
                        <Popup>
                            {marker.info && <p>{marker.info}</p>}
                            {marker.image && (
                                <img
                                    src={marker.image}
                                    alt="Marker visual"
                                    style={{ maxWidth: '100%', maxHeight: 'auto' }}
                                />
                            )}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
            <Overlay onAddMarker={addMarker} />
        </>
    );
}
