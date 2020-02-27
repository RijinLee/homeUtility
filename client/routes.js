import React, { Component } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import { Home, Lights } from "./components";

/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/lights" component={Lights} />
        {/* <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/charts" component={Charts} /> */}
        {/* {isLoggedIn && ( 
        <Switch> */}
        {/* Routes placed here are only available after logging in */}
        {/* <Route component={Home} />
        <Route path="/home" component={UserHome} />
        </Switch>
        )}  */}
        {/* Displays our Home component as a fallback */}
        <Route component={Home} />
      </Switch>
    );
  }
}

export default Routes;
