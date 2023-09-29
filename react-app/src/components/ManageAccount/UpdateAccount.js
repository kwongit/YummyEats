import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { updateAccount } from "../../store/session";
import OpenModalButton from "../OpenModalButton";
import { DeleteAccountModal } from "./DeleteAccountModal";
import "./Account.css";

export const UpdateAccount = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState(sessionUser.email || "");
  const [username, setUsername] = useState(sessionUser.username || "");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (!sessionUser) return <Redirect to="/" />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const data = await dispatch(
        updateAccount(username, email, password, sessionUser.id)
      );
      if (data.errors && data) {
        setErrors(data.errors);
      } else {
        history.push("/");
        alert("Successfully updated account!");
      }
    } else {
      setErrors([
        "Confirm Password field must be the same as the Password field",
      ]);
    }
  };

  return (
    <div className="update-account-form-container">
      <h1>Update Account</h1>
      <form onSubmit={handleSubmit}>
        <ul className="errors-container">
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <div className="input-container">
          <div className="email-container">
            <label>Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="username-container">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="password-container">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="enter password"
            />
          </div>
          <div className="confirmPassword-container">
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="confirm password"
            />
          </div>
        </div>
        <div className="update-button-container">
          <button className="open-modal-button" type="submit">
            Update
          </button>
        </div>
      </form>
      <OpenModalButton
        className="delete-button"
        buttonText="Delete Account"
        modalComponent={<DeleteAccountModal />}
      />
    </div>
  );
};
