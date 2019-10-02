import React from "react";

import InputForm from "../../../../../UI/InputForm/InputForm";

import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Checkbox from "@material-ui/core/Checkbox";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";

const CustomFormControl = withStyles({
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
    gridRowGap: "0.75rem",
    marginBottom: "0.75rem"
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
    letterSpacing: "0",
    marginBottom: "-6px"
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
    },
    "&:hover": {
      background: "transparent"
    }
  },
  checked: {}
})(props => <Radio color="default" {...props} />);

const CustomCheckbox = withStyles({
  root: {
    color: "#a4a4a4",
    "&$checked": {
      color: "#054ADA"
    },
    "&:hover": {
      background: "transparent"
    }
  },
  checked: {}
})(props => <Checkbox {...props} />);

const lodgingOption = props => {
  const extraInfoArray = [];
  for (let key in props.extraInfo) {
    if (key === "formValidation") {
      continue;
    }
    extraInfoArray.push({
      id: key,
      config: props.extraInfo[key]
    });
  }

  const { leadersRetreat, mainRCA } = props.lodgingInfo;

  return (
    <div>
      <h5 className={"Register-h5-title"}>Main RCA options</h5>

      <CustomFormControl>
        {/* - Leaders retreat lodging - */}
        <CustomFormLabel>Leaders retreat</CustomFormLabel>
        <div
          className={`Radio-control-container ${
            leadersRetreat.validation.disable ? "control-disable" : null
          }`}
        >
          <CustomRadioFormControlLabel
            control={
              <CustomCheckbox
                icon={<RadioButtonUncheckedIcon />}
                checkedIcon={<RadioButtonCheckedIcon />}
                // checked={props.lodgingInfo.leadersRetreat.attend}
                value="lodging-leaders-retreat-attendance"
                disabled={leadersRetreat.validation.disable}
                onChange={event =>
                  props.onChangeHandler(event, "lodgingInfo", "leadersRetreat")
                }
              />
            }
            label="Leaders retreat"
          />
          <span style={{ color: "#DA1E28" }}>born between 1983 and 2005</span>
          <span>$ 150</span>
        </div>
        {/*<RadioGroup
          className={"Regist-form-4-item1"}
          onChange={props.lodgingOptionHandler}
        >
          <div className={"Radio-control-container"}>
            <CustomRadioFormControlLabel
              value="lodging-leaders-retreat"
              control={<BlueRadio />}
              label="4 people / room"
            />
            <span style={{ color: "#DA1E28" }}>born between 1983 and 2005</span>
            <span>$ 150</span>
          </div>
        </RadioGroup>*/}

        {/* - Main RCA lodging - */}
        <CustomFormLabel>
          Main RCA (*2people room & 1 people room not available if born after
          1983*)
        </CustomFormLabel>
        <RadioGroup
          className={"Regist-form-4-item1"}
          // aria-label={"Loding option"}
          // onChange={props.lodgingOptionHandler("mainRCA")}
          onChange={event =>
            props.onChangeHandler(event, "lodgingInfo", "mainRCA")
          }
        >
          <div className={"Radio-control-container"}>
            <CustomRadioFormControlLabel
              value="lodging-main-RCA-4people-room"
              control={<BlueRadio />}
              label="4 people / room"
            />
            <span>$ 320</span>
          </div>
          <div
            // className={
            //   lodgingOptionRegistration.disable
            //     ? "Radio-control-container input-disable"
            //     : "Radio-control-container"
            // }
            className={`Radio-control-container ${
              mainRCA.validation.disable ? "control-disable" : null
            }`}
          >
            <CustomRadioFormControlLabel
              value="lodging-main-RCA-2people-room"
              control={<BlueRadio />}
              label="2 people / room "
              disabled={mainRCA.validation.disable}
            />
            <span style={{ color: "#DA1E28" }}>not available for LEADERS</span>
            <span
            // className={
            //   lodgingOptionRegistration.disable ? "disable-text" : null
            // }
            >
              $ 390
            </span>
          </div>
          <div
            // className={
            //   lodgingOptionRegistration.disable
            //     ? "Radio-control-container input-disable"
            //     : "Radio-control-container"
            // }
            className={`Radio-control-container ${
              mainRCA.validation.disable ? "control-disable" : null
            }`}
          >
            <CustomRadioFormControlLabel
              value="lodging-main-RCA-1people-room"
              control={<BlueRadio />}
              label="1 people / room "
              disabled={mainRCA.validation.disable}
            />
            <span style={{ color: "#DA1E28" }}>not available for LEADERS</span>
            <span
            // className={
            //   lodgingOptionRegistration.disable ? "disable-text" : null
            // }
            >
              $ 460
            </span>
          </div>

          <CustomFormLabel style={{ marginTop: "0.75rem" }}>
            Commuter (*born in/before 1983 or onsite registrants*)
          </CustomFormLabel>

          <div
            className={`Radio-control-container ${
              mainRCA.validation.disable ? "control-disable" : null
            }`}
            style={{ marginTop: "0.75rem" }}
          >
            <CustomRadioFormControlLabel
              value="lodging-main-RCA-commuter"
              control={<BlueRadio />}
              label="Commuter"
              disabled={mainRCA.validation.disable}
            />
            <span style={{ color: "#DA1E28" }}>
              * onsite registrants - $ 250 (CASH ONLY)
            </span>
            <span>$ 190</span>
          </div>
        </RadioGroup>
      </CustomFormControl>

      {/* Below extra form */}
      <form className={"Regist-form-3"}>
        {extraInfoArray.map(eachEl => (
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
              props.onChangeHandler(event, "extraInfo", eachEl.id)
            }
          />
        ))}
      </form>
    </div>
  );
};

export default lodgingOption;
