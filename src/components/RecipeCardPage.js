import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';
import { connect } from 'react-redux';
import { fetchRecipe } from '../actions/actions';
import { Link } from 'react-router-dom';

const RecipeCardPage = props => {

  const [recipe, setRecipe] = useState({
    id: '',
    instructions: ''
  })

  useEffect(() => {
    props.fetchRecipe();
    setRecipe(props.recipe)
  }, [props.recipe])

  return (
    <div className="recipe-card">
      {props.displayedRecipes.map(recipe => {
        return(
        <div>
          <RecipeCard recipe={recipe} />
          <p>Instructions: {recipe.instructions}</p>

          {localStorage.getItem('token') ?
            <Link to={`/dashboard/${props.chef.id}`} className="recipe-buttons">
              Back to Recipes
            </Link>
            :
            <Link to={`/recipes`} className="recipe-buttons">
              Back to Recipes
            </Link>
          }
        </div>)
      })}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    recipe: state.recipe,
    displayedRecipes: state.displayedRecipes,
    chef: state.chef,
    isFetching: state.isFetching
  }
}

export default connect(mapStateToProps, { fetchRecipe })(RecipeCardPage);