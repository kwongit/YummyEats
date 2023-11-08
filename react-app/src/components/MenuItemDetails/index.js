import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { thunkGetMenuItemInfo } from "../../store/menuItems";
import "./MenuItemDetails.css";
//!
import { RestaurantContext } from "../../context/Restaurant-context";
//!
export const MenuItemDetails = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  //!
  const{addToCart, cartItems}= useContext(RestaurantContext)
//!
  const { menuItemId } = useParams();

  const oneMenuItem = useSelector((state) => state.menuItems.singleMenuItem);
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(thunkGetMenuItemInfo(menuItemId));
  }, [dispatch, menuItemId]);

  if (!oneMenuItem.id) return null;

  const { restaurantId, name, size, calories, price, description, imageUrl } =
    oneMenuItem;

  const onClick = (e) => {

    if (sessionUser) {

// if cartItems.length === 0 tne ok we ca add the first item
//if cartItems.length > 0 && if cartItems[menuItem.id] !== undefined
//then there is a restaurant selected and item from outside restaurant can't be added

      alert(`${name} has been added to cart`);
      // history.push(`/restaurants/${restaurantId}`);
      addToCart(menuItemId)
    } else {
      alert(`Please log in to make a purchase!`);
    }
  };

  //!

  const cartItemAmount = cartItems[menuItemId]
  return (
    <div className="view-menu-item-details">
      <div className="menu-item-left-col">
        <img className="menu-item-image" src={imageUrl} alt="main" />
      </div>
      <div className="menu-item-right-col">
        <p className="menu-item-name">{name}</p>
        {calories && (
          <p className="menu-item-description">{calories} calories</p>
        )}
        <p className="menu-item-price">
          ${Number.parseFloat(price).toFixed(2)}
        </p>
        {description && <p className="menu-item-description">{description}</p>}
        <button
          // disabled={!sessionUser}
          className="buy-menu-item-button"
          onClick={onClick}
        >
          {/* Buy Now <span style={{ fontWeight: "bold" }}>&#183;</span> $
          {Number.parseFloat(price).toFixed(2)} */}
          Add to Cart {cartItemAmount > 0 && <>({cartItemAmount}) </>}

        </button>
      </div>
    </div>
  );
};
