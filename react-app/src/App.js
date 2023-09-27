import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import { Restaurants } from "./components/Restaurants";
import { CreateRestaurant } from "./components/Restaurants/CreateRestaurant";
import { ManageRestaurants } from "./components/ManageRestaurants";
import { GetRestaurantToUpdate } from "./components/Restaurants/GetRestaurantToUpdate";
import { RestaurantDetails } from "./components/RestaurantDetails";
import {MenuItemDetails} from "./components/MenuItemDetails"
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/">
            <Restaurants />
          </Route>
          <Route exact path="/restaurants/new">
            <CreateRestaurant />
          </Route>
          <Route exact path="/restaurants/current">
            <ManageRestaurants />
          </Route>
          <Route exact path="/restaurants/:restaurantId/edit">
            <GetRestaurantToUpdate />
          </Route>
          <Route exact path="/restaurants/:restaurantId">
            <RestaurantDetails />
          </Route>
          <Route exact path="/menuitems/:menuItemId">
            <MenuItemDetails/>
          </Route>

        </Switch>
      )}
    </>
  );
}

export default App;
