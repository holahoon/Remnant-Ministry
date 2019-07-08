import React from "react";

import ChangeSavedMessage from "../../../ChangeSavedMessage/ChangeSavedMessage";

import ArrowRight16 from "@carbon/icons-react/es/arrow--right/16";

const yourField = props => {
  // const saveButtongroup = (
  //   <React.Fragment>
  //     <button
  //       className={"button-1-1--global"}
  //       onClick={() =>
  //         props.cancelEditHandler("yourField", "showEditSavedYourField")
  //       }
  //     >
  //       Cancel
  //     </button>
  //     <button
  //       className={"button-1-2--global"}
  //       onClick={() =>
  //         props.saveEditHandler("yourField", "showEditSavedYourField")
  //       }
  //     >
  //       Save
  //       <ArrowRight16 className={"Next-arrow"} />
  //     </button>
  //   </React.Fragment>
  // );

  // let saved = <ChangeSavedMessage />;
  // if (!props.stateData.showEditSavedYourField) {
  //   saved = null;
  // }

  return (
    <div className={"Col-6 margin-left-3 Basic-form-container"}>
      <h5 className={"Account-edit-title"}>Your field information</h5>
      <div>
        <form className={"Edit-form"}>
          <div className={"Edit-form-row1"}>
            <label>
              School
              <input
                type="text"
                name="school"
                disabled={props.stateData.editting}
              />
            </label>

            <label>
              Grade
              <select name="grade" disabled={props.stateData.editting}>
                <option>Your school grade</option>
                <option value="1st-grade">1st grade</option>
                <option value="2nd-grade">2nd grade</option>
                <option value="3rd-grade">3rd grade</option>
                <option value="4th-grade">4th grade</option>
                <option value="5th-grade">5th grade</option>
                <option value="6th-grade">6th grade</option>
                <option value="7th-grade">7th grade</option>
              </select>
            </label>

            <label>
              Major
              <input
                type="text"
                name="major"
                disabled={props.stateData.editting}
              />
            </label>
          </div>

          <div className={"Edit-form-row2"}>
            <label>
              Areas of interest / Specialty
              <select
                name="specialtySelection"
                disabled={props.stateData.editting}
              >
                <option>Select from the list</option>
                <option value="specialty1">interest 1</option>
                <option value="specialty2">interest 2</option>
                <option value="specialty3">interest 3</option>
                <option value="specialty4">interest 4</option>
                <option value="specialty5">interest 5</option>
              </select>
            </label>

            <label>
              Company
              <input
                type="text"
                name="company"
                disabled={props.stateData.editting}
              />
            </label>

            <label>
              Title (Company)
              <input
                type="text"
                name="companyTitle"
                disabled={props.stateData.editting}
              />
            </label>
          </div>
        </form>

        {/*<div className={"Button-group-container"}>
          {props.stateData.yourField ? null : saveButtongroup}
        </div>
              {saved}*/}
      </div>
    </div>
  );
};

export default yourField;
