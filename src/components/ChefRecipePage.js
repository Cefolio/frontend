import React, { Component } from "react";
import SearchForm from "./SearchForm";
import RecipeCardContainer from "../containers/RecipeCardContainer";

export default class ChefRecipePage extends Component {
  render() {
    return (
      <div>
        <SearchForm />
        <RecipeCardContainer id={this.props.match.params.id} />
      </div>
    );
  }
}
