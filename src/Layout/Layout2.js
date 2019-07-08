import React, { Fragment } from "react";

import "./Layout2.css";

const layout2 = props => {
  return (
    <Fragment>
      <main className={"Layout-2"}>
        <div className={"Col-4 Layout-2--1"}>
          <div className={"Layout-2--1-sub"}>{props.left}</div>
        </div>
        <div className={"Col-8 Layout-2--3"}>
          <div className={"Layout-2--3-sub"}>{props.right}</div>
        </div>
      </main>
    </Fragment>
  );
};

export default layout2;
