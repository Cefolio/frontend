import React, { useState } from 'react';
export default function NewRecipe(props){
    const [state, setState] = useState({Chef: '', Ingredients: {}, Instructions: []});
    function handleChange(e){
        const updateState = {...state, [e.target.name]: e.target.value};
        setState(updateState);
    }
    function handleSubmit(e){
        e.preventDefault();
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        Chef:
                        <input type='text' name='Chef' value={state.Chef} onChange={handleChange}/>
                    </label>
                    <label>
                        Ingredients:
                        <input type='text' name='Ingredients' value={state.Ingredients} onChange={handleChange}/>
                    </label>
                    <label>
                        Instructions:
                        <input type='text' name='Instructions' value={state.Instructions} onChange={handleChange}/>
                    </label>
                    <button type='submit'>Submit</button>
                </fieldset>
            </form>
        </div>
    );
}