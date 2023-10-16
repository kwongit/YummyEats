import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { thunkCreateMenuItem } from "../../store/menuItems";
import './CreateMenuItem.css'

export const CreateMenuItem = ({ user }) => {
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [calories, setCalories] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image_url, setImageUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const history = useHistory();
  const dispatch = useDispatch();

  const { restaurantId } = useParams();

  useEffect(() => {
    const errors = {};

    if (!name) errors.name = "Name is required";
    if (!name || name.length < 2)
      errors.name = "Name needs to be 2 or more characters";
    if (name.length > 29) errors.name = "Name must be less than 30 characters";
    if (size.length > 20) errors.size = "Size must be less than 20 characters";
    if (calories < 0) errors.calories = "Calories must be zero or greater";
    if (!price || price < 0) errors.price = "Valid price is required";
    if (!image_url) errors.image_url = "Preview image is required";

    setErrors(errors);
  }, [name, size, calories, price, description, image_url]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setSubmitted(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("size", size);
    formData.append("calories", calories);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("imageUrl", image_url);

    if (!Object.values(errors).length) {
      const addMenuItem = await dispatch(
        thunkCreateMenuItem(formData, restaurantId)
      );

      const combinedErrors = { ...errors, Errors: addMenuItem.errors };

      if (addMenuItem.errors) {
        setErrors(combinedErrors);
      } else {
        history.push(`/menuitems/${addMenuItem.id}`);
      }
    }
    setIsSubmitting(false);
  };

  return (
    <div className='create-menu-item-page'>
      <div className="create-menu-item-form-container">
        <h1>Create a New Menu Item</h1>
        <form onSubmit={handleSubmit} encType="multipart/form-data">

          <div className="name-container">
            <div className="create-menu-item-container">
              <label>Item Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Item Name"
                required={true}
              />
              {errors.name && submitted && (
                <p className="on-submit-errors">{errors.name}</p>
              )}
            </div>
          </div>

          <div className="size-container">
            <div className="create-menu-item-container">
              <label>Size</label>
              <input
                type="text"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                placeholder="Size"
              />
              {errors.size && submitted && (
                <p className="on-submit-errors">{errors.size}</p>
              )}
            </div>
          </div>

          <div className="calories-container">
            <div className="create-menu-item-container">
              <label>Calories</label>
              <input
                type="number"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                placeholder="Calories"
              />
              {errors.calories && submitted && (
                <p className="on-submit-errors">{errors.calories}</p>
              )}
            </div>
          </div>

          <div className="price-container">
            <div className="create-menu-item-container">
              <label>Item Price</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Item Price"
                required={true}
              />
              {errors.price && submitted && (
                <p className="on-submit-errors">{errors.price}</p>
              )}
            </div>
          </div>

          <div className="description-container">
            <div className="create-menu-item-container">
              <label>Item Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Add a description for your item."
                rows='5'
              />
              {errors.description && submitted && (
                <p className="on-submit-errors">{errors.description}</p>
              )}
            </div>
          </div>

          <div className="images-container">
            <div className="create-menu-item-container">
              <label>Submit a link to one photo to create your menu item.</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImageUrl(e.target.files[0])}
                placeholder="Preview Image URL"
                required={true}
              />
              {errors.image_url && submitted && (
                <p className="on-submit-errors">{errors.image_url}</p>
              )}
            </div>
          </div>

          <div className="button-container">
            <button
              className="create-menu-item-button"
              type="submit"
              disabled={
                !(
                  name ||
                  price ||
                  image_url
                )
              }
            >
              Create Menu Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
