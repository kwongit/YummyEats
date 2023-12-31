import { useHistory } from "react-router";
import OpenModalButton from "../OpenModalButton";
import { DeleteMenuItemModal } from "./DeleteMenuItemModal";
import { useSelector } from "react-redux";
import "./MenuItemTile.css";

const MenuItemTile = ({ menuItem, restaurantId }) => {
  const { id, name, price, calories, imageUrl } = menuItem;
  const history = useHistory();

  const handleClick = () => {
    history.push(`/menuitems/${id}`);
  };

  const restaurant = useSelector((state) => state.restaurant.singleRestaurant);

  const currentUser = useSelector((state) => state.session.user);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="menu-item-tile-container" key={id} onClick={handleClick}>
        <img
          className="menu-item-tile-image"
          src={imageUrl}
          alt={name}
          title={name}
        ></img>
        <div className="menu-item-tile-info">
          <div className="menu-item-small-name">{name}</div>
          <div className="menu-item-small-info">
            ${price.toFixed(2)}
            {calories && (
              <>
                <span style={{ fontWeight: "bold" }}> &#183;</span>{" "}
                <span style={{ color: "grey" }}>{calories} Cal.</span>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="menu-item-tile-delete-button">
        {currentUser && restaurant.owner_id === currentUser.id && (
          <OpenModalButton
            buttonText="Delete"
            modalComponent={<DeleteMenuItemModal menuItemId={menuItem.id} />}
          />
        )}
      </div>
    </div>
  );
};

export default MenuItemTile;
