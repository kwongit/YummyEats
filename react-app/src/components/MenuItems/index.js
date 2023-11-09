import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetMenuItems, thunkGetAllMenuItems } from "../../store/menuItems";
import MenuItemTile from "../MenuItemTile";
import "./MenuItems.css";

export const MenuItems = ({ restaurantId }) => {
  const dispatch = useDispatch();

  const getMenuItems = useSelector((state) => state.menuItems.allMenuItems);
  const menuItems = Object.values(getMenuItems);

  useEffect(() => {
    dispatch(thunkGetMenuItems(restaurantId));
    dispatch(thunkGetAllMenuItems())
  }, [dispatch]);

  if (!menuItems.length) return null;

  return (
    <>
      <div className="menu-item-grid-settings">
        {menuItems.map((menuItem) => (
          <MenuItemTile key={menuItem.id} menuItem={menuItem} />
        ))}
      </div>
    </>
  );
};
