import React from "react";

// import ChangeSavedMessage from "../../../ChangeSavedMessage/ChangeSavedMessage";

const yourChurch = props => {
  return (
    <div className={"Basic-form-container"}>
      <h5 className={"Account-edit-title"}>Your church information</h5>

      <form className={"Edit-form form-3"}>
        <div className={"form-item1"}>
          <label>
            Select your position in church
            <select
              name="positionInChurch"
              disabled={props.stateData.editProfileEditing}
            >
              <option>Select from the list</option>
              <option value="position1">position 1</option>
              <option value="position2">position 2</option>
              <option value="position3">position 3</option>
            </select>
          </label>
        </div>
        <div className="form-item2">
          <label>
            Select your training level
            <select
              name="trainingLevel"
              disabled={props.stateData.editProfileEditing}
            >
              <option>Select from the list</option>
              <option value="1cha">1 차</option>
              <option value="2cha">2 차 </option>
              <option value="3cha">3 차</option>
            </select>
          </label>
        </div>
        <div className={"form-item3"}>
          <label>
            Select your church
            <select
              name="selectYourChurch"
              disabled={props.stateData.editProfileEditing}
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
        <div className={"form-item4"}>
          <label>
            Type your church
            <input
              type="text"
              name="typeYourChurch"
              disabled={props.stateData.editProfileEditing}
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default yourChurch;

// const yourChurch = props => {
//   return (
//     <div className={"Basic-form-container"}>
//       <h5 className={"Account-edit-title"}>Your church information</h5>

//       <form className={"Edit-form"}>
//         <div className={"Edit-form-row1"}>
//           <label>
//             Select your position in church
//             <select name="positionInChurch" disabled={props.stateData.editProfileEditing}>
//               <option>Select from the list</option>
//               <option value="position1">position 1</option>
//               <option value="position2">position 2</option>
//               <option value="position3">position 3</option>
//             </select>
//           </label>

//           <label style={{ marginRight: "0" }}>
//             Select your training level
//             <select name="trainingLevel" disabled={props.stateData.editProfileEditing}>
//               <option>Select from the list</option>
//               <option value="1cha">1 차</option>
//               <option value="2cha">2 차 </option>
//               <option value="3cha">3 차</option>
//             </select>
//           </label>
//         </div>

//         <div className={"Edit-form-row2"}>
//           <label>
//             Select your church
//             <select name="selectYourChurch" disabled={props.stateData.editProfileEditing}>
//               <option>Select from the list</option>
//               <option value="church1">church 1</option>
//               <option value="church2">church 2</option>
//               <option value="church3">church 3</option>
//               <option value="church4">church 4</option>
//               <option value="church5">church 5</option>
//             </select>
//           </label>
//         </div>

//         <div className={"Edit-form-row3"}>
//           <label>
//             Type your church
//             <input
//               type="text"
//               name="typeYourChurch"
//               disabled={props.stateData.editProfileEditing}
//             />
//           </label>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default yourChurch;
