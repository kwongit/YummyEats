import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetMenuItems } from "../../store/menuItems";
import MenuItemTile from "../MenuItemTile";

export const MenuItems = ({restaurantId}) => {
  const dispatch = useDispatch();

  const getMenuItems = useSelector((state) => state.menuItems.allMenuItems);
// console.log("get menu items =====>",getMenuItems)
  const menuItems = Object.values(getMenuItems);
// console.log("menu items=====>>>>>>", menuItems)
  useEffect(() => {
    dispatch(thunkGetMenuItems(restaurantId));
  }, [dispatch]);

  if (!menuItems.length) return null;

  return (
    <>
      <div id="main-body-container">
        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", columnGap: "10px", rowGap: "10px"}}>
          {menuItems.map((menuItem) => (
            <MenuItemTile key={menuItem.id} menuItem={menuItem} />
          ))}
        </div>
      </div>
    </>
  );
};
