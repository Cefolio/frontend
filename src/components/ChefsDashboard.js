import React, { Component } from "react";
import RecipeCardContainer from "../containers/RecipeCardContainer";
import SearchForm from "./SearchForm";
import NewRecipeForm from "./NewRecipeForm";
import { connect } from "react-redux";

class ChefsDashboard extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>{this.props.chef.name}</h1>
          <p>{this.props.chef.location}</p>
          <p>{this.props.chef.email}</p>
          <p>{this.props.chef.phone_number}</p>
          <p>{this.props.chef.bio}</p>
        </div>
        <SearchForm />
        <NewRecipeForm />
        <RecipeCardContainer id={this.props.chef.id} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    chef: state.chef
  };
};

export default connect(mapStateToProps, {})(ChefsDashboard);
