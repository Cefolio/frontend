import React, { useState, useEffect } from 'react';
// import RecipeCard from './RecipeCard';
// import { axiosWithAuth } from '../utils/axiosWithAuth';
import { connect } from 'react-redux';
import { fetchRecipe, fetchChef } from '../actions/actions';
import { Link } from 'react-router-dom';

const RecipeCardPage = props => {

  const [recipe, setRecipe] = useState({
    id: '',
    mealType: '',
    ingredients: '',
    img: ''
  })

  const [chef, setChef] = useState({
    name: ''
  });

  useEffect(() => {
    props.fetchRecipe();
    props.fetchChef();
    setRecipe(props.recipe)
    setChef(props.chef.name)
  }, [props.recipe, props.chef])

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
      {recipe.map(recipe => {
        return(
        <div> 
          {/* RecipeCard component has button - not needed here */}
          {/* <RecipeCard recipe={recipe} /> */}
          <img src={recipe.img} alt={recipe.title} />
          <h2>{recipe.title}</h2>
          <p>Meal Type: {recipe.mealType}</p>
          <p>Chef Name: {chef.name}</p>
          <p>Ingredients: {recipe.ingredients}</p>
          <p className="recipe-card">Instructions: {recipe.instructions}</p>

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

export default connect(mapStateToProps, { fetchRecipe, fetchChef })(RecipeCardPage);