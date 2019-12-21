import {
        FETCH_RECIPES_BY_NAME_INITIALIZE,
        FETCH_RECIPES_BY_NAME_SUCCESS,
        FETCH_RECIPES_BY_NAME_FAIL
} from '../actions/index';
import initialState from './initialState';

const recipesByNameReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_RECIPES_BY_NAME_INITIALIZE:
            return{
                ...state,
                isFetching: true,
                error: ''
            };
            case    FETCH_RECIPES_BY_NAME_SUCCESS: 
                return{
                    ...state,
                    displayedRecipes: action.payload,
                    isFetching: false,
                    error: ''
                };
                case FETCH_RECIPES_BY_NAME_FAIL:
                    return{
                        ...state,
                        error: action.payload
                    };
                    default:
                        return state;
            
    }
};

export default recipesByNameReducer;