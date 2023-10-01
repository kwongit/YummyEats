import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { thunkGetUserRestaurants } from "../../store/restaurants";
import RestaurantTile from "../RestaurantTile";
import { DeleteRestaurantModal } from "./DeleteRestaurantModal";
import OpenModalButton from "../OpenModalButton";
import "./ManageRestaurants.css";

export const ManageRestaurants = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.session.user);
  const restaurants = useSelector((state) => state.restaurant.allRestaurants);

  const restaurantsList = Object.values(restaurants);

  useEffect(() => {
    dispatch(thunkGetUserRestaurants());
  }, [dispatch]);

  if (!user) return null;

  const handleClick = () => {
    history.push("/restaurants/new");
  };

  const handleUpdateClick = (restaurantId) => {
    history.push(`/restaurants/${restaurantId}/edit`);
  };

  return (
    <div>
      <div className="manage-container">
        <h1>Manage Restaurants</h1>
        {restaurantsList && restaurantsList.length <= 0 ? (
          <button
            className="manage-restaurants-create-btn"
            onClick={handleClick}
          >
            Create a New Restaurant
          </button>
        ) : (
          ""
        )}
      </div>
      <div className="restaurant-details-container">
        {restaurantsList.map((restaurant) => (
          <div key={restaurant.id}>
            <RestaurantTile manage={true} restaurant={restaurant} />
            <div className="buttons-container">
              <button
                className="manage-restaurants-update-button"
                onClick={() => handleUpdateClick(restaurant.id)}
              >
                Update
              </button>

              <OpenModalButton
                className="delete-button"
                buttonText="Delete"
                modalComponent={
                  <DeleteRestaurantModal restaurantId={restaurant.id} />
                }
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
