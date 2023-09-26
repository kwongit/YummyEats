import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { thunkCreateRestaurant } from "../../store/restaurants";

export const CreateRestaurant = ({ user }) => {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [open_hours, setOpenHours] = useState("");
  const [close_hours, setCloseHours] = useState("");
  const [image_url, setImageUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const errors = {};

    if (!address) errors.address = "Address is required";
    if (!city) errors.city = "City is required";
    if (!state) errors.state = "State is required";
    if (!name || name.length < 2)
      errors.description = "Description needs 2 or more characters";
    if (!name) errors.name = "Name is required";
    if (name.length > 29) errors.name = "Name must be less than 30 characters";
    if (!type) errors.type = "Type is required";
    if (!price || price < 1) errors.price = "Price is required";
    if (!open_hours || open_hours > 12 || open_hours < 0)
      errors.open_hours = "Open hours must be less than 12";
    if (!close_hours || close_hours > 12 || close_hours < 0)
      errors.close_hours = "Close hours must be less than 12";
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
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setSubmitted(true);

    const newRestaurant = {
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
      const addRestaurant = await dispatch(
        thunkCreateRestaurant(newRestaurant, user)
      );

      const combinedErrors = { ...errors, Errors: addRestaurant.errors };

      if (addRestaurant.errors) {
        setErrors(combinedErrors);
      } else {
        history.push(`/restaurants/${addRestaurant.id}`);
      }
    }
    setIsSubmitting(false);
  };

  return (
    <div className="create-restaurant-form-container">
      <h1>Create a New Restaurant</h1>
      <form onSubmit={handleSubmit}>
        <div className="location-container">
          <h3>Get Started</h3>

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

        <div className="images-container">
          <h3>Liven up your restaurant with photos</h3>
          <p>Submit a link to at least one photo to publish your restaurant.</p>
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
            Create Restaurant
          </button>
        </div>
      </form>
    </div>
  );
};
