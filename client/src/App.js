import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/index";
import SigninPage from "./pages/signin";
import { TransitionGroup, Transition } from "react-transition-group";
import PricingPage from "./pages/pricing";
import RegisterPage from "./pages/register";
import VerifyEmailPage from "./pages/verifyemail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/pricing" component={PricingPage} exact />
        <Route path="/register" component={RegisterPage} exact />
        <Route path="/verify-email" component={VerifyEmailPage} exact />
        <Route exact path="/login">
          <Redirect to='/signin'/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
