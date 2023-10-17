import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api'
import "./Maps.css"


const center = { lat: 37.8029, lng: -122.4484 }

const restaurantAddy = { lat: 37.7368185, lng: -122.4052979 }


const getLatLonForCity = async (restaurant) => {
    // const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    // console.log("apiKey: ", apiKey)
    const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(restaurant.address + restaurant.city)}&key=AIzaSyA9q0mwj3_OD5eQngrpPd3jxRaPCcXF5ZA`
    const geocodeResponse = await fetch(geocodeUrl)
    const geocodeData = await geocodeResponse.json()
    // console.log("geocodeUrl: ", geocodeUrl)
    // console.log("geocodeResponse: ", geocodeResponse)
    // console.log("geocodeData: ", geocodeData)
    const { lat, lng } = geocodeData.results[0].geometry.location
    // console.log("lat, lng: ", lat)
    return { lat: lat, lng: lng }
}


export const Map = ({ restaurant }) => {


    const { isLoaded } = useLoadScript({
        // Loads Google Maps script into component
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    })

    if (!isLoaded) return <h2>Loading Google Maps...</h2>

    return (
        <div className='map-container'>
            <h2>Google Map</h2>
            <div
                style={{ width: "500px", height: "500px" }}
                id="map">
                <GoogleMap
                    center={getLatLonForCity(restaurant)}
                    // center={restaurantAddy}
                    zoom={14}
                    mapContainerStyle={{ width: '100%', height: '100%'}}
                    // options={{
                    //     streetViewControl: true,
                    //     mapTypeControl: true
                    // }}
                >
                    <Marker position={restaurantAddy} />
                </GoogleMap>
            </div>
        </div>
    )
}
