import { useHistory } from "react-router";
import OpenModalButton from "../OpenModalButton";
import { DeleteMenuItemModal } from "./DeleteMenuItemModal";
import { useSelector } from "react-redux";
import "./MenuItemTile.css";

const MenuItemTile = ({ menuItem, restaurantId }) => {
  const { id, name, price, calories, imageUrl } = menuItem;
  const history = useHistory();

  const handleClick = () => {
    // tbd
    history.push(`/menuitems/${id}`);
  };

  const restaurant = useSelector((state) => state.restaurant.singleRestaurant);

  const currentUser = useSelector((state) => state.session.user);

  return (
<<<<<<< HEAD
    <div style={{display:"flex", flexDirection:"column"}}>
      <div className="menu-item-tile-container" key={id} onClick={handleClick}>
        <img
          className="menu-item-tile-image"
          src={imageUrl}
          alt={name}
          title={name}
        ></img>
        <div className="menu-item-tile-info">
            <div className="menu-item-small-name">{name}</div>
            <div className="menu-item-small-info">${price}
            {calories &&
              <>
                <span style={{fontWeight: "bold"}}> &#183;</span> <span style={{color:"grey"}}>{calories} Cal.</span>
              </>}
            </div>
          </div>
      </div>
      <div className="menu-item-tile-delete-button">
        {restaurant.owner_id === currentUser.id && (
          <OpenModalButton
            buttonText="Delete"
            modalComponent={<DeleteMenuItemModal menuItemId={menuItem.id} />}
          />
        )}
      </div>
=======
    <div className="menu-item-tile-container" key={id} onClick={handleClick}>
      <img
        className="menu-item-tile-image"
        src={imageUrl}
        alt={name}
        title={name}
      ></img>
      <div className="menu-item-tile-info">
        <div className="menu-item-tile-info-left-col">
          <div className="menu-item-small-name">{name}</div>
          <div className="menu-item-small-info">
            ${price}
            {calories && (
              <>
                <span style={{ fontWeight: "bold" }}> &#183;</span>{" "}
                <span style={{ color: "grey" }}>{calories} Cal.</span>
              </>
            )}
          </div>
        </div>
        <div className="menu-item-tile-info-right-col">
          {currentUser && restaurant.owner_id === currentUser.id && (
            <OpenModalButton
              buttonText="Delete"
              modalComponent={<DeleteMenuItemModal menuItemId={menuItem.id} />}
            />
          )}
        </div>
      </div>
>>>>>>> 4ca04bf728108c71365caddc86464352d2c886b2
    </div>
  );
};

export default MenuItemTile;
