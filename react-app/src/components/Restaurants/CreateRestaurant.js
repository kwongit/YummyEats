import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { thunkCreateRestaurant } from "../../store/restaurants";
import "./CreateRestaurant.css";

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
    if (!open_hours) errors.open_hours = "Open hours is required";
    if (!close_hours) errors.close_hours = "Close hours is required";
    if (!image_url) errors.image_url = "Preview image is required";

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

    const formData = new FormData();
    formData.append("address", address);
    formData.append("city", city);
    formData.append("state", state);
    formData.append("name", name);
    formData.append("type", type);
    formData.append("price", price);
    formData.append("open_hours", open_hours);
    formData.append("close_hours", close_hours);
    formData.append("image_url", image_url);

    if (!Object.values(errors).length) {
      const addRestaurant = await dispatch(
        thunkCreateRestaurant(formData, user)
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
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        id="form-container"
      >
        <h2>Create a New Restaurant</h2>
        <div className="location-container">
          <h3>Get Started</h3>

          <div className="form-div-container">
            <div className="address-container label-container">
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

          <div className="city-container label-container">
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

          <div className="state-container label-container">
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

        <div className="form-div-container">
          <div className="name-container label-container">
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

        <div className="form-div-container">
          <div className="type-container label-container">
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
              <option value="Other">Other</option>
            </select>
            {errors.type && submitted && (
              <p className="on-submit-errors">{errors.type}</p>
            )}
          </div>
        </div>

        <div className="form-div-container">
          <div className="price-container label-container">
            <label>Restaurant Price</label>
            <select onChange={(e) => setPrice(e.target.value)}>
              <option value="0">Select Expensiveness</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
            </select>
            {errors.price && submitted && (
              <p className="on-submit-errors">{errors.price}</p>
            )}
          </div>
        </div>

        <div className="form-div-container">
          <div className="store-open-hours-container label-container">
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
          <div className="store-close-hours-container label-container">
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

        <div id="image-url-con" >
          <h3>Liven up your restaurant with photos</h3>
          <p>Submit a link to at least one photo to publish your restaurant.</p>
          <div className="image-url-container ">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImageUrl(e.target.files[0])}
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
