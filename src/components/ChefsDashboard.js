import React, { Component } from "react";
import RecipeCardContainer from "../containers/RecipeCardContainer";
import SearchForm from "./SearchForm";
import NewRecipeForm from "./NewRecipeForm";

export default class ChefsDashboard extends Component {
  render() {
    return (
      <div>
        <div>
          <p>Chef Name:</p>
          <p>Location:</p>
          <p>Phone:</p>
        </div>
        <SearchForm />
        <NewRecipeForm />
        <RecipeCardContainer />
      </div>
    );
  }
}
