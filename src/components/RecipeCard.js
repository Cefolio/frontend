// create a fetchRecipe and fetchChef action in actions
// create a recipe, chef and isFetching state for initialState in reducers

// When User clicks on "More Info" button, recipe instructions will be listed

import React from "react";
import { Link } from "react-router-dom";
import '../css/RecipeCard.scss';

const RecipeCard = props => {
  return (
    <div id={props.recipe.user_id} className="recipe-card">
      <Link to={`/recipes/${props.recipe.id}`} className="recipe-link">
        <img src={props.recipe.img} alt={props.recipe.title} />
        <h2>{props.recipe.title}</h2>
        <p className="recipe-font">{props.recipe.meal_type}</p>
        {/* <p>{props.recipe.ingredients}</p>
        <p>{props.recipe.instructions}</p> */}
      </Link>
    </div>
  );
};

export default RecipeCard;