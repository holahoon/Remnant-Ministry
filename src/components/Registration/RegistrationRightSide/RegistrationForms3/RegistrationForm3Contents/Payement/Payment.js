import React from "react";

// import MaskedInput from "react-text-mask";
// import Cleave from "cleave.js/react";
import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
// import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

import InputForm from "../../../../../UI/InputForm/InputForm";

const CustomFormControl = withStyles({
  // root: {
  //   display: "grid",
  //   gridTemplateColumns: "repeat(1, 1fr)",
  //   gridColumnGap: "1.5rem"
  // }
})(props => <FormControl {...props} />);

// Custom Radio CSS
const CustomRadioFormControlLabel = withStyles({
  root: {
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
    gridColumn: "1 / 5",
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

const payment = props => {
  // turn object into an array
  const paymentInfoArray = [];
  for (let key in props.paymentInfo) {
    if (key === "formValidation") {
      continue;
    }
    paymentInfoArray.push({
      id: key,
      config: props.paymentInfo[key]
    });
  }

  const otherPaymentOption = (
    <div
      className={"Regist-form-5-item5"}
      style={{ marginTop: "0.75rem", marginBottom: "1.5rem" }}
    >
      <h5>Sorry, other payment method is not available yet</h5>
    </div>
  );

  const cardPaymentOption = (
    <form className={"Regist-form-5"}>
      {paymentInfoArray.map(eachEl => (
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
            props.onChangeHandler(event, "paymentInfo", eachEl.id)
          }
        />
      ))}
    </form>
  );

  return (
    <div>
      <h5 className={"Register-h5-title"}>Payment</h5>

      <CustomFormControl>
        <CustomFormLabel>Select payment method</CustomFormLabel>
        <RadioGroup
          aria-label="Lodging option"
          // name="credit_debitCard"
          onChange={event =>
            props.onChangeHandler(event, "paymentMethod", "paymentCard")
          }
        >
          <div className={"payment-method-container"}>
            <CustomRadioFormControlLabel
              value="payment-method-card"
              control={<BlueRadio />}
              label="Credit/Debit card"
              checked={
                props.paymentMethod.paymentCard.value === "payment-method-card"
              }
            />
            <CustomRadioFormControlLabel
              style={{ marginLeft: "5rem" }}
              value="payment-method-other"
              control={<BlueRadio />}
              label="Other method if any"
              checked={
                props.paymentMethod.paymentCard.value === "payment-method-other"
              }
            />
          </div>
        </RadioGroup>
      </CustomFormControl>

      {props.paymentMethod.paymentCard.value === "payment-method-other"
        ? otherPaymentOption
        : cardPaymentOption}

      {/*<CustomFormControlLabel
    control={
      <BlueCheckBox
        //   checked={}
        value="save-card-info"
      />
    }
    label="Would you like to save this card for the future?"
  />*/}
    </div>
  );
};

export default payment;
