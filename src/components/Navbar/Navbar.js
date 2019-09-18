import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../../store/actions/indexAction";

import "./Navbar.css";

class Navbar extends Component {
  render() {
    let displayNavbar = null;

    const initialLoginNavbar = (
      <ul className={"NavGroup2"}>
        <li>
          <NavLink to="/login">Log in</NavLink>
        </li>
        <li>
          <NavLink to="/Signup">Sign up</NavLink>
        </li>
      </ul>
    );

    const loginNavbar = (
      <ul className={"NavGroup2 Create-account"}>
        <li>Are you new here?</li>
        <li>
          <NavLink to="/Signup">Create an account</NavLink>
        </li>
      </ul>
    );

    const signupNavbar = (
      <ul className={"NavGroup2 Create-account"}>
        <li style={{ marginRight: "0.875rem" }}>
          Do you have an account already?
        </li>
        <li>
          <NavLink to="/login">Sign in</NavLink>
        </li>
      </ul>
    );

    const signedInNavbar = (
      <ul className={"NavGroup2"}>
        <li>
          <NavLink to="/My-Account">My Account</NavLink>
        </li>
        <li onClick={this.props.logoutHandler}>
          <NavLink to="/" exact>
            Log out
          </NavLink>
        </li>
      </ul>
    );

    if (this.props.onLoginPage && !this.props.loggedIn) {
      displayNavbar = loginNavbar;
    } else if (this.props.onSignupPage && !this.props.loggedIn) {
      displayNavbar = signupNavbar;
    } else if (!this.props.isAuthenticated) {
      displayNavbar = initialLoginNavbar;
    } else if (this.props.isAuthenticated) {
      displayNavbar = signedInNavbar;
    }

    return (
      <nav className={"Navbar"}>
        <div className={"NavGroup1"}>
          <NavLink to="/" className={"Logo logo--global"}>
            RM
          </NavLink>
          <ul className={"NavigationLinks"}>
            <li>
              <NavLink to="/Error">About us</NavLink>
            </li>
            <li>
              <NavLink to="/Error">Message</NavLink>
            </li>
            <li>
              <NavLink to="/Error">Praise</NavLink>
            </li>
            <li>
              <NavLink to="/Error">Training</NavLink>
            </li>
            <li>
              <NavLink to="/Error">Blog</NavLink>
            </li>
          </ul>
        </div>
        {displayNavbar}
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    // loggedIn: state.globalLogin.loggedIn,
    isAuthenticated: state.globalLogin.token !== null,
    onLoginPage: state.globalLogin.onLoginPage,
    onSignupPage: state.globalSignup.onSignupPage
    // correctUser: state.globalLogin.correctUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logoutHandler: () => dispatch(actions.logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
