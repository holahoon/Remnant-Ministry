import React from "react";

const registrationFieldInfo = props => {
  const {
    schoolRegistration,
    gradeRegistration,
    majorRegistration,
    specialtyRegistration,
    companyRegistration,
    companyTitleRegistration
  } = props.stateData.registrationFormValidation;

  return (
    <div>
      <h5 className={"Register-h5-title"}>Field information</h5>

      <form className={"Registration-form Regist-form-2"}>
        <div>
          <label>
            School
            <input
              className={
                !schoolRegistration.touched
                  ? null
                  : schoolRegistration.valid
                  ? null
                  : "InputError"
              }
              type="text"
              name="schoolRegistration"
              value={schoolRegistration.value}
              placeholder="School"
              onChange={props.onChangeHandler}
            />
          </label>
        </div>
        <div>
          <label>
            Grade
            <select
              className={
                !gradeRegistration.touched
                  ? null
                  : gradeRegistration.valid
                  ? null
                  : "InputError"
              }
              name="gradeRegistration"
              value={gradeRegistration.value}
              onChange={props.onChangeHandler}
            >
              <option value="">Select</option>
              <option value="1st-grade">1st grade</option>
              <option value="2nd-grade">2nd grade</option>
              <option value="3rd-grade">3rd grade</option>
              <option value="4th-grade">4th grade</option>
              <option value="5th-grade">5th grade</option>
              <option value="6th-grade">6th grade</option>
              <option value="7th-grade">7th grade</option>
              <option value="8th-grade">8th grade</option>
              <option value="college">college / University</option>
              <option value="not-applicable">Not applicable</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Major
            <input
              className={
                !majorRegistration.touched
                  ? null
                  : majorRegistration.valid
                  ? null
                  : "InputError"
              }
              type="text"
              name="majorRegistration"
              placeholder="Major"
              value={majorRegistration.value}
              onChange={props.onChangeHandler}
            />
          </label>
        </div>
        <div>
          <label>
            Areas of interest / Specialty
            <select
              className={
                !specialtyRegistration.touched
                  ? null
                  : specialtyRegistration.valid
                  ? null
                  : "InputError"
              }
              name="specialtyRegistration"
              value={specialtyRegistration.value}
              onChange={props.onChangeHandler}
            >
              <option value="">Select</option>
              <option value="specialty1">interest 1</option>
              <option value="specialty2">interest 2</option>
              <option value="specialty3">interest 3</option>
              <option value="specialty4">interest 4</option>
              <option value="specialty5">interest 5</option>
              <option value="not-applicable">Not applicable</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Company
            <input
              className={
                !companyRegistration.touched
                  ? null
                  : companyRegistration.valid
                  ? null
                  : "InputError"
              }
              type="text"
              name="companyRegistration"
              placeholder="Company"
              value={companyRegistration.value}
              onChange={props.onChangeHandler}
            />
          </label>
        </div>
        <div>
          <label>
            Title (Company)
            <input
              className={
                !companyTitleRegistration.touched
                  ? null
                  : companyTitleRegistration.valid
                  ? null
                  : "InputError"
              }
              type="text"
              name="companyTitleRegistration"
              placeholder="Title"
              value={companyTitleRegistration.value}
              onChange={props.onChangeHandler}
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default registrationFieldInfo;

// import React from "react";

// const registrationFieldInfo = props => {
//   return (
//     <div>
//       <h5 className={"Register-h5-title"}>Field information</h5>
//       <div>
//         <form className={"Registration-form"}>
//           <div className={"Registration-form-row1"}>
//             <label>
//               School
//               <input type="text" name="school-register" />
//             </label>

//             <label>
//               Grade
//               <select name="grade-register">
//                 <option>Your school grade</option>
//                 <option value="1st-grade">1st grade</option>
//                 <option value="2nd-grade">2nd grade</option>
//                 <option value="3rd-grade">3rd grade</option>
//                 <option value="4th-grade">4th grade</option>
//                 <option value="5th-grade">5th grade</option>
//                 <option value="6th-grade">6th grade</option>
//                 <option value="7th-grade">7th grade</option>
//               </select>
//             </label>

//             <label>
//               Major
//               <input type="text" name="major-register" />
//             </label>
//           </div>

//           <div className={"Registration-form-row2"}>
//             <label>
//               Areas of interest / Specialty
//               <select name="specialtySelection-register">
//                 <option>Select from the list</option>
//                 <option value="specialty1">interest 1</option>
//                 <option value="specialty2">interest 2</option>
//                 <option value="specialty3">interest 3</option>
//                 <option value="specialty4">interest 4</option>
//                 <option value="specialty5">interest 5</option>
//               </select>
//             </label>

//             <label>
//               Company
//               <input type="text" name="company-register" />
//             </label>

//             <label>
//               Title (Company)
//               <input type="text" name="companyTitle-register" />
//             </label>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default registrationFieldInfo;

// import React from "react";

// const registrationFieldInfo = props => {
//   return (
//     <div>
//       <h5 className={"Account-edit-title"}>Field information</h5>
//       <div>
//         <form className={"Registration-form"}>
//           <div className={"Col-2-8"} style={{ marginLeft: "24px" }}>
//             <label>
//               School
//               <input type="text" name="school-register" />
//             </label>
//           </div>

//           <div className={"Col-2-8"} style={{ marginLeft: "24px" }}>
//             <label>
//               Grade
//               <select name="grade-register">
//                 <option>Your school grade</option>
//                 <option value="1st-grade">1st grade</option>
//                 <option value="2nd-grade">2nd grade</option>
//                 <option value="3rd-grade">3rd grade</option>
//                 <option value="4th-grade">4th grade</option>
//                 <option value="5th-grade">5th grade</option>
//                 <option value="6th-grade">6th grade</option>
//                 <option value="7th-grade">7th grade</option>
//               </select>
//             </label>
//           </div>

//           <div className={"Col-2-8"} style={{ marginLeft: "24px" }}>
//             <label>
//               Major
//               <input type="text" name="major-register" />
//             </label>
//           </div>

//           <div >
//             <label>
//               Areas of interest / Specialty
//               <select name="specialtySelection-register">
//                 <option>Select from the list</option>
//                 <option value="specialty1">interest 1</option>
//                 <option value="specialty2">interest 2</option>
//                 <option value="specialty3">interest 3</option>
//                 <option value="specialty4">interest 4</option>
//                 <option value="specialty5">interest 5</option>
//               </select>
//             </label>
//           </div>

//           <label>
//             Company
//             <input type="text" name="company-register" />
//           </label>

//           <label>
//             Title (Company)
//             <input type="text" name="companyTitle-register" />
//           </label>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default registrationFieldInfo;
