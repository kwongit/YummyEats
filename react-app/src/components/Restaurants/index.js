import { useState, useEffect } from "react";
import RestaurantTile from "../RestaurantTile";
import './all-restaurants.css'
import categories from "../Restaurants/categories"
import offer from "../../assets/bogo.png"
import overall from "../../assets/top_eats.png"



export const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch("/api/restaurants")
      .then((response) => response.json())
      .then((data) => setRestaurants(data.restaurants))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const showAlert = () => {
    window.alert("Coming Soon")
  }

  return (
    <>
      {categories}
      <hr id="cat-hr"></hr>
      <div id="middle-header-container">
        <h1>RESTAURANTS TEST PAGE</h1>
        <h1>..Crave it? Get it.</h1>
        <img src={offer}></img>
      </div>
      <div id="main-body-container">

        <div id="restaurants-sidebar">
          <h1>All Stores</h1>
          <a onClick={showAlert}>Sort</a>
          <a onClick={showAlert}>From Uber Eats</a>
          <a onClick={showAlert}>Price Range</a>
          <a onClick={showAlert}>Max Delivery Fee</a>
          <a onClick={showAlert}>Dietary</a>
        </div>

        <div className="restaurant-details-container" id="restaurants-main">
          {restaurants.map((restaurant) => (
            <RestaurantTile key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </>
  );
};
