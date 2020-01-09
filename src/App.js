import SearchForm from "./components/SearchForm";
import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Homepage from "./components/Homepage";
import LoginForm from "./components/LoginForm";
import Container from "./components/RegisterForm";
import ChefRecipePage from "./components/ChefRecipePage";
import ChefsDashboard from "./components/ChefsDashboard";
import RecipeCardPage from "./components/RecipeCardPage";
import PrivateRoute from "./components/PrivateRoute";
import NewRecipe from './components/NewRecipeForm';
import FormikRegisterForm from './components/RegisterForm';

function App() {
  return (
    <div className="App">
      <Nav />
     
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={FormikRegisterForm}/>
        <Route path="register" component={Container} />
        <Route path="/chef/:id" component={ChefRecipePage} />
        <PrivateRoute path='/newrecipe' component={NewRecipe}/>
        <Route path="/recipe/:id" component={RecipeCardPage} />
        {/* // Update to private route */}
        <Route path="/dashboard" component={ChefsDashboard} />
      </Switch>
    </div>
  );
}

export default App;
