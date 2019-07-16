import React from "react";
import MaskedInput from "react-text-mask";
import Cleave from "cleave.js/react";

import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
// import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

const CustomFormControl = withStyles({
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridColumnGap: "1.5rem"
  }
})(props => <FormControl {...props} />);

// Custom Checkbox CSS (not using primary or default by material-ui)
// const BlueCheckBox = withStyles({
//   root: {
//     color: "#A4A4A4",
//     "&$checked": {
//       color: "#054ADA"
//     }
//   },
//   checked: {}
// })(props => <Checkbox {...props} />);

// const CustomFormControlLabel = withStyles({
//   root: { marginRight: "0", marginBottom: "0" },
//   label: {
//     color: "#282828",
//     fontSize: "14px",
//     fontFamily: "whitney",
//     letterSpacing: "0",
//     lineHeight: "20px"
//   }
// })(props => <FormControlLabel {...props} />);

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
  const {
    paymentMethodRegistration,
    // creditCardTypeRegistration,
    creditCardNameRegistration,
    creditCardNumberRegistration,
    creditCardExpirationRegistration,
    creditCardSecurityRegistration
  } = props.stateData.registrationFormValidation2;

  const otherPaymentOption = (
    <div
      className={"Regist-form-5-item5"}
      style={{ marginTop: "0.75rem", marginBottom: "1.5rem" }}
    >
      <h5>Sorry, other payment method is not available yet</h5>
    </div>
  );

  const cardPaymentOption = (
    <React.Fragment>
      <div className={"Regist-form-5-item1"}>
        <label>
          Card holder name
          <input
            className={
              !creditCardNameRegistration.touched
                ? null
                : creditCardNameRegistration.valid
                ? null
                : "InputError"
            }
            name="creditCardNameRegistration"
            value={creditCardNameRegistration.value}
            placeholder="Name shown on the card"
            onChange={props.onChangeHandler}
          />
        </label>
      </div>
      <div className={"Regist-form-5-item2"}>
        <label>
          Card number
          <Cleave
            className={
              !creditCardNumberRegistration.touched
                ? null
                : creditCardNumberRegistration.valid
                ? null
                : "InputError"
            }
            placeholder="Card number"
            name="creditCardNumberRegistration"
            value={creditCardNumberRegistration.value}
            options={{ creditCard: true }}
            onChange={props.onChangeHandler}
          />
        </label>
      </div>
      <div className={"Regist-form-5-item3"}>
        <label>
          Expiration date
          <MaskedInput
            className={
              !creditCardExpirationRegistration.touched
                ? null
                : creditCardExpirationRegistration.valid
                ? null
                : "InputError"
            }
            mask={[/[0-1]/, /\d/, "/", /\d/, /\d/]}
            placeholder="MM/YY"
            name="creditCardExpirationRegistration"
            value={creditCardExpirationRegistration.value}
            guide={false}
            onChange={props.onChangeHandler}
          />
        </label>
      </div>
      <div className={"Regist-form-5-item4"}>
        <label>
          Security code
          <MaskedInput
            className={
              !creditCardSecurityRegistration.touched
                ? null
                : creditCardSecurityRegistration.valid
                ? null
                : "InputError"
            }
            mask={[/\d/, /\d/, /\d/]}
            placeholder="123"
            name="creditCardSecurityRegistration"
            value={creditCardSecurityRegistration.value}
            guide={false}
            onChange={props.onChangeHandler}
          />
        </label>
      </div>
    </React.Fragment>
  );

  return (
    <div>
      <h5 className={"Register-h5-title"}>Payment</h5>

      <CustomFormControl>
        <CustomFormLabel style={{ marginBottom: "6px" }}>
          Select payment method
        </CustomFormLabel>
        <RadioGroup
          className={"Regist-form-5-item5"}
          aria-label="Lodging option"
          name="paymentMethodRegistration"
          value={paymentMethodRegistration.value}
          onChange={props.onChangeHandler}
        >
          <div className={"payment-method-container"}>
            <CustomRadioFormControlLabel
              className={""}
              value="cardPaymentRegistration"
              control={<BlueRadio />}
              label="Credit/Debit card"
            />
            <CustomRadioFormControlLabel
              style={{ marginLeft: "5rem" }}
              value="otherPaymentRegistration"
              control={<BlueRadio />}
              label="Other method if any"
            />
          </div>
        </RadioGroup>

        {paymentMethodRegistration.value === "otherPaymentRegistration"
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
      </CustomFormControl>
    </div>
  );
};

