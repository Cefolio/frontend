import React from 'react';
import RecipeCard from './RecipeCard';
import { connect } from 'react-redux';
import { fetchRecipe } from '../actions/actions';
import { Link } from 'react-router-dom';

const RecipeCardPage = props => {
  return (
    <div className="recipe-card">
      {props.displayedRecipes.map(recipe => {
        <div>
          <RecipeCard recipe={recipe} />
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
      })}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    displayedRecipes: state.displayedRecipes,
    chef: state.chef,
    isFetching: state.isFetching
  }
}

export default connect(mapStateToProps, { fetchRecipe })(RecipeCardPage);