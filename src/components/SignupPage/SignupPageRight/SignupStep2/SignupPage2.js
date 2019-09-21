import React from "react";

import InputForm from "../../../UI/InputForm/InputForm";
import { RegularButton } from "../../../UI/Button/Button";

// import DayPickerInput from "react-day-picker/DayPickerInput";
import ArrowRight20 from "@carbon/icons-react/es/arrow--right/20";

// import "react-day-picker/lib/style.css";
import "./SignupPage2.css";

const signupPage2 = props => {
  const signupPage2Array = [];
  for (let key in props.pageState.signupPage2) {
    signupPage2Array.push({
      id: key,
      config: props.pageState.signupPage2[key]
    });
  }

  let signupPage2InputFirst = signupPage2Array.map((eachEl, index) => {
    // Skip the last two elements in the array
    if (index < signupPage2Array.length - 2) {
      return (
        <InputForm
          key={eachEl.id}
          elementType={eachEl.config.elementType}
          elementConfig={eachEl.config.elementConfig}
          label={eachEl.config.elementConfig.label}
          value={eachEl.config.value}
          valid={eachEl.config.valid}
          touched={eachEl.config.touched}
          optional={eachEl.config.optional}
          visible={eachEl.config.visible}
          onChangeHandler={event =>
            props.onChangeHandler(event, eachEl.id, "signupPage2")
          }
        />
      );
    }
    // let inputF = (<InputForm
    //   key={eachEl.id}
    //   elementType={eachEl.config.elementType}
    //   elementConfig={eachEl.config.elementConfig}
    //   label={eachEl.config.elementConfig.label}
    //   value={eachEl.config.value}
    //   valid={eachEl.config.valid}
    //   touched={eachEl.config.touched}
    //   optional={eachEl.config.optional}
    //   visible={eachEl.config.visible}
    //   onChangeHandler={event =>
    //     props.onChangeHandler(event, eachEl.id, "signupPage2")
    //   }
    // />)
  });

  let signupPage2InputSecond = signupPage2Array.map((eachEl, index) => {
    // return the alst two elements in the array
    if (index > signupPage2Array.length - 3) {
      return (
        <InputForm
          key={eachEl.id}
          elementType={eachEl.config.elementType}
          elementConfig={eachEl.config.elementConfig}
          label={eachEl.config.elementConfig.label}
          value={eachEl.config.value}
          valid={eachEl.config.valid}
          touched={eachEl.config.touched}
          optional={eachEl.config.optional}
          visible={eachEl.config.visible}
          onChangeHandler={event =>
            props.onChangeHandler(event, eachEl.id, "signupPage2")
          }
        />
      );
    }
  });

  return (
    <React.Fragment>
      <h5 className={"SignupPage2-title"}>Basic information</h5>
      <form className={"Signup-page-2-first"}>{signupPage2InputFirst}</form>

      <h5 className={"SignupPage2-title"}>Your church information</h5>
      <form className={"Signup-page-2-second"}>{signupPage2InputSecond}</form>

      <div className="Signup-button-container">
        <RegularButton
          buttonClass={"Signup-button-signup-1"}
          handleButtonClick={props.completeSignupHandler}
        >
          Sign up <ArrowRight20 className={"Next-arrow"} />
        </RegularButton>
      </div>
    </React.Fragment>
  );
};

export default signupPage2;

// import React from "react";

// import { RegularButton } from "../../../UI/Button/Button";

// import DayPickerInput from "react-day-picker/DayPickerInput";
// import ArrowRight20 from "@carbon/icons-react/es/arrow--right/20";

// import "react-day-picker/lib/style.css";
// import "./SignupPage2.css";

// const signupPage2 = props => {
//   const churchNotListed = (
//     <div className={"Church-selection-not-listed"}>
//       <label>
//         Type your church
//         <input type="text" name="typeChurch" />
//       </label>
//     </div>
//   );

//   return (
//     <React.Fragment>
//       <form className={""}>
//         <h5 className={"SignupPage2-title"}>Basic information</h5>
//         <div className={"Name-container"}>
//           <div className={"Row-1"}>
//             <div>
//               <label>
//                 First name
//                 <input className={"First-name"} type="text" name="firstName" />
//               </label>
//             </div>

//             <div>
//               <label>
//                 Last name
//                 <input className={"Last-name"} type="text" name="lastName" />
//               </label>
//             </div>

//             <div>
//               <label>
//                 Korean name (optional)
//                 <input type="text" name="koreanName" />
//               </label>
//             </div>
//           </div>

//           <div className={"Row-2"}>
//             <div>
//               <label>
//                 Date of birth
//                 <DayPickerInput />
//               </label>
//             </div>

//             <div>
//               <label>
//                 Gender
//                 <select name="genderSelection">
//                   <option value="not-selected">Selected your gender</option>
//                   <option value="male">Male</option>
//                   <option value="female">Female</option>
//                 </select>
//               </label>
//             </div>

//             <div>
//               <label>
//                 Preferred Language
//                 <select name="langaugeSelection">
//                   <option value="english">English</option>
//                   <option value="korean">Korean</option>
//                   <option value="spanish">Spanish</option>
//                 </select>
//               </label>
//             </div>
//           </div>

//           <div className={"Row-3"}>
//             <div>
//               <label>
//                 Phone number
//                 <input
//                   className={"Phone-number"}
//                   type="tel"
//                   name="phoneNumber"
//                   placeholder="000-000-0000"
//                 />
//               </label>
//             </div>

//             <div>
//               <label>
//                 Areas of interest / Specialty
//                 <select name="specialtySelection">
//                   <option>Select from the list</option>
//                   <option value="specialty1">interest 1</option>
//                   <option value="specialty2">interest 2</option>
//                   <option value="specialty3">interest 3</option>
//                   <option value="specialty4">interest 4</option>
//                   <option value="specialty5">interest 5</option>
//                 </select>
//               </label>
//             </div>
//           </div>
//         </div>

//         <h5 className={"SignupPage2-title"}>Your church information</h5>
//         <div className={"Church-selection"}>
//           <label>
//             Select your church
//             <select name="churchSelection">
//               <option>Select from the list</option>
//               <option value="church1">church 1</option>
//               <option value="church2">church 2</option>
//               <option value="church3">church 3</option>
//               <option value="church4">church 4</option>
//               <option value="church5">church 5</option>
//               <option value="churchNotListed">Not listed</option>
//             </select>
//           </label>
//         </div>

//         {props.churchListed ? null : churchNotListed}
//       </form>

//       <div className="Signup-button-container">
//         <RegularButton
//           buttonClass={"Signup-button-signup-1"}
//           handleButtonClick={props.completeSignupHandler}
//         >
//           Sign up <ArrowRight20 className={"Next-arrow"} />
//         </RegularButton>
//       </div>
//     </React.Fragment>
//   );
// };

// export default signupPage2;
