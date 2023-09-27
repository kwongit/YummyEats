import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { thunkGetRestaurantInfo } from "../../store/restaurants";
import {MenuItems} from '../MenuItems'

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
    avg_rating,
    num_reviews,
    type,
    price,
    open_hours,
    close_hours,
    image_url,
  } = oneRestaurant;

  return (
    <div className="view-restaurant-details">
      <div className="restaurant-image">
        <img
          className="preview-image"
          src={image_url}
          alt={name}
          title={name}
        ></img>
      </div>

      <h1>
        {name} ({address})
      </h1>
      <p>
        <i className="fa-solid fa-star"></i> {avg_rating} ({num_reviews} ratings
        ) · {type} · {price === 3 ? "$$$" : price === 2 ? "$$" : "$"}
      </p>
      <p>
        Hours: {open_hours} - {close_hours}
      </p>

      <MenuItems restaurantId={restaurantId}/>
      {/* <RestaurantReviews /> */}
    </div>
  );
};
