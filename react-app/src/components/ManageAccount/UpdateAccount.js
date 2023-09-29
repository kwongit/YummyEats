import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { updateAccount } from "../../store/session";
import OpenModalButton from "../OpenModalButton";
import { DeleteAccountModal } from "./DeleteAccountModal";

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
      }
      console.log("ERRORS>>>>", errors);
      history.push("/");
    } else {
      setErrors([
        "Confirm Password field must be the same as the Password field",
      ]);
    }
  };

  return (
    <>
      <h1>Update Account</h1>
      <form onSubmit={handleSubmit}>
        <ul>{errors}</ul>
        <label>
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label>
          Confirm Password
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Update</button>
      </form>

      <OpenModalButton
        className="delete-button"
        buttonText="Delete"
        modalComponent={<DeleteAccountModal />}
      />
    </>
  );
};
