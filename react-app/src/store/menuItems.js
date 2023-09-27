import { csrfFetch } from "./csrf";

// TYPE CONSTANTS

const GET_MENU_ITEMS = "menuItems/getMenuItems";
const GET_MENU_ITEM = "menuItems/getMenuItem";
const CREATE_MENU_ITEM = "menuItems/createMenuItem";
const UPDATE_MENU_ITEM = "menuItems/updateMenuItem";
const DELETE_MENU_ITEM = "menuItems/deleteMenuItem";

// ACTION CREATORS

const getMenuItems = (menuItems) => {
  return {
    type: GET_MENU_ITEMS,
    menuItems,
  };
};

const getMenuItem = (menuItem) => {
  return {
    type: GET_MENU_ITEM,
    menuItem,
  };
};

const createMenuItem = (menuItem) => {
  return {
    type: CREATE_MENU_ITEM,
    menuItem,
  };
};

const updateMenuItem = (menuItem) => {
  return {
    type: UPDATE_MENU_ITEM,
    menuItem,
  };
};

const deleteMenuItem = (menuItemId) => {
  return {
    type: DELETE_MENU_ITEM,
    menuItemId,
  };
};

// THUNK ACTION CREATORS

export const thunkGetMenuItems = (restaurantId) => async (dispatch) => {
  // tbd
  const res = await csrfFetch(`/api/restaurants/${restaurantId}/menuitems`);
  if (res.ok) {
    const menuItems = await res.json();
    dispatch(getMenuItems(menuItems));
    console.log('res=====>' ,res)
    return res;
  } else {
    const errors = await res.json();
    return errors;
  }
};

export const thunkGetMenuItemInfo = (menuItemId) => async (dispatch) => {
  // tbd
  const res = await csrfFetch(`/api/menuitems/${menuItemId}`);

  if (res.ok) {
    const menuItem = await res.json();
    dispatch(getMenuItem(menuItem));
    return res;
  } else {
    const errors = await res.json();
    return errors;
  }
};

// REDUCERS
const initialState = { allMenuItems: {}, singleMenuItem: {} };

const menuItemsReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case GET_MENU_ITEMS:
      // console.log(action.menuItems)
      newState = { ...state, allMenuItems: {} };
      action.menuItems.forEach((menuItem) => {
        newState.allMenuItems[menuItem.id] = menuItem;
      });
      return newState;

    case GET_MENU_ITEM:
      newState = { ...state, singleMenuItem: {} };
      newState.singleMenuItem = action.menuItem;
      return newState;

    default:
      return state;
  }
};

export default menuItemsReducer;
