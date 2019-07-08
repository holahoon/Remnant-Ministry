import React from "react";

import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

const CustomFormControl = withStyles({
  root: {
    display: "flex"
  }
})(props => <FormControl {...props} />);

// const CustomFormControlLabel = withStyles({
//   root: { marginRight: "0", marginBottom: "48px" },
//   label: {
//     color: "#282828",
//     fontSize: "14px",
//     letterSpacing: "0",
//     lineHeight: "20px"
//   }
// })(props => <FormControlLabel {...props} />);

// Custom Radio CSS
const CustomRadioFormControlLabel = withStyles({
  root: {
    marginLeft: "0",
    marginRight: "0"
  },
  label: {
    fontSize: "14px",
    fontFamily: "whitney",
    lineHeight: "20px",
    letterSpacing: "0"
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

const BlueRadio = withStyles({
  root: {
    color: "#a4a4a4",
    "&$checked": {
      color: "#054ADA"
    }
  },
  checked: {}
})(props => <Radio color="default" {...props} />);

const mainRCAOptions = props => {
  return (
    <div>
      <h5 className={"Register-h5-title"}>Main RCA options</h5>

      <CustomFormControl>
        <CustomFormLabel style={{ marginBottom: "6px" }}>
          Lodging option
        </CustomFormLabel>
        <RadioGroup
          aria-label="Lodging option"
          name="lodgingOption"
          // value={props.value}
        >
          <div className={"Radio-control-container"}>
            <CustomRadioFormControlLabel
              value="4people"
              control={<BlueRadio />}
              label="4 people / room"
            />
            <span>$ 0.00</span>
          </div>
          <div className={"Radio-control-container"}>
            <CustomRadioFormControlLabel
              value="2people"
              control={<BlueRadio />}
              label="2 people / room "
            />
            <span style={{ color: "#DA1E28" }}>
              Only the participants born before 1990 can choose
            </span>
            <span>$ 0.00</span>
          </div>
        </RadioGroup>

        <div className={"t-shirt-container"}>
          <label>
            T-shirt size
            <select name="t-shirt-size">
              <option value="x-small-size">X-Small</option>
              <option value="small-size">Small</option>
              <option value="medium-size">Medium</option>
              <option value="large-size">Large</option>
              <option value="x-large-size">X-Large</option>
              <option value="xx-large-size">XX-Large</option>
              <option value="xxx-large-size">XXX-Large</option>
            </select>
          </label>

          <label>
            Volunteer to serve as a staff
            <select name="volunteer-staff">
              <option value="volunteer-staff-yes">
                Yes, I'd like to volunteer
              </option>
              <option value="volunteer-staff-no">
                No, I'd not like to volunteer
              </option>
            </select>
          </label>
        </div>

        <label>
          Health Condition
          <input
            type="text"
            placeholder="Tell us if you have special condition"
          />
        </label>

        <label>
          Prayer topic
          <input type="text" placeholder="Write your prayer topic" />
        </label>
      </CustomFormControl>
    </div>
  );
};

export default mainRCAOptions;
