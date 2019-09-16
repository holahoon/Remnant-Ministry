import React, { Fragment } from "react";

// import Navbar from "../components/Navbar/Navbar";
// import Footers from "../components/Footers/Footers";

import "./Layout.css";

const layout = props => {
  return (
    <Fragment>
      <main className={props.layoutClass}>{props.children}</main>
      {/*<Footers />*/}
    </Fragment>
  );
};

export default layout;
