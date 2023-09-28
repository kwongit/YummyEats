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

  useEffect(() => {
    console.log("one restaurant ==========>>>>>> " , oneRestaurant)
  }, [oneRestaurant]);

  if (!oneRestaurant.id) return null;

  // const {
  //   Owner,
  //   address,
  //   city,
  //   state,
  //   name,
  //   avg_rating,
  //   num_reviews,
  //   type,
  //   price,
  //   open_hours,
  //   close_hours,
  //   image_url,
  // } = oneRestaurant;

  return (
    <div className="view-restaurant-details">
      <div className="restaurant-image">
        <img
          className="preview-image"
          src={oneRestaurant.image_url}
          alt={oneRestaurant.name}
          title={oneRestaurant.name}
        ></img>
      </div>

      <h1>
        {oneRestaurant.name} ({oneRestaurant.address})
      </h1>
      <p>
        <i className="fa-solid fa-star"></i> {oneRestaurant.avg_rating} ({oneRestaurant.num_reviews} ratings
        ) · {oneRestaurant.type} · {oneRestaurant.price === 3 ? "$$$" : oneRestaurant.price === 2 ? "$$" : "$"}
      </p>
      <p>
        Hours: {oneRestaurant.open_hours} - {oneRestaurant.close_hours}
      </p>

      <MenuItems restaurantId={restaurantId}/>
      {/* <RestaurantReviews /> */}
    </div>
  );
};
