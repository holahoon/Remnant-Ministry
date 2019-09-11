import React from "react";

import InputForm from "../../../UI/InputForm/InputForm";
import ContinueWith from "../ContinueWith/ContinueWith";
import { RegularButton } from "../../../UI/Button/Button";

import ArrowRight20 from "@carbon/icons-react/es/arrow--right/20";

import "./SignupPage1.css";

const signupPage1 = props => {
  const signupPage1Array = [];
  for (let key in props.signupPage1) {
    if (key === "formValidation") {
      continue;
    }
    signupPage1Array.push({
      id: key,
      config: props.signupPage1[key]
    });
  }

  let signupPage1Input = (
    <form className={"Registration-form Signup-page-1"}>
      {signupPage1Array.map(eachEl => (
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
            props.onChangeHandler(event, eachEl.id, "signupPage1")
          }
        />
      ))}
      <p
        className={"signup-password-warning"}
        style={{
          display: `${
            props.signupPage1.password.touched &&
            !props.signupPage1.password.valid
              ? "block"
              : "none"
          }`
        }}
      >
        Password must be at least 6 characters
      </p>
    </form>
  );

  console.log(signupPage1Array);
  return (
    <React.Fragment>
      <ContinueWith />
      {signupPage1Input}

      <div className={"Signup-agreement"}>
        <p className={"Col-6-8"}>
          By clicking the Next button, I agree to Remnant Ministry’s Terms of
          Service and Privacy Policy.
        </p>
      </div>

      <div className="Next-button-container">
        <RegularButton
          buttonClass={"Next-button-signup-1"}
          handleButtonClick={props.signupNextStepHandler}
        >
          Next <ArrowRight20 className={"Next-arrow"} />
        </RegularButton>
      </div>
    </React.Fragment>
  );
};

export default signupPage1;

// import React from "react";

// import ContinueWith from "../ContinueWith/ContinueWith";
// import { RegularButton } from "../../../UI/Button/Button";

// import ArrowRight20 from "@carbon/icons-react/es/arrow--right/20";

// import "./SignupPage1.css";

// const signupPage1 = props => {
//   return (
//     <React.Fragment>
//       <form className={""}>
//         <ContinueWith />

//         <div className={"Login-email-container"}>
//           <label>
//             Email
//             <input
//               className={"Login-email"}
//               type="email"
//               name="signupEmail"
//               placeholder="email@rutc.com"
//               required
//               onChange={props.onChangeHandler}
//             />
//           </label>
//         </div>

//         <div className={"Signup-password"}>
//           <label>
//             Password
//             <input
//               className={"Login-password"}
//               type="password"
//               name="signupPassword"
//               placeholder="******"
//               required
//             />
//           </label>
//           <label>
//             Confirm password
//             <input
//               className={"Login-password"}
//               type="password"
//               name="signupPasswordConfirmation"
//               placeholder="******"
//               required
//             />
//           </label>
//         </div>

//         <div className={"Signup-agreement"}>
//           <p className={"Col-6-8"}>
//             By clicking the Next button, I agree to Remnant Ministry’s Terms of
//             Service and Privacy Policy.
//           </p>
//         </div>
//       </form>

//       <div className="Next-button-container">
//         {/*<button
//           className={"Next-button-signup-1"}
//           onClick={props.signupNextStepHandler}
//         >
//           Next <ArrowRight20 className={"Next-arrow"} />
//         </button>*/}
//         <RegularButton
//           buttonClass={"Next-button-signup-1"}
//           handleButtonClick={props.signupNextStepHandler}
//         >
//           Next <ArrowRight20 className={"Next-arrow"} />
//         </RegularButton>
//       </div>
//     </React.Fragment>
//   );
// };

// export default signupPage1;
