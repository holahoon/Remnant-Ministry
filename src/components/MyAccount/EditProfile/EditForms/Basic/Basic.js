import React from "react";

import ChangeSavedMessage from "../../../ChangeSavedMessage/ChangeSavedMessage";

import "react-day-picker/lib/style.css";

const basic = props => {
  return (
    <div className={"Basic-form-container"}>
      <h5 className={"Account-edit-title"}>Basic information</h5>

      <form className={"Edit-form form-1"}>
        <div className={"form-item1"}>
          <label>
            First name
            <input
              type="text"
              name="firstName"
              disabled={props.stateData.editProfileEditing}
            />
          </label>
        </div>
        <div className={"form-item2"}>
          <label>
            Last name
            <input
              type="text"
              name="lastName"
              disabled={props.stateData.editProfileEditing}
            />
          </label>
        </div>
        <div className={"form-item3"}>
          <label>
            Korean name (optional)
            <input
              type="text"
              name="koreanName"
              disabled={props.stateData.editProfileEditing}
            />
          </label>
        </div>
        <div className={"form-item4"}>
          <label>
            Date of birth
            <input
              type="text"
              name="dateOfBirth"
              disabled={props.stateData.editProfileEditing}
            />
          </label>
        </div>
        <div className={"form-item5"}>
          <label>
            Gender
            <select
              name="genderSelection"
              disabled={props.stateData.editProfileEditing}
            >
              <option value="not-selected">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
        </div>
        <div className={"form-item6"}>
          <label>
            Preferred Language
            <select
              name="langaugeSelection"
              disabled={props.stateData.editProfileEditing}
            >
              <option value="english">English</option>
              <option value="korean">Korean</option>
              <option value="spanish">Spanish</option>
            </select>
          </label>
        </div>
      </form>
    </div>
  );
};

export default basic;

// import React from "react";

// import ChangeSavedMessage from "../../../ChangeSavedMessage/ChangeSavedMessage";

// import DayPickerInput from "react-day-picker/DayPickerInput";

// import "react-day-picker/lib/style.css";

// const basic = props => {
//   return (
//     <div className={"Basic-form-container"}>
//       <h5 className={"Account-edit-title"}>Basic information</h5>

//         <form className={"Edit-form"}>
//           <div className={"Edit-form-row1"}>
//             <label>
//               First name
//               <input
//                 type="text"
//                 name="firstName"
//                 disabled={props.stateData.editProfileEditing}
//               />
//             </label>

//             <label>
//               Last name
//               <input
//                 type="text"
//                 name="lastName"
//                 disabled={props.stateData.editProfileEditing}
//               />
//             </label>

//             <label>
//               Korean name (optional)
//               <input
//                 type="text"
//                 name="koreanName"
//                 disabled={props.stateData.editProfileEditing}
//               />
//             </label>
//           </div>

//           <div className={"Edit-form-row2"}>
//             <label>
//               Date of birth
//               <DayPickerInput disabled={props.stateData.editProfileEditing} />
//             </label>

//             <label>
//               Gender
//               <select
//                 name="genderSelection"
//                 disabled={props.stateData.editProfileEditing}
//               >
//                 <option value="not-selected">Select your gender</option>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//               </select>
//             </label>

//             <label>
//               Preferred Language
//               <select
//                 name="langaugeSelection"
//                 disabled={props.stateData.editProfileEditing}
//               >
//                 <option value="english">English</option>
//                 <option value="korean">Korean</option>
//                 <option value="spanish">Spanish</option>
//               </select>
//             </label>
//           </div>
//         </form>

//     </div>
//   );
// };

// export default basic;
