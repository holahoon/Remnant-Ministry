import React from "react";

import CheckmarkOutline16 from "@carbon/icons-react/es/checkmark--outline/16";

import "./ChangeSavedMessage.css";

const changeSavedMessage = props => {
  return (
    <div className={"Change-saved"}>
      <CheckmarkOutline16 className={"Checkmark-outline"} />
      Change has been saved!
    </div>
  );
};

export default changeSavedMessage;
