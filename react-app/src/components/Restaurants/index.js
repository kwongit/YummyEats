import { useState, useEffect } from "react";
import RestaurantTile from "../RestaurantTile";
import './all-restaurants.css'
import categories from "../Restaurants/categories"
import bogo from "../../assets/bogo.png"
import overall from "../../assets/top_eats.png"



export const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch("/api/restaurants")
      .then((response) => response.json())
      .then((data) => setRestaurants(data.restaurants))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      {categories}
      <hr id="cat-hr"></hr>
      <div id="middle-header-container">
        <h1>RESTAURANTS TEST PAGE</h1>
        <h1>Crave it? Get it.</h1>
        <img src={bogo}></img>
      </div>
      <div className="restaurant-details-container">
        {restaurants.map((restaurant) => (
          <RestaurantTile key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </>
  );
};
