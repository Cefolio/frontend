import React, { Component } from "react";
import RecipeCardContainer from "../containers/RecipeCardContainer";
import ChefCardContainer from "../containers/ChefCardContainer";
import SearchForm from "./SearchForm";
import NewRecipeForm from "./NewRecipeForm";

export default class ChefsDashboard extends Component {
  
  render() {
    const token = localStorage.getItem('token');
    return (
      <div>
        <SearchForm />
        {token != null ? <NewRecipeForm /> : <div></div>}
        {/* May need to change key */}
        <ChefCardContainer key={this.chef} />
        <RecipeCardContainer />
      </div>
    );
  }
}
