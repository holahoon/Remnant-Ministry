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
    const checked = (
      <CheckmarkOutline16 className={"Checkmark-outline-registration-step"} />
    );

    return (
      <div>
        <h3 className={"step-title"}>Step {this.props.pageNumber} of 3</h3>
        <p
          className={
            this.props.page1Complete
              ? "step-1-title step-selected"
              : "step-1-title"
          }
        >
          {this.props.page1Complete ? checked : arrow1}
          General information
        </p>

        <p
          className={
            this.props.page2Complete
              ? "step-2-title step-selected"
              : "step-2-title"
          }
        >
          {this.props.page2Complete ? checked : arrow2}
          RCA options & payment
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
