import React from "react";

import "./Backdrop.css";

const backdrop = props => {
  return props.show ? <div className={"Backdrop"} /> : null;
};

export default backdrop;
