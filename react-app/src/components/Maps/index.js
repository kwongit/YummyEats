import React, { useState, useEffect } from "react";
import Iframe from "react-iframe";
import axios from "axios";
import "./Maps.css"

export const Map = ({ restaurant }) => {
  const [apiKey, setApiKey] = useState("");
  const location = `${restaurant.address}, ${restaurant.city}, ${restaurant.state}`;

  useEffect(() => {
    axios
      .get("/api/get_api_key")
      .then((response) => {
        setApiKey(response.data.api_key);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const mapURL = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${location}`;

  return (
    <div className='map-container'>
        <div
            className='map-box'
            style={{ width: "100%", height: "200px" }}
            id="map">
            <Iframe
                url={mapURL}
                width="100%"
                height="100%"
                display="initial"
                position="relative"
            />
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
