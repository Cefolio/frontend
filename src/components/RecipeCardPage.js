import React, { useState, useEffect } from 'react';
// import RecipeCard from './RecipeCard';
// import { axiosWithAuth } from '../utils/axiosWithAuth';
import { connect } from 'react-redux';
import { fetchRecipe, fetchChef, deleteRecipe } from '../actions/actions';
import { Link } from 'react-router-dom';
import '../css/RecipeCardPage.scss';

const RecipeCardPage = props => {

  // const [recipe, setRecipe] = useState({
  //   title: '',
  //   user_id: '',
  //   meal_type: '',
  //   ingredients: '',
  //   img: ''
  // })

  // const [chef, setChef] = useState({
  //   name: ''
  // });

  useEffect(() => {
    props.fetchRecipe(props.match.params.id);
    // props.fetchChef(props.recipe.user_id);
    // setRecipe(props.recipe)
    // setChef(props.chef.name)
  }, [])

  useEffect(() => {
    props.fetchChef(props.recipe.user_id);
  }, [props.recipe]);

  console.log("RecipeCardPage Props:", props);
  console.log("Props.Recipe.User_ID", props.recipe.user_id);
  // const [recipe, setRecipe] = useState({
  //   id: '',
  //   mealType: '',
  //   ingredients: '',
  //   img: ''
  // })

  // const [chef, setChef] = useState('');

  // useEffect(() => {
  //   axiosWithAuth()
  //     .get(`/recipe/${props.displayRecipes}`)
  //     .then(res => {
  //       setRecipe(props.recipe);
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     });
  // })

  return (
    <div className="recipe-card">
        <div> 
          <img src={props.recipe.img} alt={props.recipe.title} />
          <h2>{props.recipe.title}</h2>
          <p>
            <span className="recipe-card-font">Meal Type:</span> 
              {props.recipe.meal_type}
          </p>
          <p>
            <span className="recipe-card-font">Chef Name:</span> 
              {props.chef.name}
          </p>
          <p>
            <span className="recipe-card-font">Ingredients:</span>
              {props.recipe.ingredients}
          </p>
          <p>
            <span className="recipe-card-font">Instructions:</span> 
              {props.recipe.instructions}
          </p>

          {localStorage.getItem('token') ?
            <div>
              <Link to={`/dashboard/`} className="recipe-buttons">
                Back to Recipes
              </Link>
              <Link to={`/usr/recipes/${props.recipe.id}`} className="recipe-buttons">
                Edit Recipe
              </Link>
              <Link to={`/dashboard/`} className="recipe-buttons" 
                onClick={() => props.deleteRecipe(props.recipe.id)}>
                Delete Recipe
              </Link>
            </div>
          :
            <Link to={`/chef/${props.chef.id}`} className="recipe-buttons">
              Back to Recipes
            </Link>
          }
        </div>
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

export default connect(mapStateToProps, { fetchRecipe, fetchChef, deleteRecipe })(RecipeCardPage);