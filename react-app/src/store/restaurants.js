import { csrfFetch } from "./csrf";

// TYPE CONSTANTS

const GET_RESTAURANTS = "restaurants/getRestaurants";
const GET_RESTAURANT = "restaurants/getRestaurant";
const CREATE_RESTAURANT = "restaurants/createRestaurant";
const UPDATE_RESTAURANT = "restaurants/updateRestaurant";
const DELETE_RESTAURANT = "restaurants/deleteRestaurant";

// ACTION CREATORS

const getRestaurants = (restaurants) => {
  return {
    type: GET_RESTAURANTS,
    restaurants,
  };
};

const getRestaurant = (restaurant) => {
  return {
    type: GET_RESTAURANT,
    restaurant,
  };
};

const createRestaurant = (restaurant) => {
  return {
    type: CREATE_RESTAURANT,
    restaurant,
  };
};

const updateRestaurant = (restaurant) => {
  return {
    type: UPDATE_RESTAURANT,
    restaurant,
  };
};

const deleteRestaurant = (restaurantId) => {
  return {
    type: DELETE_RESTAURANT,
    restaurantId,
  };
};

// THUNK ACTION CREATORS

export const thunkGetRestaurants = () => async (dispatch) => {
  const res = await csrfFetch("/api/restaurants");

  if (res.ok) {
    const restaurants = await res.json();
    dispatch(getRestaurants(restaurants));
    return res;
  } else {
    const errors = await res.json();
    return errors;
  }
};

export const thunkGetRestaurantInfo = (restaurantId) => async (dispatch) => {
  const res = await csrfFetch(`/api/restaurants/${restaurantId}`);

  if (res.ok) {
    const restaurant = await res.json();
    dispatch(getRestaurant(restaurant));
    return res;
  } else {
    const errors = await res.json();
    return errors;
  }
};

export const thunkCreateRestaurant = (restaurant, user) => async (dispatch) => {
  const res = await csrfFetch("/api/restaurants/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(restaurant),
  });

  if (res.ok) {
    const data = await res.json();
    return data;
  } else {
    const errors = await res.json();
    return errors;
  }
};

export const thunkGetUserRestaurants = () => async (dispatch) => {
  const res = await csrfFetch("/api/restaurants/current");

  if (res.ok) {
    const restaurants = await res.json();
    dispatch(getRestaurants(restaurants));
    return res;
  } else {
    const errors = await res.json();
    return errors;
  }
};

export const thunkUpdateRestaurant =
  (restaurant, restaurantId) => async (dispatch) => {
    const res = await csrfFetch(`/api/restaurants/${restaurantId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(restaurant),
    });

    if (res.ok) {
      const data = await res.json();
      dispatch(updateRestaurant(data));
      return data;
    } else {
      const errors = await res.json();
      return errors;
    }
  };

export const thunkDeleteRestaurant = (restaurantId) => async (dispatch) => {
  const res = await csrfFetch(`/api/restaurants/${restaurantId}`, {
    method: "DELETE",
  });

  dispatch(deleteRestaurant(restaurantId));
  return res;
};

// REDUCERS
const initialState = { allRestaurants: {}, singleRestaurant: {} };

const restaurantsReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case GET_RESTAURANTS:
      newState = { ...state, allRestaurants: {} };
      action.restaurants.restaurants.forEach((restaurant) => {
        newState.allRestaurants[restaurant.id] = restaurant;
      });
      return newState;

    case GET_RESTAURANT:
      newState = { ...state, singleRestaurant: {} };
      newState.singleRestaurant = action.restaurant;
      return newState;

    case CREATE_RESTAURANT:
      newState = {
        ...state,
        allRestaurants: { ...state.allRestaurants },
        singleRestaurant: { ...action.restaurant },
      };
      newState.allRestaurants[action.restaurant.id] = action.restaurant;
      return newState;

    case UPDATE_RESTAURANT:
      newState = {
        ...state,
        allRestaurants: {},
        singleRestaurant: { ...state.singleRestaurant },
      };
      newState.singleRestaurant = {
        ...newState.singleRestaurant,
        ...action.restaurant,
      };
      return newState;

    case DELETE_RESTAURANT:
      newState = {
        ...state,
        allRestaurants: { ...state.allRestaurants },
        singleRestaurant: {},
      };
      delete newState.allRestaurants[action.restaurantId];
      return newState;

    default:
      return state;
  }
};

export default restaurantsReducer;
