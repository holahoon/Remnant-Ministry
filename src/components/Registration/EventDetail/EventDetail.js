import React from "react";

import { LinkButton } from "../../UI/Button/Button";

import "./EventDetail.css";

const eventDetail = props => {
  return (
    <div className={"Event-detail-page-container"}>
      <div className={"Col-8 margin-left-2"}>
        <h2>Some details~</h2>

        <LinkButton
          buttonClass={"Event-detail-register-button"}
          directTo={"/Registration"}
        >
          Register
        </LinkButton>
      </div>
    </div>
  );
};

export default eventDetail;
