import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { thunkGetRestaurantInfo } from "../../store/restaurants";
import { MenuItems } from "../MenuItems";
import { useHistory } from "react-router";
import { setUser, thunkGetUserInfo } from "../../store/session";

export const RestaurantDetails = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { restaurantId } = useParams();

  const currentUser = useSelector((state) => state.session.user);

  const oneRestaurant = useSelector(
    (state) => state.restaurant.singleRestaurant
  );

  useEffect(() => {
    dispatch(thunkGetRestaurantInfo(restaurantId))
  //   .then(() => {
  //     dispatch(fetchSpotReviews(spotId))

  // })
  }, [dispatch, restaurantId]);

  useEffect(() => {
    console.log("one restaurant ==========>>>>>> " , oneRestaurant)
  }, [oneRestaurant]);

  const handleClick = () => {
    // tbd
    history.push(`/restaurants/${restaurantId}/createmenuitem`);
  };

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

      <div>
        {oneRestaurant.owner_id === currentUser.id && (
          <button onClick={handleClick}>Create New Menu Item</button>
        )}
      </div>

      <MenuItems restaurantId={restaurantId} />
      {/* <RestaurantReviews /> */}
    </div>
  );
};
