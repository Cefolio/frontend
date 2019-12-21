import SearchForm from "./components/SearchForm";
import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Homepage from "./components/Homepage";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import ChefRecipePage from "./components/ChefRecipePage";
import ChefsDashboard from "./components/ChefsDashboard";
import RecipeCardPage from "./components/RecipeCardPage";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Nav />
      <SearchForm />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/login" component={LoginForm} />
        <Route path="register" component={RegisterForm} />
        <Route path="/chef/:id" component={ChefRecipePage} />
        <Route path="/recipe/:id" component={RecipeCardPage} />
        {/* // Update to private route */}
        <Route path="/dashboard" component={ChefsDashboard} />
      </Switch>
    </div>
  );
}

export default App;
