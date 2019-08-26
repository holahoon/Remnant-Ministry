import React from "react";

import Basic from "./EditForms/Basic/Basic";
import YourField from "./EditForms/YourField/YourField";
import YourChurch from "./EditForms/YourChurch/YourChurch";
import YourAddress from "./EditForms/YourAddress/YourAddress";
import { RegularButton } from "../../UI/Button/Button";
import ChangeSavedMessage from "../ChangeSavedMessage/ChangeSavedMessage";

import "./EditProfile.css";

const editProfile = props => {
  const buttonGroup = (
    <div className={"Button-group-container"}>
      <RegularButton
        buttonClass={"button-1-1--global"}
        handleButtonClick={() => props.cancelEditHandler("editProfileEditing")}
      >
        Cancel
      </RegularButton>
      <RegularButton
        buttonClass={"button-1-2--global"}
        handleButtonClick={() => props.saveEditHandler("editProfileEditing")}
      >
        Save
      </RegularButton>
    </div>
  );

  const savedMessage = <ChangeSavedMessage />;

  return (
    <div className={"Edit-profile-container Col-6 margin-left-3"}>
      <div className={"Edit-container"}>
        <Basic stateData={props.mainStateData} />
      </div>
      <div className={"Edit-container"}>
        <YourField stateData={props.mainStateData} />
      </div>
      <div className={"Edit-container"}>
        <YourChurch stateData={props.mainStateData} />
      </div>
      <div className={"Edit-container"}>
        <YourAddress stateData={props.mainStateData} />
      </div>

      {props.mainStateData.editProfileEditing ? savedMessage : buttonGroup}
    </div>
  );
};

export default editProfile;
