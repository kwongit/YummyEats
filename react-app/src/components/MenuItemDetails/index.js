import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { thunkGetMenuItemInfo } from "../../store/menuItems";
import "./MenuItemDetails.css"

export const MenuItemDetails = () => {
  const dispatch = useDispatch();

  const { menuItemId } = useParams();

  const oneMenuItem = useSelector((state) => state.menuItems.singleMenuItem);

  useEffect(() => {
    dispatch(thunkGetMenuItemInfo(menuItemId));
  }, [dispatch, menuItemId]);

  if (!oneMenuItem.id) return null;

  const { restaurantId, name, size, calories, price, description, imageUrl } =
    oneMenuItem;

  return (
    <div className="view-menu-item-details">
      <div className="menu-item-left-col">
        <img className="menu-item-image" src={imageUrl} alt="main" />
      </div >
      <div className="menu-item-right-col">
        <p className="menu-item-name">{name}</p>
        {calories && <p className="menu-item-description">{calories} calories</p>}
        <p className="menu-item-price">${Number.parseFloat(price).toFixed(2)}</p>
        {description && <p className="menu-item-description">{description}</p>}
        <button className="buy-menu-item-button">Buy Now <span style={{fontWeight: "bold"}}>&#183;</span> ${Number.parseFloat(price).toFixed(2)}</button>
      </div>
    </div>
  );
};
