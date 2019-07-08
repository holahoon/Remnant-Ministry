import React from "react";
import { Link } from "react-router-dom";

import Button from "../../../UI/Button/Button";

import ArrowRight16 from "@carbon/icons-react/es/arrow--right/16";
import CheckMark16 from "@carbon/icons-react/es/checkmark/16";

import "./Events.css";

const events = props => {
  const arrow = (
    <Link to="/Registration" className={"Register button-1-2--global"}>
      Register
      <ArrowRight16 className={"Next-arrow"} />
    </Link>
  );
  const check = (
    <Button buttonClass={"Register button-1-2--global true"} disabled>
      Registered
      <CheckMark16 className={"Checked-mark"} />
    </Button>
  );

  return (
    <div className={"Col-6 margin-left-3 Events-container"}>
      <h5 className={"Event-subject"}>{props.eventSubject}</h5>

      <div className={props.classNameTitle}>
        <h5>{props.eventTitle}</h5>
        <div className={"Event-description"}>
          <div>
            <h6>Location</h6>
            <p>{props.location}</p>
          </div>
          <div>
            <h6>Date</h6>
            <p>{props.date}</p>
          </div>
        </div>
      </div>
      <div className={"Button-group"}>
        <Button buttonClass={"View-detail button-1-1--global"}>
          View detail
        </Button>
        {props.registered ? check : arrow}
      </div>
    </div>
  );
};

export default events;
