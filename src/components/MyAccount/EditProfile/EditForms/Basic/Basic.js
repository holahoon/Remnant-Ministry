import React from "react";

import ChangeSavedMessage from "../../../ChangeSavedMessage/ChangeSavedMessage";

import DayPickerInput from "react-day-picker/DayPickerInput";

import ArrowRight16 from "@carbon/icons-react/es/arrow--right/16";

import "react-day-picker/lib/style.css";

const basic = props => {
  // const saveButtongroup = (
  //   <React.Fragment>
  //     <button
  //       className={"button-1-1--global"}
  //       onClick={() =>
  //         props.cancelEditHandler("basicEdit", "showEditSavedBasicEdit")
  //       }
  //     >
  //       Cancel
  //     </button>
  //     <button
  //       className={"button-1-2--global"}
  //       onClick={() =>
  //         props.saveEditHandler("basicEdit", "showEditSavedBasicEdit")
  //       }
  //     >
  //       Save
  //       <ArrowRight16 className={"Next-arrow"} />
  //     </button>
  //   </React.Fragment>
  // );

  // let saved = <ChangeSavedMessage />;
  // if (!props.stateData.showEditSavedBasicEdit) {
  //   saved = null;
  // }

  return (
    <div className={"Col-6 margin-left-3 Basic-form-container"}>
      <h5 className={"Account-edit-title"}>Basic information</h5>
      <div>
        <form className={"Edit-form"}>
          <div className={"Edit-form-row1"}>
            <label>
              First name
              <input
                type="text"
                name="firstName"
                disabled={props.stateData.editting}
              />
            </label>

            <label>
              Last name
              <input
                type="text"
                name="lastName"
                disabled={props.stateData.editting}
              />
            </label>

            <label>
              Korean name (optional)
              <input
                type="text"
                name="koreanName"
                disabled={props.stateData.editting}
              />
            </label>
          </div>

          <div className={"Edit-form-row2"}>
            <label>
              Date of birth
              <DayPickerInput disabled={props.stateData.editting} />
            </label>

            <label>
              Gender
              <select
                name="genderSelection"
                disabled={props.stateData.editting}
              >
                <option value="not-selected">Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </label>

            <label>
              Preferred Language
              <select
                name="langaugeSelection"
                disabled={props.stateData.editting}
              >
                <option value="english">English</option>
                <option value="korean">Korean</option>
                <option value="spanish">Spanish</option>
              </select>
            </label>
          </div>
        </form>

        {/*<div className={"Button-group-container"}>
          {props.stateData.basicEdit ? null : saveButtongroup}
        </div>
              {saved}*/}
      </div>
    </div>
  );
};

export default basic;
