import { useHistory } from "react-router";
import "./RestaurantTile.css";

const RestaurantTile = ({ restaurant }) => {
  // destructure props of `restaurant` obj
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
    image_url,
  } = restaurant;

  const history = useHistory();

  const handleClick = () => {
    // tbd
    history.push(`/`);
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
        {name} ({address})
      </div>
    </div>
  );
};

export default RestaurantTile;
