import React, { Component } from "react";

import MainRCAOptions from "./RegistrationForms2Contents/MainRCAOptions/MainRCAOptions";
import Payment from "./RegistrationForms2Contents/Payment/Payment";
import BillingAddress from "./RegistrationForms2Contents/BillingAddress/BillingAddress";
import Button from "../../../UI/Button/Button";

import ArrowRight16 from "@carbon/icons-react/es/arrow--right/16";

import "./RegistrationForms2.css";

class RegistrationForms2 extends Component {
  state = {
    mainRCAOptions: {
      formValidation: false,
      shirtSize: {
        elementType: "select",
        elementConfig: {
          label: "Select your church",
          warning: "Please, select a valid church",
          options: [
            {
              value: "",
              displayValue: "Select"
            },
            {
              value: "shirt-xx-small",
              displayValue: "XX Small"
            },
            {
              value: "shirt-x-small",
              displayValue: "X Small"
            },
            {
              value: "shirt-small",
              displayValue: "Small"
            },
            {
              value: "shirt-medium",
              displayValue: "Medium"
            },
            {
              value: "shirt-large",
              displayValue: "Large"
            },
            {
              value: "shirt-x-large",
              displayValue: "X Large"
            },
            {
              value: "shirt-xx-large",
              displayValue: "XX Large"
            },
            {
              value: "shirt-xxx-large",
              displayValue: "XXX Large"
            }
          ]
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        optional: true,
        visible: true
      }
    }
  };

  render() {
    return (
      <div>
        <MainRCAOptions
          mainRCAOptions={this.state.mainRCAOptions}
          // onChangeHandler={this.updateBasicInfo}
        />
        {/*<Payment
          onChangeHandler={props.onChangeHandler}
          stateData={props.stateData}
        />
        <BillingAddress
          onChangeHandler={props.onChangeHandler}
          stateData={props.stateData}
        />*/}

        {/*<div className={"Complete-registration-button-container"}>
          <Button
            buttonClass={"Registration-dark-button button-1-1--global"}
            handleButtonClick={props.prevStepHandler}
          >
            <ArrowRight16 className={"ArrowIcon-registration-back"} />
            Back
          </Button>
          <Button
            buttonClass={
              !props.stateData.formStep2Valid
                ? "Registration-blue-button button-1-2--global button-disable"
                : "Registration-blue-button button-1-2--global"
            }
            handleButtonClick={props.completeRegistrationHandler}
            disable={!props.stateData.formStep2Valid}
          >
            Complete Registration
            <ArrowRight16 className={"ArrowIcon-registration-next"} />
          </Button>
          </div>*/}

        <p className={"Registration-agreement"}>
          By clicking the Complete Registration button,
          <br /> you confirm that you have read and understood, and accept our
          <span>Terms and Conditions</span> and <span>Privacy Policy</span>
        </p>
      </div>
    );
  }
}

export default RegistrationForms2;
