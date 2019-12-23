// create a fetchRecipe and fetchChef action in actions
// create a recipe, chef and isFetching state for initialState in reducers

// When User clicks on "More Info" button, recipe instructions will be listed

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRecipe, fetchChef } from '../actions/actions';
import { Link } from 'react-router-dom';
// Change to index.scss once completed
import '../css/RecipeCard.scss';
import gsap from 'gsap';
import { axiosWithAuth } from '../utils/axiosWithAuth';

gsap.from('.recipe-card', {
  duration: 2,

})

const RecipeCard = props => {

  const [recipe, setRecipe] = useState({
    id: '',
    mealType: '',
    ingredients: '',
    img: ''
  })

  const [chef, setChef] = useState('');

  useEffect(() => {
    axiosWithAuth()
      .get(`/recipe/${props.displayRecipes}`)
      .then(res => {
        setRecipe(props.recipe);
      })
      .catch(err => {
        console.error(err);
      });
  })

  return (
    <div className="recipe-card">
      <img src={recipe.img} alt={recipe.title} />
      <h2>{recipe.title}</h2>
      <p>Meal Type: {recipe.mealType}</p>
      <p>Chef Name: {chef.name}</p>
      <p>Ingredients: {recipe.ingredients}</p>
        <Link to={`/recipes/${props.displayRecipes}`} className="recipe-buttons">
          More Info
        </Link>
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

export default connect(mapStateToProps, { fetchRecipe, fetchChef })(RecipeCard);