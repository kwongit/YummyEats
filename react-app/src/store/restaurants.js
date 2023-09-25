import { csrfFetch } from "./csrf";

// TYPE CONSTANTS

const GET_RESTAURANTS = "restaurants/getRestaurants";
const GET_RESTAURANT = "restaurants/getRestaurant";
const CREATE_RESTAURANT = "restaurants/createRestaurant";
const UPDATE_RESTAURANT = "restaurants/updateRestaurant";
const DELETE_RESTAURANT = "restaurants/deleteRestaurantt";

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

const deleteRestaurantt = (restaurantId) => {
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

// REDUCERS
const initialState = { allRestaurants: {}, singleRestaurant: {} };

const restaurantsReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case GET_RESTAURANTS:
      newState = { ...state, allRestaurants: {} };
      action.restaurants.Restaurants.forEach((restaurant) => {
        newState.allRestaurants[restaurant.id] = restaurant;
      });
      return newState;

    case GET_RESTAURANT:
      newState = { ...state, singleRestaurant: {} };
      newState.singleRestaurant = action.restaurant;
      return newState;

    // case CREATE_SPOT:
    //   newState = {
    //     ...state,
    //     allSpots: { ...state.allSpots },
    //     singleSpot: { ...action.spot },
    //   };
    //   newState.allSpots[action.spot.id] = action.spot;
    //   return newState;

    // case UPDATE_SPOT:
    //   newState = {
    //     ...state,
    //     allSpots: {},
    //     singleSpot: { ...state.singleSpot },
    //   };
    //   newState.singleSpot = { ...newState.singleSpot, ...action.spot };
    //   return newState;

    // case DELETE_SPOT:
    //   newState = {
    //     ...state,
    //     allSpots: { ...state.allSpots },
    //     singleSpot: {},
    //   };
    //   delete newState.allSpots[action.spotId];
    //   return newState;

    default:
      return state;
  }
};

export default restaurantsReducer;
