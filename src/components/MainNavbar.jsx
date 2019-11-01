import React from "react";
import { NavLink } from "react-router-dom";

export default function MainNavbar() {
  return (
    <div className="MainNavbar">
      <NavLink
        exact
        activeClassName="MainNavbar__link MainNavbar__link--main"
        to="/"
      >
        React Presidents
      </NavLink>

      <NavLink exact activeClassName="MainNavbar__link" to="/about">
        About
      </NavLink>

      <NavLink exact activeClassName="MainNavbar__link" to="/list-presidents">
        Presidents
      </NavLink>
    </div>
  );
}
