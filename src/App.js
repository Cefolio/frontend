import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Homepage from "./components/Homepage";
import LoginForm from "./components/LoginForm";
import ChefRecipePage from "./components/ChefRecipePage";
import ChefsDashboard from "./components/ChefsDashboard";
import RecipeCardPage from "./components/RecipeCardPage";
import PrivateRoute from "./components/PrivateRoute";
import FormikRegisterForm from "./components/RegisterForm";

function App() {
  return (
    <div className="App">
      <Nav />

      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={FormikRegisterForm} />
        <Route path="/chef/:id" component={ChefRecipePage} />
        <Route path="/recipes/:id" component={RecipeCardPage} />
        <PrivateRoute path="/dashboard" component={ChefsDashboard} />
      </Switch>
    </div>
  );
}

export default App;
