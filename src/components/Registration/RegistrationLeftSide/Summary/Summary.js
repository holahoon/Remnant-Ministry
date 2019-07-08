import React from "react";

const summary = props => {
  return (
    <div>
      <h3 className={"step-title"}>Summary</h3>
      <p className={"Left-lodging-option"}>Lodging option</p>
      <p className={"Left-lodging-quantity"}>
        4 people / room<span>$ 0.00</span>
      </p>
      <p className={"Left-total"}>
        Total<span>$ 0.00</span>
      </p>

      <div className={"step-divider"} />
    </div>
  );
};

export default summary;
