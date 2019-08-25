import React, { Component } from "react";

import LodgingOption from "./RegistrationForms2Contents/LodgingOption/LodgingOption";
import Button from "../../../UI/Button/Button";

import ArrowRight16 from "@carbon/icons-react/es/arrow--right/16";

import "./RegistrationForms2.css";

class RegistrationForms2 extends Component {
  state = {
    extraInfo: {
      formValidation: false,
      shirtSize: {
        elementType: "select",
        elementConfig: {
          label: "T-shirt size",
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
      },
      volunteerStaff: {
        elementType: "select",
        elementConfig: {
          label: "Volunteer to serve as a staff",
          warning: "Please, select a valid inquiry",
          options: [
            {
              value: "",
              displayValue: "Select"
            },
            {
              value: "staff-volunteer-yes",
              displayValue: "Yes, I'd like to volunteer"
            },
            {
              value: "staff-volunteer-no",
              displayValue: "No, I'd not like to volunteer"
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
      },
      healthCondition: {
        elementType: "input",
        elementConfig: {
          type: "text",
          label: "Health condition",
          placeholder: "Tell us if you have a special condition",
          warning: "Please, enter a valid health condition"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        optional: false,
        visible: true
      },
      prayerTopic: {
        elementType: "input",
        elementConfig: {
          type: "text",
          label: "Prayer topic",
          placeholder: "Share your prayer topic",
          warning: "Please, enter a valid prayer topic"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        optional: false,
        visible: true
      }
    }
  };

  render() {
    return (
      <div>
        <LodgingOption
          extraInfo={this.state.extraInfo}
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

        <div className={"Registration-button-container"}>
          <Button
            buttonClass={"Registration-dark-button button-1-1--global"}
            // handleButtonClick={""}
          >
            <ArrowRight16 className={"ArrowIcon-registration-back"} />
            Back
          </Button>
          <Button
            buttonClass={"Registration-blue button-1-2--global"}
            // buttonClass={
            //   !props.stateData.formStep2Valid
            //     ? "Registration-blue-button button-1-2--global button-disable"
            //     : "Registration-blue-button button-1-2--global"
            // }
            // handleButtonClick={props.completeRegistrationHandler}
            disable={""}
          >
            Next
            <ArrowRight16 className={"ArrowIcon-registration-next"} />
          </Button>
        </div>
      </div>
    );
  }
}

export default RegistrationForms2;
