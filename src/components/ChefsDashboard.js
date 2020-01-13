import React, { Component } from "react";
import RecipeCardContainer from "../containers/RecipeCardContainer";
import SearchForm from "./SearchForm";
import NewRecipeForm from "./NewRecipeForm";
import { connect } from "react-redux";
import '../css/index.scss';

class ChefsDashboard extends Component {
  render() {
    return (
      <div>
        <div className="chef-dashboard">
          <h2 className="chef-dashboard-name">{this.props.chef.name}</h2>
          <p className="chef-dashboard-font">{this.props.chef.location}</p>
          <p className="chef-dashboard-font">{this.props.chef.email}</p>
          <p className="chef-dashboard-font">{this.props.chef.phone_number}</p>
          <p className="chef-dashboard-font">{this.props.chef.bio}</p>
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
