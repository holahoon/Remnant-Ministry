import React from "react";

import ChangeSavedMessage from "../../../ChangeSavedMessage/ChangeSavedMessage";

import ArrowRight16 from "@carbon/icons-react/es/arrow--right/16";

const yourAddress = props => {
  // const saveButtongroup = (
  //   <React.Fragment>
  //     <button
  //       className={"button-1-1--global"}
  //       onClick={() =>
  //         props.cancelEditHandler("yourAddress", "showEditSavedYourAddress")
  //       }
  //     >
  //       Cancel
  //     </button>
  //     <button
  //       className={"button-1-2--global"}
  //       onClick={() =>
  //         props.saveEditHandler("yourAddress", "showEditSavedYourAddress")
  //       }
  //     >
  //       Save
  //       <ArrowRight16 className={"Next-arrow"} />
  //     </button>
  //   </React.Fragment>
  // );

  // let saved = <ChangeSavedMessage />;
  // if (!props.stateData.showEditSavedYourAddress) {
  //   saved = null;
  // }

  return (
    <div className={"Col-6 margin-left-3 Basic-form-container"}>
      <h5 className={"Account-edit-title"}>Your address information</h5>
      <div>
        <form className={"Edit-form"}>
          <div className={"Edit-form-row1"}>
            <label>
              Street address
              <input
                type="text"
                name="street-address"
                disabled={props.stateData.editting}
              />
            </label>

            <label>
              Apt, Suite, Unit (Optional)
              <input
                type="text"
                name="apt-suite-unit"
                disabled={props.stateData.editting}
              />
            </label>

            <label>
              City
              <input
                type="text"
                name="city"
                disabled={props.stateData.editting}
              />
            </label>
          </div>

          <div className={"Edit-form-row2"}>
            <label>
              State
              <select name="state" disabled={props.stateData.editting}>
                <option>Select state</option>
                <option value="state1">State 1</option>
                <option value="state2">State 2</option>
                <option value="state3">State 3</option>
                <option value="state4">State 4</option>
                <option value="state5">State 5</option>
              </select>
            </label>

            <label>
              Postal code
              <input
                type="text"
                name="postal-code"
                disabled={props.stateData.editting}
              />
            </label>

            <label>
              Phone number
              <input
                type="tel"
                name="phone-number"
                pattern="[0-9{3}-[0-9]{3}-[0-9]{4}]"
                placeholder="000-000-0000"
                disabled={props.stateData.editting}
              />
            </label>
          </div>
        </form>

        {/*<div className={"Button-group-container"}>
          {props.stateData.yourAddress ? null : saveButtongroup}
        </div>
              {saved}*/}
      </div>
    </div>
  );
};

export default yourAddress;
