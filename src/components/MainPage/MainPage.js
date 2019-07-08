import React from "react";
import { NavLink } from "react-router-dom";

import ArrowRight20 from "@carbon/icons-react/es/arrow--right/20";

import "./MainPage.css";

const mainPage = props => {
  return (
    <div className={"Content"}>
      <div className={"Header Col-4 margin-left-2"}>
        <div className={"white-line"} />

        <div>
          <h2>2019</h2>
          <h3 className={"margin-left-1"}>Nov 28-30 Chicago</h3>
        </div>

        <h1>Remnant Conference of America</h1>

        <NavLink to="/Registration" className={"RegisterButton"}>
          Register here <ArrowRight20 className={"ArrowIcon"} />
        </NavLink>
      </div>
    </div>
  );
};

export default mainPage;
