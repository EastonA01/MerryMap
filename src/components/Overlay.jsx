// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
const Overlay = ({ onAddMarker }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        location: '',
        latitude: '',
        longitude: '',
        additionalInfo: '',
        image: '',
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

    const handleSubmit = (e) => {
        e.preventDefault();
        const { latitude, longitude, additionalInfo, image } = formData;

        if (!latitude || !longitude) {
            alert('Latitude and Longitude are required.');
            return;
        }

        const newMarker = {
            lat: parseFloat(latitude),
            lng: parseFloat(longitude),
            info: additionalInfo,
            image: image || null,
        };

        onAddMarker(newMarker);

        setFormData({ location: '', latitude: '', longitude: '', additionalInfo: '', image: '' });
        setIsVisible(false);
    };

    return (
        <>
            <button onClick={toggleOverlay} id={"toggle_overlay_button"}>
                {isVisible ? 'Cancel' : 'Add A Location'}
            </button>
            {isVisible && (
                <div id="add_location_overlay">
                    <div id="location_overlay">
                        <h1>Add a Location</h1>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="location"
                                placeholder="Location"
                                value={formData.location}
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                name="latitude"
                                placeholder="Latitude"
                                value={formData.latitude}
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                name="longitude"
                                placeholder="Longitude"
                                value={formData.longitude}
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                name="additionalInfo"
                                placeholder="Additional Info"
                                value={formData.additionalInfo}
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                name="image"
                                placeholder="Link to Image"
                                value={formData.image}
                                onChange={handleInputChange}
                            />
                            <button type="submit">Add Location</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default Overlay;
