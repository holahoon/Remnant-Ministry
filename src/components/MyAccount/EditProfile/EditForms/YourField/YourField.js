import React from "react";

const yourField = props => {
  return (
    <div className={"Basic-form-container"}>
      <h5 className={"Account-edit-title"}>Your field information</h5>

      <form className={"Edit-form form-2"}>
        <div>
          <label>
            School
            <input
              type="text"
              name="school"
              disabled={props.stateData.editProfileEditing}
            />
          </label>
        </div>
        <div>
          <label>
            Grade
            <select name="grade" disabled={props.stateData.editProfileEditing}>
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
        </div>
        <div>
          <label>
            Major
            <input
              type="text"
              name="major"
              disabled={props.stateData.editProfileEditing}
            />
          </label>
        </div>

        <div>
          <label>
            Areas of interest / Specialty
            <select
              name="specialtySelection"
              disabled={props.stateData.editProfileEditing}
            >
              <option>Select from the list</option>
              <option value="specialty1">interest 1</option>
              <option value="specialty2">interest 2</option>
              <option value="specialty3">interest 3</option>
              <option value="specialty4">interest 4</option>
              <option value="specialty5">interest 5</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Company
            <input
              type="text"
              name="company"
              disabled={props.stateData.editProfileEditing}
            />
          </label>
        </div>
        <div>
          <label>
            Title (Company)
            <input
              type="text"
              name="companyTitle"
              disabled={props.stateData.editProfileEditing}
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default yourField;

// const yourField = props => {
//   return (
//     <div className={"Basic-form-container"}>
//       <h5 className={"Account-edit-title"}>Your field information</h5>

//       <form className={"Edit-form"}>
//         <div className={"Edit-form-row1"}>
//           <label>
//             School
//             <input
//               type="text"
//               name="school"
//               disabled={props.stateData.editProfileEditing}
//             />
//           </label>

//           <label>
//             Grade
//             <select name="grade" disabled={props.stateData.editProfileEditing}>
//               <option>Your school grade</option>
//               <option value="1st-grade">1st grade</option>
//               <option value="2nd-grade">2nd grade</option>
//               <option value="3rd-grade">3rd grade</option>
//               <option value="4th-grade">4th grade</option>
//               <option value="5th-grade">5th grade</option>
//               <option value="6th-grade">6th grade</option>
//               <option value="7th-grade">7th grade</option>
//             </select>
//           </label>

//           <label>
//             Major
//             <input
//               type="text"
//               name="major"
//               disabled={props.stateData.editProfileEditing}
//             />
//           </label>
//         </div>

//         <div className={"Edit-form-row2"}>
//           <label>
//             Areas of interest / Specialty
//             <select
//               name="specialtySelection"
//               disabled={props.stateData.editProfileEditing}
//             >
//               <option>Select from the list</option>
//               <option value="specialty1">interest 1</option>
//               <option value="specialty2">interest 2</option>
//               <option value="specialty3">interest 3</option>
//               <option value="specialty4">interest 4</option>
//               <option value="specialty5">interest 5</option>
//             </select>
//           </label>

//           <label>
//             Company
//             <input
//               type="text"
//               name="company"
//               disabled={props.stateData.editProfileEditing}
//             />
//           </label>

//           <label>
//             Title (Company)
//             <input
//               type="text"
//               name="companyTitle"
//               disabled={props.stateData.editProfileEditing}
//             />
//           </label>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default yourField;
