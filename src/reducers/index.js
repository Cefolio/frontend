import recipesByNameReducer from './recipeByName';
import reduceReducers from 'reduce-reducers';

const reducer = reduceReducers(
    recipesByNameReducer
);

export default reducer;