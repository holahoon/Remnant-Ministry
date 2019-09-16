import React from "react";

import NavigationFooter from "./NavigationFooter/NavigationFooter";
import CopyrightFooter from "./CopyrightFooter/CopyrightFooter";

const footers = props => {
  return (
    <footer>
      <NavigationFooter />
      <CopyrightFooter />
    </footer>
  );
};

export default footers;
