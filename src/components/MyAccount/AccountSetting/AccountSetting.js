import React from "react";

import AccountSettingForm from "./AccountSettingForms/AccountSettingForms";
import { RegularButton } from "../../UI/Button/Button";
import ChangeSavedMessage from "../ChangeSavedMessage/ChangeSavedMessage";

import "./AccountSetting.css";

const accountSetting = props => {
  const buttonGroup = (
    <div className={"Button-group-container"}>
      <RegularButton
        buttonClass={"button-1-1--global"}
        handleButtonClick={() =>
          props.cancelEditHandler("accountSettingEditing")
        }
      >
        Cancel
      </RegularButton>
      <RegularButton
        buttonClass={"button-1-2--global"}
        handleButtonClick={() => props.saveEditHandler("accountSettingEditing")}
      >
        Save
      </RegularButton>
    </div>
  );

  const savedMessage = <ChangeSavedMessage />;

  return (
    <div className={"Account-setting-container Col-6 margin-left-3"}>
      <AccountSettingForm stateData={props.mainStateData} />

      {props.mainStateData.accountSettingEditing ? savedMessage : buttonGroup}
    </div>
  );
};

export default accountSetting;
