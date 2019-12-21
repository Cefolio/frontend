import React, {useState} from 'react';
import {connect} from 'react-redux';

import { fetchRecipesByName } from '../actions/recipesByName';

function SearchForm({
    fetchRecipesByName,
    isFetching,
    error,
    page,
    showModal,
    show,
    ...rest
}){
    const [recipe, setRecipe] = useState('');
    const fetchRecipe = async data => {
        const res = await fetchRecipesByName({
            searchTerm: data
        });
        if(res && page !== 'landing'){
            res.history.push('/search');
        }else{

        }
    };
    const handleChange = e => {
        setRecipe(e.target.value);
    };
    const handleInput = e => {
        if(e.keyCode === 13){
            fetchRecipe(recipe);
        }
    };
    return(
        <div>
            <input
                type="text"
                placeholder="Search For Recipes"
                name="recipes"
                value={recipe}
                onChange={e => handleChange(e)}
                onKeyDown={e => handleInput(e)}
                />
                <button onClick={showModal}>Search</button>
        </div>
    );
}
const mapStateToProps = state => {
    const { isFetching } = state;
    return {
        isFetching
    };
};

export default connect(mapStateToProps, {fetchRecipesByName})(SearchForm);