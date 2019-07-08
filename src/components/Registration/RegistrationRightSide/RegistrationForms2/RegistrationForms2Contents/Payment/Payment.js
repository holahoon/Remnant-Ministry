import React from "react";

// https://github.com/medipass/react-payment-inputs#with-render-props
// import CreditCardInput from "react-credit-card-input";

import { PaymentInputsContainer } from "react-payment-inputs";

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
  return (
    <div>
      <h5 className={"Register-h5-title"}>Payment</h5>

      <CustomFormControl>
        <CustomFormLabel style={{ marginBottom: "6px" }}>
          Select payment method
        </CustomFormLabel>
        <RadioGroup
          aria-label="Lodging option"
          name="lodgingOption"
          // value={props.value}
        >
          <div className={"payment-method-container"}>
            <CustomRadioFormControlLabel
              className={"Col-3-8"}
              value="payment-card"
              control={<BlueRadio />}
              label="Credit/Debit card"
            />
            <CustomRadioFormControlLabel
              value="payment-other"
              control={<BlueRadio />}
              label="Other method if any"
            />
          </div>
        </RadioGroup>

        <div className={"card-info"}>
          <PaymentInputsContainer>
            {({
              meta,
              getCardNumberProps,
              getExpiryDateProps,
              getCVCProps
            }) => (
              <div className={"card-info-inner-container"}>
                <label>
                  Card number
                  <input
                  //   {...getCardNumberProps({
                  //     onChange: handleChangeCardNumber
                  //   })}
                  //   value={cardNumber}
                  />
                </label>
                <label className={"Col-2-6"}>
                  Expiration date
                  <input
                  //   {...getExpiryDateProps({
                  //     onChange: handleChangeExpiryDate
                  //   })}
                  //   value={expiryDate}
                  />
                </label>
                <label className={"Col-1-6"}>
                  Security code
                  <input
                  //   {...getCVCProps({ onChange: handleChangeCVC })}
                  //   value={cvc}
                  />
                </label>
                {meta.isTouched && meta.error && (
                  <span>Error: {meta.error}</span>
                )}
              </div>
            )}
          </PaymentInputsContainer>
        </div>

        <CustomFormControlLabel
          control={
            <BlueCheckBox
              //   checked={}
              value="save-card-info"
            />
          }
          label="Would you like to save this card for the future?"
        />
      </CustomFormControl>
    </div>
  );
};

export default payment;
