import React from 'react';
import { connect } from 'react-redux';
import { fetchRecipe } from '../actions/actions';
import { Link } from 'react-router-dom';

const RecipeCardPage = props => {
  return (
    <div className="recipe-card">
      <img src={props.recipe.img} alt={props.recipe.title} />
      <h2>{props.recipe.title}</h2>
      <p>Meal Type: {props.recipe.mealType}</p>
      <p>Chef Name: {props.chef.name}</p>
      <p>Ingredients: {props.recipe.ingredients}</p>
      <p>Instructions: {props.recipe.instructions}</p>

      {localStorage.getItem('token') ?
        <Link to={`/dashboard/${props.chef.id}`} className="recipe-buttons">
          Back to Recipes
        </Link>
      :
        <Link to={`/chef/${props.chef.id}/recipes`} className="recipe-buttons">
          Back to Recipes
        </Link>
      }
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

export default connect(mapStateToProps, { fetchRecipe })(RecipeCardPage);