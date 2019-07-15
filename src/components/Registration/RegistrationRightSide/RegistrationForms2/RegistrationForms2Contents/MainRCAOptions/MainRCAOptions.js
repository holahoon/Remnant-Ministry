import React from "react";

import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

const CustomFormControl = withStyles({
  root: {
    display: "flex"
  }
})(props => <FormControl {...props} />);

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
  const {
    lodgingOptionRegistration,
    shirtSizeRegistration,
    staffVolunteerRegistration,
    healthConditionRegistration,
    prayerTopicRegistration
  } = props.stateData.registrationFormValidation2;

  return (
    <div>
      <h5 className={"Register-h5-title"}>Main RCA options</h5>

      <CustomFormControl>
        <CustomFormLabel style={{ marginBottom: "6px" }}>
          Lodging option
        </CustomFormLabel>
        <RadioGroup
          aria-label="Lodging option"
          name="lodgingOptionRegistration"
          value={lodgingOptionRegistration.value}
          onChange={props.onChangeHandler}
        >
          <div className={"Radio-control-container"}>
            <CustomRadioFormControlLabel
              value="4people"
              control={<BlueRadio />}
              label="4 people / room"
            />
            <span>$ 109.99</span>
          </div>
          <div
            className={"Radio-control-container"}
            className={
              lodgingOptionRegistration.disable
                ? "Radio-control-container input-disable"
                : "Radio-control-container"
            }
          >
            <CustomRadioFormControlLabel
              value="2people"
              control={<BlueRadio />}
              label="2 people / room "
              disabled={lodgingOptionRegistration.disable}
            />
            <span style={{ color: "#DA1E28" }}>
              Only the participants born before 1990 can choose
            </span>
            <span
              className={
                lodgingOptionRegistration.disable ? "disable-text" : null
              }
            >
              $ 139.99
            </span>
          </div>
        </RadioGroup>

        <div className={"t-shirt-container"}>
          <label>
            T-shirt size
            <select
              className={
                !shirtSizeRegistration.touched
                  ? null
                  : shirtSizeRegistration.valid
                  ? null
                  : "InputError"
              }
              style={
                shirtSizeRegistration.touched ? { color: "#282828" } : null
              }
              name="shirtSizeRegistration"
              value={shirtSizeRegistration.value}
              onChange={props.onChangeHandler}
            >
              <option value="">Select</option>
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
            <select
              className={
                !staffVolunteerRegistration.touched
                  ? null
                  : staffVolunteerRegistration.valid
                  ? null
                  : "InputError"
              }
              style={
                staffVolunteerRegistration.touched ? { color: "#282828" } : null
              }
              name="staffVolunteerRegistration"
              value={staffVolunteerRegistration.value}
              onChange={props.onChangeHandler}
            >
              <option value="">Select</option>
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
            className={
              !healthConditionRegistration.touched
                ? null
                : healthConditionRegistration.valid
                ? null
                : "InputError"
            }
            name="healthConditionRegistration"
            value={healthConditionRegistration.value}
            type="text"
            placeholder="Tell us if you have special condition"
            onChange={props.onChangeHandler}
          />
        </label>

        <label>
          Prayer topic
          <input
            className={
              !prayerTopicRegistration.touched
                ? null
                : prayerTopicRegistration.valid
                ? null
                : "InputError"
            }
            name="prayerTopicRegistration"
            value={prayerTopicRegistration.value}
            type="text"
            placeholder="Write your prayer topic"
            onChange={props.onChangeHandler}
          />
        </label>
      </CustomFormControl>
    </div>
  );
};

export default mainRCAOptions;
