import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Homepage from "./components/Homepage";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import ChefRecipePage from "./components/ChefRecipePage";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/login" component={LoginForm} />
        <Route path="register" component={RegisterForm} />
        <Route path="/chef/:id/recipes" component={ChefRecipePage} />
        <PrivateRoute path="/dashboard" component={ChefsDashboard} />
      </Switch>
    </div>
  );
}

export default App;
