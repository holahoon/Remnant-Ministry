import React, { Component } from "react";

import Basic from "./EditForms/Basic/Basic";
import YourField from "./EditForms/YourField/YourField";
import YourChurch from "./EditForms/YourChurch/YourChurch";
import YourAddress from "./EditForms/YourAddress/YourAddress";

import "./EditProfile.css";

class EditProfile extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={"Edit-container"}>
          <Basic
            stateData={this.props.mainStateData}
            editHandler={this.props.editHandler}
            saveEditHandler={this.props.saveEditHandler}
            cancelEditHandler={this.props.cancelEditHandler}
          />
        </div>
        <div className={"Edit-container"}>
          <YourField
            stateData={this.props.mainStateData}
            editHandler={this.props.editHandler}
            saveEditHandler={this.props.saveEditHandler}
            cancelEditHandler={this.props.cancelEditHandler}
          />
        </div>
        <div className={"Edit-container"}>
          <YourChurch
            stateData={this.props.mainStateData}
            editHandler={this.props.editHandler}
            saveEditHandler={this.props.saveEditHandler}
            cancelEditHandler={this.props.cancelEditHandler}
          />
        </div>
        <div className={"Edit-container"}>
          <YourAddress
            stateData={this.props.mainStateData}
            editHandler={this.props.editHandler}
            saveEditHandler={this.props.saveEditHandler}
            cancelEditHandler={this.props.cancelEditHandler}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default EditProfile;
