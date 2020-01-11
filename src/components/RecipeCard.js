// create a fetchRecipe and fetchChef action in actions
// create a recipe, chef and isFetching state for initialState in reducers

// When User clicks on "More Info" button, recipe instructions will be listed

import React from "react";
import { Link } from "react-router-dom";
import "../css/RecipeCard.scss";
import image from "../images/food.jpeg";

const RecipeCard = props => {
  return (
    <div id={props.recipe.user_id} className="recipe-card">
      <Link to={`/recipes/${props.recipe.id}`} className="recipe-link">
        <img src={image} alt={props.recipe.title} />
        <h2>{props.recipe.title}</h2>
        <p className="recipe-font">{props.recipe.meal_type}</p>
      </Link>
    </div>
  );
};

export default RecipeCard;
