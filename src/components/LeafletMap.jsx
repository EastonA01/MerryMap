// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Overlay from "./Overlay.jsx";
import MerryMapBanner from "../../MerryMapBanner.png";
import supabase from "../supabaseClient";

export default function LeafletMap() {
    const [markers, setMarkers] = useState([]);

    // Load markers from Supabase on component mount
    useEffect(() => {
        const fetchMarkers = async () => {
            const { data, error } = await supabase.from("LightLocations").select("*");
            if (error) {
                console.error("Error fetching markers from Supabase:", error);
            } else {
                setMarkers(data);
            }
        };

        fetchMarkers();
    }, []);

    // Add marker to local state
    const addMarker = (marker) => {
        setMarkers((current) => [...current, marker]);
    };

    return (
        <MapContainer
            center={[34.236698, -77.946198]}
            zoom={13}
            scrollWheelZoom={true}
            doubleClickZoom={false}
            style={{ height: "100vh", width: "100vw", overflow: "auto" }}
            id={"map"}
            attributionControl={false}
        >
            <img src={MerryMapBanner} alt="Banner" id={"MerryMapBanner"} />
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markers.map((marker, index) => (
                <Marker key={index} position={[marker.latitude, marker.longitude]}>
                    <Popup>
                        {marker.info && <p>{marker.info}</p>}
                        {marker.image_url && (
                            <img
                                src={marker.image_url}
                                alt="Marker visual"
                                style={{ maxWidth: "100%", maxHeight: "auto" }}
                            />
                        )}
                    </Popup>
                </Marker>
            ))}
            <Overlay onAddMarker={addMarker} />
        </MapContainer>
    );
}