export default payment;

// import React from "react";
// import MaskedInput from "react-text-mask";
// import Cleave from "cleave.js/react";

// import { withStyles } from "@material-ui/core/styles";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormControl from "@material-ui/core/FormControl";
// import FormLabel from "@material-ui/core/FormLabel";
// // import Checkbox from "@material-ui/core/Checkbox";
// import Radio from "@material-ui/core/Radio";
// import RadioGroup from "@material-ui/core/RadioGroup";

// const CustomFormControl = withStyles({
//   root: {
//     display: "flex"
//   }
// })(props => <FormControl {...props} />);

// // Custom Checkbox CSS (not using primary or default by material-ui)
// // const BlueCheckBox = withStyles({
// //   root: {
// //     color: "#A4A4A4",
// //     "&$checked": {
// //       color: "#054ADA"
// //     }
// //   },
// //   checked: {}
// // })(props => <Checkbox {...props} />);

// // const CustomFormControlLabel = withStyles({
// //   root: { marginRight: "0", marginBottom: "0" },
// //   label: {
// //     color: "#282828",
// //     fontSize: "14px",
// //     fontFamily: "whitney",
// //     letterSpacing: "0",
// //     lineHeight: "20px"
// //   }
// // })(props => <FormControlLabel {...props} />);

// // Custom Radio CSS
// const CustomRadioFormControlLabel = withStyles({
//   root: {
//     marginRight: "0"
//   },
//   label: {
//     fontSize: "14px",
//     fontFamily: "whitney",
//     lineHeight: "20px",
//     letterSpacing: "0"
//   }
// })(props => <FormControlLabel {...props} />);

// const CustomFormLabel = withStyles({
//   root: {
//     color: "#282828",
//     fontSize: "14px",
//     fontFamily: "whitney",
//     lineHeight: "20px",
//     letterSpacing: "0"
//   },
//   focused: {
//     "&$focused": {
//       color: "#282828"
//     }
//   }
// })(props => <FormLabel {...props} />);

// const BlueRadio = withStyles({
//   root: {
//     color: "#a4a4a4",
//     "&$checked": {
//       color: "#054ADA"
//     }
//   },
//   checked: {}
// })(props => <Radio color="default" {...props} />);

// const payment = props => {
//   const {
//     paymentMethodRegistration,
//     // creditCardTypeRegistration,
//     creditCardNameRegistration,
//     creditCardNumberRegistration,
//     creditCardExpirationRegistration,
//     creditCardSecurityRegistration
//   } = props.stateData.registrationFormValidation2;

//   const otherPaymentOption = (
//     <div style={{ marginTop: "1.5rem", marginBottom: "1.5rem" }}>
//       <h5>Sorry, other payment method is not available yet</h5>
//     </div>
//   );

