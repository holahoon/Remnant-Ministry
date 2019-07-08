import React from "react";

const pageUnderConstruction = () => (
  <div style={style}>
    <h3 style={style1}>Oops!</h3>
    <h3 style={style1}>This page is under development</h3>
  </div>
);

const style = {
  textAlign: "center",
  fontWeight: "600"
};
const style1 = {
  fontSize: "4rem",
  marginTop: "4rem",
  marginBottom: "6rem"
};

export default pageUnderConstruction;
