import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addRecipe } from '../actions/actions';

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
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        onChange={handleChange}
                        placeholder="Recipe Name"
                        value={recipe.title}
                        />
                        <br />
                        {/* <input
                            type="text"
                            name="img"
                            onChange={handleChange}
                            placeholder='Image'
                            value={recipe.img}
                            />
                        <br/> */}
                        <input
                            type="text"
                            name="meal_type"
                            onChange={handleChange}
                            placeholder='Meal Type'
                            value={recipe.meal_type}
                            />
                        <br/>
                        <input
                            type="text"
                            name="ingredients"
                            onChange={handleChange}
                            placeholder='Ingredients'
                            value={recipe.ingredients}
                            />
                        <br/>
                        <input
                            type="text"
                            name="instructions"
                            onChange={handleChange}
                            placeholder="Instructions"
                            value={recipe.instructions}
                            />
                        <br/>
                        <button type='submit'>Add Recipe</button>
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