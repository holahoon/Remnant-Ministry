import React, { Component } from "react";
import { connect } from "react-redux";

import AccountHeader from "./AccountHeader/AccountHeader";
import Event from "./Event/Event";
import EditProfile from "./EditProfile/EditProfile";
import AccountSetting from "./AccountSetting/AccountSetting";
import PageUnderConstruction from "../PageUnderConstruction/PageUnderConstruction";

import "./MyAccount.css";

class MyAccount extends Component {
  state = {
    display: null,
    selected: "category1",
    event1Registered: false,
    event2Registered: true,
    editProfileEditing: false,
    accountSettingEditing: false
  };

  saveEditHandler = editingField => {
    this.setState({ editSaved: true, [editingField]: true });
    // if editSaved === true, store the user data
  };

  cancelEditHandler = editingField => {
    this.setState({ editSaved: false, [editingField]: false });
  };

  classNameChangeHandler = category => {
    const event = (
      <Event
        eventSubject={"Upcoming events"}
        stateData={this.state}
        classNameTitle={"Events-image-content"}
      />
    );
    const familyMember = <PageUnderConstruction />;
    const editProfile = (
      <EditProfile
        mainStateData={this.state}
        saveEditHandler={this.saveEditHandler}
        cancelEditHandler={this.cancelEditHandler}
      />
    );
    const accountSetting = (
      <AccountSetting
        mainStateData={this.state}
        saveEditHandler={this.saveEditHandler}
        cancelEditHandler={this.cancelEditHandler}
      />
    );

    switch (category) {
      case "category1":
        return this.setState({
          ...this.state,
          display: event,
          selected: "category1"
        });
      case "category2":
        return this.setState({
          ...this.state,
          display: familyMember,
          selected: "category2"
        });
      case "category3":
        return this.setState({
          ...this.state,
          display: editProfile,
          selected: "category3"
        });
      case "category4":
        return this.setState({
          ...this.state,
          display: accountSetting,
          selected: "category4"
        });
      default:
        return;
    }
  };

  render() {
    return (
      <div className={"MyAccount-container"}>
        <AccountHeader
          stateData={this.state}
          classNameChangeHandler={this.classNameChangeHandler}
        />

        <div className={"Content-container"}>
          {!this.state.display ? (
            <Event
              eventSubject={"Upcoming events"}
              stateData={this.state}
              classNameTitle={"Events-image-content"}
            />
          ) : (
            this.state.display
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userInfo: state.globalLogin.userInfo
  };
};

export default connect(mapStateToProps)(MyAccount);
