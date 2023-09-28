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
        <h1>{name}</h1>
        <p>${Number.parseFloat(price).toFixed(2)}</p>
        <p>{description}</p>
        <p>{calories}</p>
        <p>{size}</p>
        <button className="buy-menu-item-button">Buy Now <span style={{fontWeight: "bold"}}>&#183;</span> ${price}</button>
      </div>
    </div>
  );
};
