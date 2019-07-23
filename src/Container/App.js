import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Layout from "../Layout/Layout";
import MainPage from "../components/MainPage/MainPage";

import LoginPage from "../components/LoginPage/LoginPage";
import SignupPage from "../components/SignupPage/SignupPage";
import MyAccount from "../components/MyAccount/MyAccount";
import Registration from "./Registration";

import PageUnderConstruction from "../components/PageUnderConstruction/PageUnderConstruction";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Navbar />
          <Layout>
            <Switch>
              <Route path="/Login" component={LoginPage} />
              <Route path="/Signup" component={SignupPage} />
              <Route path="/Error" component={PageUnderConstruction} />
              <Route path="/My-Account" component={MyAccount} />
              <Route path="/Registration" component={Registration} />
              <Route exact path="/" component={MainPage} />
            </Switch>
          </Layout>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
