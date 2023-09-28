import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { thunkGetRestaurantInfo } from "../../store/restaurants";
import { UpdateRestaurant } from "./UpdateRestaurant";

export const GetRestaurantToUpdate = () => {
  const dispatch = useDispatch();
  const { restaurantId } = useParams();
  console.log("restaurant id =====>>>>>>", restaurantId)
  const oneRestaurant = useSelector(
    (state) => state.restaurant.singleRestaurant
  );

  useEffect(() => {
    dispatch(thunkGetRestaurantInfo(restaurantId))
    
  }, [restaurantId, dispatch]);

  if (!oneRestaurant.id) return null;

  return (
    <>
      <UpdateRestaurant
        formType="UpdateRestaurant"
        restaurant={oneRestaurant}
      />
    </>
  );
};
