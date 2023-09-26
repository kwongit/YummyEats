import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { thunkUpdateRestaurant } from "../../store/restaurants";

export const UpdateRestaurant = ({ restaurant }) => {
  const [address, setAddress] = useState(restaurant?.address);
  const [city, setCity] = useState(restaurant?.city);
  const [state, setState] = useState(restaurant?.state);
  const [name, setName] = useState(restaurant?.name);
  const [type, setType] = useState(restaurant?.type);
  const [price, setPrice] = useState(restaurant?.price);
  const [open_hours, setOpenHours] = useState(restaurant?.open_hours);
  const [close_hours, setCloseHours] = useState(restaurant?.close_hours);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const history = useHistory();
  const dispatch = useDispatch();

  if (!restaurant) {
    history.push("/");
  }

  useEffect(() => {
    const errors = {};

    if (!address) errors.address = "Address is required";
    if (!city) errors.city = "City is required";
    if (!state) errors.state = "State is required";
    if (!name || name.length < 2)
      errors.description = "Name needs 2 or more characters";
    if (!name) errors.name = "Name is required";
    if (name.length > 29) errors.name = "Name must be less than 30 characters";
    if (!type) errors.type = "Type is required";
    if (!price || price < 1) errors.price = "Price is required";
    if (!open_hours) errors.open_hours = "Open hours is required";
    if (!close_hours) errors.close_hours = "Close hours is required";

    setErrors(errors);
  }, [address, city, state, name, type, price, open_hours, close_hours]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    const updatedRestaurant = {
      address,
      city,
      state,
      name,
      type,
      price,
      open_hours,
      close_hours,
    };

    if (!Object.values(errors).length) {
      const updateRestaurant = await dispatch(
        thunkUpdateRestaurant(updatedRestaurant, restaurant.id)
      );

      const combinedErrors = { ...errors, Errors: updateRestaurant.errors };

      if (updateRestaurant.errors) {
        setErrors(combinedErrors);
      } else {
        history.push(`/restaurants/${restaurant.id}`);
      }
    }
  };

  return (
    <div className="create-restaurant-form-container">
      <h1>Update Your Restaurant</h1>
      <form onSubmit={handleSubmit}>
        <div className="location-container">
          <div className="address-container">
            <div className="address-container">
              <label>Store Address</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Store Address"
              />
              {errors.address && submitted && (
                <p className="on-submit-errors">{errors.address}</p>
              )}
            </div>
          </div>

          <div className="city-and-state-container">
            <div className="city-container">
              <label>City</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="City"
              />
              {errors.city && submitted && (
                <p className="on-submit-errors">{errors.city}</p>
              )}
            </div>
            <div className="state-container">
              <label>State</label>
              <input
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
                placeholder="State"
              />
              {errors.state && submitted && (
                <p className="on-submit-errors">{errors.state}</p>
              )}
            </div>
          </div>
        </div>

        <div className="name-container">
          <div className="name-container">
            <label>Restaurant Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Restaurant Name"
            />
            {errors.name && submitted && (
              <p className="on-submit-errors">{errors.name}</p>
            )}
          </div>
        </div>

        <div className="type-container">
          <div className="type-container">
            <label>Restaurant Type</label>
            <input
              type="text"
              value={type}
              onChange={(e) => setType(e.target.value)}
              placeholder="Restaurant Type"
            />
            {errors.type && submitted && (
              <p className="on-submit-errors">{errors.type}</p>
            )}
          </div>
        </div>

        <div className="price-container">
          <div className="price-container">
            <label>Restaurant Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Restaurant Price"
            />
            {errors.price && submitted && (
              <p className="on-submit-errors">{errors.price}</p>
            )}
          </div>
        </div>

        <div className="store-hours-container">
          <div className="store-open-hours-container">
            <label>Restaurant Open Hours</label>
            <input
              type="text"
              value={open_hours}
              onChange={(e) => setOpenHours(e.target.value)}
              placeholder="Restaurant Open Hours"
            />
            {errors.open_hours && submitted && (
              <p className="on-submit-errors">{errors.open_hours}</p>
            )}
          </div>
          <div className="store-close-hours-container">
            <label>Restaurant Close Hours</label>
            <input
              type="text"
              value={close_hours}
              onChange={(e) => setCloseHours(e.target.value)}
              placeholder="Restaurant Close Hours"
            />
            {errors.close_hours && submitted && (
              <p className="on-submit-errors">{errors.close_hours}</p>
            )}
          </div>
        </div>

        <div className="button-container">
          <button
            className="create-restaurant-button"
            type="submit"
            disabled={
              !(
                address ||
                city ||
                state ||
                name ||
                type ||
                price ||
                open_hours ||
                close_hours
              )
            }
          >
            Update Restaurant
          </button>
        </div>
      </form>
    </div>
  );
};
