import React from "react";

import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";

const CustomFormControl = withStyles({
  root: {
    display: "flex"
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
  root: { marginRight: "0", marginBottom: "0" },
  label: {
    color: "#282828",
    fontSize: "14px",
    fontFamily: "whitney",
    letterSpacing: "0",
    lineHeight: "20px"
  }
})(props => <FormControlLabel {...props} />);

const CustomFormLabel = withStyles({
  root: {
    color: "#282828",
    fontSize: "14px",
    fontFamily: "whitney",
    lineHeight: "20px",
    letterSpacing: "0"
  },
  focused: {
    "&$focused": {
      color: "#282828"
    }
  }
})(props => <FormLabel {...props} />);

const billingAddress = props => {
  return (
    <div>
      <h5 className={"Register-h5-title"} style={{ marginBottom: "1rem" }}>
        Billing address
      </h5>

      <CustomFormControl className={"Form-control"}>
        <CustomFormControlLabel
          control={
            <BlueCheckBox
              //   checked={}
              value="billing-address-same-as-address"
            />
          }
          label="Billing address is same as My address"
        />

        <div className={"address-info-container"}>
          <label>
            First name
            <input type="text" placeholder="First name" />
          </label>

          <label>
            Last name
            <input type="text" placeholder="First name" />
          </label>
        </div>

        <div className={"address-info-container"}>
          <label>
            Address
            <input type="text" placeholder="Address" />
          </label>

          <label>
            Company, Apt, Suite, Unit (Optional)
            <input type="text" placeholder="Optional" />
          </label>
        </div>

        <div className={"address-info-container2"}>
          <label>
            City
            <input type="text" placeholder="City" />
          </label>

          <label>
            State
            <select name="address-state">
              <option>State</option>
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

          <label>
            Postal code
            <input type="number" placeholder="Postal code" />
          </label>
        </div>
      </CustomFormControl>
    </div>
  );
};

export default billingAddress;
