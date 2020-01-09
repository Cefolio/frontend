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
    title: '',
    user_id: '',
    meal_type: '',
    ingredients: '',
    img: '',
    instructions: ''
  })

  const [chef, setChef] = useState({
    name: ''
  });

  useEffect(() => {
    axiosWithAuth()
      .get(`/recipe/${props.displayRecipes}`)
      .then(res => {
        props.fetchRecipe();
        props.fetchChef();
        setRecipe(props.recipe);
        setChef(props.chef);
      })
      .catch(err => {
        console.error(err);
      });
  })

  // useEffect(() => {
  //   props.fetchRecipe();
  //   props.fetchChef();
  //   setRecipe(props.recipe)
  //   setChef(props.chef.name)
  // }, [props.recipe, props.chef])

  return (
    <div className="recipe-card">
      <img src={recipe.img} alt={recipe.title} />
      <h2>{recipe.title}</h2>
      <p>Meal Type: {recipe.mealType}</p>
      <p>Chef Name: {chef.name}</p>
      <p>Ingredients: {recipe.ingredients}</p>
        <Link to={`/recipes/${recipe.id}`} className="recipe-buttons">
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

// import React from "react";
// import { Link } from "react-router-dom";

// const RecipeCard = props => {

//   return (
//     <div>
//       <Link to={`/recipes/${props.recipe.id}`}>
//         <img src={props.recipe.img} alt={props.recipe.title} />
//         <h2>{props.recipe.title}</h2>
//         <p>{props.recipe.meal_type}</p>
//         <p>{props.recipe.ingredients}</p>
//         <p>{props.recipe.instructions}</p>
//       </Link>
//     </div>
//   );
// };

// export default RecipeCard;
