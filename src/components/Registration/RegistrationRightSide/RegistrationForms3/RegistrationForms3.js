import React, { Component } from "react";

import BillingAddress from "./RegistrationForm3Contents/BillingAddress/BillingAddress";
import Payment from "./RegistrationForm3Contents/Payement/Payment";
import { RegularButton } from "../../../UI/Button/Button";

import ArrowRight16 from "@carbon/icons-react/es/arrow--right/16";

// import "./RegistrationForms2.css";

class RegistrationForms3 extends Component {
  state = {
    paymentMethod: {
      formValidation: false,
      cardHolderName: {
        elementType: "input",
        elementConfig: {
          type: "text",
          label: "Card holder",
          placeholder: "Name",
          warning: "Please, enter a valid name"
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
      cardNumber: {
        elementType: "input",
        elementConfig: {
          type: "text",
          label: "Card number",
          placeholder: "0000-0000-0000-0000",
          warning: "Please, enter a valid number"
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
      cardExpiration: {
        elementType: "maskedInput",
        elementConfig: {
          type: "text",
          label: "Expiration date",
          placeholder: "MM/YY",
          warning: "Please, enter a valid date",
          mask: [/[0-1]/, /\d/, "/", /\d/, /\d/],
          guide: false
        },
        value: "",
        validation: {
          required: true,
          minLength: 5,
          maxLength: 5
        },
        valid: false,
        touched: false,
        optional: false,
        visible: true
      },
      cardSecurity: {
        elementType: "maskedInput",
        elementConfig: {
          type: "text",
          label: "Security code",
          placeholder: "000",
          warning: "Please, enter a valid number",
          mask: [/\d/, /\d/, /\d/],
          guide: false
        },
        value: "",
        validation: {
          required: true,
          minLength: 3,
          maxLength: 3
        },
        valid: false,
        touched: false,
        optional: false,
        visible: true
      }
    },
    billingInfo: {
      formValidation: false,
      billingFirstName: {
        elementType: "input",
        elementConfig: {
          type: "text",
          label: "First name",
          placeholder: "First name",
          warning: "Please, enter a valid first name"
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
      billingLastName: {
        elementType: "input",
        elementConfig: {
          type: "text",
          label: "Last name",
          placeholder: "Last name",
          warning: "Please, enter a valid last name"
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
      billingAddressStreet: {
        elementType: "input",
        elementConfig: {
          type: "text",
          label: "Street address",
          placeholder: "Street",
          warning: "Please, enter a valid street"
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
      billingAddressOptional: {
        elementType: "input",
        elementConfig: {
          type: "text",
          label: "Company, Apt, Suite, Unit (Optional)",
          placeholder: "Optional",
          warning: "Please, enter a valid address"
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
      billingAddressCity: {
        elementType: "input",
        elementConfig: {
          type: "text",
          label: "City",
          placeholder: "City",
          warning: "Please, enter a valid city"
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
      billingAddressState: {
        elementType: "select",
        elementConfig: {
          label: "State",
          warning: "Please, select a valid state",
          options: [
            {
              value: "",
              displayValue: "Select"
            },
            {
              value: "AL",
              displayValue: "Alabama"
            },
            {
              value: "AK",
              displayValue: "Alaska"
            },
            {
              value: "AZ",
              displayValue: "Arizona"
            },
            {
              value: "AR",
              displayValue: "Arkansas"
            },
            {
              value: "CA",
              displayValue: "California"
            },
            {
              value: "CO",
              displayValue: "Colorado"
            },
            {
              value: "CT",
              displayValue: "Connecticut"
            },
            {
              value: "DE",
              displayValue: "Delaware"
            },
            {
              value: "DC",
              displayValue: "District Of Columbia"
            },
            {
              value: "FL",
              displayValue: "Florida"
            },
            {
              value: "GA",
              displayValue: "Georgia"
            },
            {
              value: "HI",
              displayValue: "Hawaii"
            },
            {
              value: "ID",
              displayValue: "Idaho"
            },
            {
              value: "IL",
              displayValue: "Illinois"
            },
            {
              value: "IN",
              displayValue: "Indiana"
            },
            {
              value: "IA",
              displayValue: "Iowa"
            },
            {
              value: "KS",
              displayValue: "Kansas"
            },
            {
              value: "KY",
              displayValue: "Kentucky"
            },
            {
              value: "LA",
              displayValue: "Louisiana"
            },
            {
              value: "ME",
              displayValue: "Maine"
            },
            {
              value: "MD",
              displayValue: "Maryland"
            },
            {
              value: "MA",
              displayValue: "Massachusetts"
            },
            {
              value: "MI",
              displayValue: "Michigan"
            },
            {
              value: "MN",
              displayValue: "Minnesota"
            },
            {
              value: "MS",
              displayValue: "Mississippi"
            },
            {
              value: "MO",
              displayValue: "Missouri"
            },
            {
              value: "MT",
              displayValue: "Montana"
            },
            {
              value: "NE",
              displayValue: "Nebraska"
            },
            {
              value: "NV",
              displayValue: "Nevada"
            },
            {
              value: "NH",
              displayValue: "New Hampshire"
            },
            {
              value: "NJ",
              displayValue: "New Jersey"
            },
            {
              value: "NM",
              displayValue: "New Mexico"
            },
            {
              value: "NY",
              displayValue: "New York"
            },
            {
              value: "NC",
              displayValue: "North Carolina"
            },
            {
              value: "ND",
              displayValue: "North Dakota"
            },
            {
              value: "OH",
              displayValue: "Ohio"
            },
            {
              value: "OK",
              displayValue: "Oklahoma"
            },
            {
              value: "OR",
              displayValue: "Oregon"
            },
            {
              value: "PA",
              displayValue: "Pennsylvania"
            },
            {
              value: "RI",
              displayValue: "Rhode Island"
            },
            {
              value: "SC",
              displayValue: "South Carolina"
            },
            {
              value: "SD",
              displayValue: "South Dakota"
            },
            {
              value: "TN",
              displayValue: "Tennessee"
            },
            {
              value: "TX",
              displayValue: "Texas"
            },
            {
              value: "UT",
              displayValue: "Utah"
            },
            {
              value: "VT",
              displayValue: "Vermont"
            },
            {
              value: "VA",
              displayValue: "Virginia"
            },
            {
              value: "WA",
              displayValue: "Washington"
            },
            {
              value: "WV",
              displayValue: "West Virginia"
            },
            {
              value: "WI",
              displayValue: "Wisconsin"
            },
            {
              value: "WY",
              displayValue: "Wyoming"
            }
          ]
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
      cardSecurity: {
        elementType: "maskedInput",
        elementConfig: {
          type: "text",
          label: "Postal code",
          placeholder: "00000",
          warning: "Please, enter a valid number",
          mask: [/\d/, /\d/, /\d/, /\d/, /\d/],
          guide: false
        },
        value: "",
        validation: {
          required: true,
          minLength: 5,
          maxLength: 5
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
        <Payment
          paymentMethod={this.state.paymentMethod}
          // onChangeHandler={this.updateBasicInfo}
        />
        <BillingAddress billingInfo={this.state.billingInfo} />

        <div className={"Registration-button-container2"}>
          <RegularButton
            buttonClass={"Registration-dark-button button-1-1--global"}
            // handleButtonClick={""}
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
            Register
            <ArrowRight16 className={"ArrowIcon-registration-next"} />
          </RegularButton>
        </div>
        <p className={"Registration-agreement"}>
          By clicking the Complete Registration button,
          <br /> you confirm that you have read and understood, and accept our
          <span>Terms and Conditions</span> and <span>Privacy Policy</span>
        </p>
      </div>
    );
  }
}

export default RegistrationForms3;
