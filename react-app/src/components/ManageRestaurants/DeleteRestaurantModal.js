import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { thunkDeleteRestaurant } from "../../store/restaurants";
import './Deleterestaurant.css'
export const DeleteRestaurantModal = ({ restaurantId }) => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const handleClick = (e) => {
    e.preventDefault();

    return dispatch(thunkDeleteRestaurant(restaurantId)).then(closeModal);
  };

  return (
    <div className="delete-modal-content">
      <div className="delete-restaurant-container">
        <h3>Confirm Delete</h3>
        <p>
          Are you sure you want to remove this restaurant from the listings?
        </p>
        <div className="yes-no-container">

          <button className="yes-button" type="button" onClick={handleClick}>
            Yes (Delete restaurant)
          </button>
          <button className="no-button" type="button" onClick={closeModal}>
            No (Keep restaurant)
          </button>

        </div>
      </div>
    </div>
  );
};
