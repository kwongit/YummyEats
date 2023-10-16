import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { NavLink, useHistory } from "react-router-dom";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();
  const history = useHistory();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    history.push("/");
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");
  const closeMenu = () => setShowMenu(false);

  return (
    <>
      <div className="user-nav">

        <button className="user-button-container" onClick={openMenu}>
          <i className="fa-solid fa-bars"></i>
          {/* <i className="fas fa-user-circle" /> */}
        </button>
      </div>
      <ul className={ulClassName} ref={ulRef} id="menu-drop-down">
        {user ? (
          <>
<div id="user-name-container">
            <li> Hello, {user.username}</li>
            <li>{user.email}</li>
            </div>
            {user ? (

          <span>
            <NavLink
            className="create-new-restaurant menu-navLinks"
            to="/restaurants/new"
            onClick={closeMenu}
            >
              Create a New Restaurant
            </NavLink>
          </span>
        ) : (
          ""
        )}
            <li>
              <NavLink exact to="/account/current" className="manage-account menu-navLinks"
              onClick={closeMenu}>
                Manage Account
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/restaurants/current"
                className="manage-restaurants-current menu-navLinks"
                onClick={closeMenu}
              >
                Manage Restaurants
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/reviews/current"
                className="manage-reviews-current menu-navLinks"
                onClick={closeMenu}
              >
                Manage Reviews
              </NavLink>
            </li>
            <li className="logout-button-container">
              <button className="logout-button menu-button" onClick={handleLogout}>
                Log Out
              </button>
            </li>
          </>
        ) : (
          <div id="sign-in-container">
            <OpenModalButton className=" menu-button"
              buttonText="Log In"
              onItemClick={closeMenu}
              modalComponent={<LoginFormModal />}
            />

            <OpenModalButton className=" menu-button"
              buttonText="Sign Up"
              onItemClick={closeMenu}
              modalComponent={<SignupFormModal />}
            />
          </div>
        )}
      </ul>
    </>
  );
}

export default ProfileButton;
