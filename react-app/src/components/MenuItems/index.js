import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetMenuItems } from "../../store/menuItems";
import MenuItemTile from "../MenuItemTile";

export const MenuItems = () => {
  const dispatch = useDispatch();

  const getMenuItems = useSelector((state) => state.menuItems.allMenuItems);

  const menuItems = Object.values(getMenuItems);

  useEffect(() => {
    dispatch(thunkGetMenuItems());
  }, [dispatch]);

  if (!menuItems.length) return null;

  return (
    <>
      <div id="main-body-container">
        <div>
          {getMenuItems.map((menuItem) => (
            <MenuItemTile key={menuItem.id} menuItem={menuItem} />
          ))}
        </div>
      </div>
    </>
  );
};
