import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./EventDetail.css";

const EventDetail = props => {
  return (
    <div>
      <div>
        <h2>Some details~</h2>
      </div>
      {props.loggedIn ? (
        <Link to="/Registration" className={"RegisterButton"}>
          Register
        </Link>
      ) : (
        <Link to="/login" className={"RegisterButton"}>
          Log in
        </Link>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn
  };
};

export default connect(mapStateToProps)(EventDetail);
