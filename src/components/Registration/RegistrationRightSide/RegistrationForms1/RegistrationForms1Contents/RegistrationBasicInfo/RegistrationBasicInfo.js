import React from "react";

// import Input from "../../../../Input/Input";

const registrationBasicInfo = props => {
  // console.log("basic: ", props.formElementsArray);

  // let basicForm = (
  //   <form className={"Registration-form Regist-form-1"}>
  //     {props.formElementsArray.map(eachEl => (
  //       <Input
  //         key={eachEl.id}
  //         elementType={eachEl.config.elementType}
  //         elementConfig={eachEl.config.elementConfig}
  //         label={eachEl.config.elementConfig.placeholder}
  //         value={eachEl.config.value}
  //         onChangeHandler={event => props.onChangeHandler(event, eachEl.id)}
  //       />
  //     ))}
  //   </form>
  // );

  const { basicInfo, basicInfoError } = props.stateData;
  console.log(basicInfoError.firstNameRegistration);
  return (
    <div className={"Basic-form-container"}>
      <h5 className={"Register-h5-title"}>Basic information</h5>
      {/*basicForm*/}

      <form className={"Registration-form Regist-form-1"}>
        <div>
          <label>
            First name
            <input
              className={
                basicInfoError.firstNameRegistration ? "InputError" : null
              }
              type="text"
              name="firstNameRegistration"
              value={basicInfo.firstNameRegistration}
              placeholder="First Name"
              onChange={props.onChangeHandler}
            />
          </label>
        </div>
        <div>
          <label>
            Last name
            <input
              className={
                basicInfoError.lastNameRegistration ? "InputError" : null
              }
              type="text"
              name="lastNameRegistration"
              value={basicInfo.lastNameRegistration}
              placeholder="Last Name"
              onChange={props.onChangeHandler}
            />
          </label>
        </div>
        <div>
          <label>
            Korean name (optional)
            <input
              type="text"
              name="koreanNameRegistration"
              value={basicInfo.koreanNameRegistration}
              placeholder="Korean Name"
              onChange={props.onChangeHandler}
            />
          </label>
        </div>
        <div>
          <label>
            Date of birth
            <input
              className={
                basicInfoError.dateOfBirthRegistration ? "InputError" : null
              }
              type="text"
              name="dateOfBirthRegistration"
              value={basicInfo.dateOfBirthRegistration}
              placeholder="MM/DD/YYYY"
              onChange={props.onChangeHandler}
            />
          </label>
        </div>
        <div>
          <label>
            Gender
            <select
              className={
                basicInfoError.genderRegistration ? "InputError" : null
              }
              name="genderRegistration"
              value={basicInfo.genderRegistration}
              onChange={props.onChangeHandler}
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Preferred Language
            <select
              className={
                basicInfoError.preferredLanguageRegistration
                  ? "InputError"
                  : null
              }
              name="preferredLanguageRegistration"
              value={basicInfo.preferredLanguageRegistration}
              onChange={props.onChangeHandler}
            >
              <option value="">Select</option>
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

export default registrationBasicInfo;

// import React from "react";

// const registrationBasicInfo = props => {
//   return (
//     <div>
//       <h5 className={"Register-h5-title"}>Basic information</h5>
//       <div>
//         <form className={"Registration-form"}>
//           <div className={"Registration-form-row1"}>
//             <label>
//               First name
//               <input type="text" name="firstNameRegistration" />
//             </label>

//             <label>
//               Last name
//               <input type="text" name="lastNameRegistration" />
//             </label>

//             <label>
//               Korean name (optional)
//               <input type="text" name="koreanNameRegistration" />
//             </label>
//           </div>

//           <div className={"Registration-form-row2"}>
//             <label>
//               Date of birth
//               <input type="text" name="dateOfBirthRegistration" />
//             </label>

//             <label>
//               Gender
//               <select name="genderRegistration">
//                 <option value="not-selected">Selected your gender</option>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//               </select>
//             </label>

//             <label>
//               Preferred Language
//               <select name="preferredLanguageRegistration">
//                 <option value="english">English</option>
//                 <option value="korean">Korean</option>
//                 <option value="spanish">Spanish</option>
//               </select>
//             </label>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default registrationBasicInfo;
