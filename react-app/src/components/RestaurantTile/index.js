import { useHistory } from "react-router";
import "./RestaurantTile.css";

const RestaurantTile = ({ restaurant }) => {
  const {
    id,
    address,
    city,
    state,
    name,
    type,
    price,
    open_hours,
    close_hours,
    avg_rating,
    image_url,
  } = restaurant;

  const history = useHistory();

  const handleClick = () => {
    history.push(`/restaurants/${restaurant.id}`);
  };

  return (
    <div className="all-restaurants-container" key={id} onClick={handleClick}>
      <div className="restaurant-image">
        <img
          className="preview-image"
          src={image_url}
          alt={name}
          title={name}
        ></img>
      </div>
      <div className="name-address-rating">
       <p id="address-span">{name} ({address}) </p><span>{avg_rating}</span>
      </div>
    </div>
  );
};

export default RestaurantTile;
