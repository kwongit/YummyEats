import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetRestaurants } from "../../store/restaurants";
import RestaurantTile from "../RestaurantTile";
import "./all-restaurants.css";
import categories from "../Restaurants/categories";
import offer from "../../assets/bogo.png";
import offer2 from "../../assets/bogo2.png";
import offer3 from "../../assets/bogo3.png";
import overall from "../../assets/top_eats.png";

export const Restaurants = () => {
  const dispatch = useDispatch();

  const getRestaurants = useSelector(
    (state) => state.restaurant.allRestaurants
  );

  const restaurants = Object.values(getRestaurants);

  useEffect(() => {
    dispatch(thunkGetRestaurants());
  }, [dispatch]);

  if (!restaurants.length) return null;

  const showAlert = () => {
    window.alert("Coming Soon");
  };

  return (
    <>
      {categories}
      <hr id="cat-hr"></hr>
      <div id="middle-header-container">
        <h1>RESTAURANTS TEST PAGE</h1>
        <h1>..Crave it? Get it.</h1>
        <img src={offer}></img>
        <img src={offer2}></img>
        <img src={offer3}></img>
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
