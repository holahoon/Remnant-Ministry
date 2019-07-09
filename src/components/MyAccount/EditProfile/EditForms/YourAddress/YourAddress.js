import React from "react";

const yourAddress = props => {
  return (
    <div className={"Basic-form-container"}>
      <h5 className={"Account-edit-title"}>Your address information</h5>

      <form className={"Edit-form form-4"}>
        <div>
          <label>
            Street address
            <input
              type="text"
              name="street-address"
              disabled={props.stateData.editProfileEditing}
            />
          </label>
        </div>
        <div>
          <label>
            Apt, Suite, Unit (Optional)
            <input
              type="text"
              name="apt-suite-unit"
              disabled={props.stateData.editProfileEditing}
            />
          </label>
        </div>
        <div>
          <label>
            City
            <input
              type="text"
              name="city"
              disabled={props.stateData.editProfileEditing}
            />
          </label>
        </div>
        <div>
          <label>
            State
            <select name="state" disabled={props.stateData.editProfileEditing}>
              <option>Select state</option>
              <option value="state1">State 1</option>
              <option value="state2">State 2</option>
              <option value="state3">State 3</option>
              <option value="state4">State 4</option>
              <option value="state5">State 5</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Postal code
            <input
              type="text"
              name="postal-code"
              disabled={props.stateData.editProfileEditing}
            />
          </label>
        </div>
        <div>
          <label>
            Phone number
            <input
              type="tel"
              name="phone-number"
              pattern="[0-9{3}-[0-9]{3}-[0-9]{4}]"
              placeholder="000-000-0000"
              disabled={props.stateData.editProfileEditing}
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default yourAddress;

// import ChangeSavedMessage from "../../../ChangeSavedMessage/ChangeSavedMessage";

// const yourAddress = props => {
//   return (
//     <div className={"Basic-form-container"}>
//       <h5 className={"Account-edit-title"}>Your address information</h5>

//       <form className={"Edit-form"}>
//         <div className={"Edit-form-row1"}>
//           <label>
//             Street address
//             <input
//               type="text"
//               name="street-address"
//               disabled={props.stateData.editProfileEditing}
//             />
//           </label>

//           <label>
//             Apt, Suite, Unit (Optional)
//             <input
//               type="text"
//               name="apt-suite-unit"
//               disabled={props.stateData.editProfileEditing}
//             />
//           </label>

//           <label>
//             City
//             <input
//               type="text"
//               name="city"
//               disabled={props.stateData.editProfileEditing}
//             />
//           </label>
//         </div>

//         <div className={"Edit-form-row2"}>
//           <label>
//             State
//             <select name="state" disabled={props.stateData.editProfileEditing}>
//               <option>Select state</option>
//               <option value="state1">State 1</option>
//               <option value="state2">State 2</option>
//               <option value="state3">State 3</option>
//               <option value="state4">State 4</option>
//               <option value="state5">State 5</option>
//             </select>
//           </label>

//           <label>
//             Postal code
//             <input
//               type="text"
//               name="postal-code"
//               disabled={props.stateData.editProfileEditing}
//             />
//           </label>

//           <label>
//             Phone number
//             <input
//               type="tel"
//               name="phone-number"
//               pattern="[0-9{3}-[0-9]{3}-[0-9]{4}]"
//               placeholder="000-000-0000"
//               disabled={props.stateData.editProfileEditing}
//             />
//           </label>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default yourAddress;
