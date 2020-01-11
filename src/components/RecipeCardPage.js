import React, { useState, useEffect } from 'react';
// import RecipeCard from './RecipeCard';
// import { axiosWithAuth } from '../utils/axiosWithAuth';
import { connect } from 'react-redux';
import { fetchRecipe, fetchChef, deleteRecipe, editRecipe } from '../actions/actions';
import { Link } from 'react-router-dom';
import '../css/RecipeCardPage.scss';

const RecipeCardPage = props => {

  const { title, meal_type, img, ingredients, instructions, id } = props.recipe;

  const [recipe, setRecipe] = useState({
    title: '',
    meal_type: '',
    img: '',
    ingredients: '',
    instructions: '',
    user_id: ''
  })

  const [editMode, setEditMode] = useState(false);

  const [isDeleting, setIsDeleting] = useState(false);

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
    // props.fetchRecipe(props.match.params.id);
  }, [props.recipe]);

  const handleChange = e => {
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value
    })
  }

  const handleEdit = e => {
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
    if (editMode) {
      props.editRecipe(recipe);
    }
  }

  const triggerDeleteConfirmation = e => {
    e.preventDefault();
    setIsDeleting(true);
  }

  // console.log("RecipeCardPage Props:", props);
  // console.log("Props.Recipe.User_ID", props.recipe.user_id);
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
          <h2>
            {editMode ?
              (<input 
                type="text"
                value={recipe.title}
                name="title"
                onChange={handleChange}
              />)
              :
                (
                  title
                )
            }
          </h2>
          <p>
            <span className="recipe-card-font">Meal Type:</span> 
                {editMode ?
                  (<input 
                    type="text"
                    value={recipe.meal_type}
                    name="meal_type"
                    onChange={handleChange}
                  />)
                  :
                    (
                      meal_type
                    )
                }
          </p>
          <p>
            <span className="recipe-card-font">Chef Name:</span> 
              {props.chef.name}
          </p>
          <p>
            <span className="recipe-card-font">Ingredients:</span>
            {editMode ?
              (<input 
                type="text"
                value={recipe.ingredients}
                name="ingredients"
                onChange={handleChange}
              />)
              :
                (
                  ingredients
                )
            }
          </p>
          <p>
            <span className="recipe-card-font">Instructions:</span> 
                {editMode ?
                  (<input 
                    type="text"
                    value={recipe.instructions}
                    name="instructions"
                    onChange={handleChange}
                  />)
                  :
                    (
                      instructions
                    )
                }
          </p>

          {localStorage.getItem('token') ?
            <div>
              <Link to={`/dashboard/`} className="recipe-buttons">
                Back to Recipes
              </Link>
              <button onClick={handleEdit} className="recipe-buttons">
                {editMode ?
                "Commit Changes" : "Edit Recipe" 
                }
              </button>
              <button className="recipe-buttons" 
                onClick={triggerDeleteConfirmation} 
                style={isDeleting ? {display: "none"} : null}>
                Delete Recipe
              </button>
              {isDeleting ? (
                <div>
                <button onClick={() => props.deleteRecipe(id)}>Confirm Delete</button>
                <button onClick={() => setIsDeleting(false)}>Cancel</button>
                </div>
                ) : null
              }
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

export default connect(
  mapStateToProps, { 
    fetchRecipe, fetchChef, deleteRecipe, editRecipe 
  })(RecipeCardPage);