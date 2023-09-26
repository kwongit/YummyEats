import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { thunkGetRestaurantInfo } from "../../store/restaurants";

export const RestaurantDetails = () => {
  const dispatch = useDispatch();

  const { restaurantId } = useParams();

  const oneRestaurant = useSelector(
    (state) => state.restaurant.singleRestaurant
  );

  useEffect(() => {
    dispatch(thunkGetRestaurantInfo(restaurantId));
  }, [dispatch, restaurantId]);

  if (!oneRestaurant.id) return null;

  const {
    Owner,
    address,
    city,
    state,
    name,
    avgStarRating,
    type,
    price,
    open_hours,
    close_hours,
    image_url,
  } = oneRestaurant;

  return (
    <div className="view-restaurant-details">
      <div className="restaurant-image">
        <img className="image" src={image_url} alt="main" />
      </div>

      <h1>
        {name} ({address})
      </h1>
      <p>
        {type}, {price}
      </p>

      {/* <MenuItems /> */}
      {/* <RestaurantReviews /> */}
    </div>
  );
};
