import React, { Fragment } from "react";

import NavigationFooter from "./NavigationFooter/NavigationFooter";
import CopyrightFooter from "./CopyrightFooter/CopyrightFooter";

const footers = props => {
  return (
    <Fragment>
      <NavigationFooter />
      <CopyrightFooter />
    </Fragment>
  );
};

export default footers;
