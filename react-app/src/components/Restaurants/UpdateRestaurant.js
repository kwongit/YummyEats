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
  const [image_url, setImageUrl] = useState(restaurant?.image_url);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const history = useHistory();
  const dispatch = useDispatch();

  if (!restaurant) {
    history.push("/");
  }

  useEffect(() => {
    const errors = {};

    // setAddress(restaurant.address);
    // setCity(restaurant.city);
    // setState(restaurant.state);
    // setName(restaurant.name);
    // setType(restaurant.type);
    // setPrice(restaurant.price);
    // setOpenHours(restaurant.open_hours);
    // setCloseHours(restaurant.close_hours);
    // setImageUrl(restaurant.image_url);

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
    if (!image_url) errors.image_url = "Preview image is required";
    if (
      image_url &&
      !image_url.endsWith("jpg") &&
      !image_url.endsWith("jpeg") &&
      !image_url.endsWith("png")
    )
      errors.image_url = "Image URL must end in .png, .jpg, or .jpeg";

    setErrors(errors);
  }, [
    address,
    city,
    state,
    name,
    type,
    price,
    open_hours,
    close_hours,
    image_url,
    restaurant,
  ]);

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
      image_url,
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
            <select onChange={(e) => setType(e.target.value)}>
              <option value="0">Select Type</option>
              <option value="American">American</option>
              <option value="Asian">Asian</option>
              <option value="Breakfast and Brunch">Breakfast and Brunch</option>
              <option value="Cafe">Cafe</option>
              <option value="Mexican">Mexican</option>
              <option value="Pizza">Pizza</option>
              <option value="Wings">Wings</option>
            </select>
            {errors.type && submitted && (
              <p className="on-submit-errors">{errors.type}</p>
            )}
          </div>
        </div>

        <div className="price-container">
          <div className="price-container">
            <label>Restaurant Expensiveness</label>
            <select onChange={(e) => setPrice(e.target.value)}>
              <option value="0">Select Expensiveness</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            {errors.price && submitted && (
              <p className="on-submit-errors">{errors.price}</p>
            )}
          </div>
        </div>

        <div className="store-hours-container">
          <div className="store-open-hours-container">
            <label>Restaurant Open Hours</label>
            <select onChange={(e) => setOpenHours(e.target.value)}>
              <option value="0">Select Open Hours</option>
              <option value="1:00">1:00</option>
              <option value="1:30">1:30</option>
              <option value="2:00">2:00</option>
              <option value="2:30">2:30</option>
              <option value="3:00">3:00</option>
              <option value="3:30">3:30</option>
              <option value="4:00">4:00</option>
              <option value="4:30">4:30</option>
              <option value="5:00">5:00</option>
              <option value="5:30">5:30</option>
              <option value="6:00">6:00</option>
              <option value="6:30">6:30</option>
              <option value="7:00">7:00</option>
              <option value="7:30">7:30</option>
              <option value="8:00">8:00</option>
              <option value="8:30">8:30</option>
              <option value="9:00">9:00</option>
              <option value="9:30">9:30</option>
              <option value="10:00">10:00</option>
              <option value="10:30">10:30</option>
              <option value="11:00">11:00</option>
              <option value="11:30">11:30</option>
              <option value="12:00">12:00</option>
              <option value="12:30">12:30</option>
            </select>
            {errors.open_hours && submitted && (
              <p className="on-submit-errors">{errors.open_hours}</p>
            )}
          </div>
          <div className="store-close-hours-container">
            <label>Restaurant Close Hours</label>
            <select onChange={(e) => setCloseHours(e.target.value)}>
              <option value="0">Select Close Hours</option>
              <option value="1:00">1:00</option>
              <option value="1:30">1:30</option>
              <option value="2:00">2:00</option>
              <option value="2:30">2:30</option>
              <option value="3:00">3:00</option>
              <option value="3:30">3:30</option>
              <option value="4:00">4:00</option>
              <option value="4:30">4:30</option>
              <option value="5:00">5:00</option>
              <option value="5:30">5:30</option>
              <option value="6:00">6:00</option>
              <option value="6:30">6:30</option>
              <option value="7:00">7:00</option>
              <option value="7:30">7:30</option>
              <option value="8:00">8:00</option>
              <option value="8:30">8:30</option>
              <option value="9:00">9:00</option>
              <option value="9:30">9:30</option>
              <option value="10:00">10:00</option>
              <option value="10:30">10:30</option>
              <option value="11:00">11:00</option>
              <option value="11:30">11:30</option>
              <option value="12:00">12:00</option>
              <option value="12:30">12:30</option>
            </select>
            {errors.close_hours && submitted && (
              <p className="on-submit-errors">{errors.close_hours}</p>
            )}
          </div>
        </div>

        <div className="images-container">
          <label>Preview image</label>
          <div className="image-url-container">
            <input
              type="url"
              value={image_url}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Preview Image URL"
            />
            {errors.image_url && submitted && (
              <p className="on-submit-errors">{errors.image_url}</p>
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
                close_hours ||
                image_url
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
