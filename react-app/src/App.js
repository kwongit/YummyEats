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
import { MenuItemDetails } from "./components/MenuItemDetails";
import { CreateMenuItem } from "./components/MenuItems/CreateMenuItem";
import { ManageReviews } from "./components/ManageReviews";
import { UpdateAccount } from "./components/ManageAccount/UpdateAccount";
import { Map } from "./components/Maps";
import { Cart } from "./components/Cart"

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
            {/* <Navigation isLoaded={isLoaded} searchType={'none'}/> */}
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            {/* <Navigation isLoaded={isLoaded} searchType={'none'}/> */}
            <SignupFormPage />
          </Route>
          <Route exact path="/">
            {/* <Navigation isLoaded={isLoaded} searchType={'restaurants'}/> */}
            <Restaurants />
          </Route>
          <Route exact path="/map">
            <Map />
          </Route>
          <Route exact path="/restaurants/new">
            {/* <Navigation isLoaded={isLoaded} searchType={'none'}/> */}
            <CreateRestaurant />
          </Route>
          <Route exact path="/account/current">
            {/* <Navigation isLoaded={isLoaded} searchType={'none'}/> */}
            <UpdateAccount />
          </Route>
          <Route exact path="/restaurants/current">
            {/* <Navigation isLoaded={isLoaded} searchType={'none'}/> */}
            <ManageRestaurants />
          </Route>
          <Route exact path="/reviews/current">
            {/* <Navigation isLoaded={isLoaded} searchType={'none'}/> */}
            <ManageReviews />
          </Route>
          <Route exact path="/restaurants/:restaurantId/edit">
            {/* <Navigation isLoaded={isLoaded} searchType={'none'}/> */}
            <GetRestaurantToUpdate />
          </Route>
          <Route exact path="/restaurants/:restaurantId/createmenuitem">
            {/* <Navigation isLoaded={isLoaded} searchType={'none'}/> */}
            <CreateMenuItem />
          </Route>
          <Route exact path="/restaurants/:restaurantId">
            {/* <Navigation isLoaded={isLoaded} searchType={'menu-items'}/> */}
            <RestaurantDetails />
          </Route>
          <Route exact path="/menuitems/:menuItemId">
            <MenuItemDetails />
          </Route>
          <Route exact path="/cart">
            <Cart/>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
