import React from "react";

// import ArrowRight20 from "@carbon/icons-react/es/arrow--right/20";

import { withStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import "./LoginForm.css";

// Custom Checkbox CSS (not using primary or default by material-ui)
const BlueCheckBox = withStyles({
  root: {
    color: "#D8D8D8",
    "&$checked": {
      color: "#054ADA"
    }
  },
  checked: {}
})(props => <Checkbox {...props} />);

// Custom FormControlLabel CSS (Override default styles)
const CustomFormControlLabel = withStyles({
  root: { marginRight: "0", marginBottom: "48px" },
  label: {
    color: "#282828",
    fontSize: "14px",
    letterSpacing: "0",
    lineHeight: "20px"
  }
})(props => <FormControlLabel {...props} />);

const loginForm = props => {
  return (
    <FormGroup>
      <div className={"Login-email-container"}>
        <label>
          Email
          <input
            className={
              props.stateData.userEmail.emailError
                ? "Login-email Login-error"
                : "Login-email"
            }
            type="email"
            name="loginEmail"
            value={props.stateData.userEmail.loginEmail}
            placeholder="email@rutc.com"
            onChange={props.loginHandler}
          />
        </label>
      </div>

      <div className={"Login-password-container"}>
        <label>
          Password
          <input
            className={
              props.stateData.userPassword.passwordError
                ? "Login-password Login-error"
                : "Login-password"
            }
            type="password"
            name="loginPassword"
            value={props.stateData.userPassword.loginPassword}
            placeholder="******"
            onChange={props.loginHandler}
          />
        </label>
      </div>

      <div className={"Login-remember-checkbox"}>
        <CustomFormControlLabel
          // className={"Checkbox-label"}
          control={
            <BlueCheckBox
              checked={props.stateData.rememberMe}
              value="rememberMe"
              onChange={props.rememberMeHandler("rememberMe")}
            />
          }
          label="Remember me"
        />
      </div>
    </FormGroup>
  );
};

export default loginForm;
