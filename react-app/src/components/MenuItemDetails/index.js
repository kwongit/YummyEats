import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { thunkGetMenuItemInfo } from "../../store/menuItems";

export const MenuItemDetails = () => {
  const dispatch = useDispatch();

  const { menuItemId } = useParams();

  const oneMenuItem = useSelector((state) => state.menuItems.singleMenuItem);
  // console.log("one menu item ******" , oneMenuItem)
  useEffect(() => {
    dispatch(thunkGetMenuItemInfo(menuItemId));
  }, [dispatch, menuItemId]);

  if (!oneMenuItem.id) return null;

  const { restaurantId, name, size, calories, price, description, imageUrl } =
    oneMenuItem;
  console.log("one menu item ******", oneMenuItem)
  console.log("name ******", name, size, calories, price, description, imageUrl)
  return (
    <div className="view-menu-item-details">
      <h1>{name} this is the name</h1>
      <p>{price}</p>
      <p>{description}</p>
      <p>{calories}</p>
      <p>{size}</p>
      <button>Buy Now * ${price}</button> 
      {/* <div className="menu-item-image">
        <img className="image" src={imageUrl} alt="main" />
      </div>
      <h1>this is the place </h1>
      <h1>{name} this is the name</h1>
      <p>{price}</p>
      <p>{description}</p>
      <p>{calories}</p>
      <p>{size}</p>
      <button>Buy Now * ${price}</button> */}
    </div>
  );
};
