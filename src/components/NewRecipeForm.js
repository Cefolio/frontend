import React from 'react';
import { AxiosWithAuth, axiosWithAuth } from '../utils/axiosWithAuth';

class NewRecipe extends React.Component {
    state = {
        id: new Date().getUTCMilliseconds(),
        chef: '',
        nameOfRecipe: '',
        ingredients: {},
        instructions: []

    };
    changeHandler = e => {
        e.persist();
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    handleSubmit = e => {
        e.preventDefault();
        //Post request to server to add a new recipe
        axiosWithAuth().post('someSortOfEndPoint', this.state)
        .then(res => {
            console.log('res', res)
        })
        .catch(err => {
            console.log('err', err)
        })
    };
    render(){
        return(
            <div>
                <h2>Create New Recipe</h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="chef"
                        onChange={this.changeHandler}
                        placeholder="Chef"
                        value={this.state.chef}
                        />
                        <br/>
                    <input
                        type="text"
                        name="name"
                        onChange={this.changeHandler}
                        placeholder="Recipe Name"
                        value={this.state.nameOfRecipe}
                        />
                        <br />
                        <input
                            type="text"
                            name="ingredients"
                            onChange={this.changeHandler}
                            placeholder='Ingredients'
                            value={this.state.ingredients}
                            />
                        <br/>
                        <input
                            type="text"
                            name="instructions"
                            onChange={this.changeHandler}
                            placeholder="Instructions"
                            value={this.state.instructions}
                            />
                        <br/>
                        <button type='submit'>Add Recipe</button>
                </form>
            </div>
        );
    }
}
export default NewRecipe;