import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { UseFirebase } from "../../Contexts/firebase";
import { CiUser } from "react-icons/ci";

const Header = () => {
  const { userInfo, setUserInfo } = UseFirebase();

  const handleLogOut = () => {
    try {
      setUserInfo({
        ...userInfo,
        user: null,
        token: null,
      });

      localStorage.removeItem("reliefNow");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className= "navbar-container" >
    <nav className="container navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="#">
        ReliefNow
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="#">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="#">
              Request Help
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <NavLink
              className="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Resources
            </NavLink>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <NavLink className="dropdown-item" to="#">
                Food
              </NavLink>
              <NavLink className="dropdown-item" to="#">
                Shelter
              </NavLink>
              <NavLink className="dropdown-item" to="#">
                Medical
              </NavLink>
            </div>
          </li>

          <li className="nav-item">
            {userInfo?.token ? (
              userInfo?.user.photoURL ? (
                <>
                  <img
                    src={userInfo?.user.photoURL}
                    className="profileIcon-small"
                    alt="profile pic"
                  />
                </>
              ) : (
                <>
                  <CiUser className="nav-icon" />
                  <span>{userInfo?.user?.name}</span>
                  <span className="ms-3" onClick={handleLogOut}>LogOut</span>
                </>
              )
            ) : (
              <NavLink className="nav-link" to="/register">
                SignUp
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    </nav>
    </div>
  );
};

export default Header;