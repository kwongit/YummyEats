import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { thunkGetRestaurantInfo } from "../../store/restaurants";
import { thunkGetRestaurantReviews } from "../../store/reviews";
import { MenuItems } from "../MenuItems";
import { RestaurantReviews } from "../ReviewsById";
import { useHistory } from "react-router";
// import { setUser, thunkGetUserInfo } from "../../store/session";
import "./RestaurantDetails.css";

export const RestaurantDetails = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { restaurantId } = useParams();

  const currentUser = useSelector((state) => state.session.user);

  const oneRestaurant = useSelector(
    (state) => state.restaurant.singleRestaurant
  );
  // const reviews = useSelector((state) => state.reviews.allReviews)

  // const reviewsList = Object.values(reviews)

  useEffect(() => {
    dispatch(thunkGetRestaurantInfo(restaurantId));
    dispatch(thunkGetRestaurantReviews(restaurantId));
  }, [dispatch, restaurantId]);

  const handleClick = () => {
    // tbd
    history.push(`/restaurants/${restaurantId}/createmenuitem`);
  };

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
      <img
        className="restaurant-image"
        src={image_url}
        alt={name}
        title={name}
      ></img>

      <div className="restaurant-non-image-content">
        <div className="restaurant-info">
          <div className="restaurant-info-left-col">
            <p className="restaurant-header">
              {name} ({address})
            </p>
            <p className="restaurant-subheader">
              <i className="fa-solid fa-star"></i> {avg_rating} ({num_reviews}{" "}
              ratings ) · {type} ·{" "}
              {price === 3 ? "$$$" : price === 2 ? "$$" : "$"}
            </p>
            <p className="restaurant-hours">
              Hours: {open_hours} - {close_hours}
            </p>
          </div>
          <div className="restaurant-info-right-col">
            <div>
              {currentUser && oneRestaurant.owner_id === currentUser.id && (
                <button
                  className="create-restaurant-button"
                  onClick={handleClick}
                >
                  Create New Menu Item
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="restaurant-menu-items-grid">
          <MenuItems restaurantId={restaurantId} />
        </div>
        <RestaurantReviews restaurantId={restaurantId} />
      </div>
    </div>
  );
};
