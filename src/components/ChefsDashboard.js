import React, { Component } from "react";
import RecipeCardContainer from "../containers/RecipeCardContainer";
import SearchForm from "./SearchForm";
import NewRecipeForm from "./NewRecipeForm";

export default class ChefsDashboard extends Component {
  
  render() {
    const token = localStorage.getItem('token');
    return (
      <div>
        <SearchForm />
        {token != null ? <NewRecipeForm /> : <div></div>}
        <RecipeCardContainer />
      </div>
    );
  }
}
