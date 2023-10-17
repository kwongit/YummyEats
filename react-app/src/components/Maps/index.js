import { useJsApiLoader, GoogleMap, Marker, useLoadScript } from '@react-google-maps/api'
import "./Maps.css"


const center = { lat: 37.8029, lng: -122.4484 }


export const Map = () => {

    // const { isLoaded } = useJsApiLoader({
    //     // Loads Google Maps script into component
    //     googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    // })

    const { isLoaded } = useLoadScript({
        // Loads Google Maps script into component
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: ["places"]
    })

    if (!isLoaded) return <h2>Loading Google Maps...</h2>

    return (
        <div className='map-container'>
            <h2>Google Map</h2>
            <div
                style={{ width: "500px", height: "500px" }}
                id="map">
                <GoogleMap
                    center={center}
                    zoom={14}
                    mapContainerStyle={{ width: '100%', height: '100%'}}
                    // options={{
                    //     streetViewControl: true,
                    //     mapTypeControl: true
                    // }}
                >
                    <Marker position={center} />
                </GoogleMap>
            </div>
        </div>
    )
}
