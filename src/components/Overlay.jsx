// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import GoogleAddressForm from "./GoogleAddressForm.jsx";
import supabase from "../supabaseClient"; // Import Supabase client

// eslint-disable-next-line react/prop-types
const Overlay = ({ onAddMarker }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        location: "",
        latitude: "",
        longitude: "",
        additionalInfo: "",
        image: "",
    });

    const toggleOverlay = () => {
        setIsVisible(!isVisible);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleAddressSelect = (address) => {
        setFormData({
            ...formData,
            location: address.location,
            latitude: address.latitude,
            longitude: address.longitude,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { latitude, longitude, additionalInfo, image } = formData;

        if (!latitude || !longitude) {
            alert("Please ensure a valid address with latitude and longitude.");
            return;
        }

        const newMarker = {
            latitude: parseFloat(latitude),
            longitude: parseFloat(longitude),
            info: additionalInfo,
            image_url: image || null,
        };

        // Save the marker to Supabase
        // eslint-disable-next-line no-unused-vars
        const { data, error } = await supabase.from("LightLocations").insert([newMarker]);
        if (error) {
            console.error("Error saving marker to Supabase:", error);
            alert("Failed to save marker.");
            return;
        }

        // Add marker to map state
        onAddMarker(newMarker);

        // Reset form data
        setFormData({
            location: "",
            latitude: "",
            longitude: "",
            additionalInfo: "",
            image: "",
        });

        // Hide the overlay
        setIsVisible(false);
    };

    return (
        <>
            <button onClick={toggleOverlay} id="toggle_overlay_button">
                {isVisible ? "Cancel" : "Add A Location"}
            </button>
            {isVisible && (
                <div id="add_location_overlay">
                    <div id="location_overlay">
                        <GoogleAddressForm onAddressSelect={handleAddressSelect} />
                        <textarea
                            name="additionalInfo"
                            placeholder="Additional Information"
                            value={formData.additionalInfo}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="image"
                            placeholder="Image URL"
                            value={formData.image}
                            onChange={handleInputChange}
                        />
                        <button
                            type="button"
                            className="my-button"
                            onClick={handleSubmit}
                        >
                            Save Location
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Overlay;
