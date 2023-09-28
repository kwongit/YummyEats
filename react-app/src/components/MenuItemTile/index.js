import { useHistory } from "react-router";
import OpenModalButton from "../OpenModalButton";
import { DeleteMenuItemModal } from "./DeleteMenuItemModal";
import { useSelector } from "react-redux";


const MenuItemTile = ({ menuItem, restaurantId }) => {
  const { id, name, price, imageUrl } = menuItem;
  const history = useHistory();

  const handleClick = () => {
    // tbd
    history.push(`/menuitems/${id}`);
  };

  const restaurant = useSelector(
    (state) => state.restaurant.singleRestaurant
  );

  const currentUser = useSelector(state => state.session.user);

  return (
    <div className="menu-item-details-container" key={id}>
      <div className="menu-item-tile" onClick={handleClick}>
        <img
          className="preview-image"
          src={imageUrl}
          alt={name}
          title={name}
        ></img>
      <div>{name}</div>
      <div>{price}</div>
      </div>

      {restaurant.owner_id === currentUser.id && (
        <OpenModalButton
          className="delete-button"
          buttonText="Delete"
          modalComponent={
            <DeleteMenuItemModal menuItemId={menuItem.id} />
          }
        />
      )}
    </div>
  );
};

export default MenuItemTile;
