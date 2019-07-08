import React from "react";
import { NavLink } from "react-router-dom";

import Email24 from "@carbon/icons-react/es/email/24";

import "./NavigationFooter.css";
// <div className={"Container Col-5 margin-left-2"}>
//         <div className={"LogoContainer Col-2"}>
//           <a href="/" className={"Logo logo--global"}>
//             RM
//           </a>
//           <a href="/">Remnant Ministry</a>
//         </div>

//         <ul className={"NavigationLinks1 Col-1"}>
//           <li>
//             <a href="/">About us</a>
//           </li>
//           <li>
//             <a href="/">Praise</a>
//           </li>
//           <li>
//             <a href="/">Blog</a>
//           </li>
//         </ul>

//         <ul className={"NavigationLinks2 Col-1"}>
//           <li>
//             <a href="/">Message</a>
//           </li>
//           <li>
//             <a href="/">Training</a>
//           </li>
//           <li>
//             <a href="/">Contact us</a>
//           </li>
//         </ul>
//       </div>

const navigationFooter = props => {
  return (
    <div className={"NavigationFooter"}>
      <div className={"LogoContainer Col-2 margin-left-2"}>
        <NavLink to="/" className={"Navi-Logo logo--global"}>
          RM
        </NavLink>
        <NavLink to="/">Remnant Ministry</NavLink>
      </div>

      <ul className={"NavigationLinks1 Col-1"}>
        <li>
          <NavLink to="/Error">About us</NavLink>
        </li>
        <li>
          <NavLink to="/Error">Praise</NavLink>
        </li>
        <li>
          <NavLink to="/Error">Blog</NavLink>
        </li>
      </ul>

      <ul className={"NavigationLinks2 Col-1"}>
        <li>
          <NavLink to="/Error">Message</NavLink>
        </li>
        <li>
          <NavLink to="/Error">Training</NavLink>
        </li>
        <li>
          <NavLink to="/Error">Contact us</NavLink>
        </li>
      </ul>

      <form className={"Form Col-3 margin-left-1"}>
        <label className={"Label"}>
          <Email24 className={"EmailIcon"} />
          Subscribe to newsletter
        </label>
        <input
          className={"SubscribeEmail"}
          placeholder="Email address"
          type="email"
          name="subscribe_email"
        />
      </form>
    </div>
  );
};

export default navigationFooter;
