import React, { Component } from "react";

import LodgingOption from "./RegistrationForms2Contents/LodgingOption/LodgingOption";
import { RegularButton } from "../../../UI/Button/Button";

import ArrowRight16 from "@carbon/icons-react/es/arrow--right/16";

import "./RegistrationForms2.css";

class RegistrationForms2 extends Component {
  state = {
    lodgingInfo: {
      leadersRetreat: {
        attend: false,
        value: "lodging-leaders-retreat-attendance",
        validation: {
          required: false,
          checkAttendance: true,
          disable: false
        },
        valid: true,
        touched: false
      },
      mainRCA: {
        attend: false,
        value: "",
        validation: {
          required: true,
          checkAttendance: false,
          disable: false
        },
        valid: false,
        touched: false
      }
    },
    extraInfo: {
      formValidation: false,
      shirtSize: {
        elementType: "select",
        elementConfig: {
          label: "T-shirt size",
          warning: "Please, select a valid size",
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
              value: "staff-volunteer-accept",
              displayValue: "Yes, I'd like to volunteer"
            },
            {
              value: "staff-volunteer-decline",
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

  onChangeHandler = (event, name, identifier) => {
    const stateInfo = { ...this.state[name] };
    const deepStateInfo = { ...stateInfo[identifier] };

    deepStateInfo.attend = event.target.checked;
    deepStateInfo.value = event.target.value;

    deepStateInfo.valid = this.checkValidity(deepStateInfo);
    deepStateInfo.touched = true;

    stateInfo[identifier] = deepStateInfo;

    // If room other than 4 people selected, disable leaders retreat
    if (
      deepStateInfo.value === "lodging-main-RCA-2people-room" ||
      deepStateInfo.value === "lodging-main-RCA-1people-room" ||
      deepStateInfo.value === "lodging-main-RCA-commuter"
    ) {
      stateInfo["leadersRetreat"].validation.disable = true;
    } else {
      stateInfo["leadersRetreat"].validation.disable = false;
    }

    // If leaders retreat selected, disable rooms other than 4 people
    if (deepStateInfo.validation.checkAttendance) {
      if (deepStateInfo.attend) {
        stateInfo["mainRCA"].validation.disable = true;
      } else {
        stateInfo["mainRCA"].validation.disable = false;
      }
    }

    this.setState({ ...this.state, [name]: stateInfo });
  };

  checkValidity = state => {
    let isValid = true;

    // check to see if state.value is not an empty string
    if (state.validation.required) {
      isValid = state.value.trim() !== "" && isValid;
    }

    return isValid;
  };

  render() {
    console.log(this.state.lodgingInfo);
    return (
      <div>
        <LodgingOption
          extraInfo={this.state.extraInfo}
          lodgingInfo={this.state.lodgingInfo}
          onChangeHandler={this.onChangeHandler}
          lodgingOptionHandler={this.lodgingOptionHandler}
          extraInfoHandler={this.extraInfoHandler}
        />

        <div className={"Registration-button-container"}>
          <RegularButton
            buttonClass={"Registration-dark-button button-1-1--global"}
          >
            <ArrowRight16 className={"ArrowIcon-registration-back"} />
            Back
          </RegularButton>
          <RegularButton
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
          </RegularButton>
        </div>
      </div>
    );
  }
}

export default RegistrationForms2;