//   const cardPaymentOption = (
//     <div className={"card-info"}>
//       <div className={"card-info-inner-container"}>
//         <label>
//           Card holder name
//           <input
//             className={
//               !creditCardNameRegistration.touched
//                 ? null
//                 : creditCardNameRegistration.valid
//                 ? null
//                 : "InputError"
//             }
//             name="creditCardNameRegistration"
//             value={creditCardNameRegistration.value}
//             placeholder="Name shown on the card"
//             onChange={props.onChangeHandler}
//           />
//         </label>
//         <label>
//           Card number
//           <Cleave
//             className={
//               !creditCardNumberRegistration.touched
//                 ? null
//                 : creditCardNumberRegistration.valid
//                 ? null
//                 : "InputError"
//             }
//             placeholder="Card number"
//             name="creditCardNumberRegistration"
//             value={creditCardNumberRegistration.value}
//             options={{ creditCard: true }}
//             onChange={props.onChangeHandler}
//           />
//         </label>
//         {/*<label className={"Col-1-6"}>
//           Card
//           <select
//             className={
//               !creditCardTypeRegistration.touched
//                 ? null
//                 : creditCardTypeRegistration.valid
//                 ? null
//                 : "InputError"
//             }
//             style={
//               creditCardTypeRegistration.touched ? { color: "#282828" } : null
//             }
//             name="creditCardTypeRegistration"
//             value={creditCardTypeRegistration.value}
//             onChange={props.onChangeHandler}
//           >
//             <option value="">Card</option>
//             <option value="visaCard">Visa</option>
//             <option value="americanExpressCard">American Express</option>
//             <option value="masterCard">Master</option>
//             <option value="discoverCard">Discover</option>
//           </select>
//         </label>
//         <label>
//           Card number
//           <input
//             className={
//               !creditCardNumberRegistration.touched
//                 ? null
//                 : creditCardNumberRegistration.valid
//                 ? null
//                 : "InputError"
//             }
//             name="creditCardNumberRegistration"
//             value={creditCardNumberRegistration.value}
//             placeholder="0000-0000-0000-0000"
//             onChange={props.onChangeHandler}
//           />
//         </label>
//         */}
//         <label className={"Col-1-6"}>
//           Expiration date
//           <MaskedInput
//             className={
//               !creditCardExpirationRegistration.touched
//                 ? null
//                 : creditCardExpirationRegistration.valid
//                 ? null
//                 : "InputError"
//             }
//             mask={[/[0-1]/, /\d/, "/", /\d/, /\d/]}
//             placeholder="MM/YY"
//             name="creditCardExpirationRegistration"
//             value={creditCardExpirationRegistration.value}
//             guide={false}
//             onChange={props.onChangeHandler}
//           />
//           {/*<input
//             className={
//               !creditCardExpirationRegistration.touched
//                 ? null
//                 : creditCardExpirationRegistration.valid
//                 ? null
//                 : "InputError"
//             }
//             name="creditCardExpirationRegistration"
//             value={creditCardExpirationRegistration.value}
//             placeholder="MM/YY"
//             onChange={props.onChangeHandler}
//           />*/}
//         </label>
//         <label className={"Col-1-6"}>
//           Security code
//           <MaskedInput
//             className={
//               !creditCardSecurityRegistration.touched
//                 ? null
//                 : creditCardSecurityRegistration.valid
//                 ? null
//                 : "InputError"
//             }
//             mask={[/\d/, /\d/, /\d/]}
//             placeholder="123"
//             name="creditCardSecurityRegistration"
//             value={creditCardSecurityRegistration.value}
//             guide={false}
//             onChange={props.onChangeHandler}
//           />
//           {/*<input
//             className={
//               !creditCardSecurityRegistration.touched
//                 ? null
//                 : creditCardSecurityRegistration.valid
//                 ? null
//                 : "InputError"
//             }
//             name="creditCardSecurityRegistration"
//             value={creditCardSecurityRegistration.value}
//             placeholder="123"
//             onChange={props.onChangeHandler}
//           />*/}
//         </label>
//       </div>
//     </div>
//   );

//   return (
//     <div>
//       <h5 className={"Register-h5-title"}>Payment</h5>

//       <CustomFormControl>
//         <CustomFormLabel style={{ marginBottom: "6px" }}>
//           Select payment method
//         </CustomFormLabel>
//         <RadioGroup
//           aria-label="Lodging option"
//           name="paymentMethodRegistration"
//           value={paymentMethodRegistration.value}
//           onChange={props.onChangeHandler}
//         >
//           <div className={"payment-method-container"}>
//             <CustomRadioFormControlLabel
//               className={"Col-3-8"}
//               value="cardPaymentRegistration"
//               control={<BlueRadio />}
//               label="Credit card"
//             />
//             <CustomRadioFormControlLabel
//               value="otherPaymentRegistration"
//               control={<BlueRadio />}
//               label="Other method if any"
//             />
//           </div>
//         </RadioGroup>

//         {paymentMethodRegistration.value === "otherPaymentRegistration"
//           ? otherPaymentOption
//           : cardPaymentOption}

//         {/*<CustomFormControlLabel
//           control={
//             <BlueCheckBox
//               //   checked={}
//               value="save-card-info"
//             />
//           }
//           label="Would you like to save this card for the future?"
//         />*/}
//       </CustomFormControl>
//     </div>
//   );
// };

// export default payment;
