import React, { Component } from "react";
import { connect } from "react-redux";

import ArrowRight20 from "@carbon/icons-react/es/arrow--right/20";
import CheckmarkOutline16 from "@carbon/icons-react/es/checkmark--outline/16";

class step extends Component {
  render() {
    const arrow1 = (
      <ArrowRight20
        className={
          this.props.pageNumber === 1
            ? "ArrowIcon-registration-step"
            : "ArrowIcon-registration-step hide-arrow"
        }
      />
    );
    const arrow2 = (
      <ArrowRight20
        className={
          this.props.pageNumber === 2
            ? "ArrowIcon-registration-step"
            : "ArrowIcon-registration-step hide-arrow"
        }
      />
    );
    const arrow3 = (
      <ArrowRight20
        className={
          this.props.pageNumber === 3
            ? "ArrowIcon-registration-step"
            : "ArrowIcon-registration-step hide-arrow"
        }
      />
    );
    // const arrow = <ArrowRight20 className={"ArrowIcon-registration-step"} />;
    const checked = (
      <CheckmarkOutline16 className={"Checkmark-outline-registration-step"} />
    );

    return (
      <div>
        <h3 className={"step-title"}>Step {this.props.pageNumber} of 3</h3>
        <p
          className={`steps ${
            this.props.pageNumber === 1 ? "steps-selected" : null
          }`}
        >
          {this.props.page1Complete ? checked : arrow1}
          General information
        </p>

        <p
          className={`steps ${
            this.props.pageNumber === 2 ? "steps-selected" : null
          }`}
        >
          {this.props.page2Complete ? checked : arrow2}
          RCA options & information
        </p>

        <p
          className={`steps ${
            this.props.pageNumber === 3 ? "steps-selected" : null
          }`}
        >
          {this.props.page3Complete ? checked : arrow3}
          Payment & billing
        </p>

        <div className={"step-divider"} />
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

export default connect(mapStateToProps)(step);
