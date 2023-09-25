import { useState, useEffect } from "react";
import RestaurantTile from "../RestaurantTile";

export const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch("/api/restaurants")
      .then((response) => response.json())
      .then((data) => setRestaurants(data.restaurants))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="restaurant-details-container">
      <h1>RESTAURANTS TEST PAGE</h1>
      {restaurants.map((restaurant) => (
        <RestaurantTile key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};
