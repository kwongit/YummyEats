// TYPE CONSTANTS

const GET_MENU_ITEMS = "menuItems/getMenuItems";
const GET_MENU_ITEM = "menuItems/getMenuItem";
const DELETE_MENU_ITEM = "menuItems/deleteMenuItem";
const GET_ALL_MENU_ITEMS = "menuItems/getAllMenuItems";

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

const deleteMenuItem = (menuItemId) => {
  return {
    type: DELETE_MENU_ITEM,
    menuItemId,
  };
};

const getAllMenuItems = (menuItems)=> {
  return {
    type: GET_ALL_MENU_ITEMS,
    menuItems,
  };

}

//! THUNK ACTION CREATORS

export const thunkGetMenuItems = (restaurantId) => async (dispatch) => {
  const res = await fetch(`/api/restaurants/${restaurantId}/menuitems`);
  if (res.ok) {
    const menuItems = await res.json();
    dispatch(getMenuItems(menuItems));
    return res;
  } else {
    const errors = await res.json();
    return errors;
  }
};

export const thunkGetMenuItemInfo = (menuItemId) => async (dispatch) => {
  const res = await fetch(`/api/menuitems/${menuItemId}`);

  if (res.ok) {
    const menuItem = await res.json();
    dispatch(getMenuItem(menuItem));
    return res;
  } else {
    const errors = await res.json();
    return errors;
  }
};

export const thunkCreateMenuItem =
  (menuItem, restaurantId) => async (dispatch) => {
    const res = await fetch(`/api/restaurants/${restaurantId}/createmenuitem`, {
      method: "POST",
      body: menuItem,
    });

    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      const errors = await res.json();
      return errors;
    }
  };

export const thunkDeleteMenuItem = (menuItemId) => async (dispatch) => {
  const res = await fetch(`/api/menuitems/${menuItemId}`, {
    method: "DELETE",
  });

  dispatch(deleteMenuItem(menuItemId));
  return res;
};

//!
export const thunkGetAllMenuItems = () => async (dispatch) => {
  const res = await fetch(`/api/menuitems`);
  if (res.ok) {
    const menuItems = await res.json();
    dispatch(getAllMenuItems(menuItems));
    console.log('menu items in thunk ===>>>>>+++' ,menuItems)
    return res;
  } else {
    const errors = await res.json();
    console.log('errors in thunk =====>>>' ,errors)
    return errors;
  }
};
//!


// REDUCERS
const initialState = { allMenuItems: {}, singleMenuItem: {}, allRestaurantsMenuItems:{} };

const menuItemsReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case GET_MENU_ITEMS:
      newState = { ...state, allMenuItems: {} };
      action.menuItems.forEach((menuItem) => {
        newState.allMenuItems[menuItem.id] = menuItem;
      });
      return newState;

    case GET_MENU_ITEM:
      newState = { ...state, singleMenuItem: {} };
      newState.singleMenuItem = action.menuItem;
      return newState;

    case DELETE_MENU_ITEM:
      newState = {
        ...state,
        allMenuItems: { ...state.allMenuItems },
        singleMenuItem: {},
      };
      delete newState.allMenuItems[action.menuItemId];
      return newState;

      case GET_ALL_MENU_ITEMS:
      newState = { ...state, allRestaurantsMenuItems: {} };
      action.menuItems.forEach((menuItem) => {
        newState.allRestaurantsMenuItems[menuItem.id] = menuItem;
      });
      return newState;

    default:
      return state;
  }
};

export default menuItemsReducer;
