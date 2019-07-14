import React from "react";

const summary = props => {
  const {
    lodgingOptionRegistration
  } = props.stateData.registrationFormValidation2;

  let lodgingDescription = (
    <p className={"Left-lodging-quantity"}>
      4 people / room<span>$ {lodgingOptionRegistration.price}</span>
    </p>
  );

  if (lodgingOptionRegistration.value === "4people" || lodgingOptionRegistration.disable) {
    lodgingDescription = (
      <p className={"Left-lodging-quantity"}>
        4 people / room<span>$ {lodgingOptionRegistration.price}</span>
      </p>
    );
  } else if (lodgingOptionRegistration.value === "2people") {
    lodgingDescription = (
      <p className={"Left-lodging-quantity"}>
        2 people / room<span>$ {lodgingOptionRegistration.price}</span>
      </p>
    );
  }

  return (
    <div>
      <h3 className={"step-title"}>Summary</h3>
      <p className={"Left-lodging-option"}>Lodging option</p>
      {lodgingDescription}
      <p className={"Left-total"}>
        Total<span>$ {lodgingOptionRegistration.price}</span>
      </p>

      <div className={"step-divider"} />
    </div>
  );
};

export default summary;
