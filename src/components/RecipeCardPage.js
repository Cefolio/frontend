import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  fetchRecipe,
  fetchChef,
  deleteRecipe,
  editRecipe
} from "../actions/actions";
import { Link } from "react-router-dom";
import "../css/index.scss";
import image from "../images/food.jpeg";

const RecipeCardPage = props => {
  const { title, meal_type, img, ingredients, instructions, id } = props.recipe;

  const [recipe, setRecipe] = useState({
    title: "",
    meal_type: "",
    img: "",
    ingredients: "",
    instructions: "",
    user_id: ""
  });

  const [editMode, setEditMode] = useState(false);

  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    props.fetchRecipe(props.match.params.id);
  }, []);

  useEffect(() => {
    if (!props.loggedIn) {
      props.fetchChef(props.recipe.user_id);
    }
  }, [props.recipe]);

  const handleChange = e => {
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value
    });
  };

  const handleEdit = e => {
    e.preventDefault();
    props.editRecipe(props.match.params.id, recipe);
    setEditMode(false);
    props.fetchRecipe(props.match.params.id);
  };

  const triggerEditConfirmation = e => {
    e.preventDefault();
    setEditMode(true);
    setRecipe({
      ...recipe,
      title: title,
      img: img,
      meal_type: meal_type,
      ingredients: ingredients,
      instructions: instructions,
      user_id: props.chef.id
    });
  };

  const triggerDeleteConfirmation = e => {
    e.preventDefault();
    setIsDeleting(true);
  };

  return (
    <div className="recipe-card">
      <div>
        <img src={image} alt={props.recipe.title} />
        <h2>
          {editMode ? (
            <>
              <span className="recipe-card-font">Title:</span>
              <input
                type="text"
                value={recipe.title}
                name="title"
                onChange={handleChange}
              />
            </>
          ) : (
            title
          )}
        </h2>
        <p>
          <span className="recipe-card-font">Meal Type:</span>
          {editMode ? (
            <input
              type="text"
              value={recipe.meal_type}
              name="meal_type"
              onChange={handleChange}
            />
          ) : (
            meal_type
          )}
        </p>
        {editMode ? null : (
          <p>
            <span className="recipe-card-font">Chef Name:</span>
            {props.chef.name}
          </p>
        )}
        <p>
          <span className="recipe-card-font">Ingredients:</span>
          {editMode ? (
            <input
              type="text"
              value={recipe.ingredients}
              name="ingredients"
              onChange={handleChange}
            />
          ) : (
            ingredients
          )}
        </p>
        <p>
          <span className="recipe-card-font">Instructions:</span>
          {editMode ? (
            <input
              type="text"
              value={recipe.instructions}
              name="instructions"
              onChange={handleChange}
            />
          ) : (
            instructions
          )}
        </p>

        {props.loggedIn ? (
          <div>
            <button>
              <Link to={`/dashboard/`} className="text-decoration">
                Back to Recipes
              </Link>
            </button>
            <button
              onClick={triggerEditConfirmation}
              className="recipe-page-button"
              style={editMode ? { display: "none" } : null}
            >
              Edit Recipe
            </button>
            {editMode ? (
              <div>
                <button onClick={handleEdit} className="recipe-page-button">
                  Commit Changes
                </button>
                <button
                  onClick={() => setEditMode(false)}
                  className="recipe-page-button"
                >
                  Cancel
                </button>
              </div>
            ) : null}

            <button
              className="recipe-page-button"
              onClick={triggerDeleteConfirmation}
              style={isDeleting ? { display: "none" } : null}
            >
              Delete Recipe
            </button>
            {isDeleting ? (
              <div>
                <button
                  onClick={() => props.deleteRecipe(id, props.chef.id, props)}
                  className="recipe-page-button"
                >
                  Confirm Delete
                </button>
                <button
                  onClick={() => setIsDeleting(false)}
                  className="recipe-page-button"
                >
                  Cancel
                </button>
              </div>
            ) : null}
          </div>
        ) : (
          <Link
            to={`/chef/${props.recipe.user_id}`}
            className="recipe-page-button"
          >
            Back to Recipes
          </Link>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    recipe: state.recipe,
    chef: state.chef,
    isFetching: state.isFetching,
    loggedIn: state.isLoggedIn
  };
};

export default connect(mapStateToProps, {
  fetchRecipe,
  fetchChef,
  deleteRecipe,
  editRecipe
})(RecipeCardPage);
