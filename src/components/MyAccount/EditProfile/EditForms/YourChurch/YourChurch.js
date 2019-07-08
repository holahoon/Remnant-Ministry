import React from "react";

import ChangeSavedMessage from "../../../ChangeSavedMessage/ChangeSavedMessage";

import ArrowRight16 from "@carbon/icons-react/es/arrow--right/16";

const yourChurch = props => {
  // const saveButtongroup = (
  //   <React.Fragment>
  //     <button
  //       className={"button-1-1--global"}
  //       onClick={() =>
  //         props.cancelEditHandler("yourChurch", "showEditSavedYourChurch")
  //       }
  //     >
  //       Cancel
  //     </button>
  //     <button
  //       className={"button-1-2--global"}
  //       onClick={() =>
  //         props.saveEditHandler("yourChurch", "showEditSavedYourChurch")
  //       }
  //     >
  //       Save
  //       <ArrowRight16 className={"Next-arrow"} />
  //     </button>
  //   </React.Fragment>
  // );

  // let saved = <ChangeSavedMessage />;
  // if (!props.stateData.showEditSavedYourChurch) {
  //   saved = null;
  // }

  return (
    <div className={"Col-6 margin-left-3 Basic-form-container"}>
      <h5 className={"Account-edit-title"}>Your church information</h5>
      <div>
        <form className={"Edit-form"}>
          <div className={"Edit-form-row1"}>
            <label>
              Select your position in church
              <select
                name="positionInChurch"
                disabled={props.stateData.editting}
              >
                <option>Select from the list</option>
                <option value="position1">position 1</option>
                <option value="position2">position 2</option>
                <option value="position3">position 3</option>
              </select>
            </label>

            <label style={{ marginRight: "0" }}>
              Select your training level
              <select name="trainingLevel" disabled={props.stateData.editting}>
                <option>Select from the list</option>
                <option value="1cha">1 차</option>
                <option value="2cha">2 차 </option>
                <option value="3cha">3 차</option>
              </select>
            </label>
          </div>

          <div className={"Edit-form-row2"}>
            <label>
              Select your church
              <select
                name="selectYourChurch"
                disabled={props.stateData.editting}
              >
                <option>Select from the list</option>
                <option value="church1">church 1</option>
                <option value="church2">church 2</option>
                <option value="church3">church 3</option>
                <option value="church4">church 4</option>
                <option value="church5">church 5</option>
              </select>
            </label>
          </div>

          <div className={"Edit-form-row3"}>
            <label>
              Type your church
              <input
                type="text"
                name="typeYourChurch"
                disabled={props.stateData.editting}
              />
            </label>
          </div>
        </form>

        {/*<div className={"Button-group-container"}>
          {props.stateData.yourChurch ? null : saveButtongroup}
        </div>
              {saved}*/}
      </div>
    </div>
  );
};

export default yourChurch;
