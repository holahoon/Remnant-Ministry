import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

const navbar = props => {
  return (
    <nav className={"Navbar"}>
      <div className={"NavGroup1"}>
        <NavLink to="/" className={"Logo logo--global"}>
          RM
        </NavLink>
        <ul className={"NavigationLinks"}>
          <li>
            <NavLink to="/My-Account">About us</NavLink>
          </li>
          <li>
            <NavLink to="/Error">Message</NavLink>
          </li>
          <li>
            <NavLink to="/Error">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/Error">Praise</NavLink>
          </li>
          <li>
            <NavLink to="/Error">Training</NavLink>
          </li>
          <li>
            <NavLink to="/Error">Blog</NavLink>
          </li>
        </ul>
      </div>
      <ul className={"NavGroup2"}>
        <li>
          <NavLink to="/login">Log in</NavLink>
        </li>
        <li>
          <NavLink to="/Signup">Sign up</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;
