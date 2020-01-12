import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addRecipe } from '../actions/actions';
import "../css/index.scss";

const NewRecipeForm = props => {

    const [recipe, setRecipe] = useState({
        title: '',
        img: '',
        meal_type: '',
        ingredients: '',
        instructions: '',
        user_id: props.id
    });

    const handleChange = e => {
        setRecipe({
            ...recipe,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.addRecipe(recipe, props.id);
        setRecipe({
            title: '',
            img: '',
            meal_type: '',
            ingredients: '',
            instructions: '',
            user_id: props.id
        });
    }

    return (
             <div>
                <h2>Create New Recipe</h2>
                <form onSubmit={handleSubmit} className="recipe-form">
                    <label className="label">Title</label>
                    <input
                        type="text"
                        name="title"
                        onChange={handleChange}
                        placeholder="Recipe Name"
                        value={recipe.title}
                        />
                        <br />
                        <label className="label">Meal Type</label>
                        <input
                            type="text"
                            name="meal_type"
                            onChange={handleChange}
                            placeholder='Meal Type'
                            value={recipe.meal_type}
                            />
                        <br/>
                        <label className="label">Ingredients</label>
                        <input
                            type="text"
                            name="ingredients"
                            onChange={handleChange}
                            placeholder='Ingredients'
                            value={recipe.ingredients}
                            />
                        <br/>
                        <label className="label">instructions</label>
                        <input
                            type="text"
                            name="instructions"
                            onChange={handleChange}
                            placeholder="Instructions"
                            value={recipe.instructions}
                            />
                        <br/>
                        <button type='submit' className="recipe-button">
                            Add Recipe
                        </button>
                </form>
            </div>
    )
}

const mapStateToProps = state => {
    return {
        id: state.chef.id
    }
}
export default connect(mapStateToProps, { addRecipe })(NewRecipeForm);