import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import ArrowRight20 from "@carbon/icons-react/es/arrow--right/20";

import "./MainPage.css";

class MainPage extends Component {
  render() {
    const viewEvent = (
      <NavLink to="/Event-details" className={"ViewEventButton"}>
        View event here
        <ArrowRight20 className={"ArrowIcon"} />
      </NavLink>
    );

    const loginToViewEvent = (
      <NavLink to="/login" className={"ViewEventButton"}>
        Login to view event
        <ArrowRight20 className={"ArrowIcon"} />
      </NavLink>
    );

    return (
      <div className={"Content"}>
        <div className={"Header Col-4 margin-left-2"}>
          <div className={"white-line"} />

          <div>
            <h2>2019</h2>
            <h3 className={"margin-left-1"}>Nov 28-30 Chicago</h3>
          </div>

          <h1>Remnant Conference of America</h1>

          {this.props.loginToken ? viewEvent : loginToViewEvent}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loginToken: state.globalLogin.token !== null
  };
};

export default connect(mapStateToProps)(MainPage);
