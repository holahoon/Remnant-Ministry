import React from "react";

import Events from "./Events/Events";

import "./Event.css";

const events = props => {
  const { event1Registered, event2Registered } = props.stateData;

  console.log(props.stateData);
  return (
    <React.Fragment>
      <div className={"Event-container"}>
        <Events
          eventSubject={event1Registered ? "Registered" : "Upcoming events"}
          eventTitle={"Remnant Conference America"}
          location={"Chicago"}
          date={"05/05/2019 - 05/06/2019"}
          registered={event1Registered}
          classNameTitle={"Events-image-content"}
        />
      </div>
      <div className={"Event-container"}>
        <Events
          eventSubject={event2Registered ? "Registered" : "Upcoming events"}
          eventTitle={"Event Title"}
          location={"Chicago"}
          date={"05/05/2019 - 05/06/2019"}
          registered={event2Registered}
          classNameTitle={"Events-image-content"}
        />
      </div>
    </React.Fragment>
  );
};

export default events;
