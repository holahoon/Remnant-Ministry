import React from "react";
import SyncLoader from "react-spinners/SyncLoader";

import "./LoadingSpinner.css";

const loadingSpinner = props => (
  <div className={"loading-container"}>
    <SyncLoader
      //   css={override}
      sizeUnit={"px"}
      size={15}
      color={"#cecece"}
      margin={"8px"}
      loading={props.loading}
    />
  </div>
);

export default loadingSpinner;
