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
