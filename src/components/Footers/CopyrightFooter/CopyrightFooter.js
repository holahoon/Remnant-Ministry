import React from "react";

import "./CopyrightFooter.css";

const copyRightFooter = props => {
  return (
    <footer className={"CopyRightFooter"}>
      <div className={"Copyright Col-4 margin-left-2"}>
        &copy; 2019 Remnant Ministry. All rights reserved.{" "}
        <a href="/">Privacy Policy</a> and <a href="/">Terms of Use</a>
      </div>

      <div className={"SnsLinks margin-right-2"}>
        <ul className={"Col-2"}>
          <li>
            <a href="www.facebook.com">Facebook</a>
          </li>
          <li>
            <a href="www.instagram.com">Instagram</a>
          </li>
        </ul>

        <button className={"LanguageButton Col-1"}>English</button>
      </div>
    </footer>
  );
};

export default copyRightFooter;
