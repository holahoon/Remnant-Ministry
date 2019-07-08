import React, { Component } from "react";

import AccountSettingForm from "./AccountSettingForms/AccountSettingForms";

import "./AccountSetting.css";

class accountSetting extends Component {
  // state = {
  //   editSaved: true,
  //   editPassword: true,
  //   showEditPassword: false
  // };

  render() {
    return (
      <div className={"Account-setting-container"}>
        <AccountSettingForm
          stateData={this.props.mainStateData}
          editHandler={this.props.editHandler}
          saveEditHandler={this.props.saveEditHandler}
          cancelEditHandler={this.props.cancelEditHandler}
        />
      </div>
    );
  }
}

export default accountSetting;
