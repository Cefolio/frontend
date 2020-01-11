// import React from 'react';
// import { addRecipe } from "../actions/actions";
// import { connect } from 'react-redux';
// class NewRecipe extends React.Component {
//     state = {
//         title: '',
//         img: '',
//         mealType: '',
//         ingredients: '',
//         instructions: '',
//         user_id: ''
//     };

//     changeHandler = e => {
//         e.persist();
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     };

//     handleSubmit = e => {
//         e.preventDefault();
//         //Post request to server to add a new recipe
//         // axiosWithAuth().post('someSortOfEndPoint', this.state)
//         // .then(res => {
//         //     console.log('res', res)
//         // })
//         // .catch(err => {
//         //     console.log('err', err)
//         // })
//         this.props.addRecipe();
//     };

//     render(){
//         return(
//             <div>
//                 <h2>Create New Recipe</h2>
//                 <form onSubmit={this.handleSubmit}>
//                     <input
//                         type="text"
//                         name="title"
//                         onChange={this.changeHandler}
//                         placeholder="Recipe Name"
//                         value={this.state.title}
//                         />
//                         <br />
//                         <input
//                             type="text"
//                             name="img"
//                             onChange={this.changeHandler}
//                             placeholder='Image'
//                             value={this.state.img}
//                             />
//                         <br/>
//                         <input
//                             type="text"
//                             name="mealType"
//                             onChange={this.changeHandler}
//                             placeholder='Meal Type'
//                             value={this.state.mealType}
//                             />
//                         <br/>
//                         <input
//                             type="text"
//                             name="ingredients"
//                             onChange={this.changeHandler}
//                             placeholder='Ingredients'
//                             value={this.state.ingredients}
//                             />
//                         <br/>
//                         <input
//                             type="text"
//                             name="instructions"
//                             onChange={this.changeHandler}
//                             placeholder="Instructions"
//                             value={this.state.instructions}
//                             />
//                         <br/>
//                         <button type='submit'>Add Recipe</button>
//                 </form>
//             </div>
//         );
//     }
// }
// export default connect(null, { addRecipe })(NewRecipe);

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
                        <input
                            type="text"
                            name="img"
                            onChange={handleChange}
                            placeholder='Image'
                            value={recipe.img}
                            />
                        <br/>
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