import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../context/Modal";
import { deleteAccount } from "../../store/session";
import { useHistory } from "react-router-dom";
import "./Account.css";

export const DeleteAccountModal = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { closeModal } = useModal();
  const sessionUser = useSelector((state) => state.session.user);

  const handleClick = (e) => {
    e.preventDefault();

    dispatch(deleteAccount(sessionUser.id));
    closeModal();
    history.push("/");
  };

  return (
    <div className="delete-modal-content">
      <div className="delete-account-container">
        <h3>Confirm Delete</h3>
        <p>Are you sure you want to delete this account?</p>
        <div className="yes-no-container">
          <button className="yes-button" type="button" onClick={handleClick}>
            Yes
          </button>
          <button className="no-button" type="button" onClick={closeModal}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};
