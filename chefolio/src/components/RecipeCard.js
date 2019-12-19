// create a fetchRecipe action in actions
// create a recipe, chef and isFetching state for initialState in reducers

// When User clicks on "More Info" button, recipe instructions will be listed

import React from 'react';
import { connect } from 'react-redux';
import { fetchRecipe } from '../actions/actions';

const RecipeCard = props => {
  return (
    <div className="recipe-card">
      <img src={props.recipe.img} alt={props.recipe.title} />
      <h2>{props.recipe.title}</h2>
      <p>Meal Type: {props.recipe.mealType}</p>
      <p>Chef Name: {props.chef.name}</p>
      <p>Ingredients: {props.recipe.ingredients}</p>
      <button>More Info</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    recipe: state.recipe,
    chef: state.chef,
    isFetching: state.isFetching
  }
}

export default connect(mapStateToProps, { fetchRecipe })(RecipeCard);