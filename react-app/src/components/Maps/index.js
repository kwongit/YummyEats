import { useEffect, useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
import "./Maps.css"

export const Map = ({ restaurant }) => {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    });

    const [mapCenter, setMapCenter] = useState({ lat: 37.8029, lng: -122.4484 });

    const getLatLonForCity = async (restaurant) => {
        try {
            const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${
                encodeURIComponent(restaurant.address + restaurant.city)}&key=AIzaSyA9q0mwj3_OD5eQngrpPd3jxRaPCcXF5ZA`;
                // encodeURIComponent(restaurant.address + restaurant.city)}&key=API_KEY`;
            const geocodeResponse = await fetch(geocodeUrl);
            const geocodeData = await geocodeResponse.json();

            if (geocodeData.results.length > 0) {
                const lat = geocodeData.results[0].geometry.location.lat;
                const lng = geocodeData.results[0].geometry.location.lng;

                setMapCenter({ lat, lng });
            }
        } catch (error) {
            console.error("Error fetching geocoding data:", error);
        }
    };

    useEffect(() => {
        if (isLoaded) {
            getLatLonForCity(restaurant);
        }
    }, [isLoaded, restaurant, mapCenter]);

    if (!isLoaded) return <h2>Loading Google Maps...</h2>;

    return (
        <div className='map-container'>
            <div
                className='map-box'
                style={{ width: "100%", height: "200px" }}
                id="map">
                <GoogleMap
                    center={mapCenter}
                    zoom={18}
                    mapContainerStyle={{ width: '100%', height: '100%' }}
                >
                    <Marker position={mapCenter} />
                </GoogleMap>
            </div>
            <div className='map-title'>
                <h1>{restaurant.name} - {restaurant.address}</h1>
                <h4>{restaurant.type} · {restaurant.price === 3 ? "$$$" : restaurant.price === 2 ? "$$" : "$"}</h4>
            </div>
            <div className='map-body'>
                <i class="fa-solid fa-location-dot"></i>
                <p>
                    {restaurant.address}, {restaurant.city}, {restaurant.state}
                </p>
            </div>
            <div className='map-body'>
                <i class="fa-solid fa-clock"></i>
                <p>Hours: {restaurant.open_hours} am - {restaurant.close_hours} pm</p>
            </div>
            <div className='map-body'>
                <i className="fa-solid fa-star"></i>
                <p>{restaurant.avg_rating} ( {restaurant.num_reviews} reviews)</p>
            </div>
        </div>
    );
};
