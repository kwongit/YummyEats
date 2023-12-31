import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { thunkGetRestaurants } from "../../store/restaurants";
import RestaurantTile from "../RestaurantTile";
import categories from "../Restaurants/categories";
import offer from "../../assets/bogo.png";
import offer2 from "../../assets/bogo2.png";
import offer3 from "../../assets/bogo3.png";
import SearchBar from "../SearchBar";
import "./all-restaurants.css";


export const Restaurants = () => {
  const dispatch = useDispatch();
  const history = useHistory()

  const getRestaurants = useSelector(
    (state) => state.restaurant.allRestaurants
  );

  const restaurants = Object.values(getRestaurants);

  useEffect(() => {
    dispatch(thunkGetRestaurants());
  }, [dispatch]);

  if (!restaurants.length) return null;

  const goToMaps = () => {
    history.push('/map')
  }

  return (
    <>
      {categories}
      <hr id="cat-hr"></hr>
      <div id="middle-header-container">
        <div
          style={{ display: "flex", flexDirection: "column", width: "250px" }}
        >
          <h1 style={{ textAlign: "left", margin: "40px 0 0 0" }}>
            Crave it? Get it.
          </h1>
          <p
            style={{
              fontSize: "10px",
              color: "rgb(100,100,100)",
              marginLeft: "3px",
            }}
          >
            Search for a favorite restaurant, cuisine, or dish.
          </p>
        </div>
        <div id="offers-container">
          <img src={offer} alt="img"></img>
          <img src={offer2} alt="img"></img>
          <img src={offer3} alt="img"></img>
        </div>
      </div>
      <div id="main-body-container">
        <div id="restaurants-sidebar">
          <h1>All Stores</h1>
          <SearchBar
						placeholder={'Search for your favorite restaurant by name'}
						data={restaurants}
					/>
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
