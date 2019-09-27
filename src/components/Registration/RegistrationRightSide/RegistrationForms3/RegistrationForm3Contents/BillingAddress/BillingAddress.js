import React from "react";

import InputForm from "../../../../../UI/InputForm/InputForm";

import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";

const CustomFormControl = withStyles({
  root: {
    marginBottom: "0.75rem"
  }
})(props => <FormControl {...props} />);

// Custom Checkbox CSS (not using primary or default by material-ui)
const BlueCheckBox = withStyles({
  root: {
    color: "#A4A4A4",
    "&$checked": {
      color: "#054ADA"
    }
  },
  checked: {}
})(props => <Checkbox {...props} />);

const CustomFormControlLabel = withStyles({
  root: { marginRight: "0", marginBottom: "0", gridColumn: "1 / 4" },
  label: {
    color: "#282828",
    fontSize: "14px",
    fontFamily: "whitney",
    letterSpacing: "0",
    lineHeight: "20px"
  }
})(props => <FormControlLabel {...props} />);

const billingAddress = props => {
  // turn object into an array
  const billingInfoArray = [];
  for (let key in props.billingInfo) {
    if (key === "formValidation") {
      continue;
    }
    billingInfoArray.push({
      id: key,
      config: props.billingInfo[key]
    });
  }

  return (
    <div>
      <h5 className={"Register-h5-title"} style={{ marginBottom: "1rem" }}>
        Billing address
      </h5>

      <CustomFormControl>
        <CustomFormControlLabel
          control={
            <BlueCheckBox
            // checked={billingSameAsMyAddress.value}
            // name="billingSameAsMyAddress"
            // value={billingSameAsMyAddress.value}
            // onChange={props.onChangeHandler}
            />
          }
          label="Billing address is same as my address"
        />
      </CustomFormControl>

      <form className={"Regist-form-4"}>
        {billingInfoArray.map(eachEl => (
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
              props.onChangeHandler(event, "billingInfo", eachEl.id)
            }
          />
        ))}
      </form>
    </div>
  );
};

export default billingAddress;

/*
import React from "react";
import MaskedInput from "react-text-mask";

import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";

const CustomFormControl = withStyles({
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    gridColumnGap: "1.5rem"
  }
})(props => <FormControl {...props} />);

// Custom Checkbox CSS (not using primary or default by material-ui)
const BlueCheckBox = withStyles({
  root: {
    color: "#A4A4A4",
    "&$checked": {
      color: "#054ADA"
    }
  },
  checked: {}
})(props => <Checkbox {...props} />);

const CustomFormControlLabel = withStyles({
  root: { marginRight: "0", marginBottom: "0", gridColumn: "1 / 4" },
  label: {
    color: "#282828",
    fontSize: "14px",
    fontFamily: "whitney",
    letterSpacing: "0",
    lineHeight: "20px"
  }
})(props => <FormControlLabel {...props} />);

const billingAddress = props => {
  const {
    billingSameAsMyAddress,
    billingFirstNameRegistration,
    billingLastNameRegistration,
    billingAddressRegistration,
    billingOptionalRegistration,
    billingCityRegistration,
    billingStateRegistration,
    billingPostalRegistration
  } = props.stateData.registrationFormValidation2;

  return (
    <div>
      <h5 className={"Register-h5-title"} style={{ marginBottom: "1rem" }}>
        Billing address
      </h5>

      <CustomFormControl>
        <CustomFormControlLabel
          control={
            <BlueCheckBox
              checked={billingSameAsMyAddress.value}
              name="billingSameAsMyAddress"
              value={billingSameAsMyAddress.value}
              onChange={props.onChangeHandler}
            />
          }
          label="Billing address is same as my address"
        />

        <div style={{ gridColumn: "1 / 4" }}>
          <label>
            First name
            <input
              className={
                !billingFirstNameRegistration.touched
                  ? null
                  : billingFirstNameRegistration.valid
                  ? null
                  : "InputError"
              }
              type="text"
              name="billingFirstNameRegistration"
              value={billingFirstNameRegistration.value}
              placeholder="First name"
              onChange={props.onChangeHandler}
            />
          </label>
        </div>
        <div style={{ gridColumn: "4 / 7" }}>
          <label>
            Last name
            <input
              className={
                !billingLastNameRegistration.touched
                  ? null
                  : billingLastNameRegistration.valid
                  ? null
                  : "InputError"
              }
              type="text"
              name="billingLastNameRegistration"
              value={billingLastNameRegistration.value}
              placeholder="First name"
              onChange={props.onChangeHandler}
            />
          </label>
        </div>

        <div style={{ gridColumn: "1 / 4" }}>
          <label>
            Address
            <input
              className={
                !billingAddressRegistration.touched
                  ? null
                  : billingAddressRegistration.valid
                  ? null
                  : "InputError"
              }
              type="text"
              name="billingAddressRegistration"
              value={billingAddressRegistration.value}
              placeholder="Address"
              onChange={props.onChangeHandler}
            />
          </label>
        </div>
        <div style={{ gridColumn: "4 / 7" }}>
          <label>
            Company, Apt, Suite, Unit (Optional)
            <input
              type="text"
              name="billingOptionalRegistration"
              value={billingOptionalRegistration.value}
              placeholder="Optional"
              onChange={props.onChangeHandler}
            />
          </label>
        </div>
        <div style={{ gridColumn: "1 / 3" }}>
          <label>
            City
            <input
              className={
                !billingCityRegistration.touched
                  ? null
                  : billingCityRegistration.valid
                  ? null
                  : "InputError"
              }
              type="text"
              name="billingCityRegistration"
              value={billingCityRegistration.value}
              placeholder="City"
              onChange={props.onChangeHandler}
            />
          </label>
        </div>
        <div style={{ gridColumn: "3 / 5" }}>
          <label>
            State
            <select
              className={
                !billingStateRegistration.touched
                  ? null
                  : billingStateRegistration.valid
                  ? null
                  : "InputError"
              }
              style={
                billingStateRegistration.touched ? { color: "#282828" } : null
              }
              name="billingStateRegistration"
              value={billingStateRegistration.value}
              onChange={props.onChangeHandler}
            >
              <option value="">State</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
          </label>
        </div>
        <div style={{ gridColumn: "5 / 7" }}>
          <label>
            Postal code
            <MaskedInput
              className={
                !billingPostalRegistration.touched
                  ? null
                  : billingPostalRegistration.valid
                  ? null
                  : "InputError"
              }
              mask={[/\d/, /\d/, /\d/, /\d/, /\d/]}
              placeholder="12345"
              name="billingPostalRegistration"
              value={billingPostalRegistration.value}
              guide={false}
              onChange={props.onChangeHandler}
            />
          </label>
        </div>
      </CustomFormControl>
    </div>
  );
};

export default billingAddress;
*/
