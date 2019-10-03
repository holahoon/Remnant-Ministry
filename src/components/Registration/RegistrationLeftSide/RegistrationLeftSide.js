import React, { Component } from "react";
import { connect } from "react-redux";

import Step from "./Step/Step";
import Summary from "./Summary/Summary";

import "./RegistrationLeftSide.css";

class registrationLeftSide extends Component {
  render() {
    const summary = <Summary />;
    return (
      <div
        className={"Registration-left-side-container Col-4-8 margin-left-2-8"}
      >
        <Step
          pageNumber={this.props.pageNumber}
          page1Complete={this.props.page1Complete}
          page2Complete={this.props.page2Complete}
          page3Complete={this.props.page3Complete}
        />
        {this.props.page1Complete ? summary : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pageNumber: state.globalRegistration.registrationPage,
    page1Complete: state.globalRegistration.page1Complete,
    page2Complete: state.globalRegistration.page2Complete,
    page3Complete: state.globalRegistration.page3Complete
  };
};

export default connect(mapStateToProps)(registrationLeftSide);
