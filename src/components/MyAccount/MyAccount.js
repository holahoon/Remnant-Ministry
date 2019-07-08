import React, { Component } from "react";

import AccountHeader from "./AccountHeader/AccountHeader";
import Event from "./Event/Event";
import EditProfile from "./EditProfile/EditProfile";
import AccountSetting from "./AccountSetting/AccountSetting";

import "./MyAccount.css";

class MyAccount extends Component {
  state = {
    category1: true,
    category2: false,
    category3: false,
    category4: false,
    event1Registered: false,
    event2Registered: true,
    editSaved: true,
    editting: true,
    // basicEdit: true,
    // yourAddress: true,
    // yourChurch: true,
    // yourField: true,
    password: true,
    showEditSavedBasicEdit: false,
    showEditSavedYourField: false,
    showEditSavedYourChurch: false,
    showEditSavedYourAddress: false,
    showEditSavedPassword: false
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.showEditSavedBasicEdit) {
  //     this.showEditSavedMessage = setTimeout(() => {
  //       this.setState({ showEditSavedBasicEdit: false });
  //     }, 2000);
  //   } else if (this.state.showEditSavedYourField) {
  //     this.showEditSavedMessage = setTimeout(() => {
  //       this.setState({ showEditSavedYourField: false });
  //     }, 2000);
  //   } else if (this.state.showEditSavedYourChurch) {
  //     this.showEditSavedMessage = setTimeout(() => {
  //       this.setState({ showEditSavedYourChurch: false });
  //     }, 2000);
  //   } else if (this.state.showEditSavedYourAddress) {
  //     this.showEditSavedMessage = setTimeout(() => {
  //       this.setState({ showEditSavedYourAddress: false });
  //     }, 2000);
  //   } else if (this.state.showEditSavedPassword) {
  //     this.showEditSavedMessage = setTimeout(() => {
  //       this.setState({ showEditSavedPassword: false });
  //     }, 2000);
  //   }
  // }

  enableEditHandler = (editing, showEditSaved) => {
    // const currentEdit = this.state[editing];
    // const showEditSaved = this.state.showEditSaved;
    this.setState({
      // [editing]: !currentEdit,
      [editing]: false,
      editSaved: false,
      [showEditSaved]: false
    });
  };

  saveEditHandler = (editing, showEditSaved) => {
    // const currentEdit = this.state[editing];
    // const showEditSaved = this.state.showEditSaved;
    this.setState({
      // [editing]: !currentEdit,
      [editing]: true,
      editSaved: true,
      [showEditSaved]: true
    });
  };

  cancelEditHandler = (editing, showEditSaved) => {
    // const currentEdit = this.state[editing];
    // const showEditSaved = this.state.showEditSaved;
    this.setState({
      // [editing]: !currentEdit,
      [editing]: true,
      editSaved: false,
      [showEditSaved]: false
    });
  };

  classNameChangeHandler = category => {
    // Kind of hard coded.. couldn't think of a better way
    // let selectedClass = { ...this.state };
    switch (category) {
      case "category1":
        return this.setState({
          ...this.state,
          category1: true,
          category2: false,
          category3: false,
          category4: false
        });
      case "category2":
        return this.setState({
          ...this.state,
          category1: false,
          category2: true,
          category3: false,
          category4: false
        });
      case "category3":
        return this.setState({
          ...this.state,
          category1: false,
          category2: false,
          category3: true,
          category4: false
        });
      case "category4":
        return this.setState({
          ...this.state,
          category1: false,
          category2: false,
          category3: false,
          category4: true
        });
      default:
        return;
    }
  };

  render() {
    let showContent = (
      <Event
        eventSubject={"Upcoming events"}
        stateData={this.state}
        classNameTitle={"Events-image-content"}
      />
    );
    if (this.state.category1) {
      showContent = (
        <Event
          eventSubject={"Upcoming events"}
          stateData={this.state}
          classNameTitle={"Events-image-content"}
        />
      );
    } else if (this.state.category2) {
      showContent = (
        <Event
          eventSubject={"Upcoming events"}
          stateData={this.state}
          classNameTitle={"Events-image-content"}
        />
      );
    } else if (this.state.category3) {
      showContent = (
        <EditProfile
          mainStateData={this.state}
          editHandler={this.enableEditHandler}
          saveEditHandler={this.saveEditHandler}
          cancelEditHandler={this.cancelEditHandler}
        />
      );
    } else if (this.state.category4) {
      showContent = (
        <AccountSetting
          mainStateData={this.state}
          editHandler={this.enableEditHandler}
          saveEditHandler={this.saveEditHandler}
          cancelEditHandler={this.cancelEditHandler}
        />
      );
    }

    return (
      <div className={"MyAccount-container"}>
        <AccountHeader
          stateData={this.state}
          classNameChangeHandler={this.classNameChangeHandler}
        />

        {showContent}
      </div>
    );
  }
}

export default MyAccount;
