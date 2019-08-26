import React from "react";

import ContinueWith from "../ContinueWith/ContinueWith";
import { RegularButton } from "../../../UI/Button/Button";

import ArrowRight20 from "@carbon/icons-react/es/arrow--right/20";

import "./SignupPage1.css";

const signupPage1 = props => {
  return (
    <React.Fragment>
      <form className={""}>
        <ContinueWith />

        <div className={"Login-email-container"}>
          <label>
            Email
            <input
              className={"Login-email"}
              type="email"
              name="signupEmail"
              placeholder="email@rutc.com"
              required
              onChange={props.onChangeHandler}
            />
          </label>
        </div>

        <div className={"Signup-password"}>
          <label>
            Password
            <input
              className={"Login-password"}
              type="password"
              name="signupPassword"
              placeholder="******"
              required
            />
          </label>
          <label>
            Confirm password
            <input
              className={"Login-password"}
              type="password"
              name="signupPasswordConfirmation"
              placeholder="******"
              required
            />
          </label>
        </div>

        <div className={"Signup-agreement"}>
          <p className={"Col-6-8"}>
            By clicking the Next button, I agree to Remnant Ministry’s Terms of
            Service and Privacy Policy.
          </p>
        </div>
      </form>

      <div className="Next-button-container">
        {/*<button
          className={"Next-button-signup-1"}
          onClick={props.signupNextStepHandler}
        >
          Next <ArrowRight20 className={"Next-arrow"} />
        </button>*/}
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
