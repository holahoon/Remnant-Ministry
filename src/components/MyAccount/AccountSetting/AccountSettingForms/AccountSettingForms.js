import React from "react";

import ChangeSavedMessage from "../../ChangeSavedMessage/ChangeSavedMessage";

import ArrowRight16 from "@carbon/icons-react/es/arrow--right/16";

const accountSettingForms = props => {
  const saveButtongroup = (
    <React.Fragment>
      <button
        className={"button-1-1--global"}
        onClick={() =>
          props.cancelEditHandler("password", "showEditSavedPassword")
        }
      >
        Cancel
      </button>
      <button
        className={"button-1-2--global"}
        onClick={() =>
          props.saveEditHandler("password", "showEditSavedPassword")
        }
      >
        Save
        <ArrowRight16 className={"Next-arrow"} />
      </button>
    </React.Fragment>
  );

  let saved = <ChangeSavedMessage />;
  if (!props.stateData.showEditSavedPassword) {
    saved = null;
  }

  return (
    <div className={"Col-6 margin-left-3"}>
      <div>
        <h5 className={"Account-edit-title"}>
          Your account
          <span
            className={props.stateData.password ? null : "editing"}
            onClick={() =>
              props.editHandler("password", "showEditSavedPassword")
            }
          >
            Edit
          </span>
        </h5>
      </div>
      <form className={"Edit-form"}>
        <div className={"Edit-form-row1"}>
          <label>
            Old password
            <input
              type="password"
              disabled={props.stateData.password}
              className={props.stateData.password ? null : "editing-background"}
            />
          </label>
          <label>
            New password
            <input
              type="password"
              disabled={props.stateData.password}
              className={props.stateData.password ? null : "editing-background"}
            />
          </label>
          <label>
            Confirm new password
            <input
              type="password"
              disabled={props.stateData.password}
              className={props.stateData.password ? null : "editing-background"}
            />
          </label>
        </div>
      </form>

      <div className={"Button-group-container"}>
        {props.stateData.password ? null : saveButtongroup}
      </div>
      {saved}
    </div>
  );
};

export default accountSettingForms;
