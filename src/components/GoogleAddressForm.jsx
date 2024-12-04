// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const GoogleAddressForm = ({ onAddressSelect }) => {
    useEffect(() => {
        const loadGoogleMapsScript = () => {
            const existingScript = document.getElementById("google-maps-script");
            if (!existingScript) {
                const script = document.createElement("script");
                script.src =
                    "https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&libraries=places&v=weekly";
                script.id = "google-maps-script";
                script.defer = true;
                script.onload = initAutocomplete;
                document.body.appendChild(script);
            } else {
                initAutocomplete();
            }
        };

        const initAutocomplete = () => {
            const input = document.getElementById("ship-address");
            if (!window.google || !window.google.maps || !window.google.maps.places) {
                console.error("Google Maps API not loaded correctly.");
                return;
            }
            const autocomplete = new window.google.maps.places.Autocomplete(input, {
                types: ["address"],
                componentRestrictions: { country: "us" },
            });

            autocomplete.addListener("place_changed", () => {
                const place = autocomplete.getPlace();
                if (place.geometry) {
                    const address = {
                        location: place.formatted_address,
                        latitude: place.geometry.location.lat(),
                        longitude: place.geometry.location.lng(),
                    };
                    onAddressSelect(address);
                }
            });
        };

        loadGoogleMapsScript();
    }, [onAddressSelect]);

    return (
        <form id="address-form" autoComplete="off">
            <label className="full-field">
                <span className="form-label">Street Address*</span>
                <input id="ship-address" name="ship-address" required autoComplete="off" />
            </label>
        </form>
    );
};

export default GoogleAddressForm;
