import React from "react";
import SyncLoader from "react-spinners/SyncLoader";

const loadingSpinner = props => (
  <div>
    <SyncLoader
      //   css={override}
      sizeUnit={"px"}
      size={15}
      color={"#054ADA"}
      margin={"8px"}
      loading={props.loading}
    />
  </div>
);

export default loadingSpinner;
